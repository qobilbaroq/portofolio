"use client";

import { transform } from "motion";
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
          className={`${currentSize.label} text-slate-700 dark:text-slate-200 px-4 py-1 rounded-md transition-all duration-500 ${
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


      <div className="relative h-80 mt-3">
        {/* react*/}
        <div className="absolute left-6 top-5">
          <Book3D
            showLabel
            title={"React"}
            color="custom"
            frontClassName="bg-gradient-to-br from-cyan-500 to-blue-600"
            backClassName="bg-gradient-to-br from-cyan-600 to-blue-700"
            rotate={-8}
            icon={
              <svg viewBox="0 0 128 128">
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4"></circle>
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm-18.6 15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm22.2-21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </g>
              </svg>
            }
          />
        </div>
        {/* js*/}
        <div className="absolute left-72 -top-5">
          <Book3D
            showLabel
            title={"JavaScript"}
            color="custom"
            frontClassName="bg-gradient-to-br from-yellow-400 to-yellow-600"
            backClassName="bg-gradient-to-br from-yellow-500 to-yellow-700"
            rotate={25}
            icon={
              <svg viewBox="0 0 128 128">
                <path
                  fill="#F0DB4F"
                  d="M1.408 1.408h125.184v125.185H1.408z"
                ></path>
                <path
                  fill="#323330"
                  d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                ></path>
              </svg>
            }
          />
        </div>
        {/* tailwind*/}
        <div className="absolute left-52 top-44">
          <Book3D
            showLabel
            title={"Tailwind"}
            color="custom"
            frontClassName="bg-gradient-to-br from-cyan-400 to-sky-600"
            backClassName="bg-gradient-to-br from-cyan-500 to-sky-700"
            rotate={-48}
            icon={
              <svg viewBox="0 0 128 128">
                <path
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  fill="#38bdf8"
                ></path>
              </svg>
            }
          />
        </div>
        {/* next*/}
        <div className="absolute right-96 top-24">
          <Book3D
            showLabel
            title={"Next.js"}
            color="custom"
            frontClassName="bg-gradient-to-br from-gray-900 to-black"
            backClassName="bg-gradient-to-br from-gray-800 to-gray-900"
            rotate={-6}
            icon={
              <svg viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="64" fill="white"></circle>
                <path
                  fill="black"
                  d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
                ></path>
                <path fill="black" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
              </svg>
            }
          />
        </div>
        {/* vuejs*/}
        <div className="absolute right-50 -top-8 ">
          <Book3D
            showLabel
            title={"Vue.js"}
            color="custom"
            frontClassName="bg-gradient-to-br from-green-500 to-emerald-700"
            backClassName="bg-gradient-to-br from-green-600 to-emerald-800"
            rotate={56}
            icon={
              <svg viewBox="0 0 128 128">
                <path
                  d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
                  fill="none"
                ></path>
                <path
                  d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z"
                  fill="#35495e"
                ></path>
                <path
                  d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z"
                  fill="#41b883"
                ></path>
              </svg>
            }
          />
        </div>
        {/* github*/}
        <div className="absolute right-16 top-24">
          <Book3D
            showLabel
            title={"GitHub"}
            color="custom"
            frontClassName="bg-gradient-to-br from-gray-800 to-gray-950"
            backClassName="bg-gradient-to-br from-gray-900 to-black"
            rotate={-36}
            icon={
              <svg viewBox="0 0 128 128">
                <g fill="#ffffff">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  ></path>
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                </g>
              </svg>
            }
          />
        </div>
        {/* vscode*/}
        <div className="absolute right-44 top-72">
          <Book3D
          showLabel
          title={"VS Code"}
          color="custom"
          frontClassName="bg-gradient-to-br from-blue-500 to-blue-700"
          backClassName="bg-gradient-to-br from-blue-600 to-blue-800"
          rotate={60}
          icon={
            <svg viewBox="0 0 128 128">
              <path
                fill="#0065A9"
                d="M95.555 20.48L47.42 61.96l-24.11-18.44 4.278-3.965 86.934-25.375L126.72 21.6v84.8l-12.198 7.42-86.934-25.376-4.278-3.965 24.11-18.44 48.135 41.48 16.356 8.99V11.49l-16.356 8.99z"
              ></path>
              <path
                fill="#007ACC"
                d="M95.555 20.48l-48.135 41.48-24.11-18.44 72.245-35.535V107.52l-72.245-35.535 24.11-18.44 48.135 41.48"
              ></path>
              <path
                fill="#1F9CF0"
                d="M47.42 61.96L23.31 43.52l-4.278 3.965L6.834 54.9 0 61.96l6.834 7.06 12.198 7.415 4.278 3.965L47.42 61.96z"
              ></path>
            </svg>
          }
        />
        </div>
      </div>