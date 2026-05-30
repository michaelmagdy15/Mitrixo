"use client";

import React, { useState, useEffect, useMemo } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Database,
  Cpu,
  Layers,
  Film,
  Camera,
  Compass,
  Sliders,
  Sparkles,
} from "lucide-react";

// Types
interface TechFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  details: string[];
}

interface CreativeFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  details: string[];
}

// SIDE A: Engineering Services
const TECH_FEATURES: TechFeature[] = [
  {
    id: "saas",
    title: "Custom Enterprise SaaS",
    description:
      "We design and build secure, multi-tenant SaaS applications from zero to scale. By engineering edge-based serverless workflows, integrated subscription billing, and isolated tenant databases, we enable your platform to scale from launch to millions of active sessions without architectural rewrites.",
    icon: Cpu,
    details: [
      "Multi-Tenant Isolation",
      "Serverless Edge Workers",
      "Stripe Subscriptions",
      "Zero-Downtime CD",
    ],
  },
  {
    id: "cms",
    title: "Enterprise Headless CMS",
    description:
      "Custom headless CMS platforms designed for high-performance marketing and editing teams. We federate dynamic GraphQL and REST endpoints with pre-rendered visual pipelines, delivering instantaneous content updates and a globally optimized Time-to-First-Byte at the CDN edge.",
    icon: Layers,
    details: [
      "GraphQL Core Architecture",
      "Dynamic Content Modeling",
      "Asset Pipeline CDN",
      "Edge Content Delivery",
    ],
  },
  {
    id: "stack",
    title: "Full-Stack Development",
    description:
      "Production-ready web systems built with strict Type-Safe TypeScript, Next.js, and React. We specialize in clean, modular architecture, lightning-fast client hydration, and zero layout shift interfaces that guarantee top-tier Search Engine Optimization rankings and silky animations.",
    icon: Sparkles,
    details: [
      "Type-Safe Endpoints",
      "Distributed State Cache",
      "SSR Page Prefetching",
      "Tailwind Component Design",
    ],
  },
  {
    id: "db",
    title: "Database Scaling & CDC",
    description:
      "Resilient data engineering for high-throughput transactional apps. We deploy globally distributed PostgreSQL and Neon databases with intelligent read-replica routing, active connection pooling, and real-time Change Data Capture streams built for demanding workloads.",
    icon: Database,
    details: [
      "Read-Replica Clustering",
      "Atomic Distributed Locks",
      "Real-Time CDC Streams",
      "Horizontal Auto-Partitioning",
    ],
  },
];

// SIDE B: Visuals Services
const CREATIVE_FEATURES: CreativeFeature[] = [
  {
    id: "media",
    title: "Cinematic Brand Media",
    description:
      "High-end commercial films, corporate brand identity videos, and high-concept promotional narratives. We handle complete pre-production scripting, professional lighting direction, anamorphic lens work, and full HDR color mastering using industry-standard RED cameras.",
    icon: Film,
    details: [
      "8K RAW Redcode Capture",
      "Anamorphic Optical Profiles",
      "Color Grading & HDR Master",
      "Dolby Atmos Mastering",
    ],
  },
  {
    id: "drone",
    title: "Drone Cinematography",
    description:
      "Licensed, high-precision aerial videography and FPV chase drone tracking. We capture high-altitude dynamic sequences, epic landscape panoramas, and low-altitude action shots at 4K HDR ProRes to elevate visual engagement in commercial advertising.",
    icon: Compass,
    details: [
      "FPV Acrobatic Tracking",
      "4K HDR ProRES Output",
      "GPS Route Stabilization",
      "Heavy Lift Dual-Operator",
    ],
  },
  {
    id: "assets",
    title: "Elite Digital Assets",
    description:
      "Premium digital overlays, custom Cinema LUT packages, analog film grain presets, and sound library modules built for visual designers and video editors. Our assets are compiled in Apple ProRes 4444 and utilized by agencies globally.",
    icon: Sliders,
    details: [
      "Custom Film Grain Overlays",
      "Dynamic Transition LUTs",
      "Modular UI Glitch Assets",
      "Cinematic Sound Library",
    ],
  },
  {
    id: "story",
    title: "Strategic Storytelling",
    description:
      "Compelling documentary-style brand narratives focused on real founder and customer stories. We conduct high-end editorial planning and pristine audio capture to craft stories that cultivate trust, establish authority, and drive customer conversion.",
    icon: Camera,
    details: [
      "Multi-Phase Script Dev",
      "Aesthetic Lighting Design",
      "Documentary Style Capture",
      "Directorial Consultation",
    ],
  },
];

