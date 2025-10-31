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
            src={speaker.photo}
            alt={speaker.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold mb-1">{speaker.name}</h2>
          <p className="text-gray-600 mb-4">
            {speaker.position}, {speaker.company}
          </p>
          <p className="text-gray-800">{speaker.bio}</p>
        </div>
      </div>
    </div>
  );
}
