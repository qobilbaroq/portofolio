"use client";

import React from "react";
import { motion, useTransform } from "framer-motion";

export const Card = ({ i, progress, range, targetScale, children }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="flex justify-center items-center h-[100vh] sticky top-0">
      <motion.div 
        style={{
          scale,
        }}
        className="relative">{children}</motion.div>
    </div>
  );
};
