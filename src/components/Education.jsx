"use client";

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
      {/* Background musical simplifié */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-10 left-10">♩</div>
          <div className="absolute top-20 right-20">♪</div>
          <div className="absolute bottom-20 left-20">♫</div>
          <div className="absolute bottom-10 right-10">♬</div>
        </div>

        {/* Percussion animées */}
        <div className="absolute top-1/4 left-1/5 animate-bounce-slow w-3 h-3 rounded-full bg-blue-500/20"></div>
        <div className="absolute top-1/3 right-1/4 animate-bounce-medium w-4 h-4 rounded-full bg-orange-500/20"></div>
        <div className="absolute bottom-1/4 left-1/3 animate-bounce-fast w-2 h-2 rounded-full bg-blue-400/20"></div>
        <div className="absolute top-1/5 right-1/5 animate-bounce-fast w-4 h-4 rounded-full bg-orange-500/20"></div>

        {/* Cercles concentriques */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-64 h-64 rounded-full border border-blue-500/10 animate-pulse-slow"></div>
          <div className="absolute w-96 h-96 rounded-full border border-orange-500/10 animate-pulse-medium"></div>
        </div>
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-900/90 -z-10 backdrop-blur-sm" />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 flex flex-col md:flex-row items-center justify-center gap-3">
          Mon{" "}
          <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
            Éducation
          </span>
        </h2>

        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Découvrez mon parcours académique et musical, jalonné d&apos;étapes
          marquantes qui ont forgé mon expertise en percussion et en musique.
        </p>

        {/* Cartes */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
          {educationData.map((edu, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-blue-400/30 transition-all duration-300 animate-fade-in-up hover:scale-[1.02] w-full md:w-[48%]"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={edu.logo}
                  alt={edu.schoolFr}
                  className="object-cover rounded-full border-2 border-blue-400 shadow-md w-20 h-20 md:w-24 md:h-24"
                />
              </div>

              {/* Contenu texte */}
              <div className="text-left flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {edu.degreeFr}
                </h3>
                <p className="text-blue-400 font-medium text-sm md:text-base mb-1">
                  {edu.schoolFr}
                </p>
                <p className="text-xs md:text-sm">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
        .animate-bounce-medium { animation: bounce-medium 3s ease-in-out infinite; }
        .animate-bounce-fast { animation: bounce-fast 2s ease-in-out infinite; }
        @keyframes bounce-slow { 0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);} }
        @keyframes bounce-medium { 0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);} }
        @keyframes bounce-fast { 0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);} }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 4s ease-in-out infinite; }
        @keyframes pulse-slow {0%,100%{opacity:0.1;transform:scale(1);}50%{opacity:0.2;transform:scale(1.05);} }
        @keyframes pulse-medium {0%,100%{opacity:0.1;transform:scale(1);}50%{opacity:0.2;transform:scale(1.03);} }
      `}</style>
    </section>
  );
};
