const ArtworkCard = ({ image, title }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
      <img src={image} alt={title} className="h-60 w-full object-cover" />
      <div className="p-4 bg-white dark:bg-gray-800">
        <h3 className="font-bold">{title}</h3>
        <button className="mt-2 text-primary">❤️ Like</button>
      </div>
    </div>
  );
};

export default ArtworkCard;