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
          top: `calc(-5vh + ${index * 18}px)`,
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
