import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 
      bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white relative">

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg animate-pulse">
        🎨 Welcome to ArtCollab
      </h1>

      {/* Tagline */}
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl mb-8 text-white/90 px-2 sm:px-0">
        Where creativity meets collaboration.
        Share your art, connect with creators, and inspire the world.
      </p>

      {/* Quote Card */}
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-md sm:max-w-lg md:max-w-xl mb-10 border border-white/30">
        <p className="text-base sm:text-lg md:text-xl italic">
          “Creativity takes courage.”
        </p>
        <p className="mt-2 font-semibold text-sm sm:text-base md:text-lg">
          – Henri Matisse
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-sm md:max-w-md justify-center">
        <Link
          to="/explore"
          className="w-full md:w-auto bg-white text-purple-700 font-semibold px-6 md:px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition duration-300"
        >
          Explore Art
        </Link>

        <Link
          to="/login"
          className="w-full md:w-auto bg-yellow-400 text-black font-semibold px-6 md:px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition duration-300"
        >
          Login
        </Link>
      </div>
      
      {/* Footer Text */}
      <p className="absolute bottom-4 sm:bottom-6 text-xs sm:text-sm text-white/70">
        Made with ❤️ for creative minds
      </p>
    </div>
  );
};

export default Home;