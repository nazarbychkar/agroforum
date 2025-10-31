interface Props {
  project: { image: string; title: string; link: string; details: string };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ×
        </button>

        <div className="text-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
          <p className="text-gray-800 mb-4">{project.details}</p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Переглянути відео / публікацію
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
