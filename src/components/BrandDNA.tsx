"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Activity, Cpu, Hammer } from "lucide-react";

export default function BrandDNA() {
  return (
    <section id="brand-dna" className="w-full max-w-6xl mx-auto px-4 py-16 border-t border-white/[0.03]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Brand Statement */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] font-bold tracking-wider uppercase mb-4 border-amber-glow w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            Brand Origin Story
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-sans leading-tight">
            THE MAGICIAN <br />
            IN THE <span className="text-amber-500 text-amber-glow">MACHINE</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-sans">
            MITRIXO is not a random name. It is a mathematical formula of our capability and a signature of who we are. We bridge the gap between complex software logic, low-level computation, and physical inputs.
          </p>
          <div className="mt-6 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] border-l-2 border-l-amber-500">
            <p className="text-zinc-300 text-xs italic font-sans leading-relaxed">
              "As developers, we operate as magicians in the matrix: any problem that comes across, we solve."
            </p>
          </div>
        </div>

        {/* Right Column: Bento Formula Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1: Family Signature */}
          <div className="glass-card bg-[#171717]/40 p-6 rounded-2xl border border-white/[0.03] hover:border-amber-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500/5 border border-amber-500/20 flex items-center justify-center text-amber-500 font-mono text-xs font-bold border-amber-glow">
                M
              </span>
              <h3 className="text-xs font-mono tracking-widest text-zinc-300 uppercase">
                Mitry Signature
              </h3>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              Rooted in the family name of creator Michael Mitry, representing accountability, personal integrity, and visual art mastery.
            </p>
          </div>

          {/* Card 2: The Magician */}
          <div className="glass-card bg-[#171717]/40 p-6 rounded-2xl border border-white/[0.03] hover:border-amber-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Hammer className="w-4 h-4 text-amber-500" />
              <h3 className="text-xs font-mono tracking-widest text-zinc-300 uppercase">
                Problem Solvers
              </h3>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              Operating as system magicians. We do not work within the boundaries of standard templates. If a technical challenge exists, we solve it.
            </p>
          </div>

          {/* Card 3: Binary Core */}
          <div className="glass-card bg-[#171717]/40 p-6 rounded-2xl border border-white/[0.03] hover:border-amber-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="w-4 h-4 text-amber-500" />
              <h3 className="text-xs font-mono tracking-widest text-zinc-300 uppercase">
                Binary Foundations
              </h3>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              The letters <strong>I</strong> and <strong>O</strong> represent <strong>1</strong> and <strong>0</strong>—the baseline binary code that powers all computation.
            </p>
          </div>

          {/* Card 4: The I/O Bridge */}
          <div className="glass-card bg-[#171717]/40 p-6 rounded-2xl border border-white/[0.03] hover:border-amber-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="w-4 h-4 text-amber-500" />
              <h3 className="text-xs font-mono tracking-widest text-zinc-300 uppercase">
                The X Bridge
              </h3>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              The letter <strong>X</strong> stands as the crossing vector between the 1 and the 0—bridging hardware, software, inputs, and outputs.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
