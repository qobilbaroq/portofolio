"use client";

import React, { useState, useRef, useEffect } from "react";

export const Main = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [trailBoxes, setTrailBoxes] = useState([]);
  const [blinkingIndices, setBlinkingIndices] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeout = useRef(null);

  const items = Array.from({ length: 36 }, (_, i) => i);

  const boxContent = {
    1: { text: "Home", pos: "bottom-1 left-1", showOn: "all" },
    3: { text: "Projects", pos: "top-1 left-1", showOn: "all" },
    8: { text: "About", pos: "top-1 right-1", showOn: "all" },
    9: { block: "top-1 left-1", showOn: "all" },
    12: { text: "Experience", pos: "top-1 right-1", showOn: "md" },
    24: { block: "top-1 left-1", showOn: "md" },
    27: { block: "top-1 left-1", showOn: "md" },
    29: { text: "Socials", pos: "bottom-1 left-1", showOn: "md" },
    32: { text: "2025", pos: "top-1 right-1", showOn: "md" },
    34: { text: "Skills", pos: "bottom-1 right-1", showOn: "md" },
    36: { block: "bottom-1 left-1", showOn: "md" },
  };

  const contentKeys = Object.keys(boxContent);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (i) => {
    setTrailBoxes((prev) => (prev.includes(i) ? prev : [...prev, i]));
    setTimeout(() => setTrailBoxes((prev) => prev.filter((idx) => idx !== i)), 370);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setHoverIndex(i), 0);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoverIndex(null);
  };

  useEffect(() => {
    const startBlink = () => {
      const numBlinks = Math.floor(Math.random() * 3) + 1;
      const shuffledKeys = [...contentKeys].sort(() => 0.5 - Math.random());
      const selected = shuffledKeys.slice(0, numBlinks).map((k) => parseInt(k) - 1);
      setBlinkingIndices(selected);
      setTimeout(() => setBlinkingIndices([]), 800);
    };
    const interval = setInterval(startBlink, Math.random() * 3000 + 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative grid grid-cols-3 md:grid-cols-12 grid-rows-3 auto-card py-5 px-3 bg-main">
      <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-medium z-50 pointer-events-none text-foreground select-none">
        PORTOFOLIO
      </h1>

      {items.map((i) => {
        const n = i + 1;
        const isActive = hoverIndex === i || trailBoxes.includes(i);
        const isBlinking = blinkingIndices.includes(i);

        // salin isi default
        let currentContent = { ...boxContent[n] };

        // 🔸 logic pindah “Socials”
        if (isMobile && n === 7) {
          currentContent = { text: "Socials", pos: "bottom-1 left-1", showOn: "all" };
        } else if (!isMobile && n === 29) {
          currentContent = { text: "Socials", pos: "bottom-1 left-1", showOn: "all" };
        }

        return (
          <div
            key={n}
            onMouseMove={() => handleMouseMove(i)}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-xl w-full h-full transition-all duration-500 ease-in-out cursor-pointer ${
              isActive
                ? "bg-[#e83f21] border-[#e84a2f]"
                : "bg-main border-[0.5px] border-white/10"
            }`}
          >
            {currentContent && (
              <>
                {currentContent.text && (
                  <h1
                    className={`absolute text-text-muted-light text-sm py-2 px-1 ${currentContent.pos} ${
                      isBlinking ? "animate-blink" : ""
                    } ${
                      currentContent.showOn === "md" ? "hidden md:block" : ""
                    } ${currentContent.showOn === "lg" ? "hidden lg:block" : ""}`}
                  >
                    {currentContent.text}
                  </h1>
                )}
                {currentContent.block && (
                  <div
                    className={`absolute w-1 h-3 bg-text-muted-light mt-1 ms-1 ${currentContent.block} ${
                      isBlinking ? "animate-blink" : ""
                    } ${
                      currentContent.showOn === "md" ? "hidden md:block" : ""
                    } ${currentContent.showOn === "lg" ? "hidden lg:block" : ""}`}
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