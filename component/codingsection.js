"use client"
import { useState } from "react";
import axios from "axios";

const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";

export function CodingSection() {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("python");
    const [stdin, setStdin] = useState("");
    const [output, setOutput] = useState("");

    const runCode = async () => {
        const config = {
            method: "post",
            url: `${JUDGE0_API_URL}?base64_encoded=false&wait=true`,
            headers: {
                "Content-Type": "application/json",
                "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                "x-rapidapi-key": "your-rapidapi-key-here",
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

            <div className="mt-4">
                <h3 className="text-xl font-medium mb-2 text-gray-900">Output:</h3>
                <pre className="p-4 text-black bg-gray-50 text-sm rounded-lg border border-gray-300">{output}</pre>
            </div>
        </div>
    );
}