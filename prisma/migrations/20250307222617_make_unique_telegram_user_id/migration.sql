/*
  Warnings:

  - A unique constraint covering the columns `[telegram_user_id]` on the table `telegram_user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "telegram_user_telegram_user_id_key" ON "telegram_user"("telegram_user_id");
