interface Props {
  speaker: {
    photo: string;
    name: string;
    position: string;
    company: string;
    bio: string;
  };
  onClose: () => void;
}

export default function SpeakerModal({ speaker, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm 
                 animate-fade-in-fast"
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-8 relative transform transition-all 
                   duration-500 animate-scale-in"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl transition-transform hover:scale-110"
        >
          ×
        </button>

        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden shadow-md">
            <img
              src={speaker.photo}
              alt={speaker.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-1 text-gray-900">
            {speaker.name}
          </h2>
          <p className="text-gray-600 mb-4">
            {speaker.position}, {speaker.company}
          </p>
          <p className="text-gray-800 leading-relaxed">{speaker.bio}</p>
        </div>
      </div>
    </div>
  );
}
