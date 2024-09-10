/*
  Warnings:

  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CorrectAnswers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_IncorrectAnswers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CorrectAnswers" DROP CONSTRAINT "_CorrectAnswers_A_fkey";

-- DropForeignKey
ALTER TABLE "_CorrectAnswers" DROP CONSTRAINT "_CorrectAnswers_B_fkey";

-- DropForeignKey
ALTER TABLE "_IncorrectAnswers" DROP CONSTRAINT "_IncorrectAnswers_A_fkey";

-- DropForeignKey
ALTER TABLE "_IncorrectAnswers" DROP CONSTRAINT "_IncorrectAnswers_B_fkey";

-- AlterTable
ALTER TABLE "Liveclass" ADD COLUMN     "correct" TEXT NOT NULL DEFAULT '[]',
ADD COLUMN     "incorrect" TEXT NOT NULL DEFAULT '[]',
ADD COLUMN     "unattempted" TEXT NOT NULL DEFAULT '[]';

-- DropTable
DROP TABLE "Student";

-- DropTable
DROP TABLE "_CorrectAnswers";

-- DropTable
DROP TABLE "_IncorrectAnswers";
