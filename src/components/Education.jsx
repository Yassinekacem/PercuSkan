"use client";

import { GraduationCap } from "lucide-react"; 


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
      {/* Background musical amélioré avec éléments de percussion */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Pattern de notes de musique subtiles */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10">♩</div>
          <div className="absolute top-20 right-20">♪</div>
          <div className="absolute bottom-20 left-20">♫</div>
          <div className="absolute bottom-10 right-10">♬</div>
          <div className="absolute top-1/3 left-1/4">🎵</div>
          <div className="absolute bottom-1/3 right-1/4">🎶</div>
        </div>

        {/* Éléments de percussion animés */}
        <div className="absolute top-1/4 left-1/5 animate-bounce-slow">
          <div className="w-3 h-3 rounded-full bg-cyan-400/20"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce-medium">
          <div className="w-4 h-4 rounded-full bg-amber-500/20"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-bounce-fast">
          <div className="w-2 h-2 rounded-full bg-emerald-400/20"></div>
        </div>
        
        {/* Cercles concentriques pour évoquer les ondes sonores */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-64 h-64 rounded-full border border-cyan-400/10 animate-pulse-slow"></div>
          <div className="absolute w-96 h-96 rounded-full border border-amber-500/10 animate-pulse-medium"></div>
          <div className="absolute w-128 h-128 rounded-full border border-emerald-400/10 animate-pulse-fast"></div>
        </div>

        {/* Lignes rythmiques (dum tek) */}
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-10">
          <div className="flex justify-between items-end h-full px-10">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className={`bg-cyan-400 ${i % 4 === 0 ? 'h-10 w-1' : 'h-5 w-0.5'} animate-rhythm`}
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Formes abstraites de percussions */}
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full border-2 border-amber-500/10 animate-ping-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border-2 border-cyan-400/10 animate-ping-medium"></div>
      </div>

      {/* Overlay sombre */}
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
              className="flex items-start gap-6 bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 animate-fade-in-up hover:scale-[1.02]"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={edu.logo}
                  alt={edu.schoolFr}
                  width={edu.schoolFr.includes("Institut Supérieur de Musique") ? 120 : 82}
                  height={edu.schoolFr.includes("Institut Supérieur de Musique") ? 120 : 82}
                  className="object-cover rounded-full border-2 border-cyan-400 shadow-md"
                />
              </div>

              {/* Contenu texte */}
              <div className="text-left flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {edu.degreeFr}
                </h3>
                <p className="text-cyan-400 font-medium text-base mb-1">
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

        /* Animations pour le background musical */
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        
        @keyframes bounce-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-medium {
          animation: bounce-medium 3s ease-in-out infinite;
        }
        
        @keyframes bounce-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-fast {
          animation: bounce-fast 2s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.03); }
        }
        .animate-pulse-medium {
          animation: pulse-medium 4s ease-in-out infinite;
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.02); }
        }
        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }

        @keyframes rhythm {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-rhythm {
          animation: rhythm 0.5s ease-in-out infinite;
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 4s ease-out infinite;
        }

        @keyframes ping-medium {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.15; }
          100% { transform: scale(1.1); opacity: 0; }
        }
        .animate-ping-medium {
          animation: ping-medium 3s ease-out infinite;
        }
      `}</style>
    </section>
  );
};