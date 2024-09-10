// "use server"
// import { PrismaClient } from "@prisma/client";


// export async function ClearLiveClassData(id){
//     const prisma = new PrismaClient();
//     try {
//         const participation = await prisma.liveclass.delete({
//             where: { id: parseInt(id, 10) }
//         });
//     } catch (error) {
//         console.error("Error deleting live class data:", error);
//     } finally {
//         await prisma.$disconnect();
//     }
// } 


"use server"
import { PrismaClient } from "@prisma/client";

export async function ClearLiveClassData(id) {
    const prisma = new PrismaClient();
    try {
        const updatedLiveClass = await prisma.liveclass.update({
            where: { id: parseInt(id, 10) },
            data: {
                incorrect: "[]",    // Clear incorrect field
                correct: "[]",      // Clear correct field
                unattempted: "[]",  // Clear unattempted field
            },
        });
        console.log("Live class data cleared:", updatedLiveClass);
    } catch (error) {
        console.error("Error clearing live class data:", error);
    } finally {
        await prisma.$disconnect();
    }
}