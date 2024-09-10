-- CreateTable
CREATE TABLE "Liveclass" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Liveclass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IncorrectAnswers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CorrectAnswers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_IncorrectAnswers_AB_unique" ON "_IncorrectAnswers"("A", "B");

-- CreateIndex
CREATE INDEX "_IncorrectAnswers_B_index" ON "_IncorrectAnswers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CorrectAnswers_AB_unique" ON "_CorrectAnswers"("A", "B");

-- CreateIndex
CREATE INDEX "_CorrectAnswers_B_index" ON "_CorrectAnswers"("B");

-- AddForeignKey
ALTER TABLE "_IncorrectAnswers" ADD CONSTRAINT "_IncorrectAnswers_A_fkey" FOREIGN KEY ("A") REFERENCES "Liveclass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IncorrectAnswers" ADD CONSTRAINT "_IncorrectAnswers_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CorrectAnswers" ADD CONSTRAINT "_CorrectAnswers_A_fkey" FOREIGN KEY ("A") REFERENCES "Liveclass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CorrectAnswers" ADD CONSTRAINT "_CorrectAnswers_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
