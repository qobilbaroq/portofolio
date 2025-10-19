"use client";
import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import { Card } from "./Card";
import { ScrollIndicator } from "./ScrollIndicator";

export const ScrollStack = ({ children }) => {
  const container = useRef(null);
  const lenisRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const childArray = React.Children.toArray(children);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToCard = (index) => {
    if (container.current && lenisRef.current) {
      const containerTop = container.current.offsetTop;
      const containerHeight =
        container.current.scrollHeight - window.innerHeight;

      const sectionSize = containerHeight / (childArray.length - 1);
      const targetScroll = containerTop + sectionSize * index;

      const currentIndex = Math.round(
        (lenisRef.current.scroll || 0 - containerTop) / sectionSize
      );

      const distance = Math.abs(index - currentIndex);

      if (distance <= 1) {
        lenisRef.current.scrollTo(targetScroll, {
          duration: 0.6,
          easing: (t) => 1 - Math.pow(1 - t, 2),
        });
      } else {
        lenisRef.current.scrollTo(targetScroll, {
          duration: 1.8,
          easing: (t) => Math.pow(t, 3),
        });
      }
    }
  };

  return (
    <>
      <ScrollIndicator
        count={childArray.length}
        scrollYProgress={scrollYProgress}
        onIndicatorClick={scrollToCard}
      />
      <main ref={container} className="flex-1">
        {childArray.map((child, i) => (
          <Card
            key={i}
            i={i}
            progress={scrollYProgress}
            range={[
              i * (1 / childArray.length),
              (i + 1) * (1 / childArray.length),
            ]}
            targetScale={1 - (childArray.length - i) * 0.03}
          >
            {child}
          </Card>
        ))}
      </main>
    </>
  );
};
