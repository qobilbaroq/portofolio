import React from "react";

const Licensi = () => {
  const licenses = [
    { tag: "Certificate", name: "HTML\nFundamentals", theme: "light" },
    { tag: "Certificate", name: "CSS\nAdvanced", theme: "light" },
    { tag: "Certificate", name: "JavaScript\nEssentials", theme: "dark" },
    { tag: "Certificate", name: "React\nDeveloper", theme: "red" },
    { tag: "Certificate", name: "UI/UX\nDesign", theme: "dark" },
    { tag: "Certificate", name: "Node.js\nBackend", theme: "light" },
  ];

  const themeClass = {
    light: "bg-muted-primary/10 text-primary",
    dark: "bg-primary text-secondary",
    red: "bg-main-primary text-secondary",
  };

  return (
    <div className="flex flex-col md:p-9 p-5 auto-card bg-secondary text-primary">
      <div className="flex items-start justify-between">
        <p className="text-[14px] tracking-[3px] uppercase text-muted-primary pt-1">
          Licenses
        </p>
        <h2
          className="text-right leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
          }}
        >
          Certi
          <em className="not-italic text-main-primary">ficate.</em>
        </h2>
      </div>

      <div className="w-full h-px bg-muted-primary/30 my-6" />

      <p
        className="text-xl font-medium mb-1"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        "Learning never stops."
      </p>
      <p className="text-md text-muted-primary font-light mb-6">
        Certifications & credentials I've earned along the way.
      </p>

      <div className="grid grid-cols-3 gap-3 flex-1">
        {licenses.map((license, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl p-4 aspect-video flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-0.5 transition-all duration-200 ${themeClass[license.theme]}`}
          >
            <div className="absolute w-24 h-24 rounded-full border border-white/10 -bottom-6 -right-6" />
            <div className="absolute w-14 h-14 rounded-full border border-white/10 bottom-4 right-4" />

            <p className="text-[14px] tracking-[2px] uppercase opacity-50">
              {license.tag}
            </p>
            <p
              className="text-sm font-bold leading-tight whitespace-pre-line"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {license.name}
            </p>
            <p className="text-[14px] tracking-widest uppercase opacity-50">
              Click to view →
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Licensi;
