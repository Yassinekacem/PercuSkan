import { useEffect, useState } from "react";
import { GiDrum, GiBongo, GiTambourine, GiCymbals } from "react-icons/gi";

export const PercussionBackground = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    generateIcons();

    const handleResize = () => generateIcons();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateIcons = () => {
    const numberOfIcons = Math.floor((window.innerWidth * window.innerHeight) / 15000);
    const percussionIcons = [GiDrum, GiBongo, GiTambourine, GiCymbals];

    const newIcons = [];
    for (let i = 0; i < numberOfIcons; i++) {
      const IconComponent = percussionIcons[Math.floor(Math.random() * percussionIcons.length)];
      newIcons.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 20,
        color: `hsl(${Math.random() * 40 + 20}, 80%, 60%)`,
        delay: Math.random() * 2,
        IconComponent,
      });
    }
    setIcons(newIcons);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {icons.map((item) => (
        <item.IconComponent
          key={item.id}
          className="absolute animate-pulseBeat"
          style={{
            left: item.x + "%",
            top: item.y + "%",
            fontSize: item.size + "px",
            color: item.color,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes pulseBeat {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
        .animate-pulseBeat {
          animation: pulseBeat 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};
