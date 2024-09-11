

// // "use client";

// // import { useState } from "react";
// // import { useSearchParams } from "next/navigation"; 
// // import { ClassData } from "../../studentserver/mcq";
// // import { getUserData } from "../../studentserver/studentdata";
// // import savedata from "../../studentserver/addstudentdata";

// // export default function StudentDashboard() {
// //     const [mcqs, setMcqs] = useState(null);
// //     const [selectedOptions, setSelectedOptions] = useState({});
// //     const [submitted, setSubmitted] = useState({});
// //     const searchParams = useSearchParams(); 

// //     const id = searchParams.get('id'); 

// //     async function Loadquestionclick() {
// //         if (!id) {
// //             console.error("Error: ID is undefined");
// //             return;
// //         }

// //         try {
// //             const data = { id: parseInt(id, 10) }; 
// //             const classData = await ClassData(data); 
// //             console.log(classData.mcqs);
// //             setMcqs(classData.mcqs); 
// //         } catch (error) {
// //             console.error("Error fetching class data:", error);
// //         }
// //     }

// //     async function repeatClickOfLoadquestion() {
// //         await Loadquestionclick();
// //         setInterval(async () => {
// //             await Loadquestionclick();
// //         }, 2000); // 2000 milliseconds = 2 seconds
// //     }

// //     const handleOptionSelect = (mcqId, optionId) => {
// //         setSelectedOptions(prev => ({
// //             ...prev,
// //             [mcqId]: prev[mcqId] ? [...prev[mcqId], optionId] : [optionId]
// //         }));
// //     };

// //     const handleDeselectOption = (mcqId, optionId) => {
// //         setSelectedOptions(prev => ({
// //             ...prev,
// //             [mcqId]: prev[mcqId].filter(id => id !== optionId)
// //         }));
// //     };

// //     const handleSubmit = async (mcqId) => {
// //         setSubmitted(prev => ({ ...prev, [mcqId]: true }));
        
// //         const submissionState = isSubmissionCorrect(mcqId) ? "correct" : "incorrect";
    
// //         try {
// //             const userData = await getUserData(); 
// //             if (userData && userData.id) {
// //                 const studentId = userData.id;
// //                 console.log(`CLASS ID: ${id}, Student ID: ${studentId}, Submission State: ${submissionState}`);
// //                 await savedata(id, studentId, submissionState); 
// //                 console.log("data send")
// //             } else {
// //                 console.error("Failed to retrieve user data");
// //             }
// //         } catch (error) {
// //             console.error("Error fetching user data:", error);
// //         }
// //     };

// //     const isOptionSelected = (mcqId, optionId) => selectedOptions[mcqId]?.includes(optionId);

// //     const isCorrect = (mcqId, optionId) => {
// //         const mcq = mcqs.find(m => m.id === mcqId);
// //         return mcq.options.find(option => option.id === optionId)?.correct;
// //     };

// //     const isSubmissionCorrect = (mcqId) => {
// //         const mcq = mcqs.find(m => m.id === mcqId);
// //         const selected = selectedOptions[mcqId] || [];
// //         return selected.every(id => isCorrect(mcqId, id)) && selected.length === mcq.options.filter(option => option.correct).length;
// //     };

// //     return (
// //         <div className="p-8 bg-gray-100 min-h-screen">
// //             <button
// //                 // onClick={Loadquestionclick}
// //                 onClick={() => { Loadquestionclick(); repeatClickOfLoadquestion(); }}
// //                 className="mb-6 mr-3 px-6 py-3 bg-[#386fa4] text-white rounded-lg shadow-lg hover:bg-[#2591c2] transition-colors font-semibold"
// //             >
// //                 Load Questions
// //             </button>

// //             <button
// //                 // onClick={Loadquestionclick}
// //                 onClick={() => { Loadquestionclick(); repeatClickOfLoadquestion(); }}
// //                 className="mb-6 px-6 py-3 bg-[#386fa4] text-white rounded-lg shadow-lg hover:bg-[#2591c2] transition-colors font-semibold"
// //             >
// //                 Code
// //             </button>
            
