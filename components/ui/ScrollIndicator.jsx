import React, { useState } from "react";
import { useMotionValueEvent } from "framer-motion";

export const ScrollIndicator = ({
  count,
  scrollYProgress,
  onIndicatorClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Array(count).fill(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionSize = 1 / count;
    const index = Math.min(count - 1, Math.floor(latest / sectionSize + 0.001));
    setActiveIndex(index);
  });

  return (
    <div className="fixed right-20 top-1/2 -translate-y-1/2 flex flex-col gap-2 items-center z-50">
      {items.map((_, i) => (
        <div
          key={i}
          className="relative w-10 h-2 flex justify-center items-center cursor-pointer group"
          onClick={() => onIndicatorClick(i)}
        >
          <div
            className={`h-[1px] rounded-full transition-all duration-300 ease-out  transform
            ${
              activeIndex === i
                ? "w-10 bg-white scale-100"
                : "w-6 bg-gray-500 group-hover:w-7 group-hover:bg-gray-300 group-hover:scale-110"
            }
          `}
          />
        </div>
      ))}
    </div>
  );
};
