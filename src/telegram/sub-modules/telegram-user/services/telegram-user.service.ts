import { CreateTelegramUserRequestDto } from '../dtos/create-telegram-user.request.dto';
import { TelegramUserResponseDto } from '../dtos/telegram-user.response.dto';
import { TelegramUserRepository } from './../repositories/telegram-user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TelegramUserService {
  constructor(private readonly telegramUserRepository: TelegramUserRepository) { }

  public async create(createTelegramUser: CreateTelegramUserRequestDto): Promise<TelegramUserResponseDto> {
    return this.telegramUserRepository.create(createTelegramUser);
  }
}
