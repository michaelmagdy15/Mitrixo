"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Terminal,
  Database,
  Cpu,
  Layers,
  Film,
  Camera,
  Compass,
  Zap,
  Activity,
  HardDrive,
  Focus,
  Maximize,
  Play,
  Maximize2,
  Sliders,
  Settings,
  ShieldCheck,
  TrendingUp,
  Server
} from "lucide-react";

// Types
interface TechFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  details: string[];
  metrics: { label: string; value: string }[];
}

interface CreativeFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  details: string[];
  specs: { label: string; value: string }[];
}

// -------------------------------------------------------------
// SIDE A: Engineering Mock Data
// -------------------------------------------------------------
const TECH_FEATURES: TechFeature[] = [
  {
    id: "saas",
    title: "Custom SaaS",
    description: "Highly tailored, multi-tenant cloud ecosystems designed for maximum efficiency.",
    icon: Cpu,
    details: ["Multi-Tenant Isolation", "Serverless Edge Workers", "Real-Time Webhooks", "Zero-Downtime CD"],
    metrics: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Edge Latency", value: "<12ms" }
    ]
  },
  {
    id: "cms",
    title: "Enterprise CMS",
    description: "Headless content platforms powered by distributed, performant database routing.",
    icon: Layers,
    details: ["GraphQL Core Architecture", "Dynamic Content Modeling", "Asset Pipeline CDN", "Edge Content Delivery"],
    metrics: [
      { label: "TTFB Response", value: "18ms" },
      { label: "Asset Comp.", value: "94%" }
    ]
  },
  {
    id: "stack",
    title: "Full-Stack Architecture",
    description: "Robust type-safe frameworks built utilizing modern asynchronous state synchronization.",
    icon: Terminal,
    details: ["Type-Safe Endpoints", "Distributed State Cache", "SSR Page Prefetching", "Tailwind Component Design"],
    metrics: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Hydration Time", value: "0.2s" }
    ]
  },
  {
    id: "db",
    title: "Database Scaling",
    description: "Globally distributed clusters optimized with smart pooling and read-replica routing.",
    icon: Database,
    details: ["Read-Replica Clustering", "Atomic Distributed Locks", "Real-Time CDC Streams", "Horizontal Auto-Partitioning"],
    metrics: [
      { label: "Queries / Sec", value: "15,000+" },
      { label: "Sync Latency", value: "<3ms" }
    ]
  }
];

// -------------------------------------------------------------
// SIDE B: Visuals Mock Data
// -------------------------------------------------------------
const CREATIVE_FEATURES: CreativeFeature[] = [
  {
    id: "media",
    title: "Cinematic Media",
    description: "High-contrast commercial advertising and high-concept video narratives.",
    icon: Film,
    details: ["8K RAW Redcode Capture", "Anamorphic Optical Profiles", "Color Grading & HDR Master", "Dolby Atmos Mastering"],
    specs: [
      { label: "Camera Core", value: "RED V-Raptor" },
      { label: "Bit Depth", value: "16-bit Linear" }
    ]
  },
  {
    id: "drone",
    title: "Drone Cinematography",
    description: "Precision low-altitude dynamic mapping and dramatic aerial storytelling.",
    icon: Compass,
    details: ["FPV Acrobatic Tracking", "4K HDR ProRES Output", "GPS Route Stabilization", "Heavy Lift Dual-Operator"],
    specs: [
      { label: "Platform", value: "Inspire 3 FPV" },
      { label: "Wind Toler.", value: "14 m/s" }
    ]
  },
  {
    id: "assets",
    title: "Elite Digital Assets",
    description: "High-fidelity production elements, motion designs, and modular shaders.",
    icon: Sliders,
    details: ["Custom Film Grain Overlays", "Dynamic Transition LUTs", "Modular UI Glitch Assets", "Cinematic Sound Library"],
    specs: [
      { label: "Format", value: "ProRes 4444" },
      { label: "Total Assets", value: "320+ Packs" }
    ]
  },
  {
    id: "story",
    title: "Brand Storytelling",
    description: "Emotionally resonant marketing design built around authentic character arcs.",
    icon: Camera,
    details: ["Multi-Phase Script Dev", "Aesthetic Lighting Design", "Documentary Style Capture", "Directorial Consultation"],
    specs: [
      { label: "Aspect Ratio", value: "2.39:1 Cinema" },
      { label: "Audio Capture", value: "32-bit Float" }
    ]
  }
];

