

// // // "use client";

// // // import { useState } from "react";
// // // import { useSearchParams } from "next/navigation"; 
// // // import { Participation } from "../../teacherserver/participation";
// // // import { ClassData, updateMCQ } from "../../server/class";
// // // import {ClearLiveClassData} from "../../teacherserver/end";

// // // export default function TeacherDashboard() {
// // //     const [mcqs, setMcqs] = useState(null);
// // //     const [participationData, setParticipationData] = useState(null); // State to store participation data
// // //     const [dropdownOpen, setDropdownOpen] = useState(null); // To track dropdown for each MCQ
// // //     const searchParams = useSearchParams(); 
// // //     const id = searchParams.get('id'); 

// // //     async function handleClick() {
// // //         if (!id) {
// // //             console.error("Error: ID is undefined");
// // //             return;
// // //         }

// // //         try {
// // //             const data = { id: parseInt(id, 10) }; 
// // //             console.log(data);
// // //             const classData = await ClassData(data); 
// // //             console.log(classData);
// // //             setMcqs(classData.mcqs); 
// // //         } catch (error) {
// // //             console.error("Error fetching class data:", error);
// // //         }
// // //     }

// // //     async function handleParticipationClick() {
// // //         if (!id) {
// // //             console.error("Error: ID is undefined");
// // //             return;
// // //         }
    
// // //         try {
// // //             const parsedId = parseInt(id, 10);
// // //             console.log("Parsed ID:", parsedId);
    
// // //             const participationData = await Participation(parsedId); 
// // //             console.log("Participation Data:", participationData); 
// // //             setParticipationData(participationData); // Set participation data
// // //         } catch (error) {
// // //             console.error("Error fetching class data:", error);
// // //         }
// // //     }

// // //     async function repeatClickOfParticipation() {
// // //         await handleParticipationClick();
// // //         setInterval(async () => {
// // //             await handleParticipationClick();
// // //         }, 2000); // 2000 milliseconds = 2 seconds
// // //     }

// // //     async function handleMCQUpdate(mcqId, enable, published) {
// // //         console.log(mcqId, enable, published);
// // //         try {
// // //             await updateMCQ({ id: mcqId, enable, published });
// // //             // Refresh the MCQs to reflect the update
// // //             await handleClick();
// // //         } catch (error) {
// // //             console.error("Error updating MCQ:", error);
// // //         }
// // //     }

// // //     async function Endhandler(){
// // //         console.log(id);
// // //         console.log("Participation start clear")
// // //         ClearLiveClassData(id);
// // //         console.log("Participation clear")
// // //     }

// // //     // Toggle the dropdown for individual MCQs
// // //     const toggleDropdown = (index) => {
// // //         if (dropdownOpen === index) {
// // //             setDropdownOpen(null);
// // //         } else {
// // //             setDropdownOpen(index);
// // //         }
// // //     };

// // //     return (
// // //         <div className="p-6 bg-gray-50 min-h-screen">
// // //             <button
// // //                 onClick={handleClick}
// // //                 className="mb-4 mr-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"
// // //             >
// // //                 Questions
// // //             </button>
// // //             <button
// // //                 // onClick={handleParticipationClick}
// // //                 onClick={() => { handleParticipationClick(); repeatClickOfParticipation(); }}
// // //                 className="mb-4 mr-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"
// // //             >
// // //                 Participation
// // //             </button>

// // //             <div className="flex space-x-4 mt-6">
// // //                 {/* Display MCQs on the left */}
// // //                 {mcqs && (
// // //                     <div className="w-1/2 space-y-4 order-1">
// // //                         <h2 className="text-2xl text-black font-semibold mb-4">MCQs for Class: {mcqs.name}</h2>
// // //                         {mcqs.map((mcq, index) => (
// // //                             <div key={mcq.id} className="p-2 bg-white text-black rounded-md shadow-md border border-gray-200">
// // //                                 <div className="flex items-center justify-between">
// // //                                     <h3 className="text-xl font-medium mb-2">{index + 1}. {mcq.question}</h3>
// // //                                     <div className="relative">
// // //                                         {/* Dropdown trigger */}
// // //                                         <button 
// // //                                             onClick={() => toggleDropdown(index)} 
// // //                                             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
// // //                                         >
// // //                                             Actions
// // //                                         </button>

// // //                                         {/* Dropdown Menu */}
// // //                                         {dropdownOpen === index && (
// // //                                             <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
// // //                                                 <ul className="py-1">
// // //                                                     <li>
// // //                                                         <button 
// // //                                                             onClick={() => handleMCQUpdate(mcq.id, true, mcq.published)} 
// // //                                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
// // //                                                             Enable
// // //                                                         </button>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <button 
// // //                                                             onClick={() => handleMCQUpdate(mcq.id, false, mcq.published)} 
// // //                                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
// // //                                                             Disable
// // //                                                         </button>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <button 
// // //                                                             onClick={() => handleMCQUpdate(mcq.id, mcq.enable, true)} 
// // //                                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
// // //                                                             Publish
// // //                                                         </button>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <button 
// // //                                                             onClick={() => handleMCQUpdate(mcq.id, mcq.enable, false)} 
// // //                                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
// // //                                                             Unpublish
// // //                                                         </button>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <button 
// // //                                                             onClick={Endhandler} 
// // //                                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
// // //                                                             End
// // //                                                         </button>
// // //                                                     </li>
// // //                                                 </ul>
// // //                                             </div>
// // //                                         )}
// // //                                     </div>
// // //                                 </div>
// // //                                 <ul className="space-y-2">
// // //                                     {mcq.options.map(option => (
// // //                                         <li key={option.id} className={`p-1 rounded-md ${option.correct ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'} border border-gray-300`}>
// // //                                             {option.text} {option.correct && <span className="font-semibold">(Correct)</span>}
// // //                                         </li>
// // //                                     ))}
// // //                                 </ul>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 )}

