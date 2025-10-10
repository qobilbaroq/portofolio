"use client";

import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";


export const Hamburger = ({ active = false, onToggle = () => {}}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        onClick={onToggle}
        className="relative h-7 w-7 cursor-pointer"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-0.5 w-5 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["40%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "40%"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-0.5 w-5 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              top: ["60%", "50%", "50%"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              top: ["50%", "50%", "60%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
