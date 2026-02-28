import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-pink-500 via-purple-600 to-indigo-700 
        dark:from-gray-900 dark:via-purple-900 dark:to-black">
      </div>

      {/* Blur Circles */}
      <div className="absolute w-60 h-60 sm:w-72 sm:h-72 bg-pink-400 rounded-full blur-3xl opacity-30 top-10 left-5"></div>
      <div className="absolute w-60 h-60 sm:w-72 sm:h-72 bg-indigo-400 rounded-full blur-3xl opacity-30 bottom-10 right-5"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-4xl">

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white 
          bg-clip-text text-transparent">
            ArtCollab
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
          Connect with creative minds, collaborate on projects,
          and turn imagination into reality.
        </p>

        {/* Quote */}
        <div className="bg-white/20 backdrop-blur-lg border border-white/30
        rounded-2xl p-6 sm:p-8 mb-8 shadow-xl">

          <p className="text-sm sm:text-base md:text-lg italic text-white">
            “Art washes away from the soul the dust of everyday life.”
          </p>

          <p className="mt-3 text-yellow-300 font-semibold text-sm sm:text-base">
            – Pablo Picasso
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <Link
            to="/explore"
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold
            bg-yellow-400 text-black shadow-lg
            hover:scale-105 hover:bg-yellow-300 transition duration-300 text-center"
          >
            Explore Art
          </Link>

          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold
            bg-white text-purple-700 shadow-lg
            hover:scale-105 hover:bg-gray-100 transition duration-300 text-center"
          >
            Login
          </Link>

        </div>

      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-12 mb-6 text-white/70 text-xs sm:text-sm text-center px-4">
        © {new Date().getFullYear()} ArtCollab — Designed for Creators 🎨
      </footer>

    </div>
  );
};

export default Home;