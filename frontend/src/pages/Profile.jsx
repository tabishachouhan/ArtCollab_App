import { useState } from "react";

const Profile = ({ artworks=[]}) => {
  const [filter, setFilter] = useState("All");

  const filteredArtworks =
    filter === "All"
      ? artworks
      : artworks.filter((art) => art.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 p-8">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        My Artworks 🎨
      </h2>

      {/* 🔥 Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Painting", "Music", "Digital Art", "Photography", "Sketch"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                filter === cat
                  ? "bg-white text-purple-600"
                  : "bg-purple-700 text-white hover:bg-purple-800"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* 🔥 Artwork Grid */}
      {!filteredArtworks || filteredArtworks.length === 0 ? (
        <p className="text-center text-white text-lg">
          No artworks in this category.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredArtworks.map((art, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-center">
                {art.title}
              </h3>
              <p className="text-center text-sm text-gray-500">
                {art.category}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;