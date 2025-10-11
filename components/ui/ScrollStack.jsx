"use client";

import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { Card } from "./Card";
import Lenis from "lenis";

export const ScrollStack = ({ children }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const childArray = React.Children.toArray(children);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className="flex-1 ">
      {childArray.map((child, i) => (
        <Card
          key={i}
          i={i}
          progress={scrollYProgress}
          range={[i * 0.15, 1]}
          targetScale={1 - (childArray.length - i) * 0.05}
        >
          {child}
        </Card>
      ))}
    </main>
  );
};
