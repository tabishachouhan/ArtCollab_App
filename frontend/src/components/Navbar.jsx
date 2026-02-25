import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // ✅ Must be inside the component

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          🎨 ArtCollab
        </Link>

        {/* Features Button */}
        <button
          onClick={() => navigate("/features")}
          className="hover:text-pink-500 transition"
        >
          Features
        </button>

        {/* Other Links */}
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link to="/explore" className="hover:text-yellow-300 transition">
            Explore
          </Link>

          <Link
            to="/login"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;