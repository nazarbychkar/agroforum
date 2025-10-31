"use client";

import { useState } from "react";
import SpeakerCard from "@/components/additional/SpeakerCard";
import SpeakerModal from "@/components/additional/SpeakerModal";

const speakers = [
  {
    id: 1,
    name: "Олена Ковальчук",
    position: "СЕО",
    company: "TechNova",
    photo: "/images/speaker1.jpg",
    topic: "Як побудувати сильну команду в ІТ-компанії",
    bio: "Олена має понад 10 років досвіду у сфері управління стартапами. Її виступ присвячений культурі командної роботи та ефективному лідерству.",
  },
  {
    id: 2,
    name: "Ігор Мельник",
    position: "Product Manager",
    company: "FinEdge",
    photo: "/images/speaker2.jpg",
    topic: "Створення продуктів, які люблять користувачі",
    bio: "Ігор поділиться практиками продуктового менеджменту, побудови цінності та аналізу користувацьких даних.",
  },
];

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<{
    id: number;
    name: string;
    position: string;
    company: string;
    photo: string;
    topic: string;
    bio: string;
  } | null>(null);

  return (
    <section className="min-h-screen py-20 px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-14 uppercase tracking-tight text-gray-900 relative">
          🎙️ Наші спікери
          <span className="block w-20 h-1 bg-green-700 mx-auto mt-4 rounded-full"></span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className="animate-fade-in-slow"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <SpeakerCard
                speaker={speaker}
                onMore={() => setSelectedSpeaker(speaker)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}
    </section>
  );
}
