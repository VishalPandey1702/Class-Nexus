"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function BatchData(batchName) {
    try {
        const classNames = await prisma.class.findMany({
            where: {
                batch: {
                    name: batchName,
                },
            },
            select: {
                // name: true,
                id : true,
            },
        });
        console.log(classNames);
        return classNames;
    } catch (error) {
        console.error("Error fetching class names:", error);
    }
}