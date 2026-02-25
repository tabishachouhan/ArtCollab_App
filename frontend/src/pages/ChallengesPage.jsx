import React, { useState } from "react";

// Stable image URLs
const challengesList = [
  {
    title: "March Art Competition",
    desc: "Participate in the biggest art competition of the month and showcase your creativity!",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    deadline: "March 31, 2026",
  },
  {
    title: "Spring Nature Illustration",
    desc: "Draw or paint a scene inspired by spring and nature’s beauty.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    deadline: "March 20, 2026",
  },
  {
    title: "Character Design Challenge",
    desc: "Create a unique character inspired by your favorite story or game.",
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800",
    deadline: "March 25, 2026",
  },
];

export default function ChallengesPage() {
  const [registered, setRegistered] = useState([]);

  const participate = (title) => {
    if (!registered.includes(title)) {
      setRegistered([...registered, title]);
      alert(`You are now registered for "${title}"! 🎨`);
    } else {
      alert(`You have already registered for "${title}"`);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-pink-50 to-orange-50">
      <h1 className="text-4xl font-bold mb-10 text-center text-pink-700">
        Art Challenges & Competitions
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {challengesList.map((c, i) => (
          <div
            key={i}
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition"
          >
            {/* Image with gradient overlay */}
            <div className="relative h-48 w-full">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{c.title}</h2>
              <p className="text-gray-600 mb-4">{c.desc}</p>
              <p className="text-sm text-gray-500 mb-4">
                Deadline: {c.deadline}
              </p>
              <button
                onClick={() => participate(c.title)}
                className={`w-full py-2 rounded-full font-semibold transition ${
                  registered.includes(c.title)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-pink-600 hover:bg-pink-700 text-white"
                }`}
                disabled={registered.includes(c.title)}
              >
                {registered.includes(c.title) ? "Registered" : "Participate"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}