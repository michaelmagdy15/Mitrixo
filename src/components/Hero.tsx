"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Shield, Cpu, ExternalLink, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent overflow-hidden py-20 px-4 md:px-8">
      {/* Cinematic Glowing Background Ambience */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-500/3 blur-[120px] pointer-events-none z-0" />

      {/* Ambient Amber Glow — behind logo area for depth */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-amber-500/[0.06] blur-[100px] pointer-events-none z-0" />

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center gap-12 text-center mt-8">
        
        {/* ========================================================
            LOGO REVEAL SYSTEM
            ======================================================== */}
        <div className="scale-[0.7] min-[380px]:scale-[0.85] min-[480px]:scale-[0.95] sm:scale-100 origin-center select-none h-44 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex items-center justify-center w-full max-w-[520px] h-[140px] px-8 border border-white/[0.04] bg-white/[0.01] rounded-2xl backdrop-blur-xl shadow-2xl"
          >
            {/* Steady, pulsing glows behind the Logo */}
            <motion.div
              animate={{ opacity: [0.15, 0.32, 0.15], scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute w-80 h-80 rounded-full bg-sky-500/10 blur-[90px] pointer-events-none -z-10"
            />
            <motion.div
              animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 3 }}
              className="absolute w-80 h-80 rounded-full bg-violet-500/10 blur-[90px] pointer-events-none -z-10"
            />
            {/* Subtle amber shimmer ring */}
            <motion.div
              animate={{ opacity: [0.05, 0.14, 0.05], scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1.5 }}
              className="absolute w-72 h-72 rounded-full bg-amber-400/10 blur-[80px] pointer-events-none -z-10"
            />

            {/* Real Mitrixo Logo with fully transparent background - Prominent & Bold */}
            <Image 
              src="/logo.png" 
              alt="Mitrixo Logo" 
              width={300}
              height={150}
              className="max-h-32 sm:max-h-36 w-auto object-contain bg-transparent relative z-10 select-none pointer-events-none"
            />
          </motion.div>
        </div>

        {/* ========================================================
            TAGLINES & COPY
            ======================================================== */}
        <div className="flex flex-col items-center gap-6 max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] text-[10px] font-sans font-medium tracking-[0.18em] text-zinc-300 uppercase"
          >
            MITRIXO • ELITE DIGITAL STUDIO
          </motion.div>

          {/* Headline — weight 800, gradient from white → white/80 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] max-w-3xl"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.78) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We engineer the{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #ffffff, #d4d4d8, #a1a1aa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              digital infrastructure
            </span>{" "}
            for the{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #38bdf8, #60a5fa, #c4b5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              next generation.
            </span>
          </motion.h1>

          {/* Subheadline — service-oriented, impactful */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed mt-2"
          >
            We architect digital products that define industries — from{" "}
            <span className="text-zinc-100 font-medium hover:text-[#3B82F6] transition-colors duration-300">enterprise SaaS platforms</span>{" "}
            to{" "}
            <span className="text-zinc-100 font-medium hover:text-[#F59E0B] transition-colors duration-300">immersive creative experiences</span>.
          </motion.p>
        </div>

        {/* ========================================================
            CTA BUTTONS
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 mt-4 w-full px-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
            {/* Primary CTA — Begin Your Build → */}
            <motion.a
              href="#products"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden px-8 py-4 rounded-xl w-full sm:w-auto font-medium tracking-wide text-white bg-white/[0.03] border border-white/10 hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:bg-sky-500/[0.01] shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 z-10"
            >
              {/* Button Glass Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

              {/* Animated underline span */}
              <span className="relative flex items-center gap-2">
                Begin Your Build →
                <span
                  className="absolute -bottom-[3px] left-0 h-[1.5px] w-0 bg-sky-400 group-hover:w-full transition-all duration-500 ease-out rounded-full"
                  aria-hidden="true"
                />
              </span>
            </motion.a>

            {/* Secondary CTA — Explore Our Work ↓ with bouncing arrow */}
            <motion.a
              href="#partner"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden px-8 py-4 rounded-xl w-full sm:w-auto font-medium tracking-wide text-zinc-300 hover:text-white bg-transparent border border-white/5 hover:border-brand-amber/50 hover:bg-brand-amber/[0.01] hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-300 flex items-center justify-center gap-2 z-10"
            >
              Explore Our Work
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="inline-block text-zinc-500 group-hover:text-amber-400 transition-colors duration-300"
                aria-hidden="true"
              >
                ↓
              </motion.span>
            </motion.a>
          </div>

          {/* Stats Row */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-[11px] sm:text-xs font-light tracking-widest text-white/30 select-none mt-1"
          >
            50+ Projects&nbsp;&nbsp;·&nbsp;&nbsp;3 Continents&nbsp;&nbsp;·&nbsp;&nbsp;98% Retention
          </motion.p>
        </motion.div>

      </div>

      {/* ========================================================
          SCROLL INDICATOR — animated chevron at bottom of hero
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[9px] font-light tracking-[0.22em] text-white/20 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/30" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
