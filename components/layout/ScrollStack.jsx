"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Card({ children, index, range, targetScale, progress }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
        className="relative origin-top shadow-2xl rounded-3xl overflow-visible"
      >
        <div className="auto-card bg-foreground text-background flex flex-col justify-between">
          {children}
        </div>
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
            range={[start, end]}
            targetScale={targetScale}
            progress={scrollYProgress}
          >
            {child}
          </Card>
        );
      })}
    </div>
  );
};
