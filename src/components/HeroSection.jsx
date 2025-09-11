"use client";

import { Drum } from "lucide-react";
import { MusicBackground } from "./MusicBackground";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-black"
    >
      {/* Background animé */}
      <MusicBackground />

      {/* Overlay subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-cyan-900/20 to-blue-900/30 -z-10 backdrop-blur-sm" />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between z-10">
        {/* Texte */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <p className="text-lg uppercase tracking-widest text-cyan-400 opacity-90">
              Maître Percussionniste
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Iskandar
            </span>
            <span className="block mt-2">Ben Amou</span>
          </h1>

          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-300 max-w-lg font-light leading-relaxed">
              Artiste • Percussionniste • Professeur de musique • Performeur live
            </p>
            <p className="text-cyan-400 text-lg italic mt-4 border-l-4 border-cyan-400 pl-4 py-2">
              &quot;Chaque battement raconte une histoire, chaque rythme exprime une émotion&quot;
            </p>
          </div>

          {/* Animation de rythme - version optimisée */}
          <div className="flex justify-center md:justify-start gap-1 mt-6 rhythm-container">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="w-2 h-8 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-full rhythm-bar"
                style={{
                  animationDelay: `${i * 0.15}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Boutons avec effets de survol */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#performances"
              className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-2xl hover:scale-105 hover:shadow-cyan-400/60 transition-all duration-300 flex items-center gap-2"
            >
              <Drum size={20} />
              <span>Voir mes performances</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
            >
              Collaboration musicale
            </a>
          </div>
        </div>

        {/* Image avec les effets d'animation originaux */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0 relative">
          <div className="relative group image-wrapper">
            {/* Cadre dynamique autour de l'image */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 pulse-slow"></div>
            
            {/* Effet de particules autour du cadre */}
            <div className="absolute -inset-2 rounded-3xl border-2 border-cyan-400/30 ping-slow"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/skan.jpg"
                alt="Iskandar Ben Amou jouant de la percussion"
                className="w-80 md:w-[420px] lg:w-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Animation rythme optimisée avec transform pour meilleures performances */
        @keyframes rhythm-bar-anim {
          0%, 100% { 
            transform: scaleY(0.4);
            opacity: 0.7;
          }
          50% { 
            transform: scaleY(1);
            opacity: 1;
          }
        }
        
        .rhythm-bar {
          animation: rhythm-bar-anim 1.2s ease-in-out infinite;
          transform-origin: center bottom;
          transform: translateZ(0);
          will-change: transform;
        }
        
        .rhythm-container {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* Cadre pulse optimisé */
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
          transform: translateZ(0);
        }

        /* Ping slow optimisé */
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .ping-slow {
          animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          transform: translateZ(0);
        }

        /* Isolation des animations d'image */
        .image-wrapper {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};