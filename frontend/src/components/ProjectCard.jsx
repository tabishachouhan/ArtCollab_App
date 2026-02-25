const ProjectCard = ({ title, description, collaborators =[]}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-4 hover:scale-105 transform transition">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
      <div className="mt-3 flex gap-2">
        {collaborators.map((c) => (
          <div key={c} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">{c}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;