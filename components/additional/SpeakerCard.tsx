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
    <div
      className="group bg-white shadow-md rounded-2xl p-6 text-left transform transition-all duration-500 
                 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-green-600"
    >
      <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden">
        <img
          src={speaker.photo}
          alt={speaker.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>

      <h2 className="text-xl font-bold text-center text-gray-900 transition-colors duration-500 group-hover:text-green-700">
        {speaker.name}
      </h2>
      <p className="text-center text-gray-600 mb-3">
        {speaker.position}, {speaker.company}
      </p>
      <p className="text-gray-700 text-center mb-6">{speaker.topic}</p>

      <div className="text-center">
        <button
          onClick={onMore}
          className="bg-green-700 text-white px-5 py-2 rounded-full font-semibold transition-all duration-500 
                     hover:bg-green-800 hover:shadow-lg active:scale-95"
        >
          Більше про спікера
        </button>
      </div>
    </div>
  );
}
