"use client";

import { useState, useCallback } from "react";
import { Carousel } from "react-responsive-carousel";
import { motion, AnimatePresence } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MusicBackground } from "./MusicBackground";
import { X, MapPin, Calendar, Music } from "lucide-react";

// Données des voyages enrichies
const travels = [ 
    {
    id: 2,
    country: "Tanzanie",
    flag: "/flag/zanzibar.png",
    period: "2025",
    description: "Concerts sur la plage et rencontres avec des artistes locaux.",
    location: "Zanzibar,Tanzanie ",
    highlights: [
      "Série de concerts sur les plages de Nungwi et Kendwa",
      "Collaboration avec des musiciens taarab traditionnels",
      "Enregistrement de rythmes swahilis avec des artisans locaux"
    ],
    images: [
      "/voyages/zanzibar/1.2.jpg",
            "/voyages/zanzibar/1.jpg",

      "/voyages/zanzibar/1.3.jpg",
      "/voyages/zanzibar/2.jpg",
      "/voyages/zanzibar/3.jpg",
      "/voyages/zanzibar/4.jpg",
      "/voyages/zanzibar/5.jpg",
      "/voyages/zanzibar/6.jpg",
      "/voyages/zanzibar/7.jpg"
    ],
  },


  {
    id: 3,
    country: "Italie",
    flag: "/flag/italie.jpeg",
    period: "2024",
    description: "Participation à un festival international de percussion.",
    location: "Bologne, Italie",
    highlights: [
      "Performance principale au Festival International des Percussions de Rome",
      "Workshop sur les techniques de percussion méditerranéennes",
      "Collaboration avec l'Orchestre de Percussions de Milan"
    ],
    images: [
      "/voyages/italie/1.jpg",
      "/voyages/italie/2.jpg",
      "/voyages/italie/3.jpg",
      "/voyages/italie/4.jpg",
      "/voyages/italie/5.jpg",
      "/voyages/italie/6.jpg"
    ],
  }, 
    {
    id: 1,
    country: "Sénégal",
    flag: "/flag/senegal.png",
    period: "2023",
    description: "Festival de musique et workshops de percussion.",
    location: "Abidjan, Sénégal",
    highlights: [
      "Masterclass de sabar avec des maîtres percussionnistes",
      "Performances au Festival International de Jazz de Saint-Louis",
      "Rencontres avec des artistes de la tradition mandingue"
    ],
    images: [
      "/voyages/senegal/1.jpg",
      "/voyages/senegal/2.jpg",
      "/voyages/senegal/3.jpg",
      "/voyages/senegal/4.jpg",
      "/voyages/senegal/5.jpg",
      "/voyages/senegal/6.jpg"
    ],
  },
];

export const TravelsSection = () => {
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = useCallback((id) => {
    setSelectedTravel(id);
    setCurrentSlide(0);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedTravel(null);
    setCurrentSlide(0);
  }, []);

  const currentTravel = travels.find((t) => t.id === selectedTravel);

  // Fonction pour formater la description des highlights
  const renderHighlights = () => {
    if (!currentTravel?.highlights) return null;
    
    return (
      <ul className="mt-4 space-y-2">
        {currentTravel.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-300 text-sm">{highlight}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section id="travels" className="py-24 px-4 relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      <MusicBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-900/90 -z-10 backdrop-blur-sm" />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
     <motion.h2 
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  Escales{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
    Musicales
  </span>

</motion.h2>

        
        <motion.p 
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Découvrez les moments marquants de mon parcours musical à travers mes
          voyages internationaux et expériences rythmiques.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {travels.map((travel) => (
            <motion.div
              key={travel.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-cyan-400/50 transition-all duration-300 border border-white/10"
              onClick={() => openModal(travel.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <img
                    src={travel.flag}
                    alt={travel.country}
                    className="w-10 h-10 rounded-full border-2 border-cyan-400 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-black"></div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {travel.country}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-3">{travel.description}</p>
              <div className="flex items-center text-cyan-400 text-xs">
                <Calendar size={12} className="mr-1" />
                <span>{travel.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal amélioré */}
        <AnimatePresence>
          {selectedTravel && currentTravel && (
            <div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-gray-900/95 backdrop-blur-xl rounded-2xl relative max-w-5xl w-full max-h-[90vh] overflow-hidden border border-cyan-400/20"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-red-500/20 hover:bg-red-500/30 text-white transition-all duration-300 group"
                  onClick={closeModal}
                  aria-label="Fermer la modal"
                >
                  <X size={24} className="group-hover:scale-110 transition-transform" />
                </button>

                <div className="flex flex-col lg:flex-row h-full">
                  {/* Partie Carousel */}
                  <div className="lg:w-2/3 relative">
              <Carousel
  showArrows
  showIndicators
  showThumbs
  infiniteLoop
  autoPlay={false}
  showStatus={false}
  emulateTouch
  selectedItem={currentSlide}
  onChange={setCurrentSlide}
  renderThumbs={() =>
    currentTravel.images.map((image, idx) => (
      <div key={idx} className="h-16 overflow-hidden">
        <img
          src={image}
          alt={`Thumbnail ${idx + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))
  }
>
  {currentTravel.images.map((image, idx) => (
    <div key={idx} className="flex justify-center">
      <img
        src={image}
        alt={`${currentTravel.country} ${idx + 1}`}
        className="max-h-[80vh] w-auto object-contain"
      />
    </div>
  ))}
</Carousel>

                  </div>

                  {/* Partie Description */}
                  <div className="lg:w-1/3 p-6 overflow-y-auto">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={currentTravel.flag}
                        alt={currentTravel.country}
                        className="w-8 h-8 rounded-full border border-cyan-400"
                      />
                      <h3 className="text-2xl font-bold text-white">
                        {currentTravel.country}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center text-cyan-400">
                        <Calendar size={18} className="mr-2" />
                        <span className="font-medium">{currentTravel.period}</span>
                      </div>

                      <div className="flex items-center text-cyan-400">
                        <MapPin size={18} className="mr-2" />
                        <span className="font-medium">{currentTravel.location}</span>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Music size={18} className="text-cyan-400 mr-2" />
                          <h4 className="font-semibold text-white">Expérience Musicale</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                          {currentTravel.description}
                        </p>
                      </div>

                      {currentTravel.highlights && (
                        <div>
                          <h4 className="font-semibold text-white mb-3">Points Forts</h4>
                          {renderHighlights()}
                        </div>
                      )}

                      <div className="pt-4 border-t border-white/10">
                        <p className="text-xs text-gray-400">
                          {currentTravel.images.length} photos disponibles
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

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
        
        /* Custom carousel styles */
        .carousel .control-dots {
          padding: 0 20px;
          bottom: 20px;
        }
        
        .carousel .control-dots .dot {
          background: rgba(255, 255, 255, 0.5);
          box-shadow: none;
          width: 10px;
          height: 10px;
          margin: 0 4px;
        }
        
        .carousel .control-dots .dot.selected {
          background: #22d3ee;
          width: 12px;
          height: 12px;
        }
        
        .carousel .thumbs-wrapper {
          margin: 0;
          padding: 10px;
        }
        
        .carousel .thumb {
          border: 2px solid transparent;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .carousel .thumb.selected {
          border-color: #22d3ee;
        }
      `}</style>
    </section>
  );
};