// // //                 {/* Display participation data on the right */}
// // //                 {participationData && (
// // //                     <div className="w-1/2 p-4 mt-12 bg-black text-white rounded-md shadow-md order-2">
// // //                         <h2 className="text-2xl font-semibold mb-4">Participation Data</h2>
// // //                         <p><strong>ID:</strong> {participationData.id}</p>
// // //                         <p><strong>Correct:</strong> {JSON.parse(participationData.correct).join(', ') || "None"}</p>
// // //                         <p><strong>Incorrect:</strong> {JSON.parse(participationData.incorrect).join(', ') || "None"}</p>
// // //                         <p><strong>Unattempted:</strong> {JSON.parse(participationData.unattempted).join(', ') || "None"}</p>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // }




// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { useSearchParams, useRouter } from "next/navigation";
// // // import { getSession } from "next-auth/react";  // Import getSession for session management
// // // import { Participation } from "../../teacherserver/participation";
// // // import { ClassData, updateMCQ } from "../../server/class";
// // // import { ClearLiveClassData } from "../../teacherserver/end";

// // // export default function TeacherDashboard() {
// // //     const [mcqs, setMcqs] = useState(null);
// // //     const [participationData, setParticipationData] = useState(null); // State to store participation data
// // //     const [dropdownOpen, setDropdownOpen] = useState(null); // To track dropdown for each MCQ
// // //     const [loading, setLoading] = useState(true); // Loading state for session validation
// // //     const searchParams = useSearchParams();
// // //     const router = useRouter();
// // //     const id = searchParams.get('id');

// // //     // Check user session and role
// // //     useEffect(() => {
// // //         const checkSession = async () => {
// // //             const session = await getSession();
// // //             if (!session || !session.user.isteacher) {
// // //                 // Redirect if not a teacher
// // //                 router.push("/unauthorized"); // Replace with the appropriate page
// // //             } else {
// // //                 setLoading(false); // Allow access if teacher
// // //             }
// // //         };
// // //         checkSession();
// // //     }, [router]);

// // //     async function handleClick() {
// // //         if (!id) {
// // //             console.error("Error: ID is undefined");
// // //             return;
// // //         }

// // //         try {
// // //             const data = { id: parseInt(id, 10) };
// // //             const classData = await ClassData(data);
// // //             setMcqs(classData.mcqs);
// // //         } catch (error) {
// // //             console.error("Error fetching class data:", error);
// // //         }
// // //     }

// // //     async function handleParticipationClick() {
// // //         if (!id) {
// // //             console.error("Error: ID is undefined");
// // //             return;
// // //         }

// // //         try {
// // //             const parsedId = parseInt(id, 10);
// // //             const participationData = await Participation(parsedId);
// // //             setParticipationData(participationData);
// // //         } catch (error) {
// // //             console.error("Error fetching class data:", error);
// // //         }
// // //     }

// // //     async function repeatClickOfParticipation() {
// // //         await handleParticipationClick();
// // //         setInterval(async () => {
// // //             await handleParticipationClick();
// // //         }, 2000); // 2000 milliseconds = 2 seconds
// // //     }

// // //     async function handleMCQUpdate(mcqId, enable, published) {
// // //         try {
// // //             await updateMCQ({ id: mcqId, enable, published });
// // //             await handleClick(); // Refresh MCQs after update
// // //         } catch (error) {
// // //             console.error("Error updating MCQ:", error);
// // //         }
// // //     }

// // //     async function Endhandler() {
// // //         ClearLiveClassData(id);
// // //     }

// // //     const toggleDropdown = (index) => {
// // //         setDropdownOpen(dropdownOpen === index ? null : index);
// // //     };

// // //     if (loading) {
// // //         return <p>Loading...</p>; // Display a loading state while checking session
// // //     }

// // //     return (
// // //         <div className="p-6 bg-gray-50 min-h-screen">
// // //             <button
// // //                 onClick={handleClick}
// // //                 className="mb-4 mr-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"
// // //             >
// // //                 Questions
// // //             </button>
// // //             <button
// // //                 onClick={() => { handleParticipationClick(); repeatClickOfParticipation(); }}
// // //                 className="mb-4 mr-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"
// // //             >
// // //                 Participation
// // //             </button>

