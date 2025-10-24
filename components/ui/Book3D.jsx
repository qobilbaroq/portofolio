import React, { useState } from "react";

export default function BookSimple3D() {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Area buku dengan perspektif */}
      <div
        className="relative w-24 h-36 "
        style={{
          perspective: "1000px",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Book container */}
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
            className="absolute inset-0 bg-blue-600 rounded-sm shadow-md"
            style={{
              transform: "translateZ(-4px)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 m-1 "
              style={{
                transform: "translateZ(-2px)",
              }}
            ></div>
          </div>

          {/* Front cover */}
          <div
            className="absolute inset-0 bg-blue-700 text-white rounded-r-sm hover:rounded-sm flex flex-col justify-end p-3 transition-transform duration-500 ease-in-out"
            style={{
              transform: hover
                ? "rotateY(-10deg) translateX(-6px)"
                : "rotateY(0deg) translateX(0)",
              transformOrigin: "left center",
              boxShadow:
                "0 5px 12px rgba(0,0,0,0.25), inset 0 0 6px rgba(255,255,255,0.05)",
            }}
          >
            <span className="absolute top-0 right-0 bg-slate-200 w-3 h-4 rounded-tr-[2px]" />
          </div>
        </div>
      </div>

      {/* Label muncul lembut */}
      <div
        className={`mt-3 text-xs text-secondary bg-primary px-3 py-1.5 rounded-md shadow transition-opacity duration-700  ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        React
      </div>
    </div>
  );
}
