"use server"
import { PrismaClient } from "@prisma/client";


export async function Participation(id) {
    const prisma = new PrismaClient();
    try {
        const participation = await prisma.liveclass.findUnique({
            where: { id: parseInt(id, 10) }
        });
        return participation;
    } catch (error) {
        console.error("Error fetching live class data:", error);
        return { status: 500, message: "Error fetching data" };
    } finally {
        await prisma.$disconnect();
    }
}