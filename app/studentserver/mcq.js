"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function ClassData(data) {
    try {
        const classData = await prisma.class.findUnique({
            where: {
                id: data.id,
            },
            include: {
                mcqs: {
                    where: {
                        published: true,  // Filter to include only published MCQs
                        // enable: true,     // Ensure MCQs are enabled
                    },
                    include: {
                        options: true, // Include options for each MCQ
                    },
                },
            },
        });

        if (!classData) {
            throw new Error("Class not found");
        }

        return classData;  // Return the data fetched from Prisma
    } catch (error) {
        console.error("Error fetching class data:", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}