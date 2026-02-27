import { useState } from "react";
import ArtworkCard from "../components/ArtworkCard";
import { Search } from "lucide-react";

const artworks = [
  {
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
    title: "Abstract Harmony",
    category: "Abstract",
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Modern Expression",
    category: "Painting",
  },
  {
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    title: "Musical Mood",
    category: "Music",
  },
  {
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Nature Whisper",
    category: "Nature",
  },
  {
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80",
    title: "Creative Space",
    category: "Design",
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    title: "Digital Dreams",
    category: "Digital",
  },
];

const quotes = [
  "Art enables us to find ourselves and lose ourselves at the same time.",
  "Creativity takes courage.",
  "Every artist was first an amateur.",
  "Art speaks where words are unable to explain.",
];

export default function Explore() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Abstract", "Painting", "Music", "Nature", "Design", "Digital"];

  const filteredArtworks = artworks.filter((art) => {
    return (
      (activeCategory === "All" || art.category === activeCategory) &&
      art.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-100 to-indigo-100 text-gray-800 px-6 py-12">

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-800">
          Explore Inspiring Artworks
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover creativity, connect with artists, and find inspiration for your next masterpiece.
        </p>
      </div>

      {/* Quote Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="italic text-xl text-purple-700">
          “{quotes[Math.floor(Math.random() * quotes.length)]}”
        </p>
      </div>

      {/* Search + Filters */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center mb-10">

        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-3 text-purple-500" size={20} />
          <input
            type="text"
            placeholder="Search artworks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full transition text-sm font-medium
              ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-purple-700 hover:bg-purple-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Artwork Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtworks.map((art, index) => (
          <div
            key={index}
            className="transform hover:scale-105 transition duration-300"
          >
            <ArtworkCard image={art.image} title={art.title} />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredArtworks.length === 0 && (
        <div className="text-center text-gray-500 mt-16 text-lg">
          No artworks found.
        </div>
      )}

      {/* Footer Quote */}
      <div className="text-center mt-20 text-purple-700 font-medium">
        Keep creating. Keep inspiring. 🌸
      </div>
    </div>
  );
}