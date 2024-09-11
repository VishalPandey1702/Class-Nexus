"use client"
import { useState, useEffect } from "react";
import { ClassData } from "../app/studentserver/mcq";
import savedata from "../app/studentserver/addstudentdata";
import { getUserData } from "../app/studentserver/studentdata";

export function MCQSection({ id }) {
    const [mcqs, setMcqs] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [submitted, setSubmitted] = useState({});

    // Load MCQs
    async function Loadquestionclick() {
        try {
            const data = { id: parseInt(id, 10) };
            const classData = await ClassData(data);
            setMcqs(classData.mcqs);
        } catch (error) {
            console.error("Error fetching class data:", error);
        }
    }

    // Load MCQs repeatedly
    async function repeatClickOfLoadquestion() {
        await Loadquestionclick();
        setInterval(async () => {
            await Loadquestionclick();
        }, 2000);
    }

    // Option selection and submission logic
    const handleOptionSelect = (mcqId, optionId) => {
        setSelectedOptions(prev => ({
            ...prev,
            [mcqId]: prev[mcqId] ? [...prev[mcqId], optionId] : [optionId]
        }));
    };

    const handleDeselectOption = (mcqId, optionId) => {
        setSelectedOptions(prev => ({
            ...prev,
            [mcqId]: prev[mcqId].filter(id => id !== optionId)
        }));
    };

    const handleSubmit = async (mcqId) => {
        setSubmitted(prev => ({ ...prev, [mcqId]: true }));
        const submissionState = isSubmissionCorrect(mcqId) ? "correct" : "incorrect";
        try {
            const userData = await getUserData();
            if (userData && userData.id) {
                const studentId = userData.name;
                await savedata(id, studentId, submissionState);
            } else {
                console.error("Failed to retrieve user data");
            }
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    const isOptionSelected = (mcqId, optionId) => selectedOptions[mcqId]?.includes(optionId);
    const isCorrect = (mcqId, optionId) => mcqs.find(m => m.id === mcqId).options.find(option => option.id === optionId)?.correct;
    const isSubmissionCorrect = (mcqId) => {
        const mcq = mcqs.find(m => m.id === mcqId);
        const selected = selectedOptions[mcqId] || [];
        return selected.every(id => isCorrect(mcqId, id)) && selected.length === mcq.options.filter(option => option.correct).length;
    };

    useEffect(() => {
        Loadquestionclick();
    }, [id]);

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
            <button
                // onClick={Loadquestionclick}
                onClick={() => { Loadquestionclick(); repeatClickOfLoadquestion(); }}
                className="mb-6 px-6 py-3 bg-[#386fa4] text-white rounded-lg shadow-lg hover:bg-[#2591c2] transition-colors font-semibold"
            >
                Load Questions
            </button>

            {mcqs && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Questions: {mcqs.name}</h2>
                    {mcqs.map((mcq, index) => (
                        <div key={mcq.id} className="p-4 text-black bg-gray-50 rounded-lg shadow border border-gray-300">
                            <h3 className="text-md mt-1 mr-2 font-medium mb-2 whitespace-pre-wrap">
                                {index + 1}. {mcq.question}
                            </h3>
                            <ul className="space-y-1">
                                {mcq.options.map((option, optionIndex) => {
                                    const isSelected = isOptionSelected(mcq.id, option.id);
                                    const isSubmitted = submitted[mcq.id];
                                    let optionClass = "p-2 w-auto rounded-lg border cursor-pointer text-sm";

                                    if (isSubmitted) {
                                        optionClass += isCorrect(mcq.id, option.id)
                                            ? ' bg-green-100 text-green-800'
                                            : isSelected
                                                ? ' bg-red-100 text-red-800'
                                                : ' bg-gray-200 text-gray-800';
                                    } else {
                                        optionClass += isSelected
                                            ? ' bg-blue-100 text-blue-800'
                                            : ' bg-gray-200 text-gray-800 hover:bg-gray-300';
                                    }

                                    return (
                                        <li
                                            key={option.id}
                                            className={optionClass}
                                            onClick={() => isSelected ? handleDeselectOption(mcq.id, option.id) : handleOptionSelect(mcq.id, option.id)}
                                        >
                                            <span className="font-bold text-xs text-gray-600 mr-2">{String.fromCharCode(97 + optionIndex)}.</span> {/* a, b, c, ... */}
                                            {option.text}
                                        </li>
                                    );
                                })}
                            </ul>
                            {mcq.enable && (
                                <div className="flex justify-end mt-4">
                                    <button
                                        onClick={() => handleSubmit(mcq.id)}
                                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors font-semibold"
                                        disabled={submitted[mcq.id]}
                                    >
                                        Submit
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}