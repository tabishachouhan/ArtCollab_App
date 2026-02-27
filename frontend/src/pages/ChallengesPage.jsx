import React, { useState } from "react";
import { CalendarDays, Trophy, CheckCircle } from "lucide-react";

const challengesList = [
  {
    title: "March Art Competition",
    desc: "Participate in the biggest art competition of the month and showcase your creativity.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
    deadline: "March 31, 2026",
    participants: 128,
    featured: true,
  },
  {
    title: "Spring Nature Illustration",
    desc: "Draw or paint a scene inspired by spring and nature’s beauty.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    deadline: "March 20, 2026",
    participants: 86,
  },
  {
    title: "Character Design Challenge",
    desc: "Create a unique character inspired by your favorite story or game.",
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=80",
    deadline: "March 25, 2026",
    participants: 104,
  },
];

export default function ChallengesPage() {
  const [registered, setRegistered] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState("");

  const participate = (title) => {
    if (!registered.includes(title)) {
      setRegistered([...registered, title]);
      setSelectedChallenge(title);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <div className="relative min-h-screen px-6 md:px-12 py-16 bg-gradient-to-br from-rose-50 via-orange-50 to-pink-100">

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">
          Creative Challenges & Competitions
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Push your creative boundaries, compete with artists worldwide, and
          showcase your talent.
        </p>
      </div>

      {/* Challenges Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {challengesList.map((c, i) => {
          const isRegistered = registered.includes(c.title);

          return (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />

                {/* Deadline Badge */}
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow">
                  <CalendarDays size={14} />
                  {c.deadline}
                </div>

                {/* Featured Badge */}
                {c.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
                    <Trophy size={14} />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {c.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4">{c.desc}</p>

                <p className="text-xs text-gray-500 mb-4">
                  👥 {c.participants} artists participating
                </p>

                <div className="flex-grow"></div>

                <button
                  onClick={() => participate(c.title)}
                  disabled={isRegistered}
                  className={`w-full py-2 rounded-xl font-semibold transition flex items-center justify-center gap-2
                    ${
                      isRegistered
                        ? "bg-green-500 text-white"
                        : "bg-pink-600 hover:bg-pink-700 text-white"
                    }`}
                >
                  {isRegistered ? (
                    <>
                      <CheckCircle size={18} />
                      Registered
                    </>
                  ) : (
                    "Participate"
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Screen Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 transition-all duration-300">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-md text-center animate-fadeIn">

            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎉</span>
            </div>

            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              Registration Successful!
            </h2>

            <p className="text-gray-700 mb-3">
              You are now part of
              <span className="font-semibold"> "{selectedChallenge}"</span>.
            </p>

            <p className="italic text-gray-600 text-sm">
              “Every challenge is a step closer to greatness.”
            </p>
          </div>
        </div>
      )}

      {/* Footer Quote */}
      <div className="text-center mt-20 text-pink-700 font-medium">
        “Creativity thrives when you challenge yourself.” ✨
      </div>
    </div>
  );
}