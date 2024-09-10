/*
  Warnings:

  - You are about to drop the column `disable` on the `MCQ` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MCQ" DROP COLUMN "disable",
ADD COLUMN     "enable" BOOLEAN NOT NULL DEFAULT false;
