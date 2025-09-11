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
    const count = Math.floor((window.innerWidth * window.innerHeight) / 60000);
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.25 + 0.15,
      duration: Math.random() * 12 + 6,
      color: `rgba(56, 189, 248, ${Math.random() * 0.3 + 0.2})`, // cyan
      blur: Math.random() * 8 + 4,
    }));
    setParticles(newParticles);
  };

  const generatePercussionIcons = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 35000);
    const newIcons = Array.from({ length: count }, (_, i) => {
      const iconType = Math.floor(Math.random() * 2);
      const icons = ['♪', '♫'];
      const colors = [
        'rgba(56, 189, 248, 0.4)', // cyan-400
        'rgba(14, 165, 233, 0.4)', // sky-500
        'rgba(2, 132, 199, 0.4)',  // blue-600
        'rgba(3, 105, 161, 0.4)'   // blue-700
      ];
      
      return {
        id: i,
        icon: icons[iconType],
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.2 + 0.1,
        duration: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 16 + 12,
        delay: Math.random() * 2,
        beatPattern: Math.random() > 0.5 ? 'dum' : 'tek'
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

      {/* Éléments "dum tek" avec animations rythmiques originales */}
      <div className="dum-tek-pattern">
        <div className="dum">DUM</div>
        <div className="tek">TEK</div>
      </div>

   

      <style jsx>{`
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

        .dum-tek-pattern {
          position: absolute;
          bottom: 5%;
          right: 5%;
          display: flex;
          gap: 15px;
          opacity: 0.2;
          font-family: 'Impact', 'Arial Black', sans-serif;
          font-weight: bold;
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
        }

        .dum {
          font-size: 22px;
          color: rgba(14, 165, 233, 0.8);
          animation: dum-beat 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .tek {
          font-size: 18px;
          color: rgba(56, 189, 248, 0.8);
          animation: tek-beat 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 0.3s;
        }

        .sound-waves {
          position: absolute;
          bottom: 4%;
          right: 4%;
          width: 120px;
          height: 40px;
          display: flex;
          align-items: flex-end;
          gap: 5px;
          opacity: 0.15;
        }

        .wave {
          width: 8px;
          background: linear-gradient(to top, rgba(56, 189, 248, 0.7), transparent);
          border-radius: 4px 4px 0 0;
        }

        .wave-1 {
          height: 20px;
          animation: wave-pulse-1 1.5s ease-in-out infinite;
        }

        .wave-2 {
          height: 30px;
          animation: wave-pulse-2 1.5s ease-in-out infinite;
          animation-delay: 0.2s;
        }

        .wave-3 {
          height: 25px;
          animation: wave-pulse-3 1.5s ease-in-out infinite;
          animation-delay: 0.4s;
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
            opacity: 0.6;
            text-shadow: 0 0 5px rgba(14, 165, 233, 0.5);
          }
          25% {
            transform: scale(1.2) translateY(-5px);
            opacity: 0.9;
            text-shadow: 0 0 15px rgba(14, 165, 233, 0.8);
          }
          50% {
            transform: scale(1.1) translateY(0);
            opacity: 0.7;
            text-shadow: 0 0 8px rgba(14, 165, 233, 0.6);
          }
          75% {
            transform: scale(1.15) translateY(-3px);
            opacity: 0.8;
            text-shadow: 0 0 12px rgba(14, 165, 233, 0.7);
          }
        }

        @keyframes tek-beat {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.6;
            text-shadow: 0 0 5px rgba(56, 189, 248, 0.5);
          }
          33% {
            transform: scale(1.15) translateY(-4px);
            opacity: 0.9;
            text-shadow: 0 0 12px rgba(56, 189, 248, 0.8);
          }
          66% {
            transform: scale(1.05) translateY(-2px);
            opacity: 0.7;
            text-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
          }
        }

        @keyframes wave-pulse-1 {
          0%, 100% { height: 15px; opacity: 0.3; }
          50% { height: 25px; opacity: 0.6; }
        }

        @keyframes wave-pulse-2 {
          0%, 100% { height: 20px; opacity: 0.3; }
          50% { height: 35px; opacity: 0.6; }
        }

        @keyframes wave-pulse-3 {
          0%, 100% { height: 18px; opacity: 0.3; }
          50% { height: 30px; opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};