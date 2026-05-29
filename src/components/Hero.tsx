"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Shield, Cpu, ExternalLink } from "lucide-react";

export default function Hero() {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    // Phase 1: Wireframe lines drawing (lasts 1.8 seconds)
    // Phase 2: Lock and morph to solid white MITRI (at 1.8s, lasts 1.4s)
    // Phase 3: Golden interlocking XO badge slides out, snaps, and pulses (at 3.2s)
    const t1 = setTimeout(() => setPhase(2), 1800);
    const t2 = setTimeout(() => setPhase(3), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Geometric path definitions for the M-I-T-R-I letters (viewBox 0 0 360 100)
  const letterPaths = [
    // M
    "M 30 80 L 30 20 L 60 55 L 90 20 L 90 80",
    // I
    "M 130 20 L 130 80",
    // T
    "M 160 20 L 210 20 M 185 20 L 185 80",
    // R
    "M 240 80 L 240 20 L 275 20 L 280 32 L 275 45 L 240 45 M 262 45 L 282 80",
    // I
    "M 320 20 L 320 80"
  ];

  return (
    <section className="relative min-h-[95vh] w-full flex flex-col items-center justify-center bg-brand-dark overflow-hidden py-20 px-4 md:px-8 bg-grid-blueprint">
      {/* Decorative Blueprint Outer Border Frame */}
      <div className="absolute inset-6 pointer-events-none border border-white/[0.02] z-0 rounded-2xl hidden md:block">
        <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute left-0 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute right-0 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
      </div>

      {/* Cinematic Glowing Background Ambience */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blueprint/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-amber/3 blur-[120px] pointer-events-none z-0" />

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center gap-12 text-center mt-8">
        
        {/* ========================================================
            LOGO REVEAL SYSTEM
            ======================================================== */}
        <div className="scale-[0.62] min-[380px]:scale-[0.75] min-[480px]:scale-[0.85] sm:scale-95 md:scale-100 origin-center select-none h-28 min-[380px]:h-36 min-[480px]:h-40 flex items-center justify-center">
          <div className="relative w-[412px] h-[96px] flex items-center">
            
            {/* Phase 3: Steady, pulsing amber background glow behind the XO Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={phase === 3 ? { opacity: [0.35, 0.6, 0.35], scale: [1, 1.12, 1] } : {}}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-16 w-56 h-56 rounded-full bg-brand-amber/10 blur-3xl pointer-events-none z-0"
            />

            {/* Interlocking 'XO' Metallic Amber Badge */}
            <motion.div
              initial={{ x: -214, rotate: 0, opacity: 0, scale: 0.7 }}
              animate={
                phase === 3
                  ? { x: 0, rotate: 90, opacity: 1, scale: 1 }
                  : { x: -214, rotate: 0, opacity: 0.05, scale: 0.85 }
              }
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 15,
                mass: 1.2
              }}
              className="absolute z-0 w-24 h-24 rounded-2xl border border-brand-amber/30 bg-gradient-to-br from-brand-panel to-brand-dark shadow-[0_0_30px_rgba(245,158,11,0.12)] backdrop-blur-md flex items-center justify-center overflow-hidden left-[316px] top-0"
            >
              {/* Corner crosshairs matching the engineering aesthetic */}
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-brand-amber/40" />
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-brand-amber/40" />
              <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-brand-amber/40" />
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-brand-amber/40" />
              
              {/* SVG Interlocking XO Emblem */}
              <svg className="w-16 h-16 -rotate-90" viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FBBF24" />
                    <stop offset="35%" stopColor="#F59E0B" />
                    <stop offset="70%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#78350F" />
                  </linearGradient>
                  <radialGradient id="gold-nucleus" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE082" />
                    <stop offset="60%" stopColor="#FBBF24" />
                    <stop offset="100%" stopColor="#B45309" />
                  </radialGradient>
                </defs>
                {/* Double Gold Rings */}
                <circle cx="60" cy="60" r="28" stroke="url(#gold-grad)" strokeWidth="3" fill="none" />
                <circle cx="60" cy="60" r="20" stroke="url(#gold-grad)" strokeWidth="1.5" fill="none" opacity="0.6" />
                {/* Center Perfect Circle 'O' Nucleus */}
                <circle cx="60" cy="60" r="11" fill="url(#gold-nucleus)" className="animate-pulse" />
                {/* Left Diagonals of 'X' merging into double rings (at 40.2 tangent points) */}
                <path d="M 22 22 L 40.2 40.2" stroke="url(#gold-grad)" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 22 98 L 40.2 79.8" stroke="url(#gold-grad)" strokeWidth="3.5" strokeLinecap="round" />
                {/* Right Diagonals exiting outer ring */}
                <path d="M 79.8 40.2 L 98 22" stroke="url(#gold-grad)" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 79.8 79.8 L 98 98" stroke="url(#gold-grad)" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* MITRI Silver/White Frosted Glass Container */}
            <motion.div
              className="absolute left-0 top-1 z-10 w-[300px] h-[90px] rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)"
              }}
            >
              {/* Corner crosshairs */}
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-white/30" />
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-white/30" />
              <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-white/30" />
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-white/30" />
              
              {/* Blueprint Grid Lines (fades slightly in Phase 2) */}
              <motion.div
                initial={{ opacity: 0.12 }}
                animate={phase >= 2 ? { opacity: 0.03 } : { opacity: 0.12 }}
                className="absolute inset-0 bg-grid-blueprint"
              />
              
              {/* Horizontal skeletal wireframe laser sweep */}
              {phase === 1 && (
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-brand-blueprint/25 to-transparent pointer-events-none"
                />
              )}

              {/* SVG for MITRI Letters */}
              <svg className="w-full h-full px-4" viewBox="0 0 360 100">
                <defs>
                  <linearGradient id="blueprint-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                </defs>
                
                {/* Horizontal Skeletal border */}
                <motion.path
                  d="M 12 12 L 348 12 L 348 88 L 12 88 Z"
                  fill="none"
                  stroke={phase === 1 ? "url(#blueprint-grad)" : "rgba(255,255,255,0.08)"}
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
                
                {/* Dynamic Letters that morph from blueprint lines to thick white crystal columns */}
                {letterPaths.map((pathD, idx) => (
                  <motion.path
                    key={idx}
                    d={pathD}
                    fill="none"
                    stroke={phase === 1 ? "#3B82F6" : "#FFFFFF"}
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    initial={{ pathLength: 0, strokeWidth: 1.2 }}
                    animate={
                      phase >= 2
                        ? { pathLength: 1, strokeWidth: 11 }
                        : { pathLength: 1, strokeWidth: 1.2 }
                    }
                    transition={{
                      pathLength: { duration: 1.4, ease: "easeInOut" },
                      strokeWidth: { type: "spring", stiffness: 120, damping: 14 }
                    }}
                    style={
                      phase >= 2
                        ? {
                            filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.45))"
                          }
                        : {}
                    }
                  />
                ))}
              </svg>
            </motion.div>
          </div>
        </div>

        {/* ========================================================
            TAGLINES & COPY
            ======================================================== */}
        <div className="flex flex-col items-center gap-6 max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-xs font-semibold tracking-wider text-brand-blueprint uppercase shadow-inner"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blueprint animate-pulse" />
            ENGINEERING WORKSPACE ACTIVATED
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl"
          >
            We engineer the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              digital infrastructure
            </span>{" "}
            for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blueprint via-blue-400 to-white">
              next generation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed mt-2"
          >
            An elite engineering studio crafting resilient{" "}
            <span className="text-zinc-200 font-medium border-b border-white/10 pb-0.5">Enterprise web systems</span>,{" "}
            <span className="text-zinc-200 font-medium border-b border-white/10 pb-0.5">Custom CMS platforms</span>, and{" "}
            <span className="text-zinc-200 font-medium border-b border-white/10 pb-0.5">Proprietary SaaS products</span>.
          </motion.p>
        </div>

        {/* ========================================================
            CTA BUTTONS
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 w-full px-4"
        >
          {/* Explore Our Products CTA */}
          <motion.a
            href="#products"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden px-8 py-4 rounded-xl w-full sm:w-auto font-medium tracking-wide text-white bg-white/[0.03] border border-white/10 hover:border-brand-blueprint/50 shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 z-10"
          >
            {/* Button Glass Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            {/* Sliding Corner Accents on Hover */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-brand-blueprint opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-brand-blueprint opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            Explore Our Products
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-brand-blueprint group-hover:translate-x-1.5 transition-all duration-300" />
          </motion.a>

          {/* Partner With Us CTA */}
          <motion.a
            href="#partner"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden px-8 py-4 rounded-xl w-full sm:w-auto font-medium tracking-wide text-zinc-300 hover:text-white bg-transparent border border-white/5 hover:border-brand-amber/50 hover:bg-white/[0.01] transition-all duration-300 flex items-center justify-center gap-2.5 z-10"
          >
            {/* Sliding Corner Accents on Hover */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-brand-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-brand-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            Partner With Us
            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-brand-amber group-hover:rotate-45 transition-all duration-300" />
          </motion.a>
        </motion.div>

        {/* ========================================================
            SUBTLE TECHNICAL BLUEPRINT METADATA
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="w-full max-w-4xl border-t border-white/[0.04] pt-8 mt-12 hidden md:flex items-center justify-between text-[11px] font-mono tracking-widest text-zinc-500"
        >
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-brand-blueprint" />
            <span>SYS_SYS: VER_01.4 // NEXT.JS_16</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-brand-amber" />
            <span>SSL_ENCRYPTED: ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-zinc-500" />
            <span>LOC: [45.109.88] // MITRIXIO_STUDIO</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
