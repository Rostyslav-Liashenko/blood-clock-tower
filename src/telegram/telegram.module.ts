import { Module } from '@nestjs/common';
import { TelegramService } from './services/telegram.service';
import { UserModule } from 'src/user/user.module';
import { TelegramUserModule } from './sub-modules/telegram-user/telegram-user.module';
import { TelegramMessageService } from './services/telegram-message.service';

@Module({
  imports: [UserModule, TelegramUserModule],
  providers: [TelegramService, TelegramMessageService],
  exports: [TelegramService],
})
export class TelegramModule { }
