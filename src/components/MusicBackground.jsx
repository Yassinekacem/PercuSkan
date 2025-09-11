import { useEffect, useState } from "react";

export const MusicBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    generateParticles();

    const handleResize = () => generateParticles();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateParticles = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 30000);
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.25 + 0.15,
      duration: Math.random() * 12 + 6,
      color: `rgba(56, 189, 248, ${Math.random() * 0.3 + 0.2})`, // cyan léger
      blur: Math.random() * 8 + 4,
    }));
    setParticles(newParticles);
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

      <style jsx>{`
        .particle {
          position: absolute;
          border-radius: 50%;
          transform: translate(-50%, -50%);
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
      `}</style>
    </div>
  );
};