// // //             <div className="flex space-x-4 mt-6">
// // //                 {mcqs && (
// // //                     <div className="w-1/2 space-y-4 order-1">
// // //                         <h2 className="text-2xl text-black font-semibold mb-4">MCQs for Class: {mcqs.name}</h2>
// // //                         {mcqs.map((mcq, index) => (
// // //                             <div key={mcq.id} className="p-2 bg-white text-black rounded-md shadow-md border border-gray-200">
// // //                                 <div className="flex items-center justify-between">
// // //                                     <h3 className="text-xl font-medium mb-2">{index + 1}. {mcq.question}</h3>
// // //                                     <div className="relative">
// // //                                         <button
// // //                                             onClick={() => toggleDropdown(index)}
// // //                                             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
// // //                                         >
// // //                                             Actions
// // //                                         </button>

// // //                                         {dropdownOpen === index && (
// // //                                             <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
// // //                                                 <ul className="py-1">
// // //                                                     <li>
// // //                                                         <button
// // //                                                             onClick={() => handleMCQUpdate(mcq.id, true, mcq.published)}
// // //                                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
// // //                                                         >
// // //                                                             Enable
// // //                                                         </button>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <button
// // //                                                             onClick={() => handleMCQUpdate(mcq.id, false, mcq.published)}
// // //                                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
// // //                                                         >
// // //                                                             Disable
// // //                                                         </button>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <button
// // //                                                             onClick={() => handleMCQUpdate(mcq.id, mcq.enable, true)}
// // //                                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
// // //                                                         >
// // //                                                             Publish
// // //                                                         </button>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <button
// // //                                                             onClick={() => handleMCQUpdate(mcq.id, mcq.enable, false)}
// // //                                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
// // //                                                         >
// // //                                                             Unpublish
// // //                                                         </button>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <button
// // //                                                             onClick={Endhandler}
// // //                                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
// // //                                                         >
// // //                                                             End
// // //                                                         </button>
// // //                                                     </li>
// // //                                                 </ul>
// // //                                             </div>
// // //                                         )}
// // //                                     </div>
// // //                                 </div>
// // //                                 <ul className="space-y-2">
// // //                                     {mcq.options.map(option => (
// // //                                         <li key={option.id} className={`p-1 rounded-md ${option.correct ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'} border border-gray-300`}>
// // //                                             {option.text} {option.correct && <span className="font-semibold">(Correct)</span>}
// // //                                         </li>
// // //                                     ))}
// // //                                 </ul>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 )}

// // //                 {participationData && (
// // //                     <div className="w-1/2 p-4 mt-12 bg-black text-white rounded-md shadow-md order-2">
// // //                         <h2 className="text-2xl font-semibold mb-4">Participation Data</h2>
// // //                         <p><strong>ID:</strong> {participationData.id}</p>
// // //                         <p><strong>Correct:</strong> {JSON.parse(participationData.correct).join(', ') || "None"}</p>
// // //                         <p><strong>Incorrect:</strong> {JSON.parse(participationData.incorrect).join(', ') || "None"}</p>
// // //                         <p><strong>Unattempted:</strong> {JSON.parse(participationData.unattempted).join(', ') || "None"}</p>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // }



// // "use client";

// // import { useState, useEffect } from "react";
// // import { useSearchParams, useRouter } from "next/navigation";
// // import { getSession } from "next-auth/react";  // Import getSession for session management
// // import { Participation } from "../../teacherserver/participation";
// // import { ClassData, updateMCQ } from "../../server/class";
// // import { ClearLiveClassData } from "../../teacherserver/end";
// // import { Pie } from "react-chartjs-2";
// // import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// // ChartJS.register(ArcElement, Tooltip, Legend); // Register Chart.js elements

// // export default function TeacherDashboard() {
// //     const [mcqs, setMcqs] = useState(null);
// //     const [participationData, setParticipationData] = useState(null); // State to store participation data
// //     const [loading, setLoading] = useState(true); // Loading state for session validation
// //     const searchParams = useSearchParams();
// //     const router = useRouter();
// //     const id = searchParams.get('id');

// //     // Check user session and role
// //     useEffect(() => {
// //         const checkSession = async () => {
// //             const session = await getSession();
// //             if (!session || !session.user.isteacher) {
// //                 router.push("/unauthorized"); // Redirect if not a teacher
// //             } else {
// //                 setLoading(false); // Allow access if teacher
// //             }
// //         };
// //         checkSession();
// //     }, [router]);

// //     async function handleClick() {
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

// //     async function handleParticipationClick() {
// //         if (!id) {
// //             console.error("Error: ID is undefined");
// //             return;
// //         }

// //         try {
// //             const parsedId = parseInt(id, 10);
// //             const participationData = await Participation(parsedId);
// //             setParticipationData(participationData);
// //         } catch (error) {
// //             console.error("Error fetching class data:", error);
// //         }
// //     }

// //     async function handleMCQUpdate(mcqId, enable, published) {
// //         try {
// //             await updateMCQ({ id: mcqId, enable, published });
// //             await handleClick(); // Refresh MCQs after update
// //         } catch (error) {
// //             console.error("Error updating MCQ:", error);
// //         }
// //     }

// //     async function Endhandler() {
// //         ClearLiveClassData(id);
// //     }

