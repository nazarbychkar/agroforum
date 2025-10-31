"use client";

import { useState } from "react";
import SpeakerCard from "@/components/additional/SkeakerCard";
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
    <div className="min-h-screen  py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">🎙️ Наші спікери</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              onMore={() => setSelectedSpeaker(speaker)}
            />
          ))}
        </div>
      </div>

      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}
    </div>
  );
}
