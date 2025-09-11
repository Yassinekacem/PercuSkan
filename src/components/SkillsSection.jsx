import { useState } from "react";
import { cn } from "@/lib/utils";
import { MusicBackground } from "./MusicBackground"; // Import du background animé

const instruments = [
  // Percussions traditionnelles
  { name: "Darbouka", image: "/instruments/darbouka.png", category: "traditionnelle" },
  { name: "Tar", image: "/instruments/tar.png", category: "traditionnelle" },
  { name: "sajette", image: "/instruments/sajette.png", category: "traditionnelle" },
  { name: "Bendir", image: "/instruments/bandir.png", category: "traditionnelle" },

  // Percussions modernes
  { name: "Cajón", image: "/instruments/cajon.png", category: "moderne" },
  { name: "Djembe", image: "/instruments/djembe.png", category: "moderne" },
  { name: "Timbales", image: "/instruments/timbales.png", category: "moderne" },
  { name: "Congas", image: "/instruments/Congas.png", category: "moderne" },
];

const categories = ["all", "traditionnelle", "moderne"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredInstruments = instruments.filter(
    (inst) => activeCategory === "all" || inst.category === activeCategory
  );

  return (
    <section id="Instruments" className="py-24 px-4 relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      {/* Background animé identique à HeroSection */}
      <MusicBackground />

      {/* Overlay sombre comme Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-900/90 -z-10 backdrop-blur-sm" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-cyan-400">Instruments</span>
        </h2>

        {/* Filtre par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-cyan-400 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-cyan-500 hover:text-black"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille d'instruments */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredInstruments.map((inst, key) => (
            <div
              key={key}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300 flex flex-col items-center"
            >
              <img
                src={inst.image}
                alt={inst.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-center text-white">{inst.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};