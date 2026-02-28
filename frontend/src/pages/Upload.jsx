import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Upload = ({ setArtworks }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState("Painting");
  const [username, setUsername] = useState("");

  // Get logged-in user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) {
      setUsername(user.name);
    }
  }, []);

  const handleUpload = () => {
    if (!title || !image) {
      alert("Please fill all fields");
      return;
    }

    const newArtwork = {
      title,
      category,
      image: URL.createObjectURL(image),
    };

    setArtworks((prev) => [...prev, newArtwork]);

    navigate("/profile");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 
    bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500
    dark:from-gray-900 dark:via-gray-800 dark:to-black transition">

      <div className="w-full max-w-2xl bg-white/90 dark:bg-white/10 
      backdrop-blur-xl rounded-3xl shadow-2xl p-8">

        {/* Welcome Section */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300">
            Upload Your Artwork 🎨
          </h2>

          {username && (
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Welcome back, <span className="font-semibold">{username}</span> 👋  
              Let the world see your creativity.
            </p>
          )}
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Artwork Title
          </label>
          <input
            type="text"
            placeholder="Enter artwork title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-xl border 
            focus:ring-2 focus:ring-purple-500 outline-none
            dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-xl border
            focus:ring-2 focus:ring-purple-500 outline-none
            dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            <option>Painting</option>
            <option>Music</option>
            <option>Digital Art</option>
            <option>Photography</option>
            <option>Sketch</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Upload Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-3 rounded-xl border
            dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mb-6">
            <p className="mb-2 text-gray-600 dark:text-gray-300 font-medium">
              Preview:
            </p>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="w-full py-3 rounded-xl font-semibold text-lg
          bg-purple-600 text-white shadow-lg
          hover:bg-purple-700 hover:scale-[1.02]
          transition duration-300"
        >
          🚀 Publish Artwork...
        </button>

      </div>
    </div>
  );
};

export default Upload;