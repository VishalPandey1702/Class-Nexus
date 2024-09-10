// "use server"
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function Savedata(liveclassid,studentidid, submissionState) {
//     try {
//         // Fetch the current liveclass data
//         const liveclass = await prisma.liveclass.findUnique({
//             where: { id: parseInt(liveclassid, 10) }
//         });

//         if (!liveclass) {
//             console.error("Error: Liveclass not found");
//             return { status: 404, message: "Liveclass not found" };
//         }

//         // Parse existing IDs from the fields
//         let correctIds = JSON.parse(liveclass.correct);
//         let incorrectIds = JSON.parse(liveclass.incorrect);
//         let unattemptedIds = JSON.parse(liveclass.unattempted);

//         // Add the ID to the appropriate list
//         if (submissionState === "correct") {
//             if (!correctIds.includes(id)) correctIds.push(studentidid);
//         } else if (submissionState === "incorrect") {
//             if (!incorrectIds.includes(id)) incorrectIds.push(studentidid);
//         } else if (submissionState === "unattempted") {
//             if (!unattemptedIds.includes(id)) unattemptedIds.push(studentidid);
//         } else {
//             console.error("Error: Invalid submission state");
//             return { status: 400, message: "Invalid submission state" };
//         }

//         // Update the Liveclass record
//         await prisma.liveclass.update({
//             where: { id: parseInt(liveclassid, 10) },
//             data: {
//                 correct: JSON.stringify(correctIds),
//                 incorrect: JSON.stringify(incorrectIds),
//                 unattempted: JSON.stringify(unattemptedIds),
//             }
//         });

//         return { status: 200, message: "Data updated successfully" };
//     } catch (error) {
//         console.error("Error updating liveclass data:", error);
//         return { status: 500, message: "Error updating data" };
//     } finally {
//         await prisma.$disconnect();
//     }
// }

"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Savedata(liveclassid, studentidid, submissionState) {
    try {
        // Fetch the current liveclass data
        console.log("trying")
        const liveclass = await prisma.liveclass.findUnique({
            where: { id: parseInt(liveclassid, 10) }
        });

        if (!liveclass) {
            console.error("Error: Liveclass not found");
            return { status: 404, message: "Liveclass not found" };
        }

        // Parse existing IDs from the fields
        let correctIds = JSON.parse(liveclass.correct);
        let incorrectIds = JSON.parse(liveclass.incorrect);
        let unattemptedIds = JSON.parse(liveclass.unattempted);

        // Add the ID to the appropriate list based on the submissionState
        console.log("data Fetced")
        if (submissionState === "correct") {
            if (!correctIds.includes(studentidid)) correctIds.push(studentidid);
        } else if (submissionState === "incorrect") {
            if (!incorrectIds.includes(studentidid)) incorrectIds.push(studentidid);
        } else if (submissionState === "unattempted") {
            if (!unattemptedIds.includes(studentidid)) unattemptedIds.push(studentidid);
        } else {
            console.error("Error: Invalid submission state");
            return { status: 400, message: "Invalid submission state" };
        }

        // Update the Liveclass record
        console.log("Starting Updating")
        await prisma.liveclass.update({
            where: { id: parseInt(liveclassid, 10) },
            data: {
                correct: JSON.stringify(correctIds),
                incorrect: JSON.stringify(incorrectIds),
                unattempted: JSON.stringify(unattemptedIds),
            }
        });
        console.log("Data Updated")

        return { status: 200, message: "Data updated successfully" };
    } catch (error) {
        console.error("Error updating liveclass data:", error);
        return { status: 500, message: "Error updating data" };
    } finally {
        await prisma.$disconnect();
    }
}