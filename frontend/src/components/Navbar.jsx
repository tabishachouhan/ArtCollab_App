import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle theme
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 
    dark:from-gray-900 dark:to-black 
    p-4 shadow-lg transition-colors duration-500">

      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          🎨 ArtCollab
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">

          <button onClick={() => navigate("/features")}>
            Features
          </button>

          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>

          {/* Dark Toggle */}
          <button
            onClick={toggleDarkMode}
            className="bg-white/20 px-3 py-2 rounded-full hover:bg-white/30 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <Link
            to="/login"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold"
          >
            Login
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">

          {/* Dark Toggle Mobile */}
          <button
            onClick={toggleDarkMode}
            className="bg-white/20 px-3 py-1 rounded-full"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-white px-4 pb-4">
          <button onClick={() => navigate("/features")}>Features</button>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link
            to="/login"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full text-center"
          >
            Login
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;