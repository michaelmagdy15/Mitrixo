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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: progress / 100, 
            scale: 0.98 + (progress / 100) * 0.02,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 w-full h-[120px] flex items-center justify-center rounded-2xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-xl shadow-2xl p-6 overflow-hidden"
        >
          {/* Subtle Corner accents */}
          <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/20" />
          <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/20" />
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/20" />
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/20" />

          {/* Animated Logo Image */}
          <motion.img 
            src="/logo.png" 
            alt="Mitrixo Logo" 
            className="h-14 w-auto object-contain bg-transparent select-none pointer-events-none relative z-10"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              duration: 4,
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
              className="h-full bg-gradient-to-r from-sky-400 to-violet-500"
            />
          </div>

          {/* Percentage */}
          <div className="font-mono text-xs font-semibold tracking-[0.15em] text-zinc-400">
            {progress}%
          </div>
        </div>

      </div>
    </motion.div>
  );
}