// //             {mcqs && (
// //                 <div className="space-y-8">
// //                     <h2 className="text-3xl font-bold mb-6 text-gray-800">MCQs for Class: {mcqs.name}</h2>
// //                     {mcqs.map((mcq, index) => {
// //                         const correctOptionsCount = mcq.options.filter(option => option.correct).length;

// //                         return (
// //                             <div key={mcq.id} className="p-2 bg-white rounded-lg shadow-lg border border-gray-300">
// //                                 <h3 className="text-xl font-semibold mb-4 text-gray-900">
// //                                     {index + 1}. {correctOptionsCount > 1 && (
// //                                         <span className="text-xs font-medium text-blue-600 mr-2">(Multi-correct)</span>
// //                                     )}
// //                                     {mcq.question}
// //                                 </h3>
// //                                 <ul className="space-y-1">
// //                                     {mcq.options.map(option => {
// //                                         const isSelected = isOptionSelected(mcq.id, option.id);
// //                                         const isSubmitted = submitted[mcq.id];
// //                                         let optionClass = "p-2 w-auto rounded-lg border border-gray-300 cursor-pointer text-sm";

// //                                         if (isSubmitted) {
// //                                             if (isCorrect(mcq.id, option.id)) {
// //                                                 optionClass += ' bg-green-100 text-green-800 border-green-300';
// //                                             } else if (isSelected) {
// //                                                 optionClass += ' bg-red-100 text-red-800 border-red-300';
// //                                             } else {
// //                                                 optionClass += ' bg-gray-200 text-gray-800';
// //                                             }
// //                                         } else if (isSelected) {
// //                                             optionClass += ' bg-blue-100 text-blue-800 border-blue-300';
// //                                         } else {
// //                                             optionClass += ' bg-gray-200 text-gray-800 hover:bg-gray-300';
// //                                         }

// //                                         return (
// //                                             <li 
// //                                                 key={option.id} 
// //                                                 className={optionClass}
// //                                                 onClick={() => isSelected ? handleDeselectOption(mcq.id, option.id) : handleOptionSelect(mcq.id, option.id)}
// //                                             >
// //                                                 {option.text} 
// //                                                 {isSubmitted && isCorrect(mcq.id, option.id) && <span className="font-semibold"> (Correct)</span>}
// //                                             </li>
// //                                         );
// //                                     })}
// //                                 </ul>
// //                                 {mcq.enable && (
// //                                     <>
// //                                         <button
// //                                             onClick={() => handleSubmit(mcq.id)}
// //                                             className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors font-semibold"
// //                                             disabled={submitted[mcq.id]}
// //                                         >
// //                                             Submit Answer
// //                                         </button >
// //                                         {submitted[mcq.id] && !isSubmissionCorrect(mcq.id) && (
// //                                             <p className="mt-3 text-red-600 font-semibold">Incorrect</p>
// //                                         )}
// //                                     </>
// //                                 )}
// //                             </div>
// //                         );
// //                     })}
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }



// // "use client";

// // import { useState } from "react";
// // import { useSearchParams } from "next/navigation";
// // import { ClassData } from "../../studentserver/mcq";
// // import { getUserData } from "../../studentserver/studentdata";
// // import savedata from "../../studentserver/addstudentdata";
// // import axios from "axios";

// // export default function StudentCodingDashboard() {
// //     const [mcqs, setMcqs] = useState(null);
// //     const [selectedOptions, setSelectedOptions] = useState({});
// //     const [submitted, setSubmitted] = useState({});
// //     const [code, setCode] = useState("");
// //     const [language, setLanguage] = useState("python");
// //     const [stdin, setStdin] = useState("");
// //     const [output, setOutput] = useState("");
// //     const searchParams = useSearchParams();

// //     const id = searchParams.get('id');

// //     // Load MCQs
// //     async function Loadquestionclick() {
// //         if (!id) {
// //             console.error("Error: ID is undefined");
// //             return;
// //         }

// //         try {
// //             const data = { id: parseInt(id, 10) };
// //             const classData = await ClassData(data);
// //             setMcqs(classData.mcqs);
// //         } catch (error) {
// //             console.error("Error fetching class data:", error);
// //         }
// //     }

