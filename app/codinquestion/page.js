// // "use client";
// // import { useState } from "react";
// // import axios from "axios";

// // export default function CodingDashboard() {
// //   const [code, setCode] = useState(""); // Store the inputted code
// //   const [language, setLanguage] = useState("python"); // Store selected language
// //   const [stdin, setStdin] = useState(""); // Store user input for the program
// //   const [output, setOutput] = useState(""); // Store output

// //   // Judge0 API base URL
// //   const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";

// //   // Function to run the code using Judge0 API
// //   const runCode = async () => {
// //     const config = {
// //       method: "post",
// //       url: `${JUDGE0_API_URL}?base64_encoded=false&wait=true`,
// //       headers: {
// //         "Content-Type": "application/json",
// //         "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
// //         "x-rapidapi-key": "3c1c6acf8emsh8dca11b467220aap13fcb1jsn8353cbd2da19", // Your RapidAPI Key
// //       },
// //       data: {
// //         source_code: code,
// //         language_id: getLanguageId(language),
// //         stdin: stdin, // Add the input data here
// //       },
// //     };

// //     try {
// //       const response = await axios(config);
// //       setOutput(response.data.stdout || response.data.stderr); // Set output from API response
// //     } catch (error) {
// //       setOutput("Error executing code");
// //     }
// //   };

// //   // Function to get the language ID for Judge0 based on user selection
// //   const getLanguageId = (lang) => {
// //     switch (lang) {
// //       case "cpp":
// //         return 52; // C++ (GCC 9.2.0)
// //       case "python":
// //         return 71; // Python (3.8.1)
// //       default:
// //         return 71; // Default to Python
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen p-6 bg-gray-900">
// //       <h1 className="text-3xl text-white font-semibold mb-4">Coding Dashboard</h1>

// //       {/* Language Selection */}
// //       <select
// //         value={language}
// //         onChange={(e) => setLanguage(e.target.value)}
// //         className="p-2 border text-black border-gray-300 mb-4"
// //       >
// //         <option value="python">Python</option>
// //         <option value="cpp">C++</option>
// //       </select>

// //       {/* Code Input Area */}
// //       <textarea
// //         value={code}
// //         onChange={(e) => setCode(e.target.value)}
// //         placeholder="Write your code here..."
// //         className="w-full h-48 p-3 mb-4 border text-black border-gray-900 rounded-md"
// //       ></textarea>

// //       {/* Standard Input Area */}
// //       <textarea
// //         value={stdin}
// //         onChange={(e) => setStdin(e.target.value)}
// //         placeholder="Provide input here..."
// //         className="w-full h-24 p-3 mb-4 border text-black border-gray-900 rounded-md"
// //       ></textarea>

// //       {/* Run Button */}
// //       <button
// //         onClick={runCode}
// //         className="px-4 py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700"
// //       >
// //         Run Code
// //       </button>

// //       {/* Output Section */}
// //       <div className="mt-4 p-4 bg-white border border-gray-300 rounded-md">
// //         <h2 className="text-lg text-black font-semibold">Output:</h2>
// //         <pre className="whitespace-pre-wrap text-black">{output}</pre>
// //       </div>
// //     </div>
// //   );
// // }


// // "use client";
// // import { useState } from "react";
// // import axios from "axios";
// // import dynamic from "next/dynamic";

// // // Dynamically import Monaco Editor (only renders on the client)
// // const Monaco = dynamic(() => import("@monaco-editor/react"), { ssr: false });

// // export default function CodingDashboard() {
// //   const [code, setCode] = useState(""); // Store the inputted code
// //   const [language, setLanguage] = useState("python"); // Store selected language
// //   const [stdin, setStdin] = useState(""); // Store user input for the program
// //   const [output, setOutput] = useState(""); // Store output

// //   // Judge0 API base URL
// //   const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";

// //   // Function to run the code using Judge0 API
// //   const runCode = async () => {
// //     const config = {
// //       method: "post",
// //       url: `${JUDGE0_API_URL}?base64_encoded=false&wait=true`,
// //       headers: {
// //         "Content-Type": "application/json",
// //         "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
// //         "x-rapidapi-key": "3c1c6acf8emsh8dca11b467220aap13fcb1jsn8353cbd2da19", // Your RapidAPI Key
// //       },
// //       data: {
// //         source_code: code,
// //         language_id: getLanguageId(language),
// //         stdin: stdin, // Add the input data here
// //       },
// //     };

// //     try {
// //       const response = await axios(config);
// //       setOutput(response.data.stdout || response.data.stderr); // Set output from API response
// //     } catch (error) {
// //       setOutput("Error executing code");
// //     }
// //   };

// //   // Function to get the language ID for Judge0 based on user selection
// //   const getLanguageId = (lang) => {
// //     switch (lang) {
// //       case "cpp":
// //         return 52; // C++ (GCC 9.2.0)
// //       case "python":
// //         return 71; // Python (3.8.1)
// //       default:
// //         return 71; // Default to Python
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen p-6 bg-gray-900">
// //       <h1 className="text-3xl text-white font-semibold mb-4">Coding Dashboard</h1>

