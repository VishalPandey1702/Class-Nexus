"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addMcq } from "../server/addmcq"; 
export default function AddMcq() {
    const [message, setMessage] = useState("");
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);

        const { question, correctOptionIds, option1, option2, option3, option4, classId } = data;

        const options = [
            { text: option1?.trim() },
            { text: option2?.trim() },
            { text: option3?.trim() },
            { text: option4?.trim() }
        ];

        console.log("Options Data:", options);

        if (options.some(option => !option.text)) {
            setMessage("All options must have text.");
            return;
        }

        const correctOptionIndexes = Array.from(correctOptionIds || []).map(id => parseInt(id, 10));

        addMcq(question, options, correctOptionIndexes, parseInt(classId, 10))
            .then(response => {
                setMessage(response.message);
            })
            .catch(error => {
                console.error("Error adding MCQ:", error);
                setMessage("Failed to add MCQ");
            });
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4 text-black">Add MCQ</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
    <label className="block text-black font-medium mb-1">Question:</label>
    <textarea
        {...register("question", { required: true })}
        placeholder="Question"
        rows="1"  
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white placeholder-gray-500"
    />
</div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Options:</label>
                    <div className="grid grid-cols-1 gap-2">
                        <input
                            {...register("option1", { required: true })}
                            type="text"
                            placeholder="Option 1"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white placeholder-gray-500"
                        />
                        <input
                            {...register("option2", { required: true })}
                            type="text"
                            placeholder="Option 2"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white placeholder-gray-500"
                        />
                        <input
                            {...register("option3", { required: true })}
                            type="text"
                            placeholder="Option 3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white placeholder-gray-500"
                        />
                        <input
                            {...register("option4", { required: true })}
                            type="text"
                            placeholder="Option 4"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white placeholder-gray-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Correct Option IDs:</label>
                    <div className="grid grid-cols-2 gap-2">
                        {[0, 1].map(index => (
                            <input
                                key={index}
                                {...register(`correctOptionIds.${index}`)}
                                type="number"
                                placeholder={`ID ${index + 1}`}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white placeholder-gray-500"
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Class ID:</label>
                    <input
                        {...register("classId", { required: true })}
                        type="number"
                        placeholder="Class ID"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white placeholder-gray-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add MCQ
                </button>
            </form>
            {message && (
                <p className={`mt-4 text-center ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}