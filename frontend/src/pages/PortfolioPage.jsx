import React, { useState } from "react";

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");

  const addProject = () => {
    if (!title) return;
    setProjects([...projects, { title }]);
    setTitle("");
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-purple-50 to-pink-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-700">
        Portfolio Showcase
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border rounded-l shadow w-64"
        />
        <button
          onClick={addProject}
          className="bg-purple-600 text-white px-6 rounded-r hover:bg-purple-700 transition"
        >
          Add
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-500">Your amazing project here!</p>
          </div>
        ))}
      </div>
    </div>
  );
}