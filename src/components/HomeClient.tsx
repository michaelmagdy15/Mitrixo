"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CanvasGridBackground from "@/components/CanvasGridBackground";
import CinematicPreloader from "@/components/CinematicPreloader";
import CustomCursor from "@/components/CustomCursor";
import Portfolio from "@/components/Portfolio";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function HomeClient() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to join waitlist. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Connection failed. Please check your network and try again.");
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-y-auto font-sans select-none antialiased">
      {/* Cinematic Logo Preloader */}
      <AnimatePresence mode="wait">
        {showPreloader && (
          <CinematicPreloader onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>

      {/* Coordinate Blueprint Canvas Background */}
      <CanvasGridBackground />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Main page content entrance sequence */}
      {!showPreloader && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full min-h-screen flex flex-col justify-between px-6 py-8"
        >
          {/* Custom interactive cursor */}
          <CustomCursor />

          {/* Simple header */}
          <header className="w-full max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full border border-amber-400 text-amber-500 animate-pulse border-amber-glow" />
              <span className="font-mono text-xs font-extrabold tracking-[0.25em] text-zinc-300 uppercase select-none">
                MITRIXO SYSTEM
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://workout.mitrixo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-amber-500 hover:text-amber-400 tracking-wider transition-colors duration-200 text-amber-glow"
              >
                WORKOUT PLATFORM ↗
              </a>
              <a 
                href="mailto:hello@mitrixo.com"
                className="text-xs font-mono text-zinc-400 hover:text-amber-500 tracking-wider transition-colors duration-200"
              >
                CONTACT INQUIRY
              </a>
            </div>
          </header>

          {/* Centered Coming Soon Section */}
          <main className="w-full flex-grow flex flex-col items-center justify-center py-16 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="glass-card w-full max-w-xl p-8 md:p-12 rounded-3xl relative overflow-hidden text-center shadow-2xl"
            >
              {/* Card accent corners */}
              <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/10" />
              <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/10" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/10" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/10" />

              {/* Status glow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] md:text-xs font-bold tracking-wider uppercase mb-8 select-none border-amber-glow">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                SaaS Product Studio — Next Gen System v2
              </div>

              {/* Brand Logo */}
              <div className="mb-6 flex justify-center select-none pointer-events-none">
                <motion.img 
                  src="/logo.png" 
                  alt="Mitrixo Logo" 
                  className="h-12 w-auto object-contain bg-transparent select-none pointer-events-none"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 font-sans leading-[1.1] uppercase">
                THE NEXT EVOLUTION <br /> IS <span className="text-amber-500 text-amber-glow font-extrabold">COMING SOON</span>
              </h1>

              {/* Subtext */}
              <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto mb-10 font-normal leading-relaxed">
                We are currently architecting a powerful suite of high-fidelity SaaS applications and custom digital infrastructure. The new experience is under active development.
              </p>

              {/* Interative Waitlist capture form */}
              <div className="relative max-w-md mx-auto w-full z-20">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 flex items-center justify-center gap-3 border-emerald-glow"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span className="text-xs md:text-sm font-semibold tracking-wide uppercase font-mono">
                        Success! added to launch queue
                      </span>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit} 
                      className="w-full flex flex-col gap-2.5 relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="relative flex items-center rounded-2xl bg-zinc-950/50 border border-white/5 p-1.5 focus-within:border-amber-500/30 focus-within:ring-1 focus-within:ring-amber-500/30 transition-all duration-300">
                        <Mail className="absolute left-4 w-5 h-5 text-zinc-500 pointer-events-none" />
                        <input 
                          type="email" 
                          placeholder="Enter email to get notified..." 
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === "error") setStatus("idle");
                          }}
                          disabled={status === "submitting"}
                          className="w-full bg-transparent pl-11 pr-32 py-3 text-xs md:text-sm text-zinc-100 placeholder-zinc-500 border-none outline-none focus:ring-0 font-medium"
                        />
                        <button 
                          type="submit" 
                          disabled={status === "submitting"}
                          className="absolute right-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-brand-dark font-extrabold text-[10px] md:text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-lg shadow-amber-500/10 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50"
                        >
                          {status === "submitting" ? (
                            <span className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              Notify Me
                              <ArrowRight className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                      {status === "error" && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-red-400 text-left pl-4 font-mono font-medium tracking-wide"
                        >
                          {errorMessage}
                        </motion.p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Exploration Downward Scroll CTA */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 text-[10px] font-mono text-zinc-500 hover:text-amber-500 tracking-[0.2em] uppercase transition-all duration-300"
                >
                  Explore System Portfolio
                  <ArrowRight className="w-3.5 h-3.5 rotate-90 animate-bounce" />
                </a>
                <span className="hidden sm:inline text-zinc-700">|</span>
                <a
                  href="https://workout.mitrixo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-mono text-amber-500 hover:text-amber-400 tracking-[0.2em] uppercase transition-all duration-300 text-amber-glow"
                >
                  Workout Platform ↗
                </a>
              </div>

              {/* Architectural inquiry footer */}
              <div className="mt-12 pt-8 border-t border-white/[0.03] text-center">
                <p className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-1">
                  ARCHITECTURAL INQUIRY
                </p>
                <a 
                  href="mailto:hello@mitrixo.com" 
                  className="inline-flex items-center text-xs md:text-sm text-zinc-400 hover:text-amber-500 font-extrabold tracking-wider transition-colors duration-200"
                >
                  hello@mitrixo.com
                </a>
              </div>
            </motion.div>
          </main>

          {/* Interactive Project Portfolio Section */}
          <Portfolio />

          {/* Simple clean footer */}
          <footer className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/[0.03] pointer-events-auto">
            <span className="font-mono text-[10px] tracking-wider text-zinc-500 select-none">
              &copy; {new Date().getFullYear()} MITRIXO. ALL RIGHTS RESERVED.
            </span>
            <div className="flex gap-4">
              <span className="font-mono text-[10px] tracking-wider text-zinc-500 select-none uppercase">
                Studio Edition 2026
              </span>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
