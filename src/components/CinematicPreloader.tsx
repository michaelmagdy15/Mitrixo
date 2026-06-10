"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface CinematicPreloaderProps {
  onComplete: () => void;
}

export default function CinematicPreloader({ onComplete }: CinematicPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";
    
    let frameId: number;
    let startTime: number | null = null;
    const duration = 2400; // Fast cinematic 2.4s sequence

    const updateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressRatio = Math.max(0, Math.min(elapsed / duration, 1));
      
      // Elegant non-linear progress
      let currentProgress = 0;
      if (progressRatio < 0.3) {
        const t = progressRatio / 0.3;
        currentProgress = Math.round(50 * (1 - Math.pow(1 - t, 2)));
      } else if (progressRatio < 0.7) {
        const t = (progressRatio - 0.3) / 0.4;
        currentProgress = Math.round(50 + 35 * t);
      } else {
        const t = (progressRatio - 0.7) / 0.3;
        currentProgress = Math.round(85 + 15 * (1 - Math.pow(1 - t, 3)));
      }

      setProgress(currentProgress);

      if (progressRatio < 1) {
        frameId = requestAnimationFrame(updateProgress);
      } else if (!completedRef.current) {
        completedRef.current = true;
        setTimeout(() => {
          document.body.style.overflow = "";
          onComplete();
        }, 400);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.02,
        filter: "blur(8px)"
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center select-none overflow-hidden font-sans"
    >
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.2] pointer-events-none" />

      {/* Elegant Radial Background Glows */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-sky-500/5 blur-[100px] pointer-events-none"
      />

      {/* Central Container */}
      <div className="relative flex flex-col items-center justify-center gap-8 text-center z-10 max-w-sm w-full px-6">
        
        {/* Real logo image inside a clean, minimal glass container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full h-[140px] flex items-center justify-center rounded-2xl border border-white/[0.04] bg-[#171717]/80 backdrop-blur-xl shadow-2xl p-6 overflow-hidden border-amber-glow"
        >
          {/* Subtle Corner accents */}
          <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-amber-500/30" />
          <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-amber-500/30" />
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-amber-500/30" />
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-amber-500/30" />

          {/* Glowing Scanning Sweep Effect */}
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent pointer-events-none z-20"
          />

          {/* Animated Logo Image */}
          <motion.img 
            src="/logo.png" 
            alt="Mitrixo Logo" 
            className="h-16 w-auto object-contain bg-transparent select-none pointer-events-none relative z-10"
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.95, 1, 0.95],
              filter: ["drop-shadow(0 0 0px rgba(251, 191, 36, 0))", "drop-shadow(0 0 10px rgba(251, 191, 36, 0.2))", "drop-shadow(0 0 0px rgba(251, 191, 36, 0))"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Progress Meter */}
        <div className="flex flex-col items-center gap-3 w-full max-w-[200px] mt-2">
          {/* Simple Clean Progress Bar */}
          <div className="w-full h-[2px] bg-white/[0.03] rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "tween", duration: 0.05 }}
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
            />
          </div>

          {/* Percentage */}
          <div className="font-mono text-xs font-semibold tracking-[0.15em] text-amber-500 text-amber-glow">
            {progress}%
          </div>
        </div>

      </div>
    </motion.div>
  );
}
