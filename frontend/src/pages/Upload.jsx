import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upload = ({ setArtworks }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Painting");

  const handleUpload = () => {
    if (!title || !image) return alert("Fill all fields");

    const newArtwork = {
      title,
      category,
      image: URL.createObjectURL(image),
    };

    setArtworks((prev) => [...prev, newArtwork]);

    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">
          Upload Your Artwork 🎨
        </h2>

        <input
          type="text"
          placeholder="Artwork Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg"
        >
          <option>Painting</option>
          <option>Music</option>
          <option>Digital Art</option>
          <option>Photography</option>
          <option>Sketch</option>
        </select>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <button
          onClick={handleUpload}
          className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
        >
          Upload Artwork
        </button>
      </div>
    </div>
  );
};

export default Upload;
