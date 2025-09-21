import { useEffect, useState } from "react";

export const MusicBackground = () => {
  const [particles, setParticles] = useState([]);
  const [percussionIcons, setPercussionIcons] = useState([]);

  useEffect(() => {
    generateParticles();
    generatePercussionIcons();

    const handleResize = () => {
      generateParticles();
      generatePercussionIcons();
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const generateParticles = () => {
  const count = Math.floor((window.innerWidth * window.innerHeight) / 70000);
  const newParticles = Array.from({ length: count }, (_, i) => {
    const isOrange = Math.random() < 0.4; // 40% de particules oranges
    return {
      id: i,
      size: Math.random() * 40 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.25 + 0.15,
      duration: Math.random() * 12 + 6,
      color: isOrange
        ? `rgba(249, 115, 22, ${Math.random() * 0.3 + 0.2})` // orange-500
        : `rgba(56, 189, 248, ${Math.random() * 0.3 + 0.2})`, // cyan-400
      blur: Math.random() * 8 + 4,
    };
  });
  setParticles(newParticles);
};

const generatePercussionIcons = () => {
  const count = Math.floor((window.innerWidth * window.innerHeight) / 45000);
  const newIcons = Array.from({ length: count }, (_, i) => {
    // Plus de chances pour tek (orange)
    const iconType = Math.random() < 0.6 ? 1 : 0; // 60% tek, 40% dum
    const icons = ['♪', '♫'];
    const beatPattern = iconType === 0 ? 'dum' : 'tek';

    const colors =
      beatPattern === 'dum'
        ? [
            'rgba(56, 189, 248, 0.4)', // cyan-400
            'rgba(14, 165, 233, 0.4)', // sky-500
            'rgba(2, 132, 199, 0.4)',  // blue-600
          ]
        : [
            'rgba(249, 115, 22, 0.5)', // orange-500
            'rgba(251, 146, 60, 0.45)', // orange-400
            'rgba(234, 88, 12, 0.5)',  // orange-600
          ];

    return {
      id: i,
      icon: icons[iconType],
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.25 + 0.15,
      duration: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 16 + 12,
      delay: Math.random() * 2,
      beatPattern,
    };
  });
  setPercussionIcons(newIcons);
};



  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size + "px",
            height: p.size + "px",
            left: p.x + "%",
            top: p.y + "%",
            opacity: p.opacity,
            background: p.color,
            filter: `blur(${p.blur}px)`,
            animation: `float ${p.duration}s ease-in-out infinite`,
          }}
        />
      ))}

      {percussionIcons.map((icon) => (
        <div
          key={icon.id}
          className="percussion-icon"
          style={{
            left: icon.x + "%",
            top: icon.y + "%",
            opacity: icon.opacity,
            color: icon.color,
            fontSize: icon.size + "px",
            animation: `beat-${icon.beatPattern} ${icon.duration}s ease-in-out infinite`,
            animationDelay: `${icon.delay}s`
          }}
        >
          {icon.icon}
        </div>
      ))}

      {/* DUM à gauche */}
      <div className="dum-left">DUM</div>
      
      {/* TEK à droite */}
      <div className="tek-right">TEK</div>

      <style>{`
        .particle {
          position: absolute;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .percussion-icon {
          position: absolute;
          transform: translate(-50%, -50%);
          font-family: Arial, sans-serif;
          pointer-events: none;
        }

        .dum-left {
          position: absolute;
          bottom: 5%;
          left: 5%;
          font-size: 24px;
          color: rgba(14, 165, 233, 0.4); /* bleu existant */
          opacity: 0.1;
          font-family: 'Impact', 'Arial Black', sans-serif;
          font-weight: bold;
          text-shadow: 0 0 8px rgba(14, 165, 233, 0.3);
          animation: dum-beat 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .tek-right {
          position: absolute;
          bottom: 5%;
          right: 5%;
          font-size: 23px;
          color: #f97316; /* orange-500 */
          opacity: 0.1;
          font-family: 'Impact', 'Arial Black', sans-serif;
          font-weight: bold;
          text-shadow: 0 0 8px rgba(249, 115, 22, 0.3); /* orange-500 avec opacité */
          animation: tek-beat 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 0.3s;
        }

        @keyframes float {
          0% {
            transform: translate(-50%, -50%) translateY(0) translateX(0);
          }
          25% {
            transform: translate(-50%, -50%) translateY(-10px) translateX(5px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(0) translateX(0);
          }
          75% {
            transform: translate(-50%, -50%) translateY(10px) translateX(-5px);
          }
          100% {
            transform: translate(-50%, -50%) translateY(0) translateX(0);
          }
        }

        @keyframes beat-dum {
          0%, 40%, 80% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.1;
          }
          20%, 60%, 100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.25;
          }
        }

        @keyframes beat-tek {
          0%, 30%, 60%, 90% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.1;
          }
          15%, 45%, 75% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.2;
          }
        }

        @keyframes dum-beat {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.08;
            text-shadow: 0 0 5px rgba(14, 165, 233, 0.3);
          }
          25% {
            transform: scale(1.15) translateY(-3px);
            opacity: 0.15;
            text-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
          }
          50% {
            transform: scale(1.05) translateY(0);
            opacity: 0.1;
            text-shadow: 0 0 6px rgba(14, 165, 233, 0.4);
          }
          75% {
            transform: scale(1.1) translateY(-2px);
            opacity: 0.12;
            text-shadow: 0 0 8px rgba(14, 165, 233, 0.45);
          }
        }

        @keyframes tek-beat {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.08;
            text-shadow: 0 0 5px rgba(249, 115, 22, 0.3);
          }
          33% {
            transform: scale(1.12) translateY(-3px);
            opacity: 0.15;
            text-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
          }
          66% {
            transform: scale(1.03) translateY(-1px);
            opacity: 0.1;
            text-shadow: 0 0 6px rgba(249, 115, 22, 0.4);
          }
        }
      `}</style>
    </div>
  );
};