// //     // Load MCQs repeatedly
// //     async function repeatClickOfLoadquestion() {
// //         await Loadquestionclick();
// //         setInterval(async () => {
// //             await Loadquestionclick();
// //         }, 2000);
// //     }

// //     const handleOptionSelect = (mcqId, optionId) => {
// //         setSelectedOptions(prev => ({
// //             ...prev,
// //             [mcqId]: prev[mcqId] ? [...prev[mcqId], optionId] : [optionId]
// //         }));
// //     };

// //     const handleDeselectOption = (mcqId, optionId) => {
// //         setSelectedOptions(prev => ({
// //             ...prev,
// //             [mcqId]: prev[mcqId].filter(id => id !== optionId)
// //         }));
// //     };

// //     const handleSubmit = async (mcqId) => {
// //         setSubmitted(prev => ({ ...prev, [mcqId]: true }));

// //         const submissionState = isSubmissionCorrect(mcqId) ? "correct" : "incorrect";

// //         try {
// //             const userData = await getUserData();
// //             if (userData && userData.id) {
// //                 const studentId = userData.id;
// //                 await savedata(id, studentId, submissionState);
// //             } else {
// //                 console.error("Failed to retrieve user data");
// //             }
// //         } catch (error) {
// //             console.error("Error fetching user data:", error);
// //         }
// //     };

// //     const isOptionSelected = (mcqId, optionId) => selectedOptions[mcqId]?.includes(optionId);

// //     const isCorrect = (mcqId, optionId) => {
// //         const mcq = mcqs.find(m => m.id === mcqId);
// //         return mcq.options.find(option => option.id === optionId)?.correct;
// //     };

// //     const isSubmissionCorrect = (mcqId) => {
// //         const mcq = mcqs.find(m => m.id === mcqId);
// //         const selected = selectedOptions[mcqId] || [];
// //         return selected.every(id => isCorrect(mcqId, id)) && selected.length === mcq.options.filter(option => option.correct).length;
// //     };

// //     // Judge0 API base URL and Code Execution
// //     const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";

// //     const runCode = async () => {
// //         const config = {
// //             method: "post",
// //             url: `${JUDGE0_API_URL}?base64_encoded=false&wait=true`,
// //             headers: {
// //                 "Content-Type": "application/json",
// //                 "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
// //                 "x-rapidapi-key": "3c1c6acf8emsh8dca11b467220aap13fcb1jsn8353cbd2da19", // Your RapidAPI Key
// //             },
// //             data: {
// //                 source_code: code,
// //                 language_id: getLanguageId(language),
// //                 stdin: stdin,
// //             },
// //         };

// //         try {
// //             const response = await axios(config);
// //             setOutput(response.data.stdout || response.data.stderr);
// //         } catch (error) {
// //             setOutput("Error executing code");
// //         }
// //     };

// //     const getLanguageId = (lang) => {
// //         switch (lang) {
// //             case "cpp":
// //                 return 52;
// //             case "python":
// //                 return 71;
// //             default:
// //                 return 71;
// //         }
// //     };

// //     return (
// //         <div className="grid grid-cols-2 gap-6 min-h-screen p-8 bg-gray-100">
// //             {/* Left Side: MCQ Section */}
// //             <div className="p-8 bg-white rounded-lg shadow-lg">
// //                 <button
// //                     onClick={() => { Loadquestionclick(); repeatClickOfLoadquestion(); }}
// //                     className="mb-6 px-6 py-3 bg-[#386fa4] text-white rounded-lg shadow-lg hover:bg-[#2591c2] transition-colors font-semibold"
// //                 >
// //                     Load Questions
// //                 </button>

// //                 {mcqs && (
// //                     <div className="space-y-8">
// //                         <h2 className="text-3xl font-bold mb-6 text-gray-800">MCQs for Class: {mcqs.name}</h2>
// //                         {mcqs.map((mcq, index) => {
// //                             const correctOptionsCount = mcq.options.filter(option => option.correct).length;

// //                             return (
// //                                 <div key={mcq.id} className="p-4 bg-gray-50 rounded-lg shadow border border-gray-300">
// //                                     <h3 className="text-xl font-semibold mb-4 text-gray-900">
// //                                         {index + 1}. {correctOptionsCount > 1 && (
// //                                             <span className="text-xs font-medium text-blue-600 mr-2">(Multi-correct)</span>
// //                                         )}
// //                                         {mcq.question}
// //                                     </h3>
// //                                     <ul className="space-y-1">
// //                                         {mcq.options.map(option => {
// //                                             const isSelected = isOptionSelected(mcq.id, option.id);
// //                                             const isSubmitted = submitted[mcq.id];
// //                                             let optionClass = "p-2 w-auto rounded-lg border border-gray-300 cursor-pointer text-sm";

// //                                             if (isSubmitted) {
// //                                                 if (isCorrect(mcq.id, option.id)) {
// //                                                     optionClass += ' bg-green-100 text-green-800 border-green-300';
// //                                                 } else if (isSelected) {
// //                                                     optionClass += ' bg-red-100 text-red-800 border-red-300';
// //                                                 } else {
// //                                                     optionClass += ' bg-gray-200 text-gray-800';
// //                                                 }
// //                                             } else if (isSelected) {
// //                                                 optionClass += ' bg-blue-100 text-blue-800 border-blue-300';
// //                                             } else {
// //                                                 optionClass += ' bg-gray-200 text-gray-800 hover:bg-gray-300';
// //                                             }

// //                                             return (
// //                                                 <li
// //                                                     key={option.id}
// //                                                     className={optionClass}
// //                                                     onClick={() => isSelected ? handleDeselectOption(mcq.id, option.id) : handleOptionSelect(mcq.id, option.id)}
// //                                                 >
// //                                                     {option.text}
// //                                                 </li>
// //                                             );
// //                                         })}
// //                                     </ul>
// //                                     {mcq.enable && (
// //                                         <button
// //                                             onClick={() => handleSubmit(mcq.id)}
// //                                             className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors font-semibold"
// //                                             disabled={submitted[mcq.id]}
// //                                         >
// //                                             Submit Answer
// //                                         </button>
// //                                     )}
// //                                 </div>
// //                             );
// //                         })}
// //                     </div>
// //                 )}
// //             </div>

// //             {/* Right Side: Coding Section */}
// //             <div className="p-8 bg-white rounded-lg shadow-lg">
// //                 <h1 className="text-3xl font-semibold mb-6 text-gray-800">Coding Dashboard</h1>

// //                 <select
// //                     value={language}
// //                     onChange={(e) => setLanguage(e.target.value)}
// //                     className="p-2 mb-4 text-gray-800 border border-gray-300 rounded-md"
// //                 >
// //                     <option value="python">Python</option>
// //                     <option value="cpp">C++</option>
// //                 </select>

// //                 <textarea
// //                     value={code}
// //                     onChange={(e) => setCode(e.target.value)}
// //                     placeholder="Write your code here..."
// //                     className="w-full h-48 p-4 mb-4 border border-gray-300 text-gray-800 rounded-md"
// //                 ></textarea>

// //                 <textarea
// //                     value={stdin}
// //                     onChange={(e) => setStdin(e.target.value)}
// //                     placeholder="Provide input here..."
// //                     className="w-full h-24 p-4 mb-4 border border-gray-300 text-gray-800 rounded-md"
// //                 ></textarea>

// //                 <button
// //                     onClick={runCode}
// //                     className="px-4 py-2 mb-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
// //                 >
// //                     Run Code
// //                 </button>

// //                 <div className="p-4 bg-gray-50 border border-gray-300 rounded-md">
// //                     <h2 className="text-lg font-semibold text-gray-700">Output:</h2>
// //                     <pre className="whitespace-pre-wrap text-gray-800 mt-2">{output}</pre>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }



"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ClassData } from "../../studentserver/mcq";
import { getUserData } from "../../studentserver/studentdata";
import savedata from "../../studentserver/addstudentdata";
import axios from "axios";

