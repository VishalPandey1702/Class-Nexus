"use client"
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import { MCQList } from "./teachermcq";
import { ParticipationChart } from "./participationchart";
import { ClassData, updateMCQ } from "../app/server/class";
import { Participation } from "../app/teacherserver/participation";

function TeacherDashboardComponent() {
    const [mcqs, setMcqs] = useState(null);
    const [participationData, setParticipationData] = useState(null);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get('id');

    useEffect(() => {
        const checkSession = async () => {
            const session = await getSession();
            if (!session || !session.user.isteacher) {
                router.push("/unauthorized");
            } else {
                setLoading(false);
            }
        };
        checkSession();
    }, [router]);

    async function handleClick() {
        if (!id) return console.error("Error: ID is undefined");

        try {
            const data = { id: parseInt(id, 10) };
            const classData = await ClassData(data);
            setMcqs(classData.mcqs);
        } catch (error) {
            console.error("Error fetching class data:", error);
        }
    }

    async function handleParticipationClick() {
        if (!id) return console.error("Error: ID is undefined");

        try {
            const parsedId = parseInt(id, 10);
            const participationData = await Participation(parsedId);
            setParticipationData(participationData);
        } catch (error) {
            console.error("Error fetching participation data:", error);
        }
    }

    // Load MCQs repeatedly
    async function repeatClickOfParticipation() {
        await handleParticipationClick();
        setInterval(async () => {
            await handleParticipationClick();
        }, 2000);
    }

    async function handleMCQUpdate(mcqId, enable, published) {
        try {
            await updateMCQ({ id: mcqId, enable, published });
            await handleClick(); // Refresh MCQs after update
        } catch (error) {
            console.error("Error updating MCQ:", error);
        }
    }


    if (loading) {
        return <p>Loading...</p>;
    }

    const totalQuestions = participationData ? parseInt(participationData.total, 10) : 0;
    const correctPercentage = participationData ? (JSON.parse(participationData.correct).length / totalQuestions * 100).toFixed(2) : 0;
    const incorrectPercentage = participationData ? (JSON.parse(participationData.incorrect).length / totalQuestions * 100).toFixed(2) : 0;
    const unattemptedPercentage = participationData ? ((totalQuestions - (JSON.parse(participationData.correct).length + JSON.parse(participationData.incorrect).length)) / totalQuestions * 100).toFixed(2) : 0;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <button
                onClick={handleClick}
                className="px-4 mr-3 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
            >
                Questions
            </button>
            <button
                // onClick={handleParticipationClick}
                onClick={() => { handleParticipationClick(); repeatClickOfParticipation(); }}
                className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
            >
                Participation
            </button>

            <div className="flex space-x-4 mt-6">
                {mcqs && (
                    <MCQList mcqs={mcqs} handleMCQUpdate={handleMCQUpdate} />
                )}
                {participationData && (
                    <ParticipationChart
                        participationData={participationData}
                        totalQuestions={totalQuestions}
                        correctPercentage={correctPercentage}
                        incorrectPercentage={incorrectPercentage}
                        unattemptedPercentage={unattemptedPercentage}
                    />
                )}
            </div>
        </div>
    );
}

export default TeacherDashboardComponent;