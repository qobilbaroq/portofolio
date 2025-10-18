"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Main = () => {
  const [activeBoxes, setActiveBoxes] = useState([]);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [blinkingItems, setBlinkingItems] = useState([]);
  const timeoutRefs = useRef({});

  const boxContents = {
    0: { text: "Home", pos: "bottom-left" },
    3: { text: "Project", pos: "top-left" },
    7: { text: "About", pos: "top-right" },
    8: { shape: "rectangle", pos: "top-left" },
    11: { text: "Experience", pos: "top-left" },
    23: { shape: "rectangle", pos: "top-left" },
    26: { shape: "rectangle", pos: "top-left" },
    28: { text: "Sosial", pos: "bottom-left" },
    31: { text: "2025", pos: "top-right" },
    33: { text: "Skills", pos: "bottom-right" },
    35: { shape: "rectangle", pos: "bottom-left" },
  };

  useEffect(() => {
    const contentKeys = Object.keys(boxContents);
    const randomBlink = () => {
      const count = Math.random() > 0.5 ? 2 : 3;
      const shuffled = [...contentKeys].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, count).map(Number);
      setBlinkingItems(selected);

      setTimeout(() => {
        setBlinkingItems([]);
      }, 2000);
    };

    randomBlink();
    const interval = setInterval(randomBlink, 5000);

    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (pos) => {
    const positions = {
      "top-left": "top-1 left-1",
      "top-right": "top-1 right-1",
      "top-center": "top-1 left-1/2 -translate-x-1/2",
      center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      "bottom-left": "bottom-1 left-1",
      "bottom-right": "bottom-1 right-1",
      "bottom-center": "bottom-1 left-1/2 -translate-x-1/2",
    };
    return positions[pos] || positions.center;
  };

  const handleMouseEnter = (i) => {
    setHoveredBox(i);
    if (timeoutRefs.current[i]) {
      clearTimeout(timeoutRefs.current[i]);
      delete timeoutRefs.current[i];
    }
    if (!activeBoxes.includes(i)) {
      setActiveBoxes((prev) => [...prev, i]);
    }
  };

  const handleMouseLeave = (i) => {
    setHoveredBox(null);
    timeoutRefs.current[i] = setTimeout(() => {
      setActiveBoxes((prev) => prev.filter((idx) => idx !== i));
      delete timeoutRefs.current[i];
    }, 400);
  };

  return (
    <div className="relative auto-card p-5 bg-main-primary flex items-center justify-center">
      <h1 className="text-6xl font-semibold z-30">PORTOFOLIO</h1>
      <div className="grid grid-cols-12 grid-rows-3 h-full px-3 py-5 absolute inset-0">
        {Array.from({ length: 36 }).map((_, i) => {
          const isActive = activeBoxes.includes(i);
          const isHovered = hoveredBox === i;
          const content = boxContents[i];
          const isBlinking = blinkingItems.includes(i);
          return (
            <motion.div
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              animate={{
                backgroundColor: isActive
                  ? "var(--color-muted-main)"
                  : "rgba(224, 77, 51, 0)",
              }}
              transition={{
                duration: isHovered ? 0.4 : 0.8,
                ease: "easeInOut",
              }}
              className="rounded-lg border relative overflow-hidden"
              style={{
                borderColor: "#e04d33",
                borderWidth: "1px",
              }}
            >
              {content && (
                <motion.div
                  className={`absolute ${getPositionClass(content.pos)}`}
                  animate={{
                    opacity: isBlinking ? [1, 0, 1, 0, 1, 0, 1] : 1,
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: 0,
                    ease: "linear",
                  }}
                >
                  {content.text && (
                    <span className="text-white/70 text-xs font-medium px-1">
                      {content.text}
                    </span>
                  )}
                  {content.shape === "rectangle" && (
                    <div className="w-1 h-4 bg-white/70"></div>
                  )}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
