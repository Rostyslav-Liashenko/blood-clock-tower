-- CreateTable
CREATE TABLE "telegram_user" (
    "id" TEXT NOT NULL,
    "telegram_user_id" VARCHAR(250) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "telegram_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "telegram_user_userId_key" ON "telegram_user"("userId");

-- AddForeignKey
ALTER TABLE "telegram_user" ADD CONSTRAINT "telegram_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
