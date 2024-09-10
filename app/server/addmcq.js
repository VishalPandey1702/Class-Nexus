"use server";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addMcq(question, options, correctOptionIds, classId) {
    // Check if all options have text
    if (options.some(option => !option.text)) {
        return Promise.reject(new Error("All options must have text."));
    }

    // Validate classId
    if (!Number.isInteger(classId) || classId <= 0) {
        return Promise.reject(new Error("Invalid class ID."));
    }

    await prisma.$transaction(async(prisma)=>{

        const response = await prisma.mCQ.create({
            data: {
                question: question,
                class: {
                    connect: { id: classId },
                },
            },
        })
        console.log(response);
        const createdMCQ = await prisma.mCQ.update({
            where: { id: response.id },
            data: {
                options: {
                    create: options.map((option, index) => ({
                        text: option.text,
                        correct: correctOptionIds.includes(index),
                    })),
                },
            },
            include: {
                options: true,
            },
        })
        if(!createdMCQ){
            throw new Error("MCQ creation failed");
        }
        return createdMCQ;
    })
    return true
}