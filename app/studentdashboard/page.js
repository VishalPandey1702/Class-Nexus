

"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { getUserData } from "../studentserver/studentdata";

export default function UserDashboard() {
    const [userData, setUserData] = useState(null);
    const router = useRouter(); 

    useEffect(() => {
        async function fetchData() {
            const data = await getUserData();
            setUserData(data);
        }

        fetchData();
    }, []);

    if (!userData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-2xl font-semibold text-gray-600">Loading...</div>
            </div>
        );
    }

    const handleClassClick = (classId) => {
        console.log(`Class with ID ${classId} clicked`);
        router.push(`/studentdashboard/class?id=${classId}`);
    };

    return (
        <div className="min-h-screen bg-[#84d2f6] p-8">
        
            <div className="max-w-2xl mx-auto bg-[#386fa4] shadow-lg rounded-lg p-8">
                {/* <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {userData.name}</h1> */}
                <h2 className="flex items-center text-xl font-semibold text-gray-100 mb-6">Your Enrolled Classes:</h2>
                <ul className="space-y-4">
                    {userData.classes.map((classItem) => (
                        <li key={classItem.id}>
                            <button 
                                onClick={() => handleClassClick(classItem.id)}
                                className="w-full p-4 text-left text-black bg-blue-50 border border-blue-200 rounded-lg shadow-sm hover:bg-[#84d2f6] transition-colors"
                            >
                                {classItem.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

