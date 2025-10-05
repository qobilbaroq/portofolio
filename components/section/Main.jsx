"use client";

import React, { useState, useRef, useEffect } from "react";

export const Main = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [trailBoxes, setTrailBoxes] = useState([]);
  const [blinkingIndices, setBlinkingIndices] = useState([]);
  const hoverTimeout = useRef(null);

  const items = Array.from({ length: 36 }, (_, i) => i);

  const boxContent = {
    1: { text: "Home", pos: "bottom-1 left-1" },
    3: { text: "Projects", pos: "top-1 left-1" },
    8: { text: "About", pos: "top-1 right-1" },
    9: { block: "top-1 left-1" },
    12: { text: "Experience", pos: "top-1 right-1" },
    24: { block: "top-1 left-1" },
    27: { block: "top-1 left-1" },
    29: { text: "Socials", pos: "bottom-1 left-1" },
    32: { text: "2025", pos: "top-1 right-1" },
    34: { text: "Skills", pos: "bottom-1 right-1" },
    36: { block: "bottom-1 left-1" },
  };

  const contentKeys = Object.keys(boxContent); 

  const handleMouseMove = (i) => {
    setTrailBoxes((prev) => (prev.includes(i) ? prev : [...prev, i]));

    setTimeout(() => {
      setTrailBoxes((prev) => prev.filter((idx) => idx !== i));
    }, 370); 

    // Reset timer untuk diam
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

    hoverTimeout.current = setTimeout(() => {
      setHoverIndex(i);
    }, ); 
  };

  const handleMouseLeave = (i) => {
    // kalau keluar box → stop hover diam
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoverIndex(null);
  };

  // Tambah animasi blink random
  useEffect(() => {
    const startBlink = () => {
      const numBlinks = Math.floor(Math.random() * 3) + 1; 
      const selectedIndices = [];
      const shuffledKeys = [...contentKeys].sort(() => 0.5 - Math.random()); 

      for (let j = 0; j < numBlinks; j++) {
        const randomKey = shuffledKeys[j];
        const randomIndex = parseInt(randomKey) - 1; 
        selectedIndices.push(randomIndex);
      }

      setBlinkingIndices(selectedIndices);

      setTimeout(() => {
        setBlinkingIndices([]);
      }, 800);
    };

    const interval = setInterval(startBlink, Math.random() * 3000 + 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative grid grid-cols-12 grid-rows-3 auto-card py-5 px-3 bg-main">
      <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-medium z-50 pointer-events-none select-none">
        PORTOFOLIO
      </h1>

      {items.map((i) => {
        const n = i + 1;
        const isActive = hoverIndex === i || trailBoxes.includes(i);
        const isBlinking = blinkingIndices.includes(i);

        return (
          <div
            key={n}
            onMouseMove={() => handleMouseMove(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            className={`relative rounded-xl w-full h-full transition-all duration-500 ease-in-out cursor-pointer
              ${isActive
                ? "bg-[#e83f21] border-[#e84a2f]"
                : "bg-main border-[0.5px] border-white/10"
              }`}
          >
            {boxContent[n] && (
              <>
                {boxContent[n].text && (
                  <h1
                    className={`absolute text-text-muted-light text-sm py-2 px-1 ${boxContent[n].pos} ${isBlinking ? "animate-blink" : ""}`}
                  >
                    {boxContent[n].text}
                  </h1>
                )}
                {boxContent[n].block && (
                  <div
                    className={`absolute w-1.5 h-5 bg-text-muted-light rounded-xs mt-1 ms-1 ${boxContent[n].block} ${isBlinking ? "animate-blink" : ""}`}
                  ></div>
                )}
              </>
            )}
          </div>
        );
      })}
      <style jsx>{`
        @keyframes blink {
          0% { opacity: 1; }
          10% { opacity: 0; }
          20% { opacity: 1; }
          30% { opacity: 0; }
          40% { opacity: 1; }
          50% { opacity: 0; }
          60% { opacity: 1; }
          70% { opacity: 0; }
          80% { opacity: 1; }
          100% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
};