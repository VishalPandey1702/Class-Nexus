// export const MCQList = ({ mcqs, handleMCQUpdate, Endhandler }) => {
//     return (
//         <div className="w-1/2 space-y-4 order-1">
//             <h2 className="text-2xl text-black font-semibold mb-4">MCQs for Class: {mcqs.name}</h2>
//             {mcqs.map((mcq, index) => (
//                 <div key={mcq.id} className="relative p-2 bg-white text-black rounded-md shadow-md border border-gray-200">
//                     <div className="flex items-start justify-between">
//                         <h3 className="text-md mt-5 mr-2 font-medium mb-2 whitespace-pre-wrap">
//                             {index + 1}. {mcq.question}
//                         </h3>
//                         <div className="absolute top-0 right-0">
//                             <select
//                                 className="px-1 py-1 text-black text-sm bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
//                                 onChange={(e) => {
//                                     const selectedAction = e.target.value;
//                                     if (selectedAction === "enable") {
//                                         handleMCQUpdate(mcq.id, true, mcq.published);
//                                     } else if (selectedAction === "disable") {
//                                         handleMCQUpdate(mcq.id, false, mcq.published);
//                                     } else if (selectedAction === "publish") {
//                                         handleMCQUpdate(mcq.id, mcq.enable, true);
//                                     } else if (selectedAction === "unpublish") {
//                                         handleMCQUpdate(mcq.id, false, false);
//                                     } else if (selectedAction === "end") {
//                                         Endhandler();
//                                     }
//                                 }}
//                                 defaultValue=""
//                             >
//                                 <option value="" disabled>Action</option>
//                                 <option value="enable">Enable</option>
//                                 <option value="disable">Disable</option>
//                                 <option value="publish">Publish</option>
//                                 <option value="unpublish">Unpublish</option>
//                                 <option value="end">End</option>
//                             </select>
//                         </div>
//                     </div>
//                     <ul className="space-y-2 mt-2">
//                         {mcq.options.map((option, optionIndex) => (
//                             <li
//                                 key={option.id}
//                                 className={`px-2 text-s rounded-md ${
//                                     option.correct ? 'bg-green-100 whitespace-pre-wrap text-green-700' : 'bg-gray-100 text-gray-700'
//                                 } border border-gray-300`}
//                             >
//                                 <strong>{String.fromCharCode(97 + optionIndex)}.</strong> {option.text} {option.correct && <span className="font-semibold">(Correct)</span>}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// };


import { ClearLiveClassData } from "../app/teacherserver/end";

export const MCQList = ({ mcqs, handleMCQUpdate, Endhandler }) => {
    // Local function to handle 'end' action
    async function handleEnd(mcqId) {
        await ClearLiveClassData(mcqId);
    }

    return (
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
                                        handleEnd(1); // Call the local handler for 'end'
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
    );
};