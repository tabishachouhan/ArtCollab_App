import React, { useState } from "react";

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addProject = () => {
    if (!title || !imageUrl) return;

    const newProject = {
      id: Date.now(),
      title,
      imageUrl,
    };

    setProjects([...projects, newProject]);
    setTitle("");
    setImageUrl("");
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-purple-50 to-pink-50">
      <h1 className="text-4xl font-bold mb-10 text-center text-purple-700">
        Portfolio Showcase
      </h1>

      {/* Add Project Section */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg mb-10">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            onClick={addProject}
            className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
          >
            Add Project
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/400x200?text=Invalid+Image")
              }
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-3">
                {project.title}
              </h2>

              <button
                onClick={() => deleteProject(project.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No projects added yet.
        </p>
      )}
    </div>
  );
}