// //       {/* Language Selection */}
// //       <select
// //         value={language}
// //         onChange={(e) => setLanguage(e.target.value)}
// //         className="p-2 border text-black border-gray-300 mb-4"
// //       >
// //         <option value="python">Python</option>
// //         <option value="cpp">C++</option>
// //       </select>

// //       {/* Monaco Code Editor */}
// //       <div className="mb-4">
// //         <Monaco
// //           height="400px"
// //           theme="vs-dark" // You can change the theme to 'light' or any custom theme
// //           language={language === 'python' ? 'python' : 'cpp'}
// //           value={code}
// //           onChange={(value) => setCode(value)}
// //           options={{
// //             automaticLayout: true,
// //             bracketPairColorization: true, // Automatically closes brackets
// //             autoIndent: true,
// //             fontSize: 16,
// //             scrollBeyondLastLine: false,
// //             minimap: { enabled: false }, // Hide the minimap
// //             wordWrap: 'on',
// //           }}
// //         />
// //       </div>

// //       {/* Standard Input Area */}
// //       <textarea
// //         value={stdin}
// //         onChange={(e) => setStdin(e.target.value)}
// //         placeholder="Provide input here..."
// //         className="w-full h-24 p-3 mb-4 border text-black border-gray-900 rounded-md"
// //       ></textarea>

// //       {/* Run Button */}
// //       <button
// //         onClick={runCode}
// //         className="px-4 py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700"
// //       >
// //         Run Code
// //       </button>

// //       {/* Output Section */}
// //       <div className="mt-4 p-4 bg-white border border-gray-300 rounded-md">
// //         <h2 className="text-lg text-black font-semibold">Output:</h2>
// //         <pre className="whitespace-pre-wrap text-black">{output}</pre>
// //       </div>
// //     </div>
// //   );
// // }

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

