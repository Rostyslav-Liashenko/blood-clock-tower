import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramService {
    private readonly bot: TelegramBot;

    constructor() {
        const token = process.env.TELEGRAM_BOT_TOKEN ?? 'unknown_token';
        this.bot = new TelegramBot(token, { polling: true });
    }
}
