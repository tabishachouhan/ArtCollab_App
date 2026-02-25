import ArtworkCard from "../components/ArtworkCard";
// 👇 ADD THESE IMPORTS HERE (top of file)
import abstractImg from "../assets/abstract.jpg";
import paintingImg from "../assets/painting.jpg";
import musicImg from "../assets/music.jpg";

const Explore = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Explore Artworks</h2>

      <div className="grid md:grid-cols-3 gap-6">

        <ArtworkCard
          image="https://images.unsplash.com/photo-1541961017774-22349e4a1262"
          title="Abstract Colors"
        />

        <ArtworkCard
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          title="Modern Painting"
        />

        <ArtworkCard
          image="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
          title="Music Vibes"
        />
      </div>
    </div>
  );
};

export default Explore;