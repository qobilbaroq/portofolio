"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hamburger } from "../ui/Hamburger";
import Menu from "../ui/Menu";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, scale: 0.98, y: -8 },
    open: { opacity: 1, scale: 1, y: 0 },
  };

  const menuTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  const toggle = () => setActive((v) => !v);
  const closed = () => setActive(false);

  return (
    <div className="fixed w-full px-7 h-20 flex items-center justify-between z-50">
      <h1 className="text-sm hover:text-muted-primary transform duration-300 ease-in-out cursor-pointer">
        BAROQ
      </h1>

      <div className="relative flex items-center justify-between bg-main-secondary px-4 h-12 w-md rounded-lg">
        <h1 
        role="button"
        aria-expanded={active}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "") toggle();
        }}
        className="text-sm font-semibold cursor-pointer">MENU</h1>
        <Hamburger active={active} onToggle={() => setActive((v) => !v)} />

        <AnimatePresence>
          {active && (
            <motion.div
              key="menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={menuTransition}
              className="absolute left-1/2 top-full mt-3 transform -translate-x-1/2 z-50"
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <h1 className="text-sm hover:text-muted-primary transform duration-300 ease-in-out cursor-pointer">
        CONTACT
      </h1>
    </div>
  );
};