export default function EcosystemHub() {
  const [activeSide, setActiveSide] = useState<"none" | "engineering" | "visuals">("none");
  const [selectedTech, setSelectedTech] = useState<string>("saas");
  const [selectedCreative, setSelectedCreative] = useState<string>("media");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeTechData = useMemo(() => {
    return TECH_FEATURES.find((item) => item.id === selectedTech) || TECH_FEATURES[0];
  }, [selectedTech]);

  const activeCreativeData = useMemo(() => {
    return CREATIVE_FEATURES.find((item) => item.id === selectedCreative) || CREATIVE_FEATURES[0];
  }, [selectedCreative]);

  const mechanicalTransition = {
    type: "spring" as const,
    stiffness: 120,
    damping: 14,
  };

  return (
    <section className="relative w-full min-h-screen bg-[#030712] text-[#F8F9FA] overflow-hidden flex flex-col font-sans select-none">

      {/* Absolute Header Overlay */}
      <ScrollReveal direction="up" className="absolute top-0 left-0 w-full z-45 pointer-events-none">
        <div className="px-6 py-5 flex items-center gap-3 bg-gradient-to-b from-[#030712]/90 to-transparent pointer-events-auto">
          <Image
            src="/logo.png"
            alt="Mitrixo Logo"
            width={112}
            height={28}
            className="h-7 w-auto object-contain bg-transparent select-none"
            priority
          />
          <div className="border-l border-zinc-800 pl-3 py-0.5">
            <h3 className="text-[9px] tracking-[0.25em] font-semibold text-zinc-500 uppercase leading-none">
              Studio Ecosystem
            </h3>
          </div>
        </div>
      </ScrollReveal>

      {/* Main Split Axis Layout */}
      <div className="flex flex-col lg:flex-row flex-1 w-full relative min-h-screen pt-16">

        {/* =============================================================
            SIDE A: ENGINEERING STUDIO
            ============================================================= */}
        <ScrollReveal direction="left" className="w-full lg:w-1/2 flex-1 flex flex-col">
          <motion.div
            onMouseEnter={() => setActiveSide("engineering")}
            onMouseLeave={() => setActiveSide("none")}
            animate={
              isLargeScreen
                ? {
                    width:
                      activeSide === "engineering"
                        ? "60%"
                        : activeSide === "visuals"
                        ? "40%"
                        : "50%",
                    filter:
                      activeSide === "visuals"
                        ? "blur(8px) brightness(0.35) grayscale(0.5)"
                        : "blur(0px) brightness(1) grayscale(0)",
                  }
                : { filter: "none" }
            }
            transition={mechanicalTransition}
            className="relative w-full flex-1 min-h-[40vh] lg:min-h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.04] bg-[#030712] group/engineering"
          >
            {/* Ambient Glow */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-sky-500/[0.02] blur-[100px] pointer-events-none" />

            {/* Grid Background Overlay */}
            <div className="absolute inset-0 bg-grid-blueprint opacity-[0.2] pointer-events-none" />

            {/* Content Header */}
            <div className="relative z-20 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-sky-400" />
                <span className="text-[10px] font-sans tracking-[0.25em] text-sky-400 font-semibold uppercase">
                  Systems &amp; Engineering
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-1 uppercase">
                Mitrixo<span className="text-zinc-500">.</span>
                <span className="text-sky-400">Eng</span>
              </h1>
              <p className="text-xs md:text-sm text-zinc-400 max-w-lg mt-1 font-light leading-relaxed">
                High-availability web applications, customized cloud automation, complex API integrations, and low-latency database clustering architected for enterprise scaling.
              </p>
            </div>

            {/* Selection List Grid */}
            <div className="relative z-20 my-8 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                {TECH_FEATURES.map((tech) => {
                  const IconComp = tech.icon;
                  const isSelected = selectedTech === tech.id;

                  return (
                    <button
                      key={tech.id}
                      onClick={() => setSelectedTech(tech.id)}
                      className={`relative p-4 rounded-xl text-left transition-all duration-300 border backdrop-blur-sm ${
                        isSelected
                          ? "bg-white/[0.04] border-sky-400/30 shadow-[0_0_20px_rgba(56,189,248,0.06)]"
                          : "bg-white/[0.01] border-white/[0.03] hover:bg-white/[0.03] hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`p-1.5 rounded-lg transition-colors ${
                            isSelected
                              ? "bg-sky-400/10 text-sky-400"
                              : "bg-white/[0.02] text-zinc-500"
                          }`}
                        >
                          <IconComp size={16} />
                        </div>
                      </div>
                      <h3 className="font-semibold text-xs mt-3 tracking-wide text-zinc-250 uppercase">
                        {tech.title}
                      </h3>
                    </button>
                  );
                })}
              </div>

              {/* Service Panel */}
              <div className="min-h-[160px] p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] backdrop-blur-xl relative overflow-hidden flex flex-col gap-3 shadow-lg">
                <div className="flex items-center pb-2 border-b border-white/[0.04]">
                  <span className="font-sans text-[9px] font-semibold uppercase text-sky-400 tracking-wider">
                    About This Service
                  </span>
                </div>

                <h4 className="font-bold text-sm tracking-wide text-white">
                  {activeTechData.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {activeTechData.description}
                </p>

                {/* Detail Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {activeTechData.details.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] px-2 py-0.5 bg-white/[0.02] border border-white/[0.04] text-zinc-400 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="relative z-20 mt-auto pt-4 border-t border-white/[0.04]">
              <a
                href="#contact"
                className="text-sky-400 text-xs font-medium tracking-wide hover:text-sky-300 transition-colors"
              >
                Start a Project →
              </a>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* =============================================================
            SIDE B: CREATIVE PRODUCTION
            ============================================================= */}
        <ScrollReveal direction="right" className="w-full lg:w-1/2 flex-1 flex flex-col">
          <motion.div
            onMouseEnter={() => setActiveSide("visuals")}
            onMouseLeave={() => setActiveSide("none")}
            animate={
              isLargeScreen
                ? {
                    width:
                      activeSide === "visuals"
                        ? "60%"
                        : activeSide === "engineering"
                        ? "40%"
                        : "50%",
                    filter:
                      activeSide === "engineering"
                        ? "blur(8px) brightness(0.35) grayscale(0.5)"
                        : "blur(0px) brightness(1) grayscale(0)",
                  }
                : { filter: "none" }
            }
            transition={mechanicalTransition}
            className="relative w-full flex-1 min-h-[40vh] lg:min-h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#030712] group/visuals"
          >
            {/* Ambient Glow */}
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-violet-500/[0.02] blur-[100px] pointer-events-none" />

            {/* Grid Background Overlay */}
            <div className="absolute inset-0 bg-grid-blueprint opacity-[0.2] pointer-events-none" />

            {/* Content Header */}
            <div className="relative z-20 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-violet-400" />
                <span className="text-[10px] font-sans tracking-[0.25em] text-violet-400 font-semibold uppercase">
                  Creative Production &amp; Film
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-1 uppercase">
                Mitry<span className="text-zinc-500">.</span>
                <span className="text-violet-400">Visuals</span>
              </h1>
              <p className="text-xs md:text-sm text-zinc-400 max-w-lg mt-1 font-light leading-relaxed">
                Ultra-high-definition commercial film production, dynamic drone cinema, premium edit overlays, and deeply cinematic brand storytelling.
              </p>
            </div>

            {/* Selection List Grid */}
            <div className="relative z-20 my-8 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                {CREATIVE_FEATURES.map((creative) => {
                  const IconComp = creative.icon;
                  const isSelected = selectedCreative === creative.id;

                  return (
                    <button
                      key={creative.id}
                      onClick={() => setSelectedCreative(creative.id)}
                      className={`relative p-4 rounded-xl text-left transition-all duration-300 border backdrop-blur-sm ${
                        isSelected
                          ? "bg-white/[0.04] border-violet-400/30 shadow-[0_0_20px_rgba(139,92,246,0.06)]"
                          : "bg-white/[0.01] border-white/[0.03] hover:bg-white/[0.03] hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`p-1.5 rounded-lg transition-colors ${
                            isSelected
                              ? "bg-violet-400/10 text-violet-400"
                              : "bg-white/[0.02] text-zinc-500"
                          }`}
                        >
                          <IconComp size={16} />
                        </div>
                      </div>
                      <h3 className="font-semibold text-xs mt-3 tracking-wide text-zinc-250 uppercase">
                        {creative.title}
                      </h3>
                    </button>
                  );
                })}
              </div>

              {/* Service Panel */}
              <div className="min-h-[160px] p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] backdrop-blur-xl relative overflow-hidden flex flex-col gap-3 shadow-lg">
                <div className="flex items-center pb-2 border-b border-white/[0.04]">
                  <span className="font-sans text-[9px] font-semibold uppercase text-violet-400 tracking-wider">
                    About This Service
                  </span>
                </div>

                <h4 className="font-bold text-sm tracking-wide text-white">
                  {activeCreativeData.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {activeCreativeData.description}
                </p>

                {/* Detail Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {activeCreativeData.details.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] px-2 py-0.5 bg-white/[0.02] border border-white/[0.04] text-zinc-400 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="relative z-20 mt-auto pt-4 border-t border-white/[0.04]">
              <a
                href="#contact"
                className="text-violet-400 text-xs font-medium tracking-wide hover:text-violet-300 transition-colors"
              >
                Start a Project →
              </a>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Central badge divider */}
        <motion.div
          animate={{
            left: isLargeScreen
              ? activeSide === "engineering"
                ? "60%"
                : activeSide === "visuals"
                ? "40%"
                : "50%"
              : "50%",
          }}
          transition={mechanicalTransition}
          className="absolute top-16 bottom-0 -translate-x-1/2 w-[1px] bg-white/[0.04] pointer-events-none hidden lg:block z-30"
        >
          <motion.div
            animate={{
              y: activeSide === "engineering" ? -30 : activeSide === "visuals" ? 30 : 0,
            }}
            transition={mechanicalTransition}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#030712] border border-white/[0.08] flex items-center justify-center shadow-2xl pointer-events-auto cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-white/[0.04] flex items-center justify-center text-[8px] font-mono tracking-tighter text-zinc-500 uppercase">
              {activeSide === "engineering"
                ? "ENG"
                : activeSide === "visuals"
                ? "VIS"
                : "STUDIO"}
            </div>
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}