export default function StudentCodingDashboard() {
    const [mcqs, setMcqs] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [submitted, setSubmitted] = useState({});
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("python");
    const [stdin, setStdin] = useState("");
    const [output, setOutput] = useState("");
    const [judge0Details, setJudge0Details] = useState("");
    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    // Load MCQs
    async function Loadquestionclick() {
        if (!id) {
            console.error("Error: ID is undefined");
            return;
        }

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
                // const studentId = userData.id;
                const studentId = userData.name;
                await savedata(id, studentId, submissionState);
            } else {
                console.error("Failed to retrieve user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const isOptionSelected = (mcqId, optionId) => selectedOptions[mcqId]?.includes(optionId);

    const isCorrect = (mcqId, optionId) => {
        const mcq = mcqs.find(m => m.id === mcqId);
        return mcq.options.find(option => option.id === optionId)?.correct;
    };

    const isSubmissionCorrect = (mcqId) => {
        const mcq = mcqs.find(m => m.id === mcqId);
        const selected = selectedOptions[mcqId] || [];
        return selected.every(id => isCorrect(mcqId, id)) && selected.length === mcq.options.filter(option => option.correct).length;
    };

    // Judge0 API base URL and Code Execution
    const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";
    const JUDGE0_ABOUT_URL = "https://judge0-ce.p.rapidapi.com/about";

    // Fetch Judge0 API details
    const fetchJudge0Details = async () => {
        const config = {
            method: "GET",
            url: JUDGE0_ABOUT_URL,
            headers: {
                "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                "x-rapidapi-key": "3c1c6acf8emsh8dca11b467220aap13fcb1jsn8353cbd2da19", // Your RapidAPI Key
            },
        };

        try {
            const response = await axios(config);
            setJudge0Details(response.data);
        } catch (error) {
            console.error("Error fetching Judge0 details:", error);
        }
    };

    // Fetch Judge0 API details on component mount
    useEffect(() => {
        fetchJudge0Details();
    }, []);

    const runCode = async () => {
        const config = {
            method: "post",
            url: `${JUDGE0_API_URL}?base64_encoded=false&wait=true`,
            headers: {
                "Content-Type": "application/json",
                "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                "x-rapidapi-key": "3c1c6acf8emsh8dca11b467220aap13fcb1jsn8353cbd2da19", // Your RapidAPI Key
            },
            data: {
                source_code: code,
                language_id: getLanguageId(language),
                stdin: stdin,
            },
        };

        try {
            const response = await axios(config);
            setOutput(response.data.stdout || response.data.stderr);
        } catch (error) {
            setOutput("Error executing code");
        }
    };

    const getLanguageId = (lang) => {
        switch (lang) {
            case "cpp":
                return 52;
            case "python":
                return 71;
            default:
                return 71;
        }
    };

    return (
        <div className="grid grid-cols-2 gap-6 min-h-screen p-8 bg-gray-100">
            {/* Left Side: MCQ Section */}
            <div className="p-8 bg-white rounded-lg shadow-lg">
                <button
                    onClick={() => { Loadquestionclick(); repeatClickOfLoadquestion(); }}
                    className="mb-6 px-6 py-3 bg-[#386fa4] text-white rounded-lg shadow-lg hover:bg-[#2591c2] transition-colors font-semibold"
                >
                    Load Questions
                </button>

                {mcqs && (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Questions: {mcqs.name}</h2>
                        {mcqs.map((mcq, index) => {
                            const correctOptionsCount = mcq.options.filter(option => option.correct).length;

                            return (
                                    <div key={mcq.id} className="p-4 text-black bg-gray-50 rounded-lg shadow border border-gray-300">
                                    <h3 className="text-md mt-1 mr-2 font-medium mb-2 whitespace-pre-wrap">
                                        {index + 1}. {mcq.question}
                                    </h3>
                                    <ul className="space-y-1">
                                        {mcq.options.map((option, optionIndex) => {
                                            const isSelected = isOptionSelected(mcq.id, option.id);
                                            const isSubmitted = submitted[mcq.id];
                                            let optionClass = "p-2 w-auto rounded-lg border border-gray-300 cursor-pointer text-sm";

                                            if (isSubmitted) {
                                                if (isCorrect(mcq.id, option.id)) {
                                                    optionClass += ' bg-green-100 text-green-800 border-green-300';
                                                } else if (isSelected) {
                                                    optionClass += ' bg-red-100 text-red-800 border-red-300';
                                                } else {
                                                    optionClass += ' bg-gray-200 text-gray-800';
                                                }
                                            } else if (isSelected) {
                                                optionClass += ' bg-blue-100 text-blue-800 border-blue-300';
                                            } else {
                                                optionClass += ' bg-gray-200 text-gray-800 hover:bg-gray-300';
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
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Right Side: Coding Section */}
                    <div className="p-8 bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Run Your Code</h2>
                        <textarea
                            value={code}
                            onChange={e => setCode(e.target.value)}
                            placeholder="Write your code here..."
                            className="mb-4 p-4 w-full h-40 text-black bg-gray-100 text-sm rounded-lg border border-gray-300"
                        />
                        <div className="mb-4 flex space-x-4">
                            <select
                                value={language}
                                onChange={e => setLanguage(e.target.value)}
                                className="p-2 rounded-lg border text-black border-gray-300 bg-gray-100"
                            >
                                <option value="python">Python</option>
                                <option value="cpp">C++</option>
                            </select>
                            <textarea
                                value={stdin}
                                onChange={e => setStdin(e.target.value)}
                                placeholder="Input values..."
                                className="flex-grow p-2 text-black bg-gray-100 text-sm rounded-lg border border-gray-300"
                            />
                        </div>
                        <button
                            onClick={runCode}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors font-semibold"
                        >
                            Run Code
                        </button>

                        {/* Output Section */}
                        <div className="mt-4">
                            <h3 className="text-xl font-medium mb-2 text-gray-900">Output:</h3>
                            <pre className="p-4 text-black bg-gray-50 text-sm rounded-lg border border-gray-300">{output}</pre>
                    </div>

                {/* Judge0 API Details */}
                {/* {judge0Details && (
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">Judge0 API Details:</h3>
                        <pre className="p-4 bg-gray-50 text-sm rounded-lg border border-gray-300">{JSON.stringify(judge0Details, null, 2)}</pre>
                    </div>
                )} */}
            </div>
        </div>
    );
}

// "use client";

// import { useState, useEffect, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { ClassData } from "../../studentserver/mcq";
// import { getUserData } from "../../studentserver/studentdata";
// import savedata from "../../studentserver/addstudentdata";
// import axios from "axios";

// function StudentCodingDashboardContent() {
//     const [mcqs, setMcqs] = useState(null);
//     const [selectedOptions, setSelectedOptions] = useState({});
//     const [submitted, setSubmitted] = useState({});
//     const [code, setCode] = useState("");
//     const [language, setLanguage] = useState("python");
//     const [stdin, setStdin] = useState("");
//     const [output, setOutput] = useState("");
//     const [judge0Details, setJudge0Details] = useState("");
//     const searchParams = useSearchParams();

//     const id = searchParams.get('id');

//     // Load MCQs
//     async function Loadquestionclick() {
//         if (!id) {
//             console.error("Error: ID is undefined");
//             return;
//         }

//         try {
//             const data = { id: parseInt(id, 10) };
//             const classData = await ClassData(data);
//             setMcqs(classData.mcqs);
//         } catch (error) {
//             console.error("Error fetching class data:", error);
//         }
//     }

//     // Load MCQs repeatedly
//     async function repeatClickOfLoadquestion() {
//         await Loadquestionclick();
//         setInterval(async () => {
//             await Loadquestionclick();
//         }, 2000);
//     }

//     const handleOptionSelect = (mcqId, optionId) => {
//         setSelectedOptions(prev => ({
//             ...prev,
//             [mcqId]: prev[mcqId] ? [...prev[mcqId], optionId] : [optionId]
//         }));
//     };

//     const handleDeselectOption = (mcqId, optionId) => {
//         setSelectedOptions(prev => ({
//             ...prev,
//             [mcqId]: prev[mcqId].filter(id => id !== optionId)
//         }));
//     };

//     const handleSubmit = async (mcqId) => {
//         setSubmitted(prev => ({ ...prev, [mcqId]: true }));

//         const submissionState = isSubmissionCorrect(mcqId) ? "correct" : "incorrect";

//         try {
//             const userData = await getUserData();
//             if (userData && userData.id) {
//                 const studentId = userData.name;
//                 await savedata(id, studentId, submissionState);
//             } else {
//                 console.error("Failed to retrieve user data");
//             }
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     };

//     const isOptionSelected = (mcqId, optionId) => selectedOptions[mcqId]?.includes(optionId);

//     const isCorrect = (mcqId, optionId) => {
//         const mcq = mcqs.find(m => m.id === mcqId);
//         return mcq.options.find(option => option.id === optionId)?.correct;
//     };

//     const isSubmissionCorrect = (mcqId) => {
//         const mcq = mcqs.find(m => m.id === mcqId);
//         const selected = selectedOptions[mcqId] || [];
//         return selected.every(id => isCorrect(mcqId, id)) && selected.length === mcq.options.filter(option => option.correct).length;
//     };

//     // Judge0 API base URL and Code Execution
//     const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";
//     const JUDGE0_ABOUT_URL = "https://judge0-ce.p.rapidapi.com/about";

//     // Fetch Judge0 API details
//     const fetchJudge0Details = async () => {
//         const config = {
//             method: "GET",
//             url: JUDGE0_ABOUT_URL,
//             headers: {
//                 "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
//                 "x-rapidapi-key": "3c1c6acf8emsh8dca11b467220aap13fcb1jsn8353cbd2da19", // Your RapidAPI Key
//             },
//         };

//         try {
//             const response = await axios(config);
//             setJudge0Details(response.data);
//         } catch (error) {
//             console.error("Error fetching Judge0 details:", error);
//         }
//     };

//     // Fetch Judge0 API details on component mount
//     useEffect(() => {
//         fetchJudge0Details();
//     }, []);

//     const runCode = async () => {
//         const config = {
//             method: "post",
//             url: `${JUDGE0_API_URL}?base64_encoded=false&wait=true`,
//             headers: {
//                 "Content-Type": "application/json",
//                 "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
//                 "x-rapidapi-key": "3c1c6acf8emsh8dca11b467220aap13fcb1jsn8353cbd2da19", // Your RapidAPI Key
//             },
//             data: {
//                 source_code: code,
//                 language_id: getLanguageId(language),
//                 stdin: stdin,
//             },
//         };

//         try {
//             const response = await axios(config);
//             setOutput(response.data.stdout || response.data.stderr);
//         } catch (error) {
//             setOutput("Error executing code");
//         }
//     };

//     const getLanguageId = (lang) => {
//         switch (lang) {
//             case "cpp":
//                 return 52;
//             case "python":
//                 return 71;
//             default:
//                 return 71;
//         }
//     };

//     return (
//         <div className="grid grid-cols-2 gap-6 min-h-screen p-8 bg-gray-100">
//             {/* Left Side: MCQ Section */}
//             <div className="p-8 bg-white rounded-lg shadow-lg">
//                 <button
//                     onClick={() => { Loadquestionclick(); repeatClickOfLoadquestion(); }}
//                     className="mb-6 px-6 py-3 bg-[#386fa4] text-white rounded-lg shadow-lg hover:bg-[#2591c2] transition-colors font-semibold"
//                 >
//                     Load Questions
//                 </button>

//                 {mcqs && (
//                     <div className="space-y-8">
//                         <h2 className="text-3xl font-bold mb-6 text-gray-800">Questions: {mcqs.name}</h2>
//                         {mcqs.map((mcq, index) => {
//                             const correctOptionsCount = mcq.options.filter(option => option.correct).length;

//                             return (
//                                 <div key={mcq.id} className="p-4 text-black bg-gray-50 rounded-lg shadow border border-gray-300">
//                                     <h3 className="text-md mt-1 mr-2 font-medium mb-2 whitespace-pre-wrap">
//                                         {index + 1}. {mcq.question}
//                                     </h3>
//                                     <ul className="space-y-1">
//                                         {mcq.options.map((option, optionIndex) => {
//                                             const isSelected = isOptionSelected(mcq.id, option.id);
//                                             const isSubmitted = submitted[mcq.id];
//                                             let optionClass = "p-2 w-auto rounded-lg border border-gray-300 cursor-pointer text-sm";

//                                             if (isSubmitted) {
//                                                 if (isCorrect(mcq.id, option.id)) {
//                                                     optionClass += ' bg-green-100 text-green-800 border-green-300';
//                                                 } else if (isSelected) {
//                                                     optionClass += ' bg-red-100 text-red-800 border-red-300';
//                                                 } else {
//                                                     optionClass += ' bg-gray-200 text-gray-800';
//                                                 }
//                                             } else if (isSelected) {
//                                                 optionClass += ' bg-blue-100 text-blue-800 border-blue-300';
//                                             } else {
//                                                 optionClass += ' bg-gray-200 text-gray-800 hover:bg-gray-300';
//                                             }

//                                             return (
//                                                 <li
//                                                     key={option.id}
//                                                     className={optionClass}
//                                                     onClick={() => isSelected ? handleDeselectOption(mcq.id, option.id) : handleOptionSelect(mcq.id, option.id)}
//                                                 >
//                                                     <span className="font-bold text-xs text-gray-600 mr-2">{String.fromCharCode(97 + optionIndex)}.</span> {/* a, b, c, ... */}
//                                                     {option.text}
//                                                 </li>
//                                             );
//                                         })}
//                                     </ul>
//                                     {mcq.enable && (
//                                         <div className="flex justify-end mt-4">
//                                             <button
//                                                 onClick={() => handleSubmit(mcq.id)}
//                                                 className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors font-semibold"
//                                                 disabled={submitted[mcq.id]}
//                                             >
//                                                 Submit
//                                             </button>
//                                         </div>
//                                     )}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 )}
//             </div>

//             {/* Right Side: Coding Section */}
//             <div className="p-8 bg-white rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-semibold mb-6 text-gray-800">Run Your Code</h2>
//                 <textarea
//                     value={code}
//                     onChange={e => setCode(e.target.value)}
//                     placeholder="Write your code here..."
//                     className="w-full h-32 p-4 mb-6 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500"
//                 />
//                 <textarea
//                     value={stdin}
//                     onChange={e => setStdin(e.target.value)}
//                     placeholder="Enter input (stdin)..."
//                     className="w-full h-16 p-4 mb-6 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500"
//                 />
//                 <div className="flex space-x-4 mb-6">
//                     <button
//                         onClick={runCode}
//                         className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors font-semibold"
//                     >
//                         Run Code
//                     </button>
//                     <select
//                         value={language}
//                         onChange={e => setLanguage(e.target.value)}
//                         className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500"
//                     >
//                         <option value="python">Python</option>
//                         <option value="cpp">C++</option>
//                     </select>
//                 </div>
//                 <h2 className="text-xl font-medium mb-2 text-gray-800">Output:</h2>
//                 <pre className="bg-gray-100 p-4 rounded-lg border border-gray-300 text-black">
//                     {output}
//                 </pre>
//             </div>
//         </div>
//     );
// }

// // Wrap in Suspense to handle useSearchParams() properly
// export default function StudentCodingDashboard() {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <StudentCodingDashboardContent />
//         </Suspense>
//     );
// }


// "use client";

// import { useSearchParams } from "next/navigation";
// import { MCQSection } from "../../../component/studentmcq";
// import { CodingSection } from "../../../component/codingsection";

// export default function StudentCodingDashboard() {
//     const searchParams = useSearchParams();
//     const id = searchParams.get("id");

//     return (
//         <div className="p-8 bg-gray-100 min-h-screen">
//             <h1 className="text-3xl text-black font-bold mb-8">Student Dashboard</h1>
//             <div className="flex space-x-8"> {/* Changed to flex with horizontal spacing */}
//                 <div className="w-1/2"> {/* Flex-basis for MCQSection */}
//                     <MCQSection id={id} />
//                 </div>
//                 <div className="w-1/2"> {/* Flex-basis for CodingSection */}
//                     <CodingSection />
//                 </div>
//             </div>
//         </div>
//     );
// }