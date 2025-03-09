import { Injectable } from '@nestjs/common';
import { TelegramUser } from '@prisma/client';
import { CreateTelegramUserRequestDto } from '../dtos/create-telegram-user.request.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class TelegramUserRepository {
  constructor(private readonly prismaService: PrismaService) { }

  public async findByExternalId(externalUserId: string): Promise<TelegramUser | null> {
    return this.prismaService.telegramUser.findUnique({
      where: {
        telegramUserId: externalUserId,
      },
    });
  }

  public async create(createTelegramUser: CreateTelegramUserRequestDto): Promise<TelegramUser> {
    const { userId, telegramUserId } = createTelegramUser;

    return this.prismaService.telegramUser.create({
      data: {
        userId,
        telegramUserId,
      }
    });
  }
}
