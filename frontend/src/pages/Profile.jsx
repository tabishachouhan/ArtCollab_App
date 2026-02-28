import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ artworks = [] }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) {
      setUsername(user.name);
    }
  }, []);

  const filteredArtworks =
    filter === "All"
      ? artworks
      : artworks.filter((art) => art.category === filter);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const totalArtworks = artworks.length;

  return (
    <div className="min-h-screen px-4 sm:px-8 py-10 
    bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600
    dark:from-gray-900 dark:via-gray-800 dark:to-black transition">

      {/* PROFILE HEADER */}
      <div className="max-w-6xl mx-auto bg-white/20 dark:bg-white/10 
      backdrop-blur-xl rounded-3xl p-8 shadow-2xl mb-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Welcome Section */}
          <div className="text-center md:text-left text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome, {username || "Artist"} 👋
            </h2>
            <p className="text-white/80">
              Here’s your creative dashboard. Keep inspiring the world 🎨
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-white">
            <div className="text-center">
              <p className="text-2xl font-bold">{totalArtworks}</p>
              <p className="text-sm text-white/70">Artworks</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold">
                {new Set(artworks.map(a => a.category)).size}
              </p>
              <p className="text-sm text-white/70">Categories</p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-500 px-6 py-2 rounded-full font-semibold 
            hover:bg-red-600 transition text-white"
          >
            Logout
          </button>

        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-3xl font-bold text-center text-white mb-8">
        My Artworks 🎨
      </h3>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Painting", "Music", "Digital Art", "Photography", "Sketch"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                filter === cat
                  ? "bg-white text-purple-700"
                  : "bg-purple-800 text-white hover:bg-purple-900"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* ARTWORK GRID */}
      <div className="max-w-6xl mx-auto">
        {!filteredArtworks || filteredArtworks.length === 0 ? (
          <p className="text-center text-white text-lg">
            No artworks in this category.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredArtworks.map((art, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl 
                shadow-xl overflow-hidden hover:scale-105 
                transition duration-300"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-lg dark:text-white">
                    {art.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {art.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Profile;