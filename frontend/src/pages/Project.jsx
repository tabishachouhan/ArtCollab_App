import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold mb-4">
          Project ID: {id}
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is a collaborative project space where artists can share ideas,
          upload work, and give feedback.
        </p>

        {/* Collaborators */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Collaborators</h2>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">
              Painter
            </span>
            <span className="px-3 py-1 bg-secondary text-white rounded-full text-sm">
              Musician
            </span>
          </div>
        </div>

        {/* Chat Section Placeholder */}
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Project Chat</h3>
          <div className="h-40 overflow-y-auto bg-white dark:bg-gray-800 p-3 rounded-lg mb-3">
            <p className="text-sm text-gray-500">Chat coming soon...</p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 rounded-lg border dark:bg-gray-900"
          />
        </div>

      </div>
    </div>
  );
};

export default Project;