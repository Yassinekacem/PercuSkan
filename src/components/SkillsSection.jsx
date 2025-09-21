import { useState, useRef } from "react";
import { MusicBackground } from "./MusicBackground"; // ton background animé

// Liste des instruments
const instruments = [
  // Percussions traditionnelles
  { name: "Darbouka", image: "/instruments/darbouka.png", category: "traditionnelle", sound: "/sounds/darbouka.mp3" },
  { name: "Tar", image: "/instruments/tar.png", category: "traditionnelle", sound: "/sounds/tar.mp3" },
  { name: "Sajette", image: "/instruments/sajette.png", category: "traditionnelle", sound: "/sounds/sajette.mp3" },
  { name: "Bendir", image: "/instruments/bandir.png", category: "traditionnelle"  , sound: "/sounds/bendir.mp3" },

  // Percussions modernes
  { name: "Cajón", image: "/instruments/cajon.png", category: "moderne", sound: "/sounds/cajon.mp3" },
  { name: "Djembe", image: "/instruments/djembe.png", category: "moderne", sound: "/sounds/djembe.mp3" },
  { name: "Timbales", image: "/instruments/timbales.png", category: "moderne", sound: "/sounds/timbales.mp3" },
  { name: "Congas", image: "/instruments/Congas.png", category: "moderne", sound: "/sounds/congas.mp3" },
];

const categories = ["tous", "traditionnelle", "moderne"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("tous");
  const audioRef = useRef(null); // ✅ garde une seule instance d’audio

  const filteredInstruments = instruments.filter(
    (inst) => activeCategory === "tous" || inst.category === activeCategory
  );

  // Fonction pour jouer un son pendant 4 secondes max
  const playSound = (soundPath) => {
    if (!soundPath) return;

    // Arrêter le son précédent s'il existe
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Créer un nouveau son
    const audio = new Audio(soundPath);
    audioRef.current = audio;
    audio.play();

    // Arrêter automatiquement après 4 sec
    setTimeout(() => {
      if (audioRef.current === audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }, 4000);
  };

  return (
    <section
      id="Instruments"
      className="py-24 px-4 relative min-h-screen flex items-center overflow-hidden bg-black text-white"
    >
      {/* Background animé */}
      <MusicBackground />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-900/90 -z-10 backdrop-blur-sm" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3">
          Mes{" "}
          <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
            Instruments
          </span>
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-center">
          Découvrez les instruments traditionnels et modernes qui façonnent mon identité musicale.
        </p>

        {/* Boutons de filtre */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? "bg-cyan-400 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-cyan-500 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des instruments */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredInstruments.map((inst, key) => (
            <div
              key={key}
              onClick={() => playSound(inst.sound)} // ✅ joue le son unique
              className="cursor-pointer bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300 flex flex-col items-center"
            >
              <img
                src={inst.image}
                alt={inst.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-center text-white">
                {inst.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
