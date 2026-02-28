import React from "react";

export const About = () => {
  return (
    <div className="flex flex-col md:p-9 p-5 auto-card bg-secondary text-primary rounded-2xl">
      <div className="flex items-start justify-between">
        <p className="text-[14px] tracking-[3px] uppercase text-muted-primary pt-1">
          About
        </p>
        <h2
          className="text-right leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
          }}
        >
          Hi, I'm <em className="not-italic text-main-primary">Nabil.</em>
        </h2>
      </div>

      <div className="w-full h-px bg-muted-primary/30 my-6" />

      <div className="flex gap-8 flex-1 items-start">
        <div className="hidden md:flex flex-shrink-0 w-1/3 h-full bg-muted-primary/20 rounded-xl items-center justify-center flex-col gap-2 text-muted-primary text-[11px] tracking-widest">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          <span>Your Photo</span>
        </div>

        <div className="flex flex-col justify-between h-full flex-1 gap-4">
          <div>
            <p
              className="text-primary"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              Moch Nabil Al Mubaroq
            </p>
            <p className="text-main-primary text-sm tracking-wide mt-1">
              Frontend Developer
            </p>
          </div>

          <p className="text-md leading-relaxed text-muted-primary font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