// Dynamically import Monaco Editor (only renders on the client)
const Monaco = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodingDashboard() {
  const [code, setCode] = useState(""); // Store the inputted code
  const [language, setLanguage] = useState("python"); // Store selected language
  const [stdin, setStdin] = useState(""); // Store user input for the program
  const [output, setOutput] = useState(""); // Store output

  // Judge0 API base URL
  const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";

  // Function to run the code using Judge0 API
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
        stdin: stdin, // Add the input data here
      },
    };

    try {
      const response = await axios(config);
      setOutput(response.data.stdout || response.data.stderr); // Set output from API response
    } catch (error) {
      setOutput("Error executing code");
    }
  };

  // Function to get the language ID for Judge0 based on user selection
  const getLanguageId = (lang) => {
    switch (lang) {
      case "cpp":
        return 52; // C++ (GCC 9.2.0)
      case "python":
        return 71; // Python (3.8.1)
      default:
        return 71; // Default to Python
    }
  };

  // Prevent copy, cut, and paste in the editor
  const preventCopyPaste = (event) => {
    event.preventDefault(); // Prevent the action (copy, cut, or paste)
    alert("Copying or pasting is disabled in this editor.");
  };

  useEffect(() => {
    const editorElement = document.querySelector(".monaco-editor");

    if (editorElement) {
      editorElement.addEventListener("copy", preventCopyPaste);
      editorElement.addEventListener("cut", preventCopyPaste);
      editorElement.addEventListener("paste", preventCopyPaste);
    }

    return () => {
      if (editorElement) {
        editorElement.removeEventListener("copy", preventCopyPaste);
        editorElement.removeEventListener("cut", preventCopyPaste);
        editorElement.removeEventListener("paste", preventCopyPaste);
      }
    };
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-900">
      <h1 className="text-3xl text-white font-semibold mb-4">Coding Dashboard</h1>

      {/* Language Selection */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 border text-black border-gray-300 mb-4"
      >
        <option value="python">Python</option>
        <option value="cpp">C++</option>
      </select>

      <div className="flex">
        {/* Monaco Code Editor */}
        <div className="w-1/2 pr-4">
          <Monaco
            height="400px"
            theme="vs-dark" // You can change the theme to 'light' or any custom theme
            language={language === 'python' ? 'python' : 'cpp'}
            value={code}
            onChange={(value) => setCode(value)}
            options={{
              automaticLayout: true,
              bracketPairColorization: true, // Automatically closes brackets
              autoIndent: true,
              fontSize: 16,
              scrollBeyondLastLine: false,
              minimap: { enabled: false }, // Hide the minimap
              wordWrap: 'on',
            }}
          />
        </div>

        {/* Output Section */}
        <div className="w-1/2 pl-4">
          {/* Run Button */}
          <button
            onClick={runCode}
            className="mb-4 px-4 py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700"
          >
            Run Code
          </button>

          {/* Output */}
          <div className="p-4 bg-white border border-gray-300 rounded-md h-[400px] overflow-auto">
            <h2 className="text-lg text-black font-semibold">Output:</h2>
            <pre className="whitespace-pre-wrap text-black">{output}</pre>
          </div>
        </div>
      </div>

      {/* Standard Input Area */}
      <textarea
        value={stdin}
        onChange={(e) => setStdin(e.target.value)}
        placeholder="Provide input here..."
        className="w-full h-24 p-3 mt-4 border text-black border-gray-900 rounded-md"
      ></textarea>
    </div>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import dynamic from "next/dynamic";

// // Dynamically import Monaco Editor (only renders on the client)
// const Monaco = dynamic(() => import("@monaco-editor/react"), { ssr: false });

// export default function CodingDashboard() {
//   const [code, setCode] = useState(""); // Store the inputted code
//   const [language, setLanguage] = useState("python"); // Store selected language
//   const [output, setOutput] = useState(""); // Store output
//   const [inputNeeded, setInputNeeded] = useState(false); // Check if input is required
//   const [userInput, setUserInput] = useState(""); // Store user input for input()
//   const [pendingExecution, setPendingExecution] = useState(false); // Flag to wait for input
//   const [stdinQueue, setStdinQueue] = useState([]); // Queue for storing multiple inputs

//   const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";

//   // Function to run the code using Judge0 API
//   const runCode = async (stdin) => {
//     const config = {
//       method: "post",
//       url: `${JUDGE0_API_URL}?base64_encoded=false&wait=true`,
//       headers: {
//         "Content-Type": "application/json",
//         "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
//         "x-rapidapi-key": "3c1c6acf8emsh8dca11b467220aap13fcb1jsn8353cbd2da19", // Your RapidAPI Key
//       },
//       data: {
//         source_code: code,
//         language_id: getLanguageId(language),
//         stdin: stdinQueue.join("\n"), // Combine inputs with newline
//       },
//     };

//     try {
//       const response = await axios(config);
//       setOutput(response.data.stdout || response.data.stderr); // Set output from API response
//       setPendingExecution(false); // Reset execution state
//     } catch (error) {
//       setOutput("Error executing code");
//     }
//   };

//   // Function to get the language ID for Judge0 based on user selection
//   const getLanguageId = (lang) => {
//     switch (lang) {
//       case "cpp":
//         return 52; // C++ (GCC 9.2.0)
//       case "python":
//         return 71; // Python (3.8.1)
//       default:
//         return 71; // Default to Python
//     }
//   };

//   // Handle when the user provides input in the output panel
//   const handleUserInputSubmit = () => {
//     setStdinQueue([...stdinQueue, userInput]); // Add input to queue
//     setUserInput(""); // Clear the input field
//     setInputNeeded(false); // Hide input field
//     setPendingExecution(true); // Continue code execution
//     runCode(stdinQueue.join("\n")); // Run code with updated inputs
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-900">
//       <h1 className="text-3xl text-white font-semibold mb-4">Coding Dashboard</h1>

//       {/* Language Selection */}
//       <select
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//         className="p-2 border text-black border-gray-300 mb-4"
//       >
//         <option value="python">Python</option>
//         <option value="cpp">C++</option>
//       </select>

//       <div className="flex">
//         {/* Monaco Code Editor */}
//         <div className="w-1/2 pr-4">
//           <Monaco
//             height="400px"
//             theme="vs-dark"
//             language={language === 'python' ? 'python' : 'cpp'}
//             value={code}
//             onChange={(value) => setCode(value)}
//             options={{
//               automaticLayout: true,
//               bracketPairColorization: true,
//               autoIndent: true,
//               fontSize: 16,
//               scrollBeyondLastLine: false,
//               minimap: { enabled: false },
//               wordWrap: 'on',
//             }}
//           />
//         </div>

//         {/* Output Panel */}
//         <div className="w-1/2 pl-4">
//           {/* Run Button */}
//           <button
//             onClick={() => {
//               setInputNeeded(true); // Simulate need for input initially
//               setPendingExecution(true);
//             }}
//             className="mb-4 px-4 py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700"
//           >
//             Run Code
//           </button>

//           {/* Input Field in Output Panel */}
//           {inputNeeded && (
//             <div className="mb-4">
//               <textarea
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 placeholder="Enter input for program..."
//                 className="w-full h-24 p-3 mb-4 border text-black border-gray-300 rounded-md"
//               />
//               <button
//                 onClick={handleUserInputSubmit}
//                 className="px-4 py-2 bg-green-600 text-black rounded-md hover:bg-green-700"
//               >
//                 Submit Input & Continue
//               </button>
//             </div>
//           )}

//           {/* Output Section */}
//           <div className="p-4 bg-white border border-gray-300 rounded-md h-[400px] overflow-auto">
//             <h2 className="text-lg text-black font-semibold">Output:</h2>
//             <pre className="whitespace-pre-wrap text-black">{output}</pre>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }