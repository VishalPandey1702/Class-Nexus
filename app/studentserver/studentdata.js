"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";  
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserData() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return null;
    }

    const userEmail = session.user.email;


    const user = await prisma.user.findUnique({
        where: {
            email: userEmail,
        },
        include: {
            classes: true,  
        },
    });

    return user;
}