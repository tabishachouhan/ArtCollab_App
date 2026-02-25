import React from "react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Portfolio Showcase",
    desc: "Create a stunning portfolio to display your artwork across all mediums",
    icon: "🎨",
    bg: "from-purple-500 to-pink-500",
    route: "/portfolio",
  },
  {
    title: "Collaborate",
    desc: "Team up with artists worldwide on creative projects",
    icon: "👥",
    bg: "from-blue-500 to-cyan-500",
    route: "/collaborate",
  },
  {
    title: "Community / Real-time",
    desc: "Get feedback, share ideas, and connect with fellow artists in real-time",
    icon: "💬",
    bg: "from-green-500 to-emerald-500",
    route: "/community",
  },
  {
    title: "Challenges",
    desc: "Participate in monthly art challenges and compete for recognition",
    icon: "🏆",
    bg: "from-orange-500 to-amber-500",
    route: "/challenges",
  },
  {
    title: "AI Suggestions",
    desc: "Get personalized art prompts powered by AI",
    icon: "✨",
    bg: "from-red-500 to-pink-500",
    route: "/ai-suggestions",
  },
  {
    title: "Real-time Collaboration",
    desc: "Work together live with collaborative canvas and co-writing tools",
    icon: "⚡",
    bg: "from-purple-500 to-indigo-500",
    route: "/real-time",
  },
];

function FeatureCard({ title, desc, icon, bg, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition cursor-pointer"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-4 bg-gradient-to-r ${bg}`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default function FeaturesPage() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    // You can either navigate to dummy pages or show alerts
    navigate(route); // Redirects to route
    // OR alert(`You clicked ${route}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Everything You Need to Create</h1>
        <p className="text-gray-600 text-lg">
          Powerful tools designed for artists of all disciplines
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            onClick={() => handleClick(feature.route)}
          />
        ))}
      </div>
    </div>
  );
}