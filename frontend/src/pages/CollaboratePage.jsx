import React, { useState } from "react";

const projects = [
  {
    title: "Spring Nature",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "A colorful spring landscape painting",
  },
  {
    title: "Character Design",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    description: "Original character concepts and sketches",
  },
  {
    title: "Fantasy World",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800",
    description: "Fantasy landscapes with vibrant colors",
  },
  {
    title: "Digital Portrait",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=400&q=80",
    description: "Portrait created using digital painting",
  },
];

export default function CollaborativePage() {
  const [collaboratedProjects, setCollaboratedProjects] = useState([]);

  const handleCollaborate = (title) => {
    if (!collaboratedProjects.includes(title)) {
      setCollaboratedProjects([...collaboratedProjects, title]);
      alert(`You requested to collaborate on "${title}"!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-purple-700">
        Collaborative Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-xl hover:scale-105 transform transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg font-bold">{project.title}</h3>
              <p className="text-white text-sm">{project.description}</p>

              {/* Collaborate Button */}
              <button
                onClick={() => handleCollaborate(project.title)}
                className={`mt-2 w-full text-sm font-semibold py-1 rounded-md transition
                  ${collaboratedProjects.includes(project.title)
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                  }`}
              >
                {collaboratedProjects.includes(project.title)
                  ? "Request Sent"
                  : "Collaborate"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}