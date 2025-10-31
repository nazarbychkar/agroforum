interface Props {
  project: { image: string; title: string; link: string; details: string };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 
                 animate-fade-in-slow"
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-2xl transform 
                   scale-95 animate-zoom-in-slow"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl transition-transform hover:scale-125"
        >
          ×
        </button>

        <div className="text-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl mb-5 shadow-md"
          />
          <h2 className="text-2xl font-bold mb-3 text-gray-900">
            {project.title}
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            {project.details}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-700 text-white px-5 py-2 rounded-full 
                         hover:bg-green-800 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              🔗 Переглянути відео / публікацію
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
