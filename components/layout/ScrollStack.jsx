"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Card({ children, index, range, targetScale, progress, innerRef }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={innerRef}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 16}px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 35,
          mass: 1,
        }}
        className="relative origin-top shadow-2xl rounded-3xl overflow-visible top-0 bottom-0"
      >
        {children}
      </motion.div>
    </div>
  );
}

export const ScrollStack = ({ children }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const childrenArray = Array.isArray(children) ? children : [children];
  const cardsLength = childrenArray.length;
  const cardRefs = useRef(childrenArray.map(() => React.createRef()));
  const [activeIndex, setActiveIndex] = useState(0);
  const [offsets, setOffsets] = useState([]);

  useEffect(() => {
    setOffsets(childrenArray.map(() => Math.random() * 8 - 4));
  }, [childrenArray]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const index = Math.floor(v * cardsLength);
      setActiveIndex(index >= cardsLength ? cardsLength - 1 : index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, cardsLength]);

  const handleDotClick = (index) => {
    const containerEl = container.current;
    if (!containerEl) return;

    const containerRect = containerEl.getBoundingClientRect();
    const containerTop = window.scrollY + containerRect.top;
    const negativeFiveVh = -0.05 * window.innerHeight; 
    const indexPx = index * 16; 
    const innerTopOffset = negativeFiveVh + indexPx;

    const targetY = Math.max(0, Math.floor(containerTop + index * window.innerHeight + innerTopOffset));
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <div ref={container} className="relative">
      {childrenArray.map((child, i) => {
        const targetScale = 1 - (cardsLength - i) * 0.03;
        const start = i / cardsLength;
        const end = 1;

        return (
          <Card
            key={i}
            index={i}
            innerRef={cardRefs.current[i]}
            range={[start, end]}
            targetScale={targetScale}
            progress={scrollYProgress}
          >
            {child}
          </Card>
        );
      })}

      <div className="fixed right-[7rem] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[999]">
        {childrenArray.map((_, i) => {
          const isActive = i === activeIndex;
          const offsetX = offsets[i] || 0;

          return (
            <motion.button
              key={i}
              onClick={() => handleDotClick(i)}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 1.2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              style={{
                x: offsetX,
                backgroundColor: isActive ? "#e83f21" : "rgba(255,255,255,0.5)",
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isActive ? "shadow-[0_0_10px_rgba(232,63,33,0.7)]" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
