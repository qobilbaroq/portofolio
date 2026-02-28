import React from "react";

export const Projects = () => {
  const projects = [
    {
      num: "01",
      title: "Project Name Here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },
    {
      num: "02",
      title: "Project Name Here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["React", "CSS"],
      featured: false,
    },
    {
      num: "03",
      title: "Project Name Here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["JavaScript", "HTML"],
      featured: false,
    },
  ];

  return (
    <div className="flex flex-col md:p-9 p-5 auto-card bg-secondary text-primary rounded-2xl">
      {/* TOP */}
      <div className="flex items-start justify-between">
        <p className="text-[14px] tracking-[3px] uppercase text-muted-primary pt-1">
          Project
        </p>
        <h2
          className="text-right leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
          }}
        >
          Selected <em className="not-italic text-main-primary">Work.</em>
        </h2>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-muted-primary/30 my-6" />

      {/* QUOTE */}
      <p
        className="text-xl font-medium mb-1"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        "Built with purpose, shipped with care."
      </p>
      <p className="text-md text-muted-primary font-light mb-6">
        A selection of projects I'm proud of.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {/* Featured */}
        <div className="col-span-2 flex flex-row bg-white border border-muted-primary/20 rounded-xl overflow-hidden hover:border-main-primary transition-all duration-200 hover:-translate-y-0.5">
          <div className="w-1/2 bg-muted-primary/10 flex items-center justify-center text-muted-primary/40 text-xs tracking-widest">
            image project
          </div>
          <div className="flex flex-col gap-2 p-5 flex-1 justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-[16px] tracking-widest text-muted-primary/50">
                {projects[0].num} — Featured
              </span>
              <p
                className="text-xl text-primary"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
              >
                {projects[0].title}
              </p>
              <p className="text-sm text-muted-primary font-light leading-relaxed">
                {projects[0].desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {projects[0].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-[12px] tracking-widest uppercase px-2 py-1 rounded-full ${idx === 0 ? "bg-main-primary text-white" : "bg-muted-primary/10 text-muted-primary"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
