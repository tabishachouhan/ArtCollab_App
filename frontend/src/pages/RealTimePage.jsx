import React, { useState } from "react";

export default function RealTimePage() {
  const [color, setColor] = useState("#000000");

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-purple-50 to-indigo-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-700">
        Real-time Collaboration
      </h1>

      <div className="text-center mb-6">
        <p className="mb-2 text-lg">Pick a color to draw:</p>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="mx-auto block"
        />
      </div>

      <div
        className="bg-white border h-64 w-full rounded-2xl shadow flex items-center justify-center"
        style={{ borderColor: color }}
      >
        <p className="text-gray-400 text-xl">Collaborative Canvas Placeholder</p>
      </div>
    </div>
  );
}