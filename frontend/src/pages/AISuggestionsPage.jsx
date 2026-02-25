import React, { useState } from "react";

const aiPrompts = [
    "Draw a futuristic cityscape",
    "Create a character inspired by music",
    "Illustrate your dream world",
    "Design a logo for a fictional company",
    "Paint an abstract emotion",
    "Capture the beauty of nature in a single painting",
    "Reimagine a classic story in a modern style",
    "Sketch your favorite song",
    "Design an imaginary animal",
    "Create art inspired by your feelings",
];

export default function AISuggestionsPage() {
    const [prompt, setPrompt] = useState("");

    const generatePrompt = () => {
        const random = aiPrompts[Math.floor(Math.random() * aiPrompts.length)];
        setPrompt(random);
    };

    return (
        <div className="min-h-screen relative flex flex-col items-center justify-start p-8 text-center overflow-hidden">
            {/* Background image */}
            <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-800/40 to-pink-700/50 -z-10"></div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent 
    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 animate-pulse drop-shadow-lg">
                AI Art Suggestions & Inspiration
            </h1>

            {/* Generate button */}
            <button
                onClick={generatePrompt}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition px-8 py-4 rounded-full font-bold text-white text-lg shadow-lg"
            >
                Generate AI Suggestion
            </button>

            {/* Current AI suggestion */}
            {prompt && (
                <div className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-3xl shadow-xl max-w-lg animate-fadeIn">
                    <p className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">
                        {prompt}
                    </p>
                </div>
            )}

            {/* Grid of AI prompts */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 max-w-6xl w-full">
                {aiPrompts.map((p, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white rounded-3xl p-6 shadow-2xl hover:scale-105 transform transition cursor-pointer"
                    >
                        <p className="text-xl md:text-2xl font-bold drop-shadow-lg">{p}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}