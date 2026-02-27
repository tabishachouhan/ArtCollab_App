import React, { useState } from "react";
import { Users, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Spring Nature",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "A colorful spring landscape painting.",
    author: "Aarav Mehta",
    skills: ["Watercolor", "Landscape"],
  },
  {
    title: "Character Design",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    description: "Original character concepts and sketches.",
    author: "Riya Sharma",
    skills: ["Sketching", "Concept Art"],
  },
  {
    title: "Fantasy World",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80",
    description: "Fantasy landscapes with vibrant colors.",
    author: "Kabir Singh",
    skills: ["Digital Art", "Fantasy"],
  },
  {
    title: "Digital Portrait",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800&q=80",
    description: "Portrait created using digital painting.",
    author: "Ananya Rao",
    skills: ["Procreate", "Portrait"],
  },
];

const quotes = [
  "Creativity grows when we build together.",
  "Art is stronger when shared.",
  "Collaboration turns ideas into magic.",
  "Together, we create beyond limits.",
];

export default function CollaborativePage() {
  const [collaboratedProjects, setCollaboratedProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCollaborate = (title) => {
    if (!collaboratedProjects.includes(title)) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setCollaboratedProjects((prev) => [...prev, title]);
      }, 1800);

      setTimeout(() => {
        setSuccess(false);
      }, 3500);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 md:px-12 py-16">

      {/* Hero */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4">
          Discover & Collaborate
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Build meaningful creative partnerships and grow together.
        </p>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => {
          const isCollaborated = collaboratedProjects.includes(project.title);

          return (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 mb-2">
                  by {project.author}
                </p>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex-grow"></div>

                <button
                  onClick={() => handleCollaborate(project.title)}
                  className={`flex items-center justify-center gap-2 w-full py-2 rounded-xl font-semibold transition
                    ${
                      isCollaborated
                        ? "bg-green-500 text-white"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                >
                  {isCollaborated ? (
                    <>
                      <CheckCircle size={18} />
                      Request Sent
                    </>
                  ) : (
                    <>
                      <Users size={18} />
                      Collaborate
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULL PAGE LOADER */}
      {(loading || success) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50 transition-all duration-500">

          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 text-center max-w-md animate-fadeIn">

            {loading && (
              <>
                <div className="w-14 h-14 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin mx-auto mb-6"></div>
                <h2 className="text-xl font-semibold text-purple-700">
                  Sending Collaboration Request...
                </h2>
                <p className="text-gray-600 mt-3 italic">
                  “{quotes[Math.floor(Math.random() * quotes.length)]}”
                </p>
              </>
            )}

            {success && (
              <>
                <CheckCircle className="mx-auto text-green-500 mb-4" size={50} />
                <h2 className="text-2xl font-bold text-green-600">
                  Request Successfully Registered!
                </h2>
                <p className="text-gray-700 mt-3 italic">
                  Let creativity connect you ✨
                </p>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}