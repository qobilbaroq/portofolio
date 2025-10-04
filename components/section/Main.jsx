import React from "react";

export const Main = () => {
  const items = Array.from({ length: 36 }, (_, i) => i + 1);

  // mapping isi + posisi
  const boxContent = {
    1: { text: "Home", pos: "bottom-1 left-1" },
    3: { text: "Projects", pos: "top-1 left-1" },
    8: { text: "About", pos: "top-1 right-1" },
    9: { block: "top-1 left-1" },
    12: { text: "Experience", pos: "top-1 right-1" },
    24: { block: "top-1 left-1" },
    27: { block: "top-1 left-1" },
    29: { text: "Socials", pos: "bottom-1 left-1" },
    32: { text: "2025", pos: "top-1 right-1" },
    34: { text: "Skills", pos: "bottom-1 right-1" },
    36: { block: "bottom-1 left-1" },
  };

  return (
    <div className="relative grid grid-cols-12 grid-rows-3 w-[1100px] h-[600px] py-5 px-3 mt-4 rounded-2xl bg-main overflow-auto">
      {/* Text Portofolio di tengah */}
      <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-medium z-50">
        PORTOFOLIO
      </h1>

      {items.map((n) => (
        <div
          key={n}
          className="relative bg-main border border-white/20 rounded-xl w-full h-full cursor-pointer"
        >
          {boxContent[n] && (
            <>
              {/* Teks kecil di kotak */}
              <h1
                className={`absolute text-text-muted-light text-sm py-2 px-1 ${boxContent[n].pos}`}
              >
                {boxContent[n].text}
              </h1>

              {/* Balok kecil */}
              {boxContent[n].block && (
                <div
                  className={`absolute w-1.5 h-5 bg-text-muted-light rounded-xs mt-1 ms-1 ${boxContent[n].block}`}
                ></div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
