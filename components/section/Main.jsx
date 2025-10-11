"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Main = () => {
  const [activeBoxes, setActiveBoxes] = useState([]);
  const [hoveredBox, setHoveredBox] = useState(null);
  const timeoutRefs = useRef({});

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
    }, 300);
  };

  return (
    <div className="relative auto-card p-5 bg-main-primary flex items-center justify-center">
      <h1 className="text-6xl font-semibold z-30">PORTOFOLIO</h1>
      <div className="grid grid-cols-12 grid-rows-3 h-full px-3 py-5 absolute inset-0">
        {Array.from({ length: 36 }).map((_, i) => {
          const isActive = activeBoxes.includes(i);
          const isHovered = hoveredBox === i;

          return (
            <motion.div
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              animate={{
                backgroundColor: isActive
                  ? "var(--color-muted-main)"
                  : "transparent",
              }}
              transition={{
                duration: isHovered ? 0.15 : 1.0,
                ease: "easeInOut",
              }}
              className="rounded-lg border"
              style={{
                borderColor: "#e04d33",
                borderWidth: "1px",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