// //     if (loading) {
// //         return <p>Loading...</p>; // Display a loading state while checking session
// //     }

// //     const createPieData = () => {
// //         if (!participationData) return null;

// //         const correct = JSON.parse(participationData.correct).length;
// //         const incorrect = JSON.parse(participationData.incorrect).length;
// //         const unattempted = JSON.parse(participationData.unattempted).length;

// //         return {
// //             labels: ['Correct', 'Incorrect', 'Unattempted'],
// //             datasets: [
// //                 {
// //                     label: 'Participation',
// //                     data: [correct, incorrect, unattempted],
// //                     backgroundColor: ['#4CAF50', '#FF5722', '#FFC107'],
// //                     borderColor: ['#388E3C', '#D32F2F', '#FFA000'],
// //                     borderWidth: 1,
// //                 },
// //             ],
// //         };
// //     };

// //     return (
// //         <div className="p-6 bg-gray-50 min-h-screen">
// //             <button
// //                 onClick={handleClick}
// //                 className="px-4 mr-3 py-2  bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ease-in-out transform hover:scale-105"
// //             >
// //                 Questions
// //             </button>
// //             <button
// //                 onClick={() => { handleParticipationClick(); }}
// //                 className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ease-in-out transform hover:scale-105"
// //             >
// //                 Participation
// //             </button>

// //             <div className="flex space-x-4 mt-6">
// //                 {mcqs && (
// //                     <div className="w-1/2 space-y-4 order-1">
// //                         <h2 className="text-2xl text-black font-semibold mb-4">MCQs for Class: {mcqs.name}</h2>
// //                         {mcqs.map((mcq, index) => (
// //                             <div key={mcq.id} className="relative p-2 bg-white text-black rounded-md shadow-md border border-gray-200">
// //                                 <div className="flex items-start justify-between">
// //                                     <h3 className="text-md mt-5 mr-2 font-medium mb-2 whitespace-pre-wrap">
// //                                         {index + 1}. {mcq.question}
// //                                     </h3>
// //                                     <div className="absolute top-0 right-0">
// //                                         <select
// //                                             className="px-1 py-1 text-black text-sm bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 ease-in-out"
// //                                             onChange={(e) => {
// //                                                 const selectedAction = e.target.value;
// //                                                 if (selectedAction === "enable") {
// //                                                     handleMCQUpdate(mcq.id, true, mcq.published);
// //                                                 } else if (selectedAction === "disable") {
// //                                                     handleMCQUpdate(mcq.id, false, mcq.published);
// //                                                 } else if (selectedAction === "publish") {
// //                                                     handleMCQUpdate(mcq.id, mcq.enable, true);
// //                                                 } else if (selectedAction === "unpublish") {
// //                                                     handleMCQUpdate(mcq.id, false, false);
// //                                                 } else if (selectedAction === "end") {
// //                                                     Endhandler();
// //                                                 }
// //                                             }}
// //                                             defaultValue=""
// //                                         >
// //                                             <option value="" disabled>Action</option>
// //                                             <option value="enable">Enable</option>
// //                                             <option value="disable">Disable</option>
// //                                             <option value="publish">Publish</option>
// //                                             <option value="unpublish">Unpublish</option>
// //                                             <option value="end">End</option>
// //                                         </select>
// //                                     </div>
// //                                 </div>
// //                                 <ul className="space-y-2 mt-2">
// //                                     {mcq.options.map((option, optionIndex) => (
// //                                         <li
// //                                             key={option.id}
// //                                             className={`px-2 text-s rounded-md ${
// //                                                 option.correct ? 'bg-green-100 whitespace-pre-wrap text-green-700' : 'bg-gray-100 text-gray-700'
// //                                             } border border-gray-300`}
// //                                         >
// //                                             <strong>{String.fromCharCode(97 + optionIndex)}.</strong> {option.text} {option.correct && <span className="font-semibold">(Correct)</span>}
// //                                         </li>
// //                                     ))}
// //                                 </ul>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 )}

// //                 {participationData && (
// //                     <div className="w-1/2 p-4 mt-12 bg-white text-black rounded-md shadow-md order-2">
// //                         <h2 className="text-2xl font-semibold mb-4">Participation Data</h2>
// //                         <p><strong>ID:</strong> {participationData.id}</p>
// //                         <p><strong>Correct:</strong> {JSON.parse(participationData.correct).join(', ') || "None"}</p>
// //                         <p><strong>Incorrect:</strong> {JSON.parse(participationData.incorrect).join(', ') || "None"}</p>
// //                         <p><strong>Unattempted:</strong> {JSON.parse(participationData.unattempted).join(', ') || "None"}</p>
                        
// //                         {/* Display Pie Chart */}
// //                         <div className="mt-4">
// //                             {createPieData() && <Pie data={createPieData()} />}
// //                         </div>
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }

// // "use client";

// // import { useState, useEffect } from "react";
// // import { useSearchParams, useRouter } from "next/navigation";
// // import { getSession } from "next-auth/react";
// // import { Participation } from "../../teacherserver/participation";
// // import { ClassData, updateMCQ } from "../../server/class";
// // import { ClearLiveClassData } from "../../teacherserver/end";
// // import { Pie } from 'react-chartjs-2';
// // import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// // ChartJS.register(ArcElement, Tooltip, Legend);

