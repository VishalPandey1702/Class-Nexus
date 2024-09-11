

"use client";

import { useSearchParams } from "next/navigation";
import { MCQSection } from "../../../component/studentmcq";
import { CodingSection } from "../../../component/codingsection";

export default function StudentCodingDashboard() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl text-black font-bold mb-8">Student Dashboard</h1>
            <div className="flex space-x-8"> 
                <div className="w-1/2"> 
                    <MCQSection id={id} />
                </div>
                <div className="w-1/2"> 
                    <CodingSection />
                </div>
            </div>
        </div>
    );
}