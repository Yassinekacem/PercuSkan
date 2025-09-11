"use client";

import { GraduationCap } from "lucide-react";
import { MusicBackground } from "./MusicBackground"; // Import du background animé

const educationData = [
  {
    schoolFr: "Lycée secondaire Dar Chaabane El Fehri",
    degreeFr: "Baccalauréat Économique",
    period: "2016 - 2020",
    logo: "/education/lycee.jpeg",
  },
  {
    schoolFr: "Institut Supérieur de Musique de Tunis",
    degreeFr: "Licence en musique – Spécialité Percussions et Techniques de Rythme",
    period: "2020 - 2023",
    logo: "/education/institut.jpeg",
  },
  {
    schoolFr: "Institut Supérieur de Musique de Tunis",
    degreeFr: "Master professionnel en percussion – Performance scénique et composition rythmique",
    period: "2023 - 2025",
    logo: "/education/institut.jpeg",
  },
];


export const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 relative min-h-screen flex items-center overflow-hidden bg-black text-white"
    >
      {/* Background animé identique à HeroSection */}
      <MusicBackground />

      {/* Overlay sombre comme Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-900/90 -z-10 backdrop-blur-sm" />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3">
          Mon{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Éducation
          </span>
          <GraduationCap
            className="text-cyan-400 hover:rotate-12 hover:scale-110 transition-transform duration-300"
            size={36}
          />
        </h2>

        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Découvrez mon parcours académique et musical, jalonné d&apos;étapes
          marquantes qui ont forgé mon expertise en percussion et en musique.
        </p>

        {/* Cartes */}
        <div className="space-y-8">
          {educationData.map((edu, i) => (
            <div
              key={i}
              className="flex items-start gap-6 bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
         {/* Logo */}
<div className="flex-shrink-0">
  <img
    src={edu.logo}
    alt={edu.schoolFr}
    width={edu.schoolFr.includes("Institut Supérieur de Musique") ? 100 : 70} // Augmente la taille pour l’institut
    height={edu.schoolFr.includes("Institut Supérieur de Musique") ? 100 : 70}
    className="object-cover rounded-full border-2 border-cyan-400 shadow-md"
  />
</div>


              {/* Contenu texte */}
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-white">
                  {edu.degreeFr}
                </h3>
                <p className="text-cyan-400 font-medium text-lg">
                  {edu.schoolFr}
                </p>
                <p className="text-gray-400 text-sm">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* Animation dégradé titre */
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        /* Animation apparition */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
};