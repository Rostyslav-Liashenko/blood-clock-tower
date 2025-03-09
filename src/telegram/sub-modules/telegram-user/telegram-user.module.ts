import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TelegramUserRepository } from './repositories/telegram-user.repository';
import { TelegramUserService } from './services/telegram-user.service';


@Module({
  imports: [PrismaModule],
  providers: [TelegramUserRepository, TelegramUserService],
  exports: [TelegramUserService],
})
export class TelegramUserModule { }
