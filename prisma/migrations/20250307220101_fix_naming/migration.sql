/*
  Warnings:

  - You are about to drop the column `userId` on the `telegram_user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `telegram_user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `telegram_user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "telegram_user" DROP CONSTRAINT "telegram_user_userId_fkey";

-- DropIndex
DROP INDEX "telegram_user_userId_key";

-- AlterTable
ALTER TABLE "telegram_user" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "telegram_user_user_id_key" ON "telegram_user"("user_id");

-- AddForeignKey
ALTER TABLE "telegram_user" ADD CONSTRAINT "telegram_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
