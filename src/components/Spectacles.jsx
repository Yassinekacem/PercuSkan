"use client";

import { Calendar } from "lucide-react";

// 🎭 Données des spectacles
const spectaclesData = [
  {
    id: 1,
    title: "Ragouj le spectacle",
    description: "« Ragouj – Le Spectacle » transpose sur scène l’univers éclectique et coloré de la série télévisée, mêlant humour, musique et émotion.",
    image: "/spectacles/ragouj.jpg",
    date: "2025",
  },
  {
    id: 2,
    title: "Ocheg Eddenia",
    description: "« Ocheg Denya » (أشقياء الدنيا) est un spectacle musical tunisien inspiré de la série \"Nouba\". Il combine théâtre, danse et chant pour revivre les moments forts de la série et évoquer la nostalgie, la joie et les défis des années 90.",
    image: "/spectacles/ocheg-eddenia.jpg",
    date: "2024",
  },
];


export const Spectacles = () => {
  return (
    <section
      id="spectacles"
      className="py-24 px-4 relative min-h-screen flex items-center overflow-hidden bg-black text-white"
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-900/90 -z-10 backdrop-blur-sm" />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* 🎶 Titre */}
   <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 flex flex-wrap items-center justify-center gap-2 text-center">
  Collaborations{" "}
  <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
    Scéniques
  </span>
</h2>


        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Découvrez les spectacles musicaux les plus marquants où j’ai joué en tant que percussionniste.
        </p>

        {/* 🎭 Grille des spectacles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spectaclesData.map((spectacle) => (
            <div
              key={spectacle.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Affiche en fond */}
              <img
                src={spectacle.image}
                alt={spectacle.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Texte par-dessus */}
              <div className="absolute bottom-0 p-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {spectacle.title}
                </h3>
                <p className="text-gray-200 mb-4">{spectacle.description}</p>
                <div className="flex items-center gap-4 text-sm text-cyan-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{spectacle.date}</span>
                  </div>
              
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};
