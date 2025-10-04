import React from "react";

export const Main = () => {
  const items = Array.from({ length: 36 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-12 grid-rows-3 w-[1100px] h-[600px] py-5 px-3 mt-4 rounded-2xl bg-main overflow-auto">
      {items.map((n) => (
        <div
          key={n}
          className="border border-white/20 rounded-xl w-full h-full flex items-center justify-center"
        >
        </div>
      ))}
    </div>
  );
};
