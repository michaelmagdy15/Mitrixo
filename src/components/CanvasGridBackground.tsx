"use client";

import React from "react";
import { motion } from "framer-motion";

export const CanvasGridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#030712]">
      {/* Slow, Breathing Ambient Corner Glows */}
      {/* Top-Left: Sky Blue Glow */}
      <motion.div
        animate={{
          opacity: [0.12, 0.18, 0.12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none"
      />

      {/* Top-Right: Violet Glow */}
      <motion.div
        animate={{
          opacity: [0.08, 0.14, 0.08],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none"
      />

      {/* Grid Pattern Overlay with Radial Mask (defined in globals.css) */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.6] pointer-events-none" />
    </div>
  );
};

export default CanvasGridBackground;
