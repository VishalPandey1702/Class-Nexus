// "use server";
// import { PrismaClient } from "@prisma/client";

// export async function ClassData(data) {
//     const prisma = new PrismaClient();

//     try {
//         const classData = await prisma.class.findUnique({
//             where: {
//                 id: data.id,
//             },
//             include: {
//                 mcqs: {
//                     include: {
//                         options: true, // Include options for each MCQ
//                     },
//                 },
//             },
//         });

//         if (!classData) {
//             throw new Error("Class not found");
//         }

//         return classData;  // Return the data fetched from Prisma
//     } catch (error) {
//         console.error("Error fetching class data:", error);
//         return null;
//     } finally {
//         await prisma.$disconnect();
//     }
// }


// "use server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function ClassData(data) {
//     try {
//         const classData = await prisma.class.findUnique({
//             where: {
//                 id: data.id,
//             },
//             include: {
//                 mcqs: {
//                     include: {
//                         options: true, // Include options for each MCQ
//                     },
//                 },
//             },
//         });

//         if (!classData) {
//             throw new Error("Class not found");
//         }

//         return classData;  // Return the data fetched from Prisma
//     } catch (error) {
//         console.error("Error fetching class data:", error);
//         return null;
//     } finally {
//         await prisma.$disconnect();
//     }
// }

// // Add functions for updating MCQ states

// export async function updateMCQ(data) {
//     try {
//         const { id, enable, published } = data;

//         const updatedMCQ = await prisma.mCQ.update({
//             where: { id },
//             data: {
//                 enable,
//                 published,
//             },
//         });

//         return updatedMCQ;
//     } catch (error) {
//         console.error("Error updating MCQ:", error);
//         throw error;
//     } finally {
//         await prisma.$disconnect();
//     }
// }

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

// Add functions for updating MCQ states
export async function updateMCQ(data) {
    try {
        const { id, enable, published } = data;

        const updatedMCQ = await prisma.mCQ.update({
            where: { id },
            data: {
                enable: enable !== undefined ? enable : undefined,
                published: published !== undefined ? published : undefined,
            },
        });

        return updatedMCQ;
    } catch (error) {
        console.error("Error updating MCQ:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}