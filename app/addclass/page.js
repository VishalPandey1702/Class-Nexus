"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createClass } from '../server/addclass'; // Adjust the import path accordingly

export default function AddClassForm() {
    const [message, setMessage] = useState("");
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log("Form Data:", data);

        const { name, batchId } = data;

        try {
            // Call the server-side function directly
            const response = await createClass(name, batchId);

            setMessage(response.message);
        } catch (error) {
            console.error("Error adding class:", error);
            setMessage("Failed to add class.");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800">Add Class</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Class Name:</label>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Class Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Batch ID:</label>
                    <input
                        {...register("batchId", { required: true })}
                        type="number"
                        placeholder="Batch ID"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Class
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