// Simulation log messages for Side A console
const MOCK_CONSOLE_LOGS = [
  "[SYS] Mitrixo Core Initializing v4.2.1-prod...",
  "[DB] Read-Replica sync latency: 1.8ms (Stable)",
  "[NET] Edge edge-cluster-us-east: 100% active nodes",
  "[SEC] Vault credential verification: OK",
  "[SYS] Database connection pool capacity: 98.4%",
  "[API] Inbound traffic load balanced to 4 nodes",
  "[DB] Auto-indexing triggered for metadata_schema",
  "[NET] HTTP/3 protocol successfully negotiated (TTFB: 11ms)",
  "[SYS] Server heat index check: 42°C (Optimal)",
  "[API] Cache hit ratio: 94.6% - CDN serving assets",
  "[SEC] Rate-limiter threat analysis: 0 malicious signatures detected",
  "[SYS] Telemetry broadcast online: WebSockets connected"
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

  // Telemetry logs for Side A
  const [logs, setLogs] = useState<string[]>(MOCK_CONSOLE_LOGS.slice(0, 5));
  
  // Custom camera viewport data for Side B
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [focusDistance, setFocusDistance] = useState(2.8);
  const [exposureLevel, setExposureLevel] = useState(0.0);
  const [isoValue, setIsoValue] = useState(400);

  // Mouse hover coordinate tracking for Side A grid lines
  const sideARef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const mouseXStr = useTransform(mouseX, (x) => `${x.toFixed(0)}px`);
  const mouseYStr = useTransform(mouseY, (y) => `${y.toFixed(0)}px`);

  // -------------------------------------------------------------
  // Side A Console Log Stream Simulation
  // -------------------------------------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLog = MOCK_CONSOLE_LOGS[Math.floor(Math.random() * MOCK_CONSOLE_LOGS.length)];
        return [...prev.slice(1), nextLog];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // -------------------------------------------------------------
  // Side B Timecode & Camera Telemetry Simulation
  // -------------------------------------------------------------
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const hrs = Math.floor(frame / 86400) % 24;
      const mins = Math.floor(frame / 3600) % 60;
      const secs = Math.floor(frame / 60) % 60;
      const frms = frame % 24;
      
      const format = (num: number) => String(num).padStart(2, "0");
      setTimecode(`${format(hrs)}:${format(mins)}:${format(secs)}:${format(frms)}`);
      
      // Drifting focus and exposure values slightly to look dynamic
      if (frame % 30 === 0) {
        setFocusDistance((prev) => {
          const delta = (Math.random() - 0.5) * 0.4;
          return Math.max(1.2, Math.min(8.5, parseFloat((prev + delta).toFixed(1))));
        });
        setExposureLevel((prev) => {
          const delta = (Math.random() - 0.5) * 0.3;
          return Math.max(-1.3, Math.min(1.3, parseFloat((prev + delta).toFixed(1))));
        });
        setIsoValue((prev) => {
          const options = [200, 400, 800, 1600];
          if (Math.random() > 0.7) {
            return options[Math.floor(Math.random() * options.length)];
          }
          return prev;
        });
      }
    }, 16.66); // ~60fps increment
    return () => clearInterval(interval);
  }, []);

  // Handle cursor positioning within Side A for blueprint projection mapping
  const handleSideAMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sideARef.current) {
      const rect = sideARef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  // Find active data profiles
  const activeTechData = useMemo(() => {
    return TECH_FEATURES.find((item) => item.id === selectedTech) || TECH_FEATURES[0];
  }, [selectedTech]);

  const activeCreativeData = useMemo(() => {
    return CREATIVE_FEATURES.find((item) => item.id === selectedCreative) || CREATIVE_FEATURES[0];
  }, [selectedCreative]);

  // Framer Motion spring transition setup
  const mechanicalTransition = {
    type: "spring" as const,
    stiffness: 120,
    damping: 14
  };

  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0C] text-[#F8F9FA] overflow-hidden flex flex-col font-sans select-none">
      
      {/* -------------------------------------------------------------
          HEADER & INTERACTIVE BRAND LOGO CAP
         ------------------------------------------------------------- */}
      <div className="absolute top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-gradient-to-bottom from-black/80 to-transparent pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="w-8 h-8 rounded border border-[#1E293B] bg-gradient-to-br from-[#111113] to-[#0A0A0C] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="font-extrabold text-xs tracking-widest text-[#F8F9FA] group-hover:text-[#F59E0B] transition-colors">
              M
            </span>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.25em] font-semibold text-zinc-500 uppercase">
              Ecosystem Core
            </h3>
            <h2 className="text-xs font-bold tracking-[0.05em] text-[#F8F9FA]">
              MITRIX.IO
            </h2>
          </div>
        </div>

        {/* Global Hub State Indicators */}
        <div className="hidden sm:flex items-center gap-4 text-[10px] tracking-widest font-mono text-zinc-500 pointer-events-auto">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            ENG: ONLINE
          </span>
          <span className="text-zinc-700">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            VISUALS: STANDBY
          </span>
        </div>
      </div>

      {/* -------------------------------------------------------------
          MAIN SPLIT SYSTEM CONTAINER
         ------------------------------------------------------------- */}
      <div className="flex flex-col lg:flex-row flex-1 w-full relative min-h-screen pt-16">
        
        {/* =============================================================
            SIDE A: MITRIXO ENGINEERING (Custom SaaS, Enterprise CMS...)
            ============================================================= */}
        <motion.div
          ref={sideARef}
          onMouseMove={handleSideAMouseMove}
          onMouseEnter={() => setActiveSide("engineering")}
          onMouseLeave={() => setActiveSide("none")}
          animate={{
            width: isLargeScreen ? (activeSide === "engineering" ? "60%" : activeSide === "visuals" ? "40%" : "50%") : "100%",
            filter: activeSide === "visuals" ? "blur(8px) brightness(0.35) grayscale(0.5)" : "blur(0px) brightness(1) grayscale(0)"
          }}
          transition={mechanicalTransition}
          className="relative flex-1 min-h-[50vh] lg:min-h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#1E293B]/40 bg-[#0A0A0C] cursor-crosshair group/engineering"
        >
          {/* Subtle blueprint background gridlines */}
          <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" />
          
          {/* Dynamic Laser-Tracking Cursor Grid (Side A exclusive) */}
          {activeSide === "engineering" && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
              {/* Horizontal Tracker Line */}
              <motion.div 
                style={{ top: springY }}
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent z-10"
              />
              {/* Vertical Tracker Line */}
              <motion.div 
                style={{ left: springX }}
                className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#3B82F6]/30 to-transparent z-10"
              />
              {/* Digital Reticle Crosshair */}
              <motion.div
                style={{ left: springX, top: springY, x: "-50%", y: "-50%" }}
                className="absolute w-8 h-8 rounded-full border border-[#3B82F6]/40 flex items-center justify-center z-10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              </motion.div>
              
              {/* Cursor Coordinate Readout */}
              <motion.div
                style={{ left: springX, top: springY }}
                className="absolute ml-4 mt-4 font-mono text-[9px] text-[#3B82F6] bg-[#0A0A0C]/90 border border-[#3B82F6]/30 px-2 py-1 rounded shadow-xl backdrop-blur-md z-20 flex flex-col gap-0.5"
              >
                <span>X_SYS: <motion.span>{mouseXStr}</motion.span></span>
                <span>Y_SYS: <motion.span>{mouseYStr}</motion.span></span>
                <span className="text-[7px] text-zinc-500 uppercase tracking-widest">Blueprint Map</span>
              </motion.div>
            </div>
          )}

          {/* Technical blueprint accent nodes (Corners) */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#3B82F6]/30 pointer-events-none" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#3B82F6]/30 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#3B82F6]/30 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#3B82F6]/30 pointer-events-none" />

          {/* CONTENT HEADER */}
          <div className="relative z-20 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#3B82F6]" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#3B82F6] font-semibold">
                DIVISION A // SYSTEM DESIGN
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-1 uppercase">
              Mitrixo<span className="text-zinc-500">.</span><span className="text-[#3B82F6] text-glow-[#3B82F6]">Eng</span>
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 max-w-lg mt-1 font-light leading-relaxed">
              High-availability web systems, customized cloud automation, complex API integrations, and low-latency database clustering architected for enterprise scaling.
            </p>
          </div>

          {/* INTERACTIVE PANEL SELECTION GRID */}
          <div className="relative z-20 my-8 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3">
              {TECH_FEATURES.map((tech) => {
                const IconComp = tech.icon;
                const isSelected = selectedTech === tech.id;
                
                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTech(tech.id)}
                    className={`relative p-4 rounded text-left transition-all duration-300 border backdrop-blur-sm ${
                      isSelected
                        ? "bg-[#111113] border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.08)]"
                        : "bg-[#111113]/30 border-zinc-800/60 hover:bg-[#111113]/55 hover:border-zinc-700"
                    }`}
                  >
                    {/* Corner sub-elements for premium blueprint look */}
                    {isSelected && (
                      <>
                        <div className="absolute -top-[1.5px] -left-[1.5px] w-2 h-2 bg-[#3B82F6]" />
                        <div className="absolute -bottom-[1.5px] -right-[1.5px] w-2 h-2 bg-[#3B82F6]" />
                      </>
                    )}
                    
                    <div className="flex items-start justify-between">
                      <div className={`p-1.5 rounded transition-colors ${
                        isSelected ? "bg-[#3B82F6]/10 text-[#3B82F6]" : "bg-zinc-900 text-zinc-500"
                      }`}>
                        <IconComp size={16} />
                      </div>
                      <span className="font-mono text-[8px] text-zinc-600 tracking-wider">
                        [0{TECH_FEATURES.findIndex(f => f.id === tech.id) + 1}]
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-xs mt-3 tracking-wide text-zinc-200">
                      {tech.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* DETAIL TELEMETRY BOARD */}
            <div className="min-h-[160px] p-5 rounded border border-zinc-800/80 bg-[#111113]/80 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
              
              {/* Technical lines background */}
              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                  <circle cx="100" cy="0" r="80" stroke="white" strokeWidth="1.5" fill="none" />
                  <circle cx="100" cy="0" r="60" stroke="white" strokeWidth="1.5" fill="none" />
                  <circle cx="100" cy="0" r="40" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800/40">
                  <span className="font-mono text-[9px] uppercase text-[#3B82F6] tracking-widest flex items-center gap-1.5">
                    <Activity size={10} className="animate-pulse" />
                    Telemetry: Active Feature Specs
                  </span>
                  <span className="font-mono text-[8px] text-zinc-500 uppercase">
                    SYS_STBL // OK
                  </span>
                </div>

                <h4 className="font-bold text-sm tracking-wide text-[#F8F9FA] mb-1">
                  {activeTechData.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                  {activeTechData.description}
                </p>

                {/* Sub features tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {activeTechData.details.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="font-mono text-[9px] px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic metrics bar */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-800/30">
                {activeTechData.metrics.map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-900">
                    <span className="text-[9px] tracking-wider text-zinc-500 font-mono">
                      {metric.label}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#3B82F6]">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LOWER LOGS DISPLAY CONSOLE */}
          <div className="relative z-20 mt-auto pt-4 border-t border-zinc-800/40 font-mono text-[9px]">
            <div className="flex items-center justify-between mb-2 text-zinc-500">
              <span className="flex items-center gap-1.5 uppercase tracking-widest">
                <Terminal size={10} />
                Local Thread Terminal
              </span>
              <span className="text-[8px] text-[#3B82F6] opacity-75">
                WS_CONN_CONNECTED
              </span>
            </div>
            
            <div className="bg-[#0A0A0C]/90 p-3 rounded border border-zinc-900/80 max-h-[85px] overflow-y-auto space-y-1 scrollbar-thin text-zinc-400">
              <AnimatePresence initial={false}>
                {logs.map((log, idx) => (
                  <motion.div
                    key={idx + log}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-2 items-start"
                  >
                    <span className="text-[#3B82F6] select-none">&gt;</span>
                    <span className="text-zinc-400 leading-3">{log}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </motion.div>

        {/* =============================================================
            SIDE B: MITRY VISUALS ECOSYSTEM (Cinematic, Drone...)
            ============================================================= */}
        <motion.div
          onMouseEnter={() => setActiveSide("visuals")}
          onMouseLeave={() => setActiveSide("none")}
          animate={{
            width: isLargeScreen ? (activeSide === "visuals" ? "60%" : activeSide === "engineering" ? "40%" : "50%") : "100%",
            filter: activeSide === "engineering" ? "blur(8px) brightness(0.35) grayscale(0.5)" : "blur(0px) brightness(1) grayscale(0)"
          }}
          transition={mechanicalTransition}
          className="relative flex-1 min-h-[50vh] lg:min-h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#0A0A0C] cursor-cell group/visuals"
        >
          {/* Subtle dark visual media grids (reveals stronger when hovered or in default status) */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] transition-opacity duration-700 pointer-events-none"
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop')` }} />
          
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black pointer-events-none" />

          {/* Dynamic dark visual grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.02),transparent)] opacity-100 pointer-events-none" />
          
          {/* VIEWPORT SIMULATOR VIEW (CAMERA viewfinder corners, resolution, crop marks) */}
          <div className="absolute inset-4 md:inset-8 border border-zinc-900/60 rounded pointer-events-none z-10 transition-colors duration-500 group-hover/visuals:border-[#F59E0B]/20">
            {/* Widescreen crop lines overlay (Cinematic format indicator) */}
            <div className="absolute top-[10%] bottom-[10%] left-0 right-0 border-y border-dashed border-zinc-800/10 pointer-events-none" />
            
            {/* Viewfinder Corners (L-shapes) */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-zinc-600/70 group-hover/visuals:border-[#F59E0B]/70 transition-colors" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-zinc-600/70 group-hover/visuals:border-[#F59E0B]/70 transition-colors" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-zinc-600/70 group-hover/visuals:border-[#F59E0B]/70 transition-colors" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-zinc-600/70 group-hover/visuals:border-[#F59E0B]/70 transition-colors" />

            {/* Viewfinder Exposure Slider Meter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 group-hover/visuals:opacity-100 transition-opacity">
              <span className="font-mono text-[8px] text-zinc-500 tracking-wider">EV LEVEL</span>
              <div className="flex items-center gap-1 font-mono text-[9px] text-zinc-400">
                <span>-2</span>
                <span className="text-zinc-600">..</span>
                <span>-1</span>
                <span className="text-zinc-600">..</span>
                <span className={`px-1 py-0.5 rounded ${exposureLevel === 0 ? "bg-[#F59E0B]/20 text-[#F59E0B]" : "text-zinc-400"}`}>0</span>
                <span className="text-zinc-600">..</span>
                <span>+1</span>
                <span className="text-zinc-600">..</span>
                <span>+2</span>
              </div>
              {/* Tiny indicator tag */}
              <div className="relative w-28 h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                <motion.div 
                  animate={{ left: `${((exposureLevel + 2) / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 w-2 h-full bg-[#F59E0B] rounded-full -ml-1"
                />
              </div>
            </div>

            {/* Simulated Center Focus Crosshair Reticle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-10 h-10 border border-dashed border-zinc-800 group-hover/visuals:border-[#F59E0B]/20 rounded-full flex items-center justify-center transition-colors">
                <Focus size={14} className="text-zinc-700 group-hover/visuals:text-[#F59E0B]/40 transition-colors" />
              </div>
            </div>
            
            {/* Lens Telemetry Overlays */}
            <div className="absolute top-4 left-4 font-mono text-[8px] text-zinc-500 flex flex-col gap-1">
              <span className="flex items-center gap-1 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                REC 8K RAW
              </span>
              <span>FPS: 23.976</span>
              <span>SHTR: 180.0°</span>
            </div>

            <div className="absolute top-4 right-4 font-mono text-[8px] text-zinc-500 flex flex-col items-end gap-1">
              <span className="text-zinc-300 font-bold uppercase tracking-wider">MITRY CREATIVE</span>
              <span>ISO: {isoValue}</span>
              <span>F_DIST: {focusDistance}m</span>
            </div>
            
            {/* Bottom Telemetry Display */}
            <div className="absolute bottom-4 left-4 font-mono text-[8px] text-zinc-500 flex items-center gap-1.5">
              <span className="text-[#F59E0B] font-bold">TC</span>
              <span className="text-zinc-300">{timecode}</span>
            </div>
            
            <div className="absolute bottom-4 right-4 font-mono text-[8px] text-zinc-500 flex items-center gap-1.5">
              <span>LENS: 35mm T1.5</span>
            </div>
          </div>

          {/* CONTENT HEADER */}
          <div className="relative z-20 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#F59E0B]" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#F59E0B] font-semibold">
                DIVISION B // CREATIVE LAB
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-1 uppercase">
              Mitry<span className="text-zinc-500">.</span><span className="text-[#F59E0B] text-amber-glow">Visuals</span>
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 max-w-lg mt-1 font-light leading-relaxed">
              Ultra-high-definition film production, dramatic drone choreography, premium asset design, and deeply cinematic brand storytelling crafted for commercial distinction.
            </p>
          </div>

          {/* INTERACTIVE FEATURE SELECTION GRID */}
          <div className="relative z-20 my-8 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3">
              {CREATIVE_FEATURES.map((creative) => {
                const IconComp = creative.icon;
                const isSelected = selectedCreative === creative.id;
                
                return (
                  <button
                    key={creative.id}
                    onClick={() => setSelectedCreative(creative.id)}
                    className={`relative p-4 rounded text-left transition-all duration-300 border backdrop-blur-sm ${
                      isSelected
                        ? "bg-[#111113] border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.06)]"
                        : "bg-[#111113]/30 border-zinc-800/60 hover:bg-[#111113]/55 hover:border-zinc-700"
                    }`}
                  >
                    {/* XO Glowing Ambient Accents (Side B exclusive indicator) */}
                    {isSelected && (
                      <>
                        <div className="absolute -top-[1.5px] -left-[1.5px] w-2 h-2 bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
                        <div className="absolute -bottom-[1.5px] -right-[1.5px] w-2 h-2 bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
                      </>
                    )}
                    
                    <div className="flex items-start justify-between">
                      <div className={`p-1.5 rounded transition-colors ${
                        isSelected ? "bg-[#F59E0B]/10 text-[#F59E0B]" : "bg-zinc-900 text-zinc-500"
                      }`}>
                        <IconComp size={16} />
                      </div>
                      <span className="font-mono text-[8px] text-zinc-600 tracking-wider">
                        [0{CREATIVE_FEATURES.findIndex(f => f.id === creative.id) + 1}]
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-xs mt-3 tracking-wide text-zinc-200">
                      {creative.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* CREATIVE INFO PANEL */}
            <div className="min-h-[160px] p-5 rounded border border-zinc-800/80 bg-[#111113]/85 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
              
              {/* Circular technical lines */}
              <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                  <line x1="0" y1="100" x2="100" y2="0" stroke="white" strokeWidth="1.5" />
                  <rect x="20" y="20" width="60" height="60" stroke="white" strokeWidth="1.5" fill="none" />
                  <rect x="35" y="35" width="30" height="30" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800/40">
                  <span className="font-mono text-[9px] uppercase text-[#F59E0B] tracking-widest flex items-center gap-1.5">
                    <Camera size={10} className="animate-pulse" />
                    Lens Config: Active Pipeline Specs
                  </span>
                  <span className="font-mono text-[8px] text-zinc-500 uppercase">
                    CAM_READY // STANDBY
                  </span>
                </div>

                <h4 className="font-bold text-sm tracking-wide text-[#F8F9FA] mb-1">
                  {activeCreativeData.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                  {activeCreativeData.description}
                </p>

                {/* Sub details tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {activeCreativeData.details.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="font-mono text-[9px] px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic specs bar */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-800/30">
                {activeCreativeData.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-900">
                    <span className="text-[9px] tracking-wider text-zinc-500 font-mono">
                      {spec.label}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#F59E0B]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DIGITAL MEDIA SHUTTER ACTIONS */}
          <div className="relative z-20 mt-auto pt-4 border-t border-zinc-800/40 flex items-center justify-between font-mono text-[9px]">
            <div className="flex items-center gap-1.5 text-zinc-500 uppercase tracking-widest">
              <Film size={10} />
              Aesthetic Capture Profile
            </div>
            
            {/* Shutter Status trigger button */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] flex items-center gap-1 font-bold animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                LIVE VIEW
              </span>
            </div>
          </div>

        </motion.div>

        {/* =============================================================
            CENTRAL DIVISION SHIFTING AXIS BAR & EMBLEM
            ============================================================= */}
        <div className="absolute top-16 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#1E293B]/20 via-[#1E293B] to-[#1E293B]/20 pointer-events-none hidden lg:block z-30">
          
          {/* Animated cursor tracking balance indicator */}
          <motion.div
            animate={{
              y: activeSide === "engineering" ? -40 : activeSide === "visuals" ? 40 : 0
            }}
            transition={mechanicalTransition}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0A0A0C] border border-zinc-800 flex items-center justify-center shadow-2xl overflow-hidden pointer-events-auto cursor-pointer"
          >
            {/* Radial shift colors in central badge */}
            <motion.div
              animate={{
                rotate: activeSide === "engineering" ? -45 : activeSide === "visuals" ? 45 : 0,
                borderColor: activeSide === "engineering" ? "#3B82F6" : activeSide === "visuals" ? "#F59E0B" : "#1E293B"
              }}
              transition={mechanicalTransition}
              className="absolute inset-1 rounded-full border flex items-center justify-center transition-colors"
            >
              {/* Simulated XO branding core logo overlay */}
              <div className="w-4 h-4 relative flex items-center justify-center font-bold text-[10px] tracking-tighter">
                <span className={activeSide === "engineering" ? "text-[#3B82F6]" : activeSide === "visuals" ? "text-[#F59E0B]" : "text-zinc-600"}>
                  {activeSide === "engineering" ? "ENG" : activeSide === "visuals" ? "VIS" : "XO"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* -------------------------------------------------------------
          BOTTOM TELEMETRY INDEX & CAPTURE CONTROLS
         ------------------------------------------------------------- */}
      <footer className="w-full py-3 px-6 bg-[#111113] border-t border-[#1E293B]/40 relative z-30 flex flex-col md:flex-row items-center justify-between text-zinc-500 font-mono text-[9px] tracking-wider">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <span>PLATFORM STATS: READY</span>
          <span className="text-zinc-700">|</span>
          <span className="text-zinc-400">FPS RECON: 23.976HZ</span>
          <span className="text-zinc-700">|</span>
          <span className="text-[#3B82F6]">DB SCALE: OK</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-zinc-400">EDGE SYNC: 100% HEALTH</span>
          </div>
          <span className="text-zinc-800">|</span>
          <span>© {new Date().getFullYear()} MITRIXIO. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>

    </section>
  );
}
