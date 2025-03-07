import { Injectable, OnModuleInit } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramService implements OnModuleInit {
  private readonly bot: TelegramBot;

  constructor() {
    const token = process.env.TELEGRAM_BOT_TOKEN ?? 'unknown_token';
    this.bot = new TelegramBot(token, { polling: true });
  }

  public async onModuleInit(): Promise<void> {
    this.bot.on('message', (msg) => {
      const chatId = msg.chat.id;
      this.bot.sendMessage(chatId, 'Received your message');
    });
  }
}
