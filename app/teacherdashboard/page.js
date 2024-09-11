"use client";

import { useState, useEffect } from "react";
import { BatchData } from "../server/batchdata";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"; 

export default function TeacherDashboard() {
    const { data: session, status } = useSession(); 
    const router = useRouter();
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // If session is loading, do nothing
        if (status === "loading") return;

        // If no session or user is not a teacher, redirect to unauthorized page
        if (!session || !session.user.isteacher) {
            console.warn("Unauthorized access: Redirecting...");
            router.push("/unauthorized"); // Redirect to unauthorized page or signin
        }
    }, [session, status, router]); // Added 'router' to the dependency array

    // Function to handle batch selection
    async function handleClick(batchName) {
        try {
            const classIds = await BatchData(batchName); 
            setClasses(classIds); 
            console.log(classIds);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    // Function to handle class click
    const handleClassClick = (classId) => {
        console.log(`Class with ID ${classId} clicked`);
        router.push(`/teacherdashboard/class?id=${classId}`);
    };

    // If session is still loading or user is not a teacher, show a loading or fallback UI
    if (status === "loading" || !session?.user.isteacher) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="space-x-4 mb-8">
                <button
                    onClick={() => handleClick("rkgit")}
                    className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                    RKGIT
                </button>
                <button
                    onClick={() => handleClick("IMS")}
                    className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                    IMS
                </button>
            </div>
            {classes.length > 0 && (
                <div className="mt-8 w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Classes in Selected Batch</h2>
                    <ul className="list-none p-0">
                        {classes.map((classItem, index) => (
                            <li key={index} className="mb-4">
                                <button
                                    onClick={() => handleClassClick(classItem.id)}
                                    className="w-full text-gray-800 text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Class: {classItem.id}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}