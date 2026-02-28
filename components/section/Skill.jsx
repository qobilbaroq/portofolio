"use client";
import React from "react";
import Book3D from "../ui/Book3D";

export const Skill = () => {
  const skills = [
    { num: "01", name: "HTML", type: "Markup" },
    { num: "02", name: "CSS", type: "Styling" },
    { num: "03", name: "JavaScript", type: "Language" },
    { num: "04", name: "React", type: "Library" },
    { num: "05", name: "Tailwind", type: "Styling" },
    { num: "06", name: "Git", type: "Version Control" },
    { num: "07", name: "Figma", type: "Design" },
    { num: "08", name: "Node.js", type: "Runtime" },
  ];

  return (
    <div className="flex flex-col md:p-9 p-5 auto-card bg-secondary text-primary rounded-2xl">
      <div className="flex items-start justify-between">
        <p className="text-[14px] tracking-[3px] uppercase text-muted-primary pt-1">
          Skills
        </p>
        <h2
          className="text-right leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
          }}
        >
          Tech <em className="not-italic text-main-primary">Stack.</em>
        </h2>
      </div>

      <div className="w-full h-px bg-muted-primary/30 my-6" />

      <p
        className="text-xl font-medium mb-1"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        "Tools shape the work."
      </p>
      <p className="text-md text-muted-primary font-light mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-4 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.num}
            className="bg-white border border-muted-primary/20 rounded-xl p-4 flex flex-col gap-2 hover:border-main-primary transition-all duration-200 hover:-translate-y-0.5 cursor-default"
          >
            <span className="text-[14px] tracking-widest text-muted-primary/50">
              {skill.num}
            </span>
            <p
              className="text-sm text-primary"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
            >
              {skill.name}
            </p>
            <p className="text-[11px] text-muted-primary tracking-wide">
              {skill.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