// // export default function TeacherDashboard() {
// //     const [mcqs, setMcqs] = useState(null);
// //     const [participationData, setParticipationData] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const searchParams = useSearchParams();
// //     const router = useRouter();
// //     const id = searchParams.get('id');

// //     useEffect(() => {
// //         const checkSession = async () => {
// //             const session = await getSession();
// //             if (!session || !session.user.isteacher) {
// //                 router.push("/unauthorized");
// //             } else {
// //                 setLoading(false);
// //             }
// //         };
// //         checkSession();
// //     }, [router]);

// //     async function handleClick() {
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

// //     async function handleParticipationClick() {
// //         if (!id) {
// //             console.error("Error: ID is undefined");
// //             return;
// //         }


// //         try {
// //             const parsedId = parseInt(id, 10);
// //             const participationData = await Participation(parsedId);
// //             console.log("Participation Data:", participationData);
// //             setParticipationData(participationData);
// //         } catch (error) {
// //             console.error("Error fetching participation data:", error);
// //         }
// //     }

// //     async function repeatClickOfPrticipation() {
// //         await handleParticipationClick();
// //         setInterval(async () => {
// //             await handleParticipationClick();
// //         }, 2000);
// //     }

// //     async function handleMCQUpdate(mcqId, enable, published) {
// //         try {
// //             await updateMCQ({ id: mcqId, enable, published });
// //             await handleClick(); // Refresh MCQs after update
// //         } catch (error) {
// //             console.error("Error updating MCQ:", error);
// //         }
// //     }

// //     async function Endhandler() {
// //         ClearLiveClassData(id);
// //     }

// //     if (loading) {
// //         return <p>Loading...</p>;
// //     }

// //     const createPieData = () => {
// //         if (!participationData) return null;

// //         const correct = JSON.parse(participationData.correct).length;
// //         const incorrect = JSON.parse(participationData.incorrect).length;
// //         const unattempted = JSON.parse(participationData.unattempted).length;

// //         const totalQuestions = correct + incorrect + unattempted;

// //         return {
// //             labels: ['Correct', 'Incorrect', 'Unattempted'],
// //             datasets: [{
// //                 data: [correct, incorrect, unattempted],
// //                 backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
// //                 hoverBackgroundColor: ['#66BB6A', '#EF5350', '#FFD54F']
// //             }]
// //         };
// //     };

// //     const totalQuestions = participationData ? (
// //         JSON.parse(participationData.correct).length +
// //         JSON.parse(participationData.incorrect).length +
// //         JSON.parse(participationData.unattempted).length
// //     ) : 0;

// //     const correctPercentage = participationData ? (
// //         (JSON.parse(participationData.correct).length / totalQuestions * 100).toFixed(2)
// //     ) : 0;

// //     const incorrectPercentage = participationData ? (
// //         (JSON.parse(participationData.incorrect).length / totalQuestions * 100).toFixed(2)
// //     ) : 0;

// //     const unattemptedPercentage = participationData ? (
// //         (JSON.parse(participationData.unattempted).length / totalQuestions * 100).toFixed(2)
// //     ) : 0;

// //     return (
// //         <div className="p-6 bg-gray-50 min-h-screen">
// //             <button
// //                 onClick={handleClick}
// //                 className="px-4 mr-3 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
// //             >
// //                 Questions
// //             </button>
// //             <button
// //                 // onClick={handleParticipationClick}
// //                 onClick={() => { handleParticipationClick(); repeatClickOfPrticipation(); }}
// //                 className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
// //             >
// //                 Participation
// //             </button>

// //             <div className="flex space-x-4 mt-6">
// //                 {mcqs && (
// //                     <div className="w-1/2 space-y-4 order-1">
// //                         <h2 className="text-2xl text-black font-semibold mb-4">MCQs for Class: {mcqs.name}</h2>
// //                         {mcqs.map((mcq, index) => (
// //                             <div key={mcq.id} className="relative p-2 bg-white text-black rounded-md shadow-md border border-gray-200">
// //                                 <div className="flex items-start justify-between">
// //                                     <h3 className="text-md mt-5 mr-2 font-medium mb-2 whitespace-pre-wrap">
// //                                         {index + 1}. {mcq.question}
// //                                     </h3>
// //                                     <div className="absolute top-0 right-0">
// //                                         <select
// //                                             className="px-1 py-1 text-black text-sm bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
// //                                             onChange={(e) => {
// //                                                 const selectedAction = e.target.value;
// //                                                 if (selectedAction === "enable") {
// //                                                     handleMCQUpdate(mcq.id, true, mcq.published);
// //                                                 } else if (selectedAction === "disable") {
// //                                                     handleMCQUpdate(mcq.id, false, mcq.published);
// //                                                 } else if (selectedAction === "publish") {
// //                                                     handleMCQUpdate(mcq.id, mcq.enable, true);
// //                                                 } else if (selectedAction === "unpublish") {
// //                                                     handleMCQUpdate(mcq.id, false, false);
// //                                                 } else if (selectedAction === "end") {
// //                                                     Endhandler();
// //                                                 }
// //                                             }}
// //                                             defaultValue=""
// //                                         >
// //                                             <option value="" disabled>Action</option>
// //                                             <option value="enable">Enable</option>
// //                                             <option value="disable">Disable</option>
// //                                             <option value="publish">Publish</option>
// //                                             <option value="unpublish">Unpublish</option>
// //                                             <option value="end">End</option>
// //                                         </select>
// //                                     </div>
// //                                 </div>
// //                                 <ul className="space-y-2 mt-2">
// //                                     {mcq.options.map((option, optionIndex) => (
// //                                         <li
// //                                             key={option.id}
// //                                             className={`px-2 text-s rounded-md ${
// //                                                 option.correct ? 'bg-green-100 whitespace-pre-wrap text-green-700' : 'bg-gray-100 text-gray-700'
// //                                             } border border-gray-300`}
// //                                         >
// //                                             <strong>{String.fromCharCode(97 + optionIndex)}.</strong> {option.text} {option.correct && <span className="font-semibold">(Correct)</span>}
// //                                         </li>
// //                                     ))}
// //                                 </ul>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 )}

