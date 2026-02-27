import React, { useState } from "react";
import { Sparkles, Copy } from "lucide-react";

const aiPrompts = [
  "Draw a futuristic cityscape",
  "Create a character inspired by music",
  "Illustrate your dream world",
  "Design a logo for a fictional company",
  "Paint an abstract emotion",
  "Capture nature in a surreal style",
  "Reimagine a classic story in cyberpunk theme",
  "Sketch your favorite song visually",
  "Design an imaginary animal species",
  "Create art inspired by nostalgia",
];

export default function AISuggestionsPage() {
  const [prompt, setPrompt] = useState("");

  const generatePrompt = () => {
    const random =
      aiPrompts[Math.floor(Math.random() * aiPrompts.length)];
    setPrompt(random);
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden bg-black text-white">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 animate-pulse opacity-60"></div>

      {/* Glass Container */}
      <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 w-full max-w-4xl shadow-2xl">

        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="text-pink-400" size={40} />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            AI Art Inspiration
          </h1>
        </div>

        <p className="text-gray-300 mb-10 text-lg">
          Generate creative prompts to spark your next masterpiece.
        </p>

        {/* Generate Button */}
        <button
          onClick={generatePrompt}
          className="px-8 py-4 rounded-full font-semibold text-lg 
          bg-gradient-to-r from-pink-500 to-purple-600 
          hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Generate Suggestion
        </button>

        {/* Prompt Display */}
        {prompt && (
          <div className="mt-10 bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl flex items-center justify-between gap-4 animate-fadeIn">
            <p className="text-xl md:text-2xl font-semibold">
              {prompt}
            </p>

            <button
              onClick={copyPrompt}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition"
            >
              <Copy size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}