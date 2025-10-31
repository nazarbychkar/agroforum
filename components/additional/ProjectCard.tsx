interface Props {
  project: { image: string; title: string; description: string };
  onMore: () => void;
}

export default function ProjectCard({ project, onMore }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 text-left">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="text-center">
          <button
            onClick={onMore}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Детальніше
          </button>
        </div>
      </div>
    </div>
  );
}
