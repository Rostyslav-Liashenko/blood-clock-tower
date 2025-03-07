import { CreateTelegramUserRequestDto } from './../sub-modules/telegram-user/dtos/create-telegram-user.request.dto';
import { Injectable } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';
import { UserResponseDto } from 'src/user/dtos/user.response.dto';
import { TelegramUserService } from '../sub-modules/telegram-user/services/telegram-user.service';
import { UserService } from 'src/user/services/user.service';
import { CreateUserRequestDto } from 'src/user/dtos/create-user.request.dto';

@Injectable()
export class TelegramMessageService {
  constructor(
    private readonly telegramUserService: TelegramUserService,
    private readonly userService: UserService,
  ) {}

  public async createUserIfNotExist(msg: TelegramBot.Message): Promise<void> {
    const externalUserId = msg.from.id.toString();
    const telegramUser = await this.telegramUserService.findByExternalId(externalUserId);

    if (telegramUser) {
      return;
    }

    const createUser: CreateUserRequestDto = {
      firstName: msg.from.first_name,
      lastName: msg.from.last_name,
    };

    const user = await this.userService.create(createUser);

    const createTelegramUserRequestDto: CreateTelegramUserRequestDto = {
      userId: user.id,
      telegramUserId: externalUserId,
    };

    await this.telegramUserService.create(createTelegramUserRequestDto);
  }
}