// //                 {participationData && (
// //                     <div className="w-1/2 p-4 mt-12 bg-white text-black rounded-md shadow-md order-2">
// //                     <h2 className="text-2xl font-semibold mb-4 text-center">Participation Data</h2>
// //                     <div className="flex justify-center">
// //                         <div className="relative w-64 h-64">
// //                             {createPieData() && <Pie data={createPieData()} options={{ responsive: true, maintainAspectRatio: false }} />}
// //                         </div>
// //                     </div>
// //                     <div className="mt-4 text-black text-center">
// //                         <p><strong>Total Questions:</strong> {totalQuestions}</p>
// //                         <p><strong>Correct:</strong> {correctPercentage}%</p>
// //                         <p><strong>Incorrect:</strong> {incorrectPercentage}%</p>
// //                         <p><strong>Unattempted:</strong> {unattemptedPercentage}%</p>
// //                         <p><strong>Correct:</strong> {JSON.parse(participationData.correct).join(', ') || "None"}</p>
// //                         <p><strong>Incorrect:</strong> {JSON.parse(participationData.incorrect).join(', ') || "None"}</p>
// //                         <p><strong>Unattempted:</strong> {JSON.parse(participationData.unattempted).join(', ') || "None"}</p>
// //                         {/* <p><strong>Unattempted:</strong> {JSON.parse(participationData.total).join(', ') || "None"}</p> */}

// //                     </div>
// //                 </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }


// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { getSession } from "next-auth/react";
// import { Participation } from "../../teacherserver/participation";
// import { ClassData, updateMCQ } from "../../server/class";
// import { ClearLiveClassData } from "../../teacherserver/end";
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function TeacherDashboard() {
//     const [mcqs, setMcqs] = useState(null);
//     const [participationData, setParticipationData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const searchParams = useSearchParams();
//     const router = useRouter();
//     const id = searchParams.get('id');

//     useEffect(() => {
//         const checkSession = async () => {
//             const session = await getSession();
//             if (!session || !session.user.isteacher) {
//                 router.push("/unauthorized");
//             } else {
//                 setLoading(false);
//             }
//         };
//         checkSession();
//     }, [router]);

//     async function handleClick() {
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

//     async function handleParticipationClick() {
//         if (!id) {
//             console.error("Error: ID is undefined");
//             return;
//         }

//         try {
//             const parsedId = parseInt(id, 10);
//             const participationData = await Participation(parsedId);
//             console.log("Participation Data:", participationData);
//             setParticipationData(participationData);
//         } catch (error) {
//             console.error("Error fetching participation data:", error);
//         }
//     }

//     async function repeatClickOfPrticipation() {
//         await handleParticipationClick();
//         setInterval(async () => {
//             await handleParticipationClick();
//         }, 2000);
//     }

//     async function handleMCQUpdate(mcqId, enable, published) {
//         try {
//             await updateMCQ({ id: mcqId, enable, published });
//             await handleClick(); // Refresh MCQs after update
//         } catch (error) {
//             console.error("Error updating MCQ:", error);
//         }
//     }

//     async function Endhandler() {
//         ClearLiveClassData(id);
//     }

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     const createPieData = () => {
//         if (!participationData) return null;

//         const correct = JSON.parse(participationData.correct).length;
//         const incorrect = JSON.parse(participationData.incorrect).length;
//         const total = parseInt(participationData.total, 10);
//         const unattempted = total - (correct + incorrect);

//         return {
//             labels: ['Correct', 'Incorrect', 'Unattempted'],
//             datasets: [{
//                 data: [correct, incorrect, unattempted],
//                 backgroundColor: ['#4CAF50', '#F44336', '#a594f9'],
//                 hoverBackgroundColor: ['#66BB6A', '#EF5350', '#a594f9']
//             }]
//         };
//     };

//     const totalQuestions = participationData ? (
//         parseInt(participationData.total, 10)
//     ) : 0;

//     const correctPercentage = participationData ? (
//         (JSON.parse(participationData.correct).length / totalQuestions * 100).toFixed(2)
//     ) : 0;

//     const incorrectPercentage = participationData ? (
//         (JSON.parse(participationData.incorrect).length / totalQuestions * 100).toFixed(2)
//     ) : 0;

//     const unattemptedPercentage = participationData ? (
//         ((totalQuestions - (JSON.parse(participationData.correct).length + JSON.parse(participationData.incorrect).length)) / totalQuestions * 100).toFixed(2)
//     ) : 0;

//     return (
//         <div className="p-6 bg-gray-50 min-h-screen">
//             <button
//                 onClick={handleClick}
//                 className="px-4 mr-3 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
//             >
//                 Questions
//             </button>
//             <button
//                 onClick={() => { handleParticipationClick(); repeatClickOfPrticipation(); }}
//                 className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
//             >
//                 Participation
//             </button>

//             <div className="flex space-x-4 mt-6">
//                 {mcqs && (
//                     <div className="w-1/2 space-y-4 order-1">
//                         <h2 className="text-2xl text-black font-semibold mb-4">MCQs for Class: {mcqs.name}</h2>
//                         {mcqs.map((mcq, index) => (
//                             <div key={mcq.id} className="relative p-2 bg-white text-black rounded-md shadow-md border border-gray-200">
//                                 <div className="flex items-start justify-between">
//                                     <h3 className="text-md mt-5 mr-2 font-medium mb-2 whitespace-pre-wrap">
//                                         {index + 1}. {mcq.question}
//                                     </h3>
//                                     <div className="absolute top-0 right-0">
//                                         <select
//                                             className="px-1 py-1 text-black text-sm bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
//                                             onChange={(e) => {
//                                                 const selectedAction = e.target.value;
//                                                 if (selectedAction === "enable") {
//                                                     handleMCQUpdate(mcq.id, true, mcq.published);
//                                                 } else if (selectedAction === "disable") {
//                                                     handleMCQUpdate(mcq.id, false, mcq.published);
//                                                 } else if (selectedAction === "publish") {
//                                                     handleMCQUpdate(mcq.id, mcq.enable, true);
//                                                 } else if (selectedAction === "unpublish") {
//                                                     handleMCQUpdate(mcq.id, false, false);
//                                                 } else if (selectedAction === "end") {
//                                                     Endhandler();
//                                                 }
//                                             }}
//                                             defaultValue=""
//                                         >
//                                             <option value="" disabled>Action</option>
//                                             <option value="enable">Enable</option>
//                                             <option value="disable">Disable</option>
//                                             <option value="publish">Publish</option>
//                                             <option value="unpublish">Unpublish</option>
//                                             <option value="end">End</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <ul className="space-y-2 mt-2">
//                                     {mcq.options.map((option, optionIndex) => (
//                                         <li
//                                             key={option.id}
//                                             className={`px-2 text-s rounded-md ${
//                                                 option.correct ? 'bg-green-100 whitespace-pre-wrap text-green-700' : 'bg-gray-100 text-gray-700'
//                                             } border border-gray-300`}
//                                         >
//                                             <strong>{String.fromCharCode(97 + optionIndex)}.</strong> {option.text} {option.correct && <span className="font-semibold">(Correct)</span>}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 )}

//                 {participationData && (
//                     <div className="w-1/2 p-4 mt-12 bg-white text-black rounded-md shadow-md order-2">
//                         <h2 className="text-2xl font-semibold mb-4 text-center">Participation Data</h2>
//                         <div className="flex justify-center">
//                             <div className="relative w-64 h-64">
//                                 {createPieData() && <Pie data={createPieData()} options={{ responsive: true, maintainAspectRatio: false }} />}
//                             </div>
//                         </div>
//                         <div className="mt-4 text-black text-center">
//                             <p><strong>Total Participants:</strong> {totalQuestions}</p>
//                             <p><strong>Correct:</strong> {correctPercentage}%</p>
//                             <p><strong>Incorrect:</strong> {incorrectPercentage}%</p>
//                             <p><strong>Unattempted:</strong> {unattemptedPercentage}%</p>
//                             <p><strong>Correct Responses:</strong> {JSON.parse(participationData.correct).join(', ') || "None"}</p>
//                             <p><strong>Incorrect Responses:</strong> {JSON.parse(participationData.incorrect).join(', ') || "None"}</p>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import { Participation } from "../../teacherserver/participation";
import { ClassData, updateMCQ } from "../../server/class";
import { ClearLiveClassData } from "../../teacherserver/end";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

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

    async function handleParticipationClick() {
        if (!id) {
            console.error("Error: ID is undefined");
            return;
        }

        try {
            const parsedId = parseInt(id, 10);
            const participationData = await Participation(parsedId);
            console.log("Participation Data:", participationData);
            setParticipationData(participationData);
        } catch (error) {
            console.error("Error fetching participation data:", error);
        }
    }

    async function repeatClickOfPrticipation() {
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

    async function Endhandler() {
        ClearLiveClassData(id);
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const createPieData = () => {
        if (!participationData) return null;

        const correct = JSON.parse(participationData.correct).length;
        const incorrect = JSON.parse(participationData.incorrect).length;
        const total = parseInt(participationData.total, 10);
        const unattempted = total - (correct + incorrect);

        return {
            labels: ['Correct', 'Incorrect', 'Unattempted'],
            datasets: [{
                data: [correct, incorrect, unattempted],
                backgroundColor: ['#4CAF50', '#F44336', '#a594f9'],
                hoverBackgroundColor: ['#66BB6A', '#EF5350', '#a594f9']
            }]
        };
    };

    const totalQuestions = participationData ? (
        parseInt(participationData.total, 10)
    ) : 0;

    const correctPercentage = participationData ? (
        (JSON.parse(participationData.correct).length / totalQuestions * 100).toFixed(2)
    ) : 0;

    const incorrectPercentage = participationData ? (
        (JSON.parse(participationData.incorrect).length / totalQuestions * 100).toFixed(2)
    ) : 0;

    const unattemptedPercentage = participationData ? (
        ((totalQuestions - (JSON.parse(participationData.correct).length + JSON.parse(participationData.incorrect).length)) / totalQuestions * 100).toFixed(2)
    ) : 0;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <button
                onClick={handleClick}
                className="px-4 mr-3 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
            >
                Questions
            </button>
            <button
                onClick={() => { handleParticipationClick(); repeatClickOfPrticipation(); }}
                className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
            >
                Participation
            </button>

            <div className="flex space-x-4 mt-6">
                {mcqs && (
                    <div className="w-1/2 space-y-4 order-1">
                        <h2 className="text-2xl text-black font-semibold mb-4">MCQs for Class: {mcqs.name}</h2>
                        {mcqs.map((mcq, index) => (
                            <div key={mcq.id} className="relative p-2 bg-white text-black rounded-md shadow-md border border-gray-200">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-md mt-5 mr-2 font-medium mb-2 whitespace-pre-wrap">
                                        {index + 1}. {mcq.question}
                                    </h3>
                                    <div className="absolute top-0 right-0">
                                        <select
                                            className="px-1 py-1 text-black text-sm bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                                            onChange={(e) => {
                                                const selectedAction = e.target.value;
                                                if (selectedAction === "enable") {
                                                    handleMCQUpdate(mcq.id, true, mcq.published);
                                                } else if (selectedAction === "disable") {
                                                    handleMCQUpdate(mcq.id, false, mcq.published);
                                                } else if (selectedAction === "publish") {
                                                    handleMCQUpdate(mcq.id, mcq.enable, true);
                                                } else if (selectedAction === "unpublish") {
                                                    handleMCQUpdate(mcq.id, false, false);
                                                } else if (selectedAction === "end") {
                                                    Endhandler();
                                                }
                                            }}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Action</option>
                                            <option value="enable">Enable</option>
                                            <option value="disable">Disable</option>
                                            <option value="publish">Publish</option>
                                            <option value="unpublish">Unpublish</option>
                                            <option value="end">End</option>
                                        </select>
                                    </div>
                                </div>
                                <ul className="space-y-2 mt-2">
                                    {mcq.options.map((option, optionIndex) => (
                                        <li
                                            key={option.id}
                                            className={`px-2 text-s rounded-md ${
                                                option.correct ? 'bg-green-100 whitespace-pre-wrap text-green-700' : 'bg-gray-100 text-gray-700'
                                            } border border-gray-300`}
                                        >
                                            <strong>{String.fromCharCode(97 + optionIndex)}.</strong> {option.text} {option.correct && <span className="font-semibold">(Correct)</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {participationData && (
                    <div className="w-1/2 p-4 mt-12 bg-white text-black rounded-md shadow-md order-2">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Participation Data</h2>
                        <div className="flex justify-center">
                            <div className="relative w-64 h-64">
                                {createPieData() && <Pie data={createPieData()} options={{ responsive: true, maintainAspectRatio: false }} />}
                            </div>
                        </div>
                        <div className="mt-4 text-black text-center">
                            <p><strong>Total Participants:</strong> {totalQuestions}</p>
                            <p><strong>Correct:</strong> {correctPercentage}%</p>
                            <p><strong>Incorrect:</strong> {incorrectPercentage}%</p>
                            <p><strong>Unattempted:</strong> {unattemptedPercentage}%</p>
                            <p><strong>Correct Responses:</strong> {JSON.parse(participationData.correct).join(', ') || "None"}</p>
                            <p><strong>Incorrect Responses:</strong> {JSON.parse(participationData.incorrect).join(', ') || "None"}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function TeacherDashboard() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TeacherDashboardComponent />
        </Suspense>
    );
}

// import dynamic from 'next/dynamic';
// import { Suspense } from 'react';

// const TeacherDashboardComponent = dynamic(() => import("../../../component/TeacherDashboardComponent"), {
//     suspense: true
// });

// function TeacherDashboard() {
//     return (
//         <Suspense fallback={<p>Loading dashboard...</p>}>
//             <TeacherDashboardComponent />
//         </Suspense>
//     );
// }

// export default TeacherDashboard;