"use client";

import React, { useState } from "react";

const sizeMap = {
  sm: { container: "w-20 h-32", label: "text-xs" },
  md: { container: "w-24 h-36", label: "text-sm" },
  lg: { container: "w-32 h-48", label: "text-base" },
};

const colorMap = {
  blue: { front: "bg-blue-700", back: "bg-blue-600" },
  red: { front: "bg-red-700", back: "bg-red-600" },
  green: { front: "bg-green-700", back: "bg-green-600" },
  yellow: { front: "bg-yellow-700", back: "bg-yellow-600" },
  black: { front: "bg-black", back: "bg-gray-900" },
  white: { front: "bg-white", back: "bg-gray-100" },
  transparent: { front: "bg-transparent", back: "bg-transparent" },
  custom: { front: "", back: "" },
};

export default function Book3D({
  size = "sm",
  color = "blue",
  title = "Title",
  showLabel = false,
  rotate = 0,
  frontClassName = "",
  backClassName = "",
  className = "",
  icons = [],
  icon = null,
  iconUrl = "",
  cycleOnClick = true,
  iconScale,
  iconClassName = "",
} = {}) {
  const [hover, setHover] = useState(false);
  const [iconIndex, setIconIndex] = useState(0);

  const currentSize = sizeMap[size] || sizeMap.md;
  const baseColor = colorMap[color] || colorMap.blue;

  const front = color === "custom" ? frontClassName : baseColor.front;
  const back = color === "custom" ? backClassName : baseColor.back;
  const firstLetter = title.charAt(0).toUpperCase();

  // Determine current icon
  const currentIconEl = (() => {
    if (Array.isArray(icons) && icons.length > 0) {
      const item = icons[iconIndex];
      return typeof item === "string" ? <img src={item} alt={title} /> : item;
    }
    if (icon) return icon;
    if (iconUrl) return <img src={iconUrl} alt={title} />;
    return null;
  })();

  const canCycle = cycleOnClick && Array.isArray(icons) && icons.length > 1;

  // Default icon scale
  const scaleMap = { sm: 0.6, md: 0.65, lg: 0.7 };
  const finalScale =
    typeof iconScale === "number" ? iconScale : scaleMap[size] || 0.65;

  return (
    <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
      <div
        className={`relative ${currentSize.container} ${canCycle ? "cursor-pointer" : ""}`}
        style={{
          perspective: "1000px",
          transform: `rotate(${rotate}deg)`,
          transition: "transform 300ms",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          if (canCycle) setIconIndex((i) => (i + 1) % icons.length);
        }}
        role={canCycle ? "button" : undefined}
        aria-label={canCycle ? "Change icon" : undefined}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: hover
              ? "rotateX(5deg) rotateY(-10deg)"
              : "rotateX(0deg) rotateY(0deg)",
          }}
        >
          {/* Back cover */}
          <div
            className={`absolute inset-0 ${back} rounded-sm shadow-lg`}
            style={{
              transform: "translateZ(-4px)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-white to-white/80 m-1 rounded-[2px]"
              style={{ transform: "translateZ(-2px)" }}
            />
          </div>

          {/* Front cover */}
          <div
            className={`absolute inset-0 ${front} ${
              color === "white" ? "text-slate-700" : "text-white"
            } rounded-r-sm hover:rounded-sm flex items-center justify-center p-3 transition-transform duration-500 ease-in-out overflow-hidden`}
            style={{
              transform: hover
                ? "rotateY(-10deg) translateX(-6px)"
                : "rotateY(0deg) translateX(0)",
              transformOrigin: "left center",
              boxShadow:
                "0 5px 12px rgba(0,0,0,0.3), inset 0 0 6px rgba(255,255,255,0.1)",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Corner badge */}
            <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-sm w-4 h-5 rounded-tr-[2px] flex items-center justify-center">
              <p className="text-white/80 text-[10px] font-bold">
                {firstLetter}
              </p>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Icon */}
            {currentIconEl && (
              <div
                className={`flex items-center justify-center ${iconClassName} transition-transform duration-300`}
                style={{
                  width: `${finalScale * 100}%`,
                  height: `${finalScale * 100}%`,
                  transform: hover ? "scale(1.05)" : "scale(1)",
                }}
              >
                <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>img]:w-full [&>img]:h-full [&>img]:object-contain">
                  {currentIconEl}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Label */}
      {showLabel && (
        <div
          className={`${currentSize.label} text-slate-700 dark:text-slate-200 px-3 py-1 rounded-md transition-all duration-500 ${
            hover
              ? "opacity-100 translate-y-0 bg-slate-100 dark:bg-slate-800 shadow-md"
              : "opacity-60 translate-y-1"
          }`}
        >
          {title}
        </div>
      )}
    </div>
  );
}
