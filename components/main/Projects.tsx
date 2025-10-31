"use client";

import { useState } from "react";
import ProjectCard from "@/components/additional/ProjectCard";
import ProjectModal from "@/components/additional/ProjectModal";

const projects = [
  {
    id: 1,
    title: "Tech Future Summit 2024",
    image: "/images/project1.jpg",
    description:
      "Міжнародна технологічна конференція, що об’єднала понад 1000 учасників з 12 країн. Захід сприяв створенню 15 нових партнерств та запуску стартап-інкубатора.",
    details:
      "Під час заходу було представлено понад 30 стартапів, проведено 25 виступів і 5 панельних дискусій. Подія отримала висвітлення у Forbes Ukraine та AIN.UA.",
    link: "https://www.youtube.com/watch?v=example1",
  },
  {
    id: 2,
    title: "Green Impact Forum",
    image: "/images/project2.jpg",
    description:
      "Екофорум, присвячений сталому розвитку та енергозбереженню. Участь взяли понад 50 компаній і 20 спікерів з Європи.",
    details:
      "У результаті форуму було започатковано спільну ініціативу щодо переробки пластику та видано збірник аналітичних матеріалів.",
    link: "https://example.com/publication-green-impact",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    image: string;
    description: string;
    details: string;
    link: string;
  } | null>(null);

  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-12 animate-fade-in-slow uppercase tracking-tight text-gray-900">
          🧩 Реалізовані проєкти
        </h1>

        <div className="grid md:grid-cols-2 gap-10 animate-fade-in-slow" style={{ animationDelay: "0.2s" }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onMore={() => setSelectedProject(project)}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
