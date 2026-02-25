import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Home";
import Project from "./pages/Project";
import Explore from "./pages/Explore";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import FeaturesPage from "./pages/FeaturesPage";
import PortfolioPage from "./pages/PortfolioPage";
import CollaboratePage from "./pages/CollaboratePage";
import CommunityPage from "./pages/CommunityPage";
import ChallengesPage from "./pages/ChallengesPage";
import AISuggestionsPage from "./pages/AISuggestionsPage";
import RealTimePage from "./pages/RealTimePage";

function App() {
  const [artworks, setArtworks] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/upload"
          element={<Upload setArtworks={setArtworks} />}
        />
        <Route
          path="/profile"
          element={<Profile artworks={artworks} />}

        />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/collaborate" element={<CollaboratePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/ai-suggestions" element={<AISuggestionsPage />} />
        <Route path="/real-time" element={<RealTimePage />} />
      </Routes>
    </div>
  );
}

export default App;