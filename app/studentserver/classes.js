"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function getUserClasses(userId) {
    try {
        const userWithClasses = await prisma.user.findUnique({
            where: {
                id: userId, // Replace with the actual user ID
            },
            include: {
                classes: true, // This will include the related classes
            },
        });

        if (!userWithClasses) {
            console.log('User not found');
            return;
        }

        console.log('User is enrolled in the following classes:');
        userWithClasses.classes.forEach((classItem) => {
            console.log(`Class ID: ${classItem.id}, Class Name: ${classItem.name}`);
        });

        return userWithClasses.classes;
    } catch (error) {
        console.error('Error fetching classes for user:', error);
    } finally {
        await prisma.$disconnect();
    }
}

