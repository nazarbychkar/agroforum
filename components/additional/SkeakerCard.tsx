interface Props {
  speaker: {
    photo: string;
    name: string;
    position: string;
    topic: string;
    company: string;
  };
  onMore: () => void;
}

export default function SpeakerCard({ speaker, onMore }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition">
      <img
        src={speaker.photo}
        alt={speaker.name}
        className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center">{speaker.name}</h2>
      <p className="text-center text-gray-600">
        {speaker.position}, {speaker.company}
      </p>
      <p className="mt-4 text-gray-700">{speaker.topic}</p>

      <div className="text-center mt-6">
        <button
          onClick={onMore}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Більше про спікера
        </button>
      </div>
    </div>
  );
}
