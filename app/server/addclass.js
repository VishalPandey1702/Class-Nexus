"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createClass(name, batchId) {
    try {
        console.log(name,batchId)
        // Create a new Class record
        const newClass = await prisma.class.create({
            data: {
                name: name,
                batchId:parseInt(batchId)
            },
        });

        return { message: "Class added successfully", class: newClass };
    } catch (error) {
console.log(error);
    }
}