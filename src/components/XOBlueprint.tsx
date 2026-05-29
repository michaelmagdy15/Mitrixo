"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Cpu,
  Layers,
  Zap,
  Activity,
  ArrowRight,
  RefreshCw,
  Gauge,
  Network,
  Maximize2,
  Terminal,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Sliders,
  ChevronRight,
  Binary
} from "lucide-react";

// Types
type TabType = "io" | "xo" | "multiplier";

interface MetricData {
  label: string;
  value: string | number;
  unit?: string;
  change?: string;
  status?: "optimal" | "warning" | "error";
}

export default function XOBlueprint() {
  const [activeTab, setActiveTab] = useState<TabType>("io");
  const [systemTime, setSystemTime] = useState("03:42:34");
  const [latency, setLatency] = useState(1.2);

  // Live indicators simulate system tick
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const timeStr = date.toTimeString().split(" ")[0];
      setSystemTime(timeStr);
      // Random sub-millisecond fluctuation for visual realism
      setLatency(parseFloat((1.0 + Math.random() * 0.4).toFixed(2)));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Framer Motion presets for mechanical transitions
  const mechanicalSpring = {
    type: "spring" as const,
    stiffness: 120,
    damping: 14,
    mass: 1,
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
    exit: { 
      opacity: 0, 
      y: -15,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0A0A0C] text-[#F8F9FA] relative overflow-hidden font-sans p-4 sm:p-8 md:p-12 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Precision Blueprint Grid Layer */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-60" />
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Structural Container */}
      <div className="relative max-w-7xl mx-auto border border-white/5 bg-[#0e0e11]/85 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden flex flex-col min-h-[85vh]">
        
        {/* Component Header / Systems Bar */}
        <header className="border-b border-white/[0.06] p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#111113]/55 relative">
          {/* Top aesthetic border line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-amber-500/20" />
          
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center w-10 h-10 border border-amber-500/20 bg-amber-500/5 rounded-lg overflow-hidden group">
              <span className="text-amber-500 font-extrabold text-lg tracking-widest text-amber-glow animate-pulse">XO</span>
              {/* Corner crosshairs for mechanical blueprint aesthetic */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-amber-500/40" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-amber-500/40" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-amber-500/40" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-amber-500/40" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-semibold tracking-wider text-white uppercase">Systems Blueprint</h1>
                <span className="text-[10px] py-0.5 px-1.5 bg-[#1E293B] border border-blue-500/20 text-blue-400 font-mono rounded">
                  v2.4.0
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono tracking-tight mt-0.5">
                MITRIX CORE DIFFERENTIATOR // STRATEGIC FRAMEWORK
              </p>
            </div>
          </div>

          {/* Technical Diagnostics */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-zinc-400 border-t border-white/[0.04] pt-3 md:pt-0 md:border-none">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>SYS_STATUS: <span className="text-blue-400 font-bold uppercase">Ready</span></span>
            </div>
            <div>
              <span>TIME_UTC: <span className="text-zinc-200">{systemTime}</span></span>
            </div>
            <div>
              <span>LATENCY: <span className="text-amber-500 font-bold text-amber-glow">{latency}ms</span></span>
            </div>
            <div className="hidden sm:block text-zinc-500">
              <span>LOC: [40.7128° N, 74.0060° W]</span>
            </div>
          </div>
        </header>

        {/* Tactical Navigation Tabs */}
        <nav className="flex flex-col sm:flex-row border-b border-white/[0.06] bg-[#0A0A0C]/40 p-2 gap-2">
          {/* Tab 1: I/O */}
          <button
            onClick={() => setActiveTab("io")}
            className="flex-1 relative flex items-center justify-between p-3.5 rounded-lg text-left transition-all duration-300 group overflow-hidden border border-transparent"
          >
            {activeTab === "io" && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-[#111113] border border-white/[0.07] rounded-lg shadow-inner"
                transition={mechanicalSpring}
              />
            )}
            {activeTab === "io" && (
              <motion.div
                layoutId="activeTabBorderGlow"
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500"
                transition={mechanicalSpring}
              />
            )}
            <div className="relative z-10 flex items-center gap-3">
              <div className={`p-2 rounded-md transition-colors ${activeTab === "io" ? "bg-blue-500/10 text-blue-400" : "bg-white/[0.03] text-zinc-400 group-hover:text-zinc-200"}`}>
                <Binary size={18} />
              </div>
              <div>
                <span className="block text-xs font-mono text-zinc-500 tracking-wider">SECTION 01</span>
                <span className={`block font-semibold tracking-wide text-sm ${activeTab === "io" ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                  Input / Output (I/O)
                </span>
              </div>
            </div>
            <span className="relative z-10 text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300 pr-1 hidden md:inline">
              [ 01_COMPILER ]
            </span>
          </button>

          {/* Tab 2: XO */}
          <button
            onClick={() => setActiveTab("xo")}
            className="flex-1 relative flex items-center justify-between p-3.5 rounded-lg text-left transition-all duration-300 group overflow-hidden border border-transparent"
          >
            {activeTab === "xo" && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-[#111113] border border-white/[0.07] rounded-lg shadow-inner"
                transition={mechanicalSpring}
              />
            )}
            {activeTab === "xo" && (
              <motion.div
                layoutId="activeTabBorderGlow"
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-amber-500 text-amber-glow"
                transition={mechanicalSpring}
              />
            )}
            <div className="relative z-10 flex items-center gap-3">
              <div className={`p-2 rounded-md transition-colors ${activeTab === "xo" ? "bg-amber-500/10 text-amber-500 text-amber-glow" : "bg-white/[0.03] text-zinc-400 group-hover:text-zinc-200"}`}>
                <Zap size={18} />
              </div>
              <div>
                <span className="block text-xs font-mono text-zinc-500 tracking-wider">SECTION 02</span>
                <span className={`block font-semibold tracking-wide text-sm ${activeTab === "xo" ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                  Experience Optimization
                </span>
              </div>
            </div>
            <span className="relative z-10 text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300 pr-1 hidden md:inline">
              [ 02_ENGINE ]
            </span>
          </button>

          {/* Tab 3: The Multiplier */}
          <button
            onClick={() => setActiveTab("multiplier")}
            className="flex-1 relative flex items-center justify-between p-3.5 rounded-lg text-left transition-all duration-300 group overflow-hidden border border-transparent"
          >
            {activeTab === "multiplier" && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-[#111113] border border-white/[0.07] rounded-lg shadow-inner"
                transition={mechanicalSpring}
              />
            )}
            {activeTab === "multiplier" && (
              <motion.div
                layoutId="activeTabBorderGlow"
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500"
                transition={mechanicalSpring}
              />
            )}
            <div className="relative z-10 flex items-center gap-3">
              <div className={`p-2 rounded-md transition-colors ${activeTab === "multiplier" ? "bg-blue-500/10 text-blue-400" : "bg-white/[0.03] text-zinc-400 group-hover:text-zinc-200"}`}>
                <Network size={18} />
              </div>
              <div>
                <span className="block text-xs font-mono text-zinc-500 tracking-wider">SECTION 03</span>
                <span className={`block font-semibold tracking-wide text-sm ${activeTab === "multiplier" ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                  The Multiplier (x, 0)
                </span>
              </div>
            </div>
            <span className="relative z-10 text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300 pr-1 hidden md:inline">
              [ 03_SCALE ]
            </span>
          </button>
        </nav>

        {/* Layout Content Canvas */}
        <div className="flex-1 p-6 md:p-8 flex flex-col relative min-h-[450px]">
          <AnimatePresence mode="wait">
            {activeTab === "io" && (
              <motion.div
                key="io"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full"
              >
                {/* Manifesto Left Column */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
                      <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
                        Structural Reification
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                      Raw Data Reimagined <br />
                      As Visual Architecture.
                    </h2>
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">
                      Chaotic, raw enterprise telemetry is a major cognitive overhead. Our architecture 
                      bridges this gulf by constructing deterministic schema parsing pipelines. We ingest high-velocity unstructured vectors and transform them instantly into high-fidelity, production-grade visual UI layouts.
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">
                      By formalizing data structure maps directly inside our render engine, we bypass standard framework translation limits, executing atomic state renders in under 2 milliseconds.
                    </p>
                  </div>

                  {/* Technical Specs List */}
                  <div className="border border-white/[0.06] rounded-xl p-4 bg-[#111113]/30 grid grid-cols-3 gap-4 divide-x divide-white/[0.06] font-mono">
                    <div className="pl-1">
                      <span className="block text-[10px] text-zinc-500 tracking-wider">THROUGHPUT</span>
                      <span className="block text-sm font-bold text-white mt-1">4.8 GB/s</span>
                      <span className="text-[9px] text-emerald-400">Peak Optimized</span>
                    </div>
                    <div className="pl-4">
                      <span className="block text-[10px] text-zinc-500 tracking-wider">RESOLVING</span>
                      <span className="block text-sm font-bold text-white mt-1">0.08 ms</span>
                      <span className="text-[9px] text-blue-400">Low-latency</span>
                    </div>
                    <div className="pl-4">
                      <span className="block text-[10px] text-zinc-500 tracking-wider">PARSING</span>
                      <span className="block text-sm font-bold text-white mt-1">O(1)</span>
                      <span className="text-[9px] text-zinc-500">Atomic Time</span>
                    </div>
                  </div>
                </div>

                {/* Simulator Right Column */}
                <div className="lg:col-span-7 h-full">
                  <IOSimulator mechanicalSpring={mechanicalSpring} />
                </div>
              </motion.div>
            )}

            {activeTab === "xo" && (
              <motion.div
                key="xo"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full"
              >
                {/* Manifesto Left Column */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-amber-500 rounded-full text-amber-glow" />
                      <span className="text-xs font-mono tracking-widest text-amber-500 text-amber-glow uppercase">
                        Experience Engine
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                      Experience Optimization. <br />
                      Zero Frame Overhead.
                    </h2>
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">
                      Speed is the only aesthetic feature that is completely non-negotiable. XO is our hyper-tuning protocol that eliminates layout shift (CLS) and blocks standard thread lag.
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">
                      We optimize deep reactive hooks, isolate layout reflow bounds, and bind animations to smooth spring physics models. The resulting interfaces feel structurally rigid, instantaneous to touch, and run locked at 120 FPS.
                    </p>
                  </div>

                  {/* Technical Specs List */}
                  <div className="border border-white/[0.06] rounded-xl p-4 bg-[#111113]/30 grid grid-cols-3 gap-4 divide-x divide-white/[0.06] font-mono">
                    <div className="pl-1">
                      <span className="block text-[10px] text-zinc-500 tracking-wider">FRAME RATE</span>
                      <span className="block text-sm font-bold text-amber-500 text-amber-glow mt-1">120 FPS</span>
                      <span className="text-[9px] text-zinc-400">Locked Snap</span>
                    </div>
                    <div className="pl-4">
                      <span className="block text-[10px] text-zinc-500 tracking-wider">LAYOUT SHIFT</span>
                      <span className="block text-sm font-bold text-white mt-1">0.000</span>
                      <span className="text-[9px] text-emerald-400">Zero Jitter</span>
                    </div>
                    <div className="pl-4">
                      <span className="block text-[10px] text-zinc-500 tracking-wider">INPUT SPEED</span>
                      <span className="block text-sm font-bold text-white mt-1">0.4 ms</span>
                      <span className="text-[9px] text-blue-400">Zero Throttle</span>
                    </div>
                  </div>
                </div>

                {/* Simulator Right Column */}
                <div className="lg:col-span-7 h-full">
                  <XOSimulator mechanicalSpring={mechanicalSpring} />
                </div>
              </motion.div>
            )}

            {activeTab === "multiplier" && (
              <motion.div
                key="multiplier"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full"
              >
                {/* Manifesto Left Column */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
                      <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
                        Scale Mechanics
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                      Starting From Ground Zero. <br />
                      Scaling Exponentially.
                    </h2>
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">
                      The core blueprint operates on two planes: the absolute structural anchor at ground zero (0), and the exponential expansion coefficient (x).
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">
                      We reject static UI wrappers. Our design systems are self-assembling token arrays. An application built with the XO blueprint handles sudden scaling triggers cleanly, using globally distributed dynamic edge maps.
                    </p>
                  </div>

                  {/* Technical Specs List */}
                  <div className="border border-white/[0.06] rounded-xl p-4 bg-[#111113]/30 grid grid-cols-3 gap-4 divide-x divide-white/[0.06] font-mono">
                    <div className="pl-1">
                      <span className="block text-[10px] text-zinc-500 tracking-wider">SCALABILITY</span>
                      <span className="block text-sm font-bold text-white mt-1">10^N</span>
                      <span className="text-[9px] text-blue-400">Node Expansion</span>
                    </div>
                    <div className="pl-4">
                      <span className="block text-[10px] text-zinc-500 tracking-wider">COLD STARTS</span>
                      <span className="block text-sm font-bold text-white mt-1">0 ms</span>
                      <span className="text-[9px] text-emerald-400">Hot Cached</span>
                    </div>
                    <div className="pl-4">
                      <span className="block text-[10px] text-zinc-500 tracking-wider">SYNC CYCLES</span>
                      <span className="block text-sm font-bold text-white mt-1">Real-time</span>
                      <span className="text-[9px] text-zinc-500">Atomic Edge</span>
                    </div>
                  </div>
                </div>

                {/* Simulator Right Column */}
                <div className="lg:col-span-7 h-full">
                  <ScaleSimulator mechanicalSpring={mechanicalSpring} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Blueprint Footer / Engineering Notes */}
        <footer className="border-t border-white/[0.06] p-4 bg-[#0a0a0c]/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[10px] font-mono text-zinc-500 relative">
          <div>
            <span>SYSTEM DOCUMENTATION REFERENCE: <span className="text-zinc-400 font-bold">#XO-9988-X2</span></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">STRUCTURAL SNAP: ACTIVE</span>
            <span>CLOCK DRIFT: [±0.0002s]</span>
            <span className="text-amber-500/80 font-bold text-amber-glow animate-pulse">XO PROTOCOL</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ============================================================================
   SUBCOMPONENTS FOR SIMULATORS (Ensuring full production ready complexity)
   ============================================================================ */

/**
 * 1. INPUT/OUTPUT (I/O) STREAM SIMULATOR
 */
interface InputOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  raw: string;
  processed: Record<string, any>;
  uiConfig: {
    title: string;
    value: string;
    sub: string;
    percent: number;
    color: string;
  };
}

const mockInputs: InputOption[] = [
  {
    id: "telemetry",
    name: "TELEMETRY ARRAY",
    icon: <Database size={14} />,
    raw: `[
  {"node": "NODE_A", "metrics": [108.4, 109.1, 102.3], "status": "OK"},
  {"node": "NODE_B", "metrics": [88.5, 91.2, 90.0], "status": "WARN"},
  {"node": "NODE_C", "metrics": [121.2, 119.5, 122.1], "status": "OK"}
]`,
    processed: {
      activeNodes: 3,
      integrityScore: 0.94,
      alertThreshold: "CRITICAL_LEVEL_2",
      normalizedArray: [106.6, 89.9, 120.93]
    },
    uiConfig: {
      title: "Active Core Telemetry",
      value: "94.2%",
      sub: "System load variance balanced",
      percent: 94.2,
      color: "#3B82F6"
    }
  },
  {
    id: "ledger",
    name: "LEDGER MATRIX",
    icon: <Cpu size={14} />,
    raw: `{"transaction_ledger": [
  {"id": "TX_401", "amt": 50400.00, "curr": "USD", "sec": true},
  {"id": "TX_402", "amt": 8940.50, "curr": "EUR", "sec": true},
  {"id": "TX_403", "amt": 120000.00, "curr": "USD", "sec": false}
]}`,
    processed: {
      totalVolumeUSD: 180064.21,
      secureTxRatio: 0.66,
      auditedTransactions: 3,
      clearingLock: "ACQUIRED"
    },
    uiConfig: {
      title: "Audited Ledger Volume",
      value: "$180,064.21",
      sub: "Secure dynamic clearing validated",
      percent: 66,
      color: "#10B981"
    }
  },
  {
    id: "neural",
    name: "NEURAL VECTOR",
    icon: <Sparkles size={14} />,
    raw: `{"embeddings": {
  "dim": 1536,
  "weights": [0.0125, -0.0458, 0.9841, -0.1102],
  "cosine_similarity": 0.9878,
  "model": "neuro-core-v8"
}}`,
    processed: {
      modelHash: "0x8fa9c2ee7",
      dimensionCount: 1536,
      similarityScore: 98.78,
      inferenceLatencyMs: 0.08
    },
    uiConfig: {
      title: "Model Synaptic Similarity",
      value: "98.78%",
      sub: "Synapse network mapping optimal",
      percent: 98.78,
      color: "#F59E0B"
    }
  }
];

function IOSimulator({ mechanicalSpring }: { mechanicalSpring: any }) {
  const [selectedInput, setSelectedInput] = useState<InputOption>(mockInputs[0]);
  const [compiling, setCompiling] = useState(false);
  const [compileStep, setCompileStep] = useState<"idle" | "parsing" | "typifying" | "rendering" | "done">("idle");
  const [outputReady, setOutputReady] = useState(true);

  const runTransformation = () => {
    if (compiling) return;
    setCompiling(true);
    setOutputReady(false);
    
    // Step by step compiler animations mimicking a real data compiling environment
    setCompileStep("parsing");
    setTimeout(() => {
      setCompileStep("typifying");
      setTimeout(() => {
        setCompileStep("rendering");
        setTimeout(() => {
          setCompileStep("done");
          setCompiling(false);
          setOutputReady(true);
        }, 600);
      }, 500);
    }, 450);
  };

  // Run auto-compiling when selecting a new option
  useEffect(() => {
    runTransformation();
  }, [selectedInput.id]);

  return (
    <div className="w-full flex flex-col h-full border border-white/[0.06] bg-[#111113]/40 rounded-xl overflow-hidden backdrop-blur-md relative">
      {/* Reticle / Crosshair corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-700" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-700" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-700" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-700" />

      {/* Simulator title bar */}
      <div className="border-b border-white/[0.06] bg-[#111113]/85 p-3 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-blue-400" />
          <span className="text-zinc-300">STREAM_COMPILER // V4.1</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-zinc-500 uppercase tracking-widest text-[9px]">ONLINE</span>
        </div>
      </div>

      {/* Quick Select Options */}
      <div className="p-3 bg-[#0A0A0C]/50 border-b border-white/[0.04] flex flex-wrap gap-2">
        {mockInputs.map((input) => (
          <button
            key={input.id}
            onClick={() => setSelectedInput(input)}
            className={`flex items-center gap-2 py-1.5 px-3 rounded text-[10px] font-mono tracking-wider transition-all border ${
              selectedInput.id === input.id
                ? "bg-blue-500/10 border-blue-500/40 text-blue-300 font-bold"
                : "bg-white/[0.02] border-white/[0.04] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            {input.icon}
            {input.name}
          </button>
        ))}
      </div>

      {/* Compiler Interface Workspace */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.06] min-h-[300px]">
        
        {/* Workspace 1: Source Data (Input) */}
        <div className="p-4 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              [ Source Input Buffer ]
            </span>
            <span className="text-[9px] font-mono text-zinc-600">
              SIZE: {selectedInput.raw.length} BYTES
            </span>
          </div>
          <div className="flex-1 bg-[#0A0A0C]/90 border border-white/[0.04] rounded-lg p-3 font-mono text-[11px] text-zinc-300 overflow-y-auto leading-relaxed max-h-[220px] select-all">
            <pre className="whitespace-pre-wrap select-all">{selectedInput.raw}</pre>
          </div>
          <button
            onClick={runTransformation}
            disabled={compiling}
            className="w-full mt-3 flex items-center justify-center gap-2 py-2 px-4 bg-[#1E293B] hover:bg-[#3b82f6]/20 border border-blue-500/20 hover:border-blue-500/40 text-blue-300 text-xs font-mono tracking-widest rounded-lg transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {compiling ? (
              <>
                <RefreshCw size={12} className="animate-spin text-blue-400" />
                TRANSFORMING STREAM...
              </>
            ) : (
              <>
                <RefreshCw size={12} className="group-hover:rotate-180 transition-transform duration-500" />
                COMPILE DATA STREAM
              </>
            )}
          </button>
        </div>

        {/* Workspace 2: Schema Transform (Engine state) */}
        <div className="p-4 flex flex-col justify-between bg-[#111113]/20 relative">
          
          {/* Compilation Indicator overlay */}
          <div className="flex flex-col flex-1">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">
              [ Compilation Pipeline ]
            </span>
            
            {/* Visual Pipeline nodes */}
            <div className="space-y-3 font-mono text-[10px] mb-4">
              <div className={`flex items-center justify-between p-2 rounded border transition-all ${
                compileStep === "parsing" 
                  ? "bg-blue-500/5 border-blue-500/30 text-blue-300 translate-x-1" 
                  : compileStep === "typifying" || compileStep === "rendering" || compileStep === "done"
                  ? "bg-white/[0.02] border-emerald-500/20 text-emerald-400"
                  : "bg-white/[0.02] border-white/[0.04] text-zinc-500"
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    compileStep === "parsing" ? "bg-blue-400 animate-ping" : compileStep === "typifying" || compileStep === "rendering" || compileStep === "done" ? "bg-emerald-400" : "bg-zinc-600"
                  }`} />
                  <span>STEP 1: JSON_TOKEN_PARSER</span>
                </div>
                <span>{compileStep === "parsing" ? "RUNNING" : compileStep !== "idle" ? "DONE" : "IDLE"}</span>
              </div>

              <div className={`flex items-center justify-between p-2 rounded border transition-all ${
                compileStep === "typifying" 
                  ? "bg-blue-500/5 border-blue-500/30 text-blue-300 translate-x-1" 
                  : compileStep === "rendering" || compileStep === "done"
                  ? "bg-white/[0.02] border-emerald-500/20 text-emerald-400"
                  : "bg-white/[0.02] border-white/[0.04] text-zinc-500"
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    compileStep === "typifying" ? "bg-blue-400 animate-ping" : compileStep === "rendering" || compileStep === "done" ? "bg-emerald-400" : "bg-zinc-600"
                  }`} />
                  <span>STEP 2: SEMANTIC_TYPE_RESOLVER</span>
                </div>
                <span>{compileStep === "typifying" ? "RUNNING" : compileStep === "rendering" || compileStep === "done" ? "DONE" : "IDLE"}</span>
              </div>

              <div className={`flex items-center justify-between p-2 rounded border transition-all ${
                compileStep === "rendering" 
                  ? "bg-blue-500/5 border-blue-500/30 text-blue-300 translate-x-1" 
                  : compileStep === "done"
                  ? "bg-white/[0.02] border-emerald-500/20 text-emerald-400"
                  : "bg-white/[0.02] border-white/[0.04] text-zinc-500"
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    compileStep === "rendering" ? "bg-blue-400 animate-ping" : compileStep === "done" ? "bg-emerald-400" : "bg-zinc-600"
                  }`} />
                  <span>STEP 3: COMPONENT_LAYOUT_COMPILER</span>
                </div>
                <span>{compileStep === "rendering" ? "RUNNING" : compileStep === "done" ? "DONE" : "IDLE"}</span>
              </div>
            </div>

            {/* High-Fidelity UI Layout output */}
            <div className="flex-1 flex flex-col justify-end">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                [ Generated Render Output ]
              </span>
              
              <div className="relative border border-white/[0.06] bg-[#0A0A0C]/90 rounded-lg p-3 min-h-[120px] flex flex-col justify-between overflow-hidden">
                {/* Background matrix texture */}
                <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-20" />
                
                {outputReady ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={mechanicalSpring}
                    className="relative z-10 flex flex-col justify-between h-full flex-1 gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tight flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {selectedInput.uiConfig.title}
                      </span>
                      <CheckCircle2 size={12} className="text-emerald-400" />
                    </div>

                    <div className="my-2">
                      <span className="text-2xl font-bold text-white tracking-tight" style={{ color: selectedInput.uiConfig.color }}>
                        {selectedInput.uiConfig.value}
                      </span>
                      <span className="block text-[10px] text-zinc-500 font-sans mt-0.5">
                        {selectedInput.uiConfig.sub}
                      </span>
                    </div>

                    {/* Minimal Dynamic Progress bar */}
                    <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedInput.uiConfig.percent}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full" 
                        style={{ backgroundColor: selectedInput.uiConfig.color }}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-zinc-600 font-mono text-xs gap-2 py-4">
                    <Activity size={18} className="animate-pulse text-zinc-600" />
                    <span>AWAITING SCHEMA RESOLVE...</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}


/**
 * 2. EXPERIENCE OPTIMIZATION (XO) SIMULATOR
 */
function XOSimulator({ mechanicalSpring }: { mechanicalSpring: any }) {
  const [xoActive, setXoActive] = useState(true);
  const [jitterActive, setJitterActive] = useState(false);
  const [fps, setFps] = useState(120);
  const [chartData, setChartData] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // FPS calculations and line graph updating
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (xoActive) {
      // Steady optimal performance simulation
      setFps(120);
      interval = setInterval(() => {
        setChartData((prev) => {
          const next = [...prev, 120 + (Math.random() * 0.8 - 0.4)];
          if (next.length > 30) next.shift();
          return next;
        });
      }, 100);
    } else {
      // Jittery low performance representation
      interval = setInterval(() => {
        const base = jitterActive ? 32 : 45;
        const currentFps = Math.round(base + (Math.random() * 12 - 6));
        setFps(currentFps);
        setChartData((prev) => {
          const next = [...prev, currentFps];
          if (next.length > 30) next.shift();
          return next;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [xoActive, jitterActive]);

  // Initializing mock chart dataset
  useEffect(() => {
    const initial = Array.from({ length: 30 }, () => (xoActive ? 120 : 45));
    setChartData(initial);
  }, [xoActive]);

  // Draw smooth FPS curve on modern HTML Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear and draw grid lines
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw horizontal grid anchors
    ctx.strokeStyle = "rgba(59, 130, 246, 0.04)";
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      const y = (canvas.height / 4) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    if (chartData.length < 2) return;

    // Set styling based on performance stack selection
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (xoActive) {
      // Glowing Amber line for XO active engine elements
      ctx.strokeStyle = "#F59E0B";
      ctx.lineWidth = 2.5;
      gradient.addColorStop(0, "rgba(245, 158, 11, 0.25)");
      gradient.addColorStop(1, "rgba(245, 158, 11, 0.0)");
    } else {
      // Dim standard red-orange gradient for poor legacy performance
      ctx.strokeStyle = "#EF4444";
      ctx.lineWidth = 1.5;
      gradient.addColorStop(0, "rgba(239, 68, 68, 0.15)");
      gradient.addColorStop(1, "rgba(239, 68, 68, 0.0)");
    }

    const stepX = canvas.width / (chartData.length - 1);
    
    // Helper mapper to chart coordinate space
    const mapY = (val: number) => {
      // Range mappings from 30 FPS up to 130 FPS
      const minVal = 20;
      const maxVal = 130;
      const percent = (val - minVal) / (maxVal - minVal);
      return canvas.height - (percent * canvas.height * 0.8 + canvas.height * 0.1);
    };

    // Draw path line
    ctx.beginPath();
    ctx.moveTo(0, mapY(chartData[0]));
    for (let i = 1; i < chartData.length; i++) {
      ctx.lineTo(i * stepX, mapY(chartData[i]));
    }
    ctx.stroke();

    // Draw gradient area underneath FPS curve
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

  }, [chartData, xoActive]);

  // Jitter test logic
  const triggerJitterTest = () => {
    if (xoActive) return; // Completely blocked by optimization
    setJitterActive(true);
    setTimeout(() => setJitterActive(false), 2000);
  };

  return (
    <div className="w-full flex flex-col h-full border border-white/[0.06] bg-[#111113]/40 rounded-xl overflow-hidden backdrop-blur-md relative">
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-700" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-700" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-700" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-700" />

      {/* Simulator title bar */}
      <div className="border-b border-white/[0.06] bg-[#111113]/85 p-3 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Gauge size={12} className={xoActive ? "text-amber-500" : "text-zinc-500"} />
          <span className="text-zinc-300">PERFORMANCE_DIAGNOSTIC_CONSOLE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${xoActive ? "bg-amber-500 text-amber-glow animate-pulse" : "bg-red-500"}`} />
          <span className={`text-[9px] uppercase tracking-widest font-mono ${xoActive ? "text-amber-500" : "text-red-500"}`}>
            {xoActive ? "OPTIMIZED_STACK" : "LEGACY_DEGRADED"}
          </span>
        </div>
      </div>

      {/* Selection Control Panel */}
      <div className="p-4 bg-[#0A0A0C]/50 border-b border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Selector Switch toggles */}
        <div className="flex bg-[#111113] p-1 rounded-lg border border-white/[0.06] w-full sm:w-auto relative">
          <button
            onClick={() => setXoActive(false)}
            className={`flex-1 sm:flex-none py-1.5 px-4 rounded-md text-[10px] font-mono tracking-wider transition-all relative z-10 ${
              !xoActive ? "text-white font-bold" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {!xoActive && (
              <motion.div
                layoutId="xoToggleBg"
                className="absolute inset-0 bg-white/[0.05] rounded-md border border-white/[0.08]"
                transition={mechanicalSpring}
              />
            )}
            STANDARD_RENDER
          </button>
          
          <button
            onClick={() => setXoActive(true)}
            className={`flex-1 sm:flex-none py-1.5 px-4 rounded-md text-[10px] font-mono tracking-wider transition-all relative z-10 flex items-center justify-center gap-1.5 ${
              xoActive ? "text-amber-400 font-extrabold text-amber-glow" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {xoActive && (
              <motion.div
                layoutId="xoToggleBg"
                className="absolute inset-0 bg-amber-500/10 rounded-md border border-amber-500/30"
                transition={mechanicalSpring}
              />
            )}
            <Zap size={10} className={xoActive ? "text-amber-500 text-amber-glow" : ""} />
            XO_OPTIMIZED
          </button>
        </div>

        {/* Live diagnostics indicator */}
        <div className="flex items-center gap-4 font-mono text-[11px] self-end sm:self-center">
          <div className="text-right">
            <span className="block text-[9px] text-zinc-500 uppercase tracking-widest">LIVE FRAMERATE</span>
            <span className={`text-xl font-bold tracking-tight ${xoActive ? "text-amber-500 text-amber-glow" : "text-red-400 animate-pulse"}`}>
              {fps} <span className="text-[10px] font-normal text-zinc-500">FPS</span>
            </span>
          </div>
        </div>

      </div>

      {/* Main performance simulation space */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]" ref={containerRef}>
        
        {/* Left pane: FPS Line Chart */}
        <div className="p-4 md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                [ Frame Frequency Thread Chart ]
              </span>
              <span className="text-[9px] font-mono text-zinc-600">
                100ms Ticks // Render Pipeline V4
              </span>
            </div>
            
            {/* Canvas graph */}
            <div className="w-full bg-[#0A0A0C]/90 border border-white/[0.04] rounded-lg p-2 h-[150px] relative overflow-hidden">
              <canvas 
                ref={canvasRef} 
                width={360} 
                height={130} 
                className="w-full h-full block"
              />
              <div className="absolute top-2 left-2 flex flex-col text-[8px] font-mono text-zinc-600 gap-1">
                <span>120hz locked cap</span>
                <span>60hz core threshold</span>
                <span>30hz frame drop range</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={triggerJitterTest}
              disabled={xoActive}
              className={`flex-1 py-2 px-3 border text-xs font-mono tracking-widest rounded-lg transition-all text-center ${
                xoActive 
                  ? "bg-white/[0.02] border-white/[0.04] text-zinc-600 cursor-not-allowed" 
                  : "bg-red-500/10 hover:bg-red-500/20 border-red-500/20 hover:border-red-500/40 text-red-300"
              }`}
            >
              {jitterActive ? "JITTER ACTIVE // PACKET DROPS" : "SIMULATE LAYOUT REFLOW LAG"}
            </button>
          </div>
        </div>

        {/* Right pane: Mechanical Interactive Widget Box */}
        <div className="p-4 md:col-span-5 flex flex-col justify-between bg-[#111113]/20">
          <div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">
              [ Interactive UX Snapping Demo ]
            </span>
            
            <p className="text-[11px] text-zinc-400 font-sans leading-relaxed mb-4">
              {xoActive 
                ? "XO protocol forces layout snaps into isolated bounds. Jitter, repaint triggers, and Cumulative Layout Shifts are structurally neutralized." 
                : "Standard renders cause layout shifts when items resize or flow changes. Heavy computational tasks trigger obvious layout thrashing."
              }
            </p>

            {/* Simulated Layout Elements Container */}
            <div className="relative border border-white/[0.06] bg-[#0A0A0C]/90 rounded-lg p-3 min-h-[140px] flex flex-col justify-center overflow-hidden">
              {/* Layout components snapping */}
              <div className="flex flex-col gap-2 relative">
                {/* Simulated Lag element */}
                <motion.div
                  animate={{ 
                    y: xoActive ? 0 : jitterActive ? [0, 8, -4, 6, 0] : [0, 2, 0],
                    scale: xoActive ? 1 : jitterActive ? [1, 0.96, 1.02, 1] : 1,
                  }}
                  transition={xoActive ? mechanicalSpring : { duration: 0.8, ease: "easeInOut", repeat: jitterActive ? 1 : 0 }}
                  className={`p-2.5 rounded border transition-all ${
                    xoActive 
                      ? "bg-amber-500/5 border-amber-500/30 text-white" 
                      : "bg-[#111113] border-white/[0.06] text-zinc-400"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="flex items-center gap-1.5">
                      {xoActive ? <Zap size={10} className="text-amber-500 text-amber-glow animate-pulse" /> : <Layers size={10} />}
                      Core Layout Element A
                    </span>
                    <span className="text-[9px] text-zinc-500">
                      {xoActive ? "SNAP:120FPS" : "FPS:DEGRADED"}
                    </span>
                  </div>
                </motion.div>

                {/* Simulated Lag element B */}
                <motion.div
                  animate={{ 
                    x: xoActive ? 0 : jitterActive ? [0, -6, 8, -3, 0] : [0, -1, 0],
                  }}
                  transition={xoActive ? mechanicalSpring : { duration: 0.6, ease: "easeInOut", repeat: jitterActive ? 1 : 0 }}
                  className={`p-2.5 rounded border transition-all ${
                    xoActive 
                      ? "bg-amber-500/5 border-amber-500/20 text-white" 
                      : "bg-[#111113] border-white/[0.06] text-zinc-400"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="flex items-center gap-1.5">
                      {xoActive ? <Zap size={10} className="text-amber-500 text-amber-glow animate-pulse" /> : <Layers size={10} />}
                      Sub Layout Element B
                    </span>
                    <span className="text-[9px] text-zinc-500">
                      {xoActive ? "LATENCY:0.4ms" : "LAG:18ms"}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="text-[9px] font-mono text-zinc-500 mt-4 leading-tight">
            {xoActive 
              ? "✓ XO ENGAGED: Rendering threads bypass DOM paint blocks cleanly." 
              : "⚠ STANDARD THREAD: Blocked by microtask execution queues."
            }
          </div>
        </div>

      </div>
    </div>
  );
}


/**
 * 3. EXPONENTIAL MULTIPLIER (x, 0) SIMULATOR
 */
interface StageOption {
  value: number;
  label: string;
  desc: string;
  metric: string;
  nodesCount: number;
}

const scaleStages: StageOption[] = [
  { value: 0, label: "Day Zero", desc: "Core architectural blueprint defined. Zero code-rot, zero structural assumptions.", metric: "1 Core Synapse Node", nodesCount: 1 },
  { value: 25, label: "Seed State", desc: "Sync schemas mapping client actions straight to modular server endpoints.", metric: "4 Connected Edge Nodes", nodesCount: 4 },
  { value: 50, label: "Network Mesh", desc: "High throughput data matrices replicate and coordinate edge routes dynamically.", metric: "16 Interlinked Nodes", nodesCount: 16 },
  { value: 75, label: "Concentric Scaling", desc: "Edge systems scale concentrically, mirroring layout states to microservices.", metric: "64 Synchronized Nodes", nodesCount: 32 },
  { value: 100, label: "Hyper-Multiplier", desc: "Viral feedback loops dynamically balance scaling vectors at zero latency.", metric: "256+ Concentric Core Edges", nodesCount: 64 }
];

function ScaleSimulator({ mechanicalSpring }: { mechanicalSpring: any }) {
  const [sliderVal, setSliderVal] = useState(50);
  const [activeStage, setActiveStage] = useState<StageOption>(scaleStages[2]);

  // Handle snapping slider values to specific milestone steps
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setSliderVal(val);

    // Find closest milestone stage
    const closest = scaleStages.reduce((prev, curr) => 
      Math.abs(curr.value - val) < Math.abs(prev.value - val) ? curr : prev
    );
    setActiveStage(closest);
  };

  // Click stage tag helper
  const selectStage = (stage: StageOption) => {
    setSliderVal(stage.value);
    setActiveStage(stage);
  };

  // Renders beautiful nodes dynamically in concentric structures inside standard SVG path vectors
  const renderSVGNodes = () => {
    const count = activeStage.nodesCount;
    const width = 300;
    const height = 180;
    const centerX = width / 2;
    const centerY = height / 2;

    const nodes: React.ReactNode[] = [];
    const lines: React.ReactNode[] = [];

    // Core ground zero node (Always glowing amber)
    nodes.push(
      <g key="core-zero" className="relative">
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={6} 
          className="fill-amber-500 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
        />
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={12} 
          className="stroke-amber-500/40 fill-none stroke-dasharray animate-spin" 
          style={{ transformOrigin: `${centerX}px ${centerY}px`, animationDuration: "10s" }}
        />
      </g>
    );

    // Peripheral nodes scaling based on count
    if (count > 1) {
      const ringCount = count <= 4 ? 1 : count <= 16 ? 2 : 3;
      let nodesRendered = 1;

      for (let r = 1; r <= ringCount; r++) {
        // Radius of concentric ring circles
        const radius = r * 28;
        const ringNodesCount = r * 4;

        for (let i = 0; i < ringNodesCount; i++) {
          if (nodesRendered >= count) break;

          const angle = (i * 2 * Math.PI) / ringNodesCount;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          // Path link between core and nodes
          lines.push(
            <motion.line
              key={`line-${r}-${i}`}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              className="stroke-blue-500/20"
              strokeWidth="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          );

          // Connecting inter-ring adjacent edges for network visual grid
          if (i > 0) {
            const prevAngle = ((i - 1) * 2 * Math.PI) / ringNodesCount;
            const px = centerX + radius * Math.cos(prevAngle);
            const py = centerY + radius * Math.sin(prevAngle);
            lines.push(
              <motion.line
                key={`line-adj-${r}-${i}`}
                x1={px}
                y1={py}
                x2={x}
                y2={y}
                className="stroke-blue-500/10"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6 }}
              />
            );
          }

          // Node circular dots
          nodes.push(
            <motion.circle
              key={`node-${r}-${i}`}
              cx={x}
              cy={y}
              r={r === 1 ? 3.5 : 2.5}
              className={`${
                activeStage.value === 100 && i % 2 === 0
                  ? "fill-amber-500 filter drop-shadow-[0_0_3px_rgba(245,158,11,0.6)]"
                  : "fill-blue-500/80"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={mechanicalSpring}
            />
          );

          nodesRendered++;
        }
      }
    }

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full block">
        {lines}
        {nodes}
      </svg>
    );
  };

  return (
    <div className="w-full flex flex-col h-full border border-white/[0.06] bg-[#111113]/40 rounded-xl overflow-hidden backdrop-blur-md relative">
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-700" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-700" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-700" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-700" />

      {/* Simulator title bar */}
      <div className="border-b border-white/[0.06] bg-[#111113]/85 p-3 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Network size={12} className="text-blue-400" />
          <span className="text-zinc-300">SCALING_VECTOR_MATRIX // HYPER_DRIVE</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-zinc-500 uppercase tracking-widest text-[9px]">ACTIVE</span>
        </div>
      </div>

      {/* Concentric Nodes Canvas Screen */}
      <div className="flex-1 p-4 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/[0.06] min-h-[300px]">
        
        {/* Visual interactive graph canvas */}
        <div className="flex-1 p-3 flex flex-col justify-between min-h-[220px]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              [ Topological Node Scaling Map ]
            </span>
            <span className="text-[9px] font-mono text-amber-500 text-amber-glow">
              {activeStage.metric}
            </span>
          </div>

          {/* Render graph */}
          <div className="flex-1 bg-[#0A0A0C]/95 border border-white/[0.04] rounded-lg p-2 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-20" />
            <div className="w-full h-full max-w-[320px] max-h-[190px]">
              {renderSVGNodes()}
            </div>
            
            {/* Center target crosshair overlays */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-dashed border-white/[0.02] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] border border-dashed border-white/[0.02] rounded-full pointer-events-none" />
          </div>
        </div>

        {/* Milestone metadata details */}
        <div className="p-4 md:w-[220px] flex flex-col justify-between bg-[#111113]/20">
          <div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">
              [ Milestone Metadata ]
            </span>

            <motion.div
              key={activeStage.value}
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={mechanicalSpring}
              className="space-y-4"
            >
              <div>
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider block">STAGE LABEL</span>
                <span className="text-sm font-bold text-white uppercase mt-0.5 block flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {activeStage.label}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider block">ARCHITECT DEFINITION</span>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed mt-1">
                  {activeStage.desc}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/[0.06] pt-3 mt-4 text-[9px] font-mono text-zinc-500 uppercase">
            SCALE DYNAMICS: <span className="text-zinc-300 font-bold">10^{activeStage.value / 25}x POWER</span>
          </div>
        </div>

      </div>

      {/* Scaling Controls / Mechanical Slider */}
      <div className="p-4 bg-[#0A0A0C]/50 border-t border-white/[0.04] flex flex-col gap-4">
        
        {/* Milestone Selectors */}
        <div className="grid grid-cols-5 gap-1 font-mono text-[9px]">
          {scaleStages.map((stage) => (
            <button
              key={stage.value}
              onClick={() => selectStage(stage)}
              className={`py-1 text-center rounded border transition-all ${
                activeStage.value === stage.value
                  ? "bg-blue-500/10 border-blue-500/40 text-blue-300 font-bold"
                  : "bg-white/[0.02] border-white/[0.03] text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
              }`}
            >
              {stage.label.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Technical Slider */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-zinc-500">0.0</span>
          
          <div className="flex-1 relative flex items-center h-2 bg-zinc-950/80 rounded-full border border-white/[0.06]">
            {/* Filled range indicator */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 bg-blue-500/30 rounded-full border-r border-blue-400/40"
              animate={{ width: `${sliderVal}%` }}
              transition={{ duration: 0.1 }}
            />
            
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={sliderVal}
              onChange={handleSliderChange}
              className="w-full h-full opacity-0 cursor-pointer absolute inset-0 z-20"
            />
            
            {/* Glowing amber range slider thumb position handle */}
            <motion.div
              className="absolute w-4 h-4 rounded-full border-2 border-amber-500 bg-[#0A0A0C] shadow-lg pointer-events-none z-10 flex items-center justify-center filter drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]"
              animate={{ left: `calc(${sliderVal}% - 8px)` }}
              transition={{ duration: 0.1 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </motion.div>
          </div>

          <span className="text-[10px] font-mono text-zinc-300">100.0</span>
        </div>
      </div>

    </div>
  );
}
