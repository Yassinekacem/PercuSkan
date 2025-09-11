"use client";

import { useState } from "react";

// Données des performances avec la vidéo et la durée
import { Music, Play, Calendar, Youtube } from "lucide-react"; // Importation des icônes nécessaires

const performancesData = [
  {
    id: 1,
    title: (
      <span>
        <Music size={22} className="mr-2" />
        <strong>Prestation avec Bouthaina Nabouli</strong>{" "}
        <span role="img" aria-label="love">❤️</span>
      </span>
    ),
    description: "Une performance de percussion en collaboration avec Bouthaina Nabouli, une artiste à la voix captivante.",
    videoUrl: "https://res.cloudinary.com/dl2dyrppv/video/upload/v1757620918/downloadgram.org_AQOV-IvKKVBiKL93_AGLcphifJwf10mg1pGLn69iA9bdbrN4RP9ksLLhw3sySC2dcq95LQ5rUQUl1XJH9uQNsG_Z4P8wXCcK2_kkkXY_mogrr3.mp4",
    date: "24 janvier 2024",
    duration: "4:32",
    venue: "Conservatoire de Musique"
  },
  {
    id: 2,
    title: (
      <span>
        <Play size={22} className="mr-2" />
        <strong>Spectacle Rbou5 avec Hatem Lejmi</strong>{" "}
        <span role="img" aria-label="like">❤️</span>
      </span>
    ),
    description: "Une performance explosive avec Hatem Lejmi, où rythmes et sons se mêlent avec énergie.",
    videoUrl: "https://res.cloudinary.com/dl2dyrppv/video/upload/v1757621112/downloadgram.org_AQMDXfeWW4BHO1Xw4W9VBnEZqB1MObV_T_URBc6lOU-ZOyP_-V8cMij59HiXOMW3gfjfSTGk9UMcFr2aajY3gx5KGy02w-YNeHdOqRw_daukur.mp4",
    date: "31 mars 2024",
    duration: "6:15",
    venue: "Théâtre Municipal de Tunis"
  }, 
  
{
  id: 5,
  title: (
    <span>
      <Play size={22} className="mr-2" />
      <strong>Les moments forts de MASREB El HATTAYA</strong>{" "}
      <span role="img" aria-label="like">❤️🇸🇳</span>
    </span>
  ),
  description: "Revivez les moments inoubliables de MASREB El HATTAYA, une performance unique qui a marqué l'histoire musicale du Sénégal.",
  videoUrl: "https://res.cloudinary.com/dl2dyrppv/video/upload/v1757624091/downloadgram.org_AQNz5bEORWJNoAf8naAPWBe9wP8O33NApQ9jsEngLfQ-JT2BnxVAQwKMaF26E7Zj5acFf09JwMeyTCubL-lxL4O7MgAGqJEfOEJxKlo_j9njws.mp4",
  date: "22 avril 2024",
  duration: "6:15",
  venue: "Sénégal"
}
,
  
{
  id: 3,
  title: (
    <span>
      <Music size={22} className="mr-2" />
      <strong>Duo avec mon ami Adem Daoud</strong>{" "}
      <span role="img" aria-label="laugh">❤️😂</span>
    </span>
  ),
  description: "Un duo explosif avec Adem Daoud, un percussionniste exceptionnel, alliant énergie et complicité.",
  videoUrl: "https://res.cloudinary.com/dl2dyrppv/video/upload/v1757621380/downloadgram.org_AQPHSuv5uf7IeIJC6pgntwPKcD3XoAgUtlQJN9noyV7Vva7tTHpTee6hzCSaRNf1STyUKiL8AKtSdQ0HwC9k5mhZnSnYK9m837XhB6w_yq14ya.mp4",
  date: "1 septembre 2021",
  duration: "8:47",
  venue: "Ma maison"
}
,
  {
    id: 4,
    title: (
      <span>
        <strong>Enfance (Premiers pas avec la Darbouka )</strong>{" "}
        <span role="img" aria-label="laugh">😂😂</span>
      </span>
    ),
    description: "Les débuts d'un percussionniste avec la darbouka, une performance pleine de rires et de découvertes musicales.",
    videoUrl: "https://res.cloudinary.com/dl2dyrppv/video/upload/v1757621519/AQMo_TMCZRWUfUOQ8t-vdGg0aL7qX4guLFNAbiOe4xA26P1LG4hacyebOTrD0b4GD0kld3xhN3_apRyQ3s2q6Hz7_ngqkwo.mp4",
    date: "12 Novembre 2015",
    duration: "5:23",
    venue: "Ma maison"
  }
];


export const Performances = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fonction pour générer l'URL de la miniature (la première frame de la vidéo)
  const getThumbnailFromVideo = (videoUrl) => {
    // Convertir l'URL de la vidéo en URL d'image de la première frame avec Cloudinary
    const base = videoUrl.replace("/upload/", "/upload/so_0/").replace(".mp4", ".jpg");
    return base;
  };

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section
      id="performances"
      className="py-24 px-4 relative min-h-screen flex items-center overflow-hidden bg-black text-white"
    >
      {/* Background avec éléments musicaux subtils */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 opacity-5">
          <Music size={40} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 opacity-5">
          <Youtube size={40} />
        </div>
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-900/90 -z-10 backdrop-blur-sm" />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3">
          Mes{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Performances
          </span>
          <Youtube
            className="text-cyan-400 hover:scale-110 transition-transform duration-300"
            size={36}
          />
        </h2>

        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Découvrez une sélection de mes performances live, capturant l&#39;énergie et la passion de la percussion en action.
        </p>

        {/* Grille des performances */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performancesData.map((performance) => (
            <div
              key={performance.id}
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Image de prévisualisation */}
              <div 
                className="relative overflow-hidden cursor-pointer"
                onClick={() => openVideo(performance)}
              >
                <img
                  src={getThumbnailFromVideo(performance.videoUrl)}  // Utilise la fonction pour générer le thumbnail
                  alt={performance.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-cyan-400/90 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400 transition-all duration-300">
                    <Play size={24} className="text-black ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-sm">
                  {performance.duration}
                </div>
              </div>

              {/* Contenu texte */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {performance.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {performance.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-cyan-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{performance.date}</span>
                  </div>
                  <div className="text-right">
                    {performance.venue}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de lecture vidéo */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeVideo}>
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-10 right-0 text-white hover:text-cyan-400 transition-colors"
                onClick={closeVideo}
              >
                Fermer
              </button>
              <div className="aspect-video bg-black">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="mt-4 text-white">
                <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
                <p className="text-gray-300">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
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
      `}</style>
    </section>
  );
};
