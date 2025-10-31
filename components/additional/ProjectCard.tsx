interface Props {
  project: { image: string; title: string; description: string };
  onMore: () => void;
  delay?: number;
}

export default function ProjectCard({ project, onMore, delay = 0 }: Props) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 
                 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 
                 hover:border-green-600 animate-fade-in-slow"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
      </div>

      <div className="p-6 text-left">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 group-hover:text-green-800 transition-colors">
          {project.title}
        </h2>
        <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
        <div className="text-center">
          <button
            onClick={onMore}
            className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 
                       transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Детальніше
          </button>
        </div>
      </div>
    </div>
  );
}
