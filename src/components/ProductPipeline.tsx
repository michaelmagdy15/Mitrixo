"use client";

import * as React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Network,
  Play,
  Pause,
  RefreshCw,
  Activity,
  Fingerprint,
  ShieldCheck,
  Cpu,
  Server,
  ChevronRight,
  Terminal as TerminalIcon,
  Sliders,
  Globe,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  RotateCcw
} from "lucide-react";

// --- SPRING CONFIG ---
const mechanicalSpring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 14
};

// --- CUSTOM CURSOR-TRACKING GLOW WRAPPER ---
interface ProductCardProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  category: string;
  tags: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  children,
  className = "",
  title,
  category,
  tags
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={mechanicalSpring}
      className={`relative group overflow-hidden rounded-xl bg-brand-panel border border-white/[0.04] transition-all duration-300 ${className}`}
      style={
        {
          "--mouse-x": `${coords.x}px`,
          "--mouse-y": `${coords.y}px`
        } as React.CSSProperties
      }
    >
      {/* Precision Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.4] group-hover:opacity-[0.7] pointer-events-none transition-opacity duration-500" />

      {/* Dynamic Cursor Glowing Outline */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10 p-[1.5px]"
        style={{
          background: `radial-gradient(280px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.4) 0%, rgba(245, 158, 11, 0.25) 45%, transparent 80%)`
        }}
      />
      
      {/* Extra Ambient Blur Glow under the card */}
      <div 
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 blur-lg -z-10"
        style={{
          background: `radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.18) 0%, rgba(245, 158, 11, 0.08) 60%, transparent 100%)`
        }}
      />

      {/* Internal Content Container */}
      <div className="relative z-20 flex flex-col h-full p-6 justify-between gap-6">
        
        {/* Header Details */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-brand-blueprint font-semibold">
              {category}
            </span>
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/[0.05] bg-brand-dark/50 group-hover:border-brand-blueprint/30 group-hover:bg-brand-blueprint/10 transition-colors duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-brand-blueprint transition-colors duration-300" />
            </div>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white font-sans group-hover:text-brand-white transition-colors duration-200">
            {title}
          </h3>
        </div>

        {/* Visual Showcase (Children Slot) */}
        <div className="flex-grow flex items-center justify-center min-h-[170px] relative">
          {children}
        </div>

        {/* Footer Details */}
        <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.04]">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.04] text-zinc-400 group-hover:text-zinc-300 group-hover:border-white/[0.08] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// ==========================================
// CARD 1 VISUAL: AetherDB (Distributed Cache Sync)
// ==========================================
const AetherDBVisual: React.FC = () => {
  const [syncing, setSyncing] = useState(false);
  const [progress, setProgress] = useState(100);
  const [logs, setLogs] = useState<string[]>([
    "IDLE // CACHE SYNC STEADY",
    "NODE 01-US_EAST: 0.2ms latency",
    "PostgreSQL buffer pool clean"
  ]);

  const triggerSync = () => {
    if (syncing) return;
    setSyncing(true);
    setProgress(0);
    setLogs((prev) => ["MUTATION INGESTED -> Sync triggering...", ...prev.slice(0, 2)]);
    
    let current = 0;
    const interval = setInterval(() => {
      current += 8;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setSyncing(false);
        setLogs((prev) => [
          "SYNC COMPLETED // 1024 registers synchronized",
          "PostgreSQL buffer flushed (0.8ms local replication)",
          ...prev.slice(0, 1)
        ]);
      }
      setProgress(current);
    }, 120);
  };

  return (
    <div className="w-full flex flex-col gap-4 font-mono text-[10px] p-2 bg-brand-dark/40 rounded-lg border border-white/[0.02] h-full justify-between">
      {/* Telemetry Architecture Map */}
      <div className="relative flex items-center justify-between py-2 px-3 border border-white/[0.03] bg-brand-panel/60 rounded-md">
        
        {/* Source Node */}
        <div className="flex flex-col items-center gap-1 z-10">
          <Database className={`w-6 h-6 ${syncing ? "text-brand-blueprint" : "text-zinc-500"} transition-colors`} />
          <span className="text-[8px] text-zinc-500 font-semibold">PG CORE</span>
        </div>

        {/* Sync Pipeline Wireframe */}
        <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden">
          <div className="w-full h-[1px] border-t border-dashed border-zinc-800 relative">
            {syncing && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-brand-blueprint to-transparent h-[1px]"
              />
            )}
          </div>
        </div>

        {/* Destination Node */}
        <div className="flex flex-col items-center gap-1 z-10">
          <Globe className={`w-6 h-6 ${syncing ? "text-brand-amber animate-pulse" : "text-zinc-500"} transition-colors`} />
          <span className="text-[8px] text-zinc-500 font-semibold">AETHER EDGE</span>
        </div>

      </div>

      {/* Progress Sync Meter */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[9px]">
          <span className="text-zinc-500 font-semibold">BUFFER TRANSFER:</span>
          <span className={syncing ? "text-brand-amber font-bold" : "text-brand-blueprint font-semibold"}>
            {syncing ? `SYNCING ${progress}%` : "SYNCED // 100%"}
          </span>
        </div>
        <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-white/[0.02]">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-blueprint to-brand-amber"
            style={{ width: `${progress}%` }}
            transition={{ type: "tween" }}
          />
        </div>
      </div>

      {/* Dynamic Logs Terminal */}
      <div className="p-2 bg-black/60 rounded-md border border-white/[0.03] text-[9px] leading-tight text-zinc-400 min-h-[58px] flex flex-col justify-end">
        {logs.map((log, idx) => (
          <div key={idx} className="truncate flex items-start gap-1">
            <span className={idx === 0 ? "text-brand-blueprint" : "text-zinc-600"}>&gt;</span>
            <span className={idx === 0 ? "text-zinc-200 font-medium" : "text-zinc-500"}>{log}</span>
          </div>
        ))}
      </div>

      {/* Trigger Button */}
      <button
        onClick={triggerSync}
        disabled={syncing}
        className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded bg-brand-blueprint/10 hover:bg-brand-blueprint/15 border border-brand-blueprint/20 text-brand-blueprint font-bold hover:text-white transition-all cursor-pointer font-mono"
      >
        <RefreshCw className={`w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}`} />
        TRIGGER SYNC SIMULATION
      </button>
    </div>
  );
};

// ==========================================
// CARD 2 VISUAL: NexusCMS (Live Headless Graph)
// ==========================================
interface ContentNode {
  id: string;
  label: string;
  type: "collection" | "document" | "field";
  status: "active" | "draft";
  x: number;
  y: number;
  properties: Record<string, any>;
}

const NexusCMSVisual: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>("pages");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  
  // Custom Node Content Schema Graph
  const nodes = useMemo<ContentNode[]>(() => [
    { id: "pages", label: "Pages Collection", type: "collection", status: "active", x: 30, y: 35, properties: { entries: "148 total", localization: "EN, FR, DE, JP" } as Record<string, string> },
    { id: "blogPost", label: "Blog Template", type: "document", status: "active", x: 70, y: 20, properties: { layout: "dynamicGrid", slug: "/insights/*" } as Record<string, string> },
    { id: "products", label: "Product Listing", type: "document", status: "draft", x: 75, y: 70, properties: { catalogSync: "AetherDB Hook", currency: "USD/EUR" } as Record<string, string> },
    { id: "graphql", label: "Edge Federation", type: "field", status: "active", x: 120, y: 45, properties: { cacheHeader: "s-maxage=86400", compression: "brotli" } as Record<string, string> }
  ], []);

  const activeNodeData = nodes.find(n => n.id === selectedNode);

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-4 bg-brand-dark/40 p-2.5 rounded-lg border border-white/[0.02]">
      
      {/* Graph Area */}
      <div className="relative flex-grow h-[150px] md:h-full border border-white/[0.03] bg-brand-panel/50 rounded-md overflow-hidden min-w-[160px]">
        
        {/* Connection Pipelines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="30%" y1="35%" x2="70%" y2="20%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="30%" y1="35%" x2="75%" y2="70%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="70%" y1="20%" x2="120%" y2="45%" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1.5" />
          <line x1="75%" y1="70%" x2="120%" y2="45%" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1.5" />
        </svg>

        {/* Dynamic Schema Nodes */}
        {nodes.map((node) => {
          const isSelected = selectedNode === node.id;
          const isHovered = hoveredNode === node.id;
          
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute group/node flex items-center justify-center p-1 bg-brand-panel rounded border transition-all cursor-pointer z-10 hover:border-brand-blueprint/50"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
                borderColor: isSelected 
                  ? "rgba(245, 158, 11, 0.8)" 
                  : isHovered 
                    ? "rgba(59, 130, 246, 0.6)" 
                    : "rgba(255, 255, 255, 0.08)",
                boxShadow: isSelected 
                  ? "0 0 10px rgba(245, 158, 11, 0.2)" 
                  : "none"
              }}
            >
              {node.type === "collection" && <Network className="w-3.5 h-3.5 text-brand-blueprint" />}
              {node.type === "document" && <Sliders className="w-3.5 h-3.5 text-zinc-400" />}
              {node.type === "field" && <Globe className="w-3.5 h-3.5 text-brand-amber animate-pulse" />}
              
              {/* Tooltip on hover */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-zinc-950 text-[8px] font-mono text-zinc-300 px-1.5 py-0.5 rounded opacity-0 group-hover/node:opacity-100 pointer-events-none transition-opacity duration-200 border border-white/[0.05] whitespace-nowrap z-20">
                {node.label}
              </div>
            </button>
          );
        })}

        {/* Live Status Graph Indicators */}
        <div className="absolute bottom-2 left-2 flex items-center gap-2 font-mono text-[8px]">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            EDGE FEDERATED: ACTIVE
          </span>
        </div>
      </div>

      {/* Headless Schema Inspector */}
      <div className="w-full md:w-[150px] flex flex-col justify-between font-mono text-[9px] text-zinc-400 bg-black/60 p-2.5 rounded-md border border-white/[0.03]">
        
        <div>
          <div className="text-[10px] text-zinc-300 font-bold border-b border-white/[0.05] pb-1 mb-2 flex items-center justify-between">
            <span>SCHEMA INSPECTOR</span>
            <Network className="w-3 text-brand-blueprint" />
          </div>
          
          {activeNodeData ? (
            <div className="flex flex-col gap-2">
              <div>
                <span className="text-zinc-600 block">NODE_KEY:</span>
                <span className="text-brand-blueprint font-bold">{activeNodeData.id}</span>
              </div>
              <div>
                <span className="text-zinc-600 block">TYPE:</span>
                <span className="text-zinc-300 capitalize">{activeNodeData.type}</span>
              </div>
              <div className="border-t border-white/[0.03] pt-1.5 flex flex-col gap-1">
                {Object.entries(activeNodeData.properties).map(([key, val]) => (
                  <div key={key} className="text-[8px]">
                    <span className="text-zinc-500 uppercase">{key}:</span>
                    <span className="text-zinc-300 block font-semibold truncate">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <span className="text-zinc-600 italic">Select node...</span>
          )}
        </div>

        <div className="mt-2 text-[7.5px] text-brand-amber font-semibold flex items-center gap-1.5 border-t border-white/[0.05] pt-2">
          <Clock className="w-3 text-brand-amber" />
          REPLICATED AT: EDGE
        </div>

      </div>

    </div>
  );
};

// ==========================================
// CARD 3 VISUAL: Chronos Engine (Workflow & Timeline)
// ==========================================
interface WorkflowStep {
  id: string;
  name: string;
  status: "idle" | "running" | "success" | "error";
  duration: string;
}

const ChronosVisual: React.FC = () => {
  const [state, setState] = useState<"idle" | "running" | "healing" | "completed">("idle");
  const [steps, setSteps] = useState<WorkflowStep[]>([
    { id: "ingest", name: "INGEST PAYLOAD", status: "idle", duration: "1.2ms" },
    { id: "validate", name: "ZK-PROOF CHECK", status: "idle", duration: "12.8ms" },
    { id: "replicate", name: "LEDGER SYNC", status: "idle", duration: "4.5ms" },
    { id: "commit", name: "STATE COMMIT", status: "idle", duration: "0.4ms" }
  ]);
  const [triggerFailState, setTriggerFailState] = useState(false);

  const runWorkflow = async () => {
    if (state !== "idle" && state !== "completed") return;
    
    setState("running");
    
    // Reset all steps
    setSteps(prev => prev.map(s => ({ ...s, status: "idle" })));

    // Step 0: Ingest
    setSteps(prev => prev.map((s, idx) => idx === 0 ? { ...s, status: "running" } : s));
    await new Promise(resolve => setTimeout(resolve, 800));
    setSteps(prev => prev.map((s, idx) => idx === 0 ? { ...s, status: "success" } : s));

    // Step 1: Validate (Optional Fail Injection)
    setSteps(prev => prev.map((s, idx) => idx === 1 ? { ...s, status: "running" } : s));
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (triggerFailState) {
      setSteps(prev => prev.map((s, idx) => idx === 1 ? { ...s, status: "error" } : s));
      setState("healing");
      await new Promise(resolve => setTimeout(resolve, 1200)); // Simulating temporal rollback
      // Rollback log and re-try
      setSteps(prev => prev.map((s, idx) => idx === 1 ? { ...s, status: "running" } : s));
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    setSteps(prev => prev.map((s, idx) => idx === 1 ? { ...s, status: "success" } : s));

    // Step 2: Replicate
    setSteps(prev => prev.map((s, idx) => idx === 2 ? { ...s, status: "running" } : s));
    await new Promise(resolve => setTimeout(resolve, 800));
    setSteps(prev => prev.map((s, idx) => idx === 2 ? { ...s, status: "success" } : s));

    // Step 3: Commit
    setSteps(prev => prev.map((s, idx) => idx === 3 ? { ...s, status: "running" } : s));
    await new Promise(resolve => setTimeout(resolve, 600));
    setSteps(prev => prev.map((s, idx) => idx === 3 ? { ...s, status: "success" } : s));

    setState("completed");
  };

  return (
    <div className="w-full flex flex-col gap-3 font-mono text-[10px] p-2 bg-brand-dark/40 rounded-lg border border-white/[0.02] h-full justify-between">
      
      {/* Workflow Engine Headers */}
      <div className="flex items-center justify-between border-b border-white/[0.04] pb-1.5">
        <div className="flex items-center gap-1.5">
          <Clock className={`w-3.5 h-3.5 ${state === "running" ? "text-brand-blueprint animate-spin" : state === "healing" ? "text-brand-amber animate-pulse" : "text-zinc-500"}`} />
          <span className="font-bold text-[9px]">CHRONOS CORE ORCHESTRATOR</span>
        </div>
        <div className="flex items-center gap-1.5">
          <label className="flex items-center gap-1 text-[8px] text-zinc-500 cursor-pointer">
            <input 
              type="checkbox" 
              checked={triggerFailState} 
              onChange={() => setTriggerFailState(!triggerFailState)}
              className="accent-brand-amber bg-zinc-950 border-white/[0.08]" 
            />
            FORCE ROLLBACK TEST
          </label>
        </div>
      </div>

      {/* Workflow Step Matrix */}
      <div className="flex flex-col gap-1.5">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="flex items-center justify-between p-2 rounded bg-brand-panel/80 border border-white/[0.03] relative overflow-hidden"
          >
            {/* Step name */}
            <div className="flex items-center gap-2 z-10">
              <span className="text-zinc-600 font-semibold">{`0${idx + 1}`}</span>
              <span className={`font-semibold ${step.status === "running" ? "text-brand-blueprint font-bold" : step.status === "success" ? "text-zinc-200" : step.status === "error" ? "text-brand-amber font-bold" : "text-zinc-500"}`}>
                {step.name}
              </span>
            </div>

            {/* Step metrics & state */}
            <div className="flex items-center gap-2 z-10">
              <span className="text-[8px] text-zinc-600">{step.duration}</span>
              {step.status === "idle" && (
                <span className="w-2 h-2 rounded-full bg-zinc-800" />
              )}
              {step.status === "running" && (
                <span className="w-2 h-2 rounded-full bg-brand-blueprint animate-ping" />
              )}
              {step.status === "success" && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              )}
              {step.status === "error" && (
                <AlertTriangle className="w-3.5 h-3.5 text-brand-amber animate-bounce" />
              )}
            </div>

            {/* Glowing background for active state */}
            {step.status === "running" && (
              <div className="absolute inset-0 bg-brand-blueprint/[0.03] border-l-2 border-brand-blueprint z-0 animate-pulse" />
            )}
            {step.status === "error" && (
              <div className="absolute inset-0 bg-brand-amber/[0.05] border-l-2 border-brand-amber z-0" />
            )}
          </div>
        ))}
      </div>

      {/* Terminal Telemetry Log Panel */}
      <div className="p-2 bg-black/60 rounded-md border border-white/[0.03] text-[8px] text-zinc-500 font-mono leading-tight">
        {state === "idle" && "> ORCHESTRATOR READY // Waiting for trigger."}
        {state === "running" && "> PIPELINE TRIGGERED // Ingesting ZK-Proof payloads..."}
        {state === "healing" && (
          <span className="text-brand-amber font-semibold">
            &gt; WARNING: LEDGER CONFLICT // Triggering self-healing workflow rollback...
          </span>
        )}
        {state === "completed" && (
          <span className="text-emerald-400 font-semibold">
            &gt; STATE MACHINE COMMITTED // Distributed database transaction succeeded.
          </span>
        )}
      </div>

      {/* Start Button */}
      <button
        onClick={runWorkflow}
        disabled={state === "running" || state === "healing"}
        className="w-full flex items-center justify-center gap-2 py-1.5 rounded bg-brand-blueprint/15 hover:bg-brand-blueprint/25 border border-brand-blueprint/30 text-brand-blueprint hover:text-brand-white font-bold transition-all cursor-pointer font-mono"
      >
        {state === "running" ? (
          <>
            <Clock className="w-3.5 h-3.5 animate-spin" />
            PROCESSING PIPELINE...
          </>
        ) : state === "healing" ? (
          <>
            <RotateCcw className="w-3.5 h-3.5 animate-spin text-brand-amber" />
            TEMPORAL SELF-HEALING...
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5 fill-brand-blueprint" />
            EXECUTE WORKFLOW
          </>
        )}
      </button>

    </div>
  );
};

// ==========================================
// CARD 4 VISUAL: Helios Engine (Telemetry Sparkline)
// ==========================================
const HeliosVisual: React.FC = () => {
  const [points, setPoints] = useState<number[]>([15, 22, 18, 30, 25, 45, 38, 48, 55, 42, 60, 52]);
  const [throughput, setThroughput] = useState(1280);
  const [latency, setLatency] = useState(0.85);
  const [spikeActive, setSpikeActive] = useState(false);

  // Generate randomized real-time fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      if (spikeActive) return;
      setPoints((prev) => {
        const nextVal = Math.max(10, Math.min(90, prev[prev.length - 1] + (Math.random() * 16 - 8)));
        return [...prev.slice(1), parseFloat(nextVal.toFixed(1))];
      });
      setThroughput((prev) => Math.floor(prev + (Math.random() * 80 - 40)));
      setLatency((prev) => parseFloat(Math.max(0.6, Math.min(1.2, prev + (Math.random() * 0.1 - 0.05))).toFixed(2)));
    }, 600);

    return () => clearInterval(interval);
  }, [spikeActive]);

  const triggerSpike = () => {
    if (spikeActive) return;
    setSpikeActive(true);
    
    // Inject custom peak data points
    setPoints((prev) => [...prev.slice(4), 85, 95, 120, 110]);
    setThroughput(4820);
    setLatency(3.4);

    setTimeout(() => {
      setSpikeActive(false);
      setThroughput(1340);
      setLatency(0.92);
    }, 2500);
  };

  // Convert telemetry points to SVG coordinates
  const svgPath = useMemo(() => {
    const width = 240;
    const height = 75;
    const maxVal = Math.max(...points, 120);
    const minVal = 0;
    
    return points
      .map((val, idx) => {
        const x = (idx / (points.length - 1)) * width;
        const y = height - ((val - minVal) / (maxVal - minVal)) * height;
        return `${idx === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  }, [points]);

  return (
    <div className="w-full flex flex-col gap-4 font-mono text-[10px] p-2 bg-brand-dark/40 rounded-lg border border-white/[0.02] h-full justify-between">
      
      {/* Telemetry Stats Panel */}
      <div className="grid grid-cols-3 gap-2">
        
        <div className="p-2 bg-brand-panel/60 rounded border border-white/[0.03] flex flex-col gap-0.5">
          <span className="text-[7.5px] text-zinc-500 font-semibold uppercase">THROUGHPUT:</span>
          <span className={`text-[11px] font-bold ${spikeActive ? "text-brand-amber text-amber-glow" : "text-brand-white"}`}>
            {throughput.toLocaleString()} req/s
          </span>
        </div>

        <div className="p-2 bg-brand-panel/60 rounded border border-white/[0.03] flex flex-col gap-0.5">
          <span className="text-[7.5px] text-zinc-500 font-semibold uppercase">P99 LATENCY:</span>
          <span className={`text-[11px] font-bold ${spikeActive ? "text-brand-amber" : "text-brand-blueprint"}`}>
            {latency}ms
          </span>
        </div>

        <div className="p-2 bg-brand-panel/60 rounded border border-white/[0.03] flex flex-col gap-0.5">
          <span className="text-[7.5px] text-zinc-500 font-semibold uppercase">TRACK RATE:</span>
          <span className="text-[11px] font-bold text-emerald-400">100.0%</span>
        </div>

      </div>

      {/* Live SVG Graph Plotter */}
      <div className="relative h-[80px] bg-black/60 rounded-md border border-white/[0.03] overflow-hidden flex items-center justify-center p-1">
        
        {/* Horizontal structural wireframe line markers */}
        <div className="absolute inset-x-0 top-1/4 border-b border-white/[0.015] pointer-events-none" />
        <div className="absolute inset-x-0 top-2/4 border-b border-white/[0.015] pointer-events-none" />
        <div className="absolute inset-x-0 top-3/4 border-b border-white/[0.015] pointer-events-none" />

        <svg className="w-full h-full overflow-visible" viewBox="0 0 240 75">
          {/* Glowing Area under path */}
          <path
            d={`${svgPath} L 240 75 L 0 75 Z`}
            fill={spikeActive ? "url(#amberGradient)" : "url(#blueprintGradient)"}
            className="transition-all duration-300 opacity-15"
          />
          {/* Main Telemetry Spark Line */}
          <motion.path
            d={svgPath}
            fill="none"
            stroke={spikeActive ? "#F59E0B" : "#3B82F6"}
            strokeWidth="1.5"
            transition={{ type: "spring", stiffness: 100 }}
          />

          {/* Sparkline gradients */}
          <defs>
            <linearGradient id="blueprintGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="amberGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Pulse active dot on final node */}
        <div 
          className="absolute w-2 h-2 rounded-full border border-black bg-brand-blueprint animate-pulse pointer-events-none"
          style={{
            right: "4px",
            top: `${72 - points[points.length - 1] * 0.55}px`,
            backgroundColor: spikeActive ? "#F59E0B" : "#3B82F6"
          }}
        />

        <div className="absolute top-2 right-2 bg-brand-dark/80 text-[7px] font-semibold text-zinc-500 border border-white/[0.05] px-1 rounded flex items-center gap-1 font-mono">
          <Activity className="w-2.5 text-brand-blueprint animate-pulse" />
          REAL-TIME TELEMETRY PLOT
        </div>
      </div>

      {/* Interactive Spike Trigger */}
      <button
        onClick={triggerSpike}
        disabled={spikeActive}
        className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded bg-brand-amber/10 hover:bg-brand-amber/15 border border-brand-amber/20 text-brand-amber hover:text-white font-bold transition-all cursor-pointer font-mono"
      >
        <Activity className={`w-3.5 h-3.5 ${spikeActive ? "animate-pulse" : ""}`} />
        SIMULATE TRAFFIC CONGESTION
      </button>

    </div>
  );
};

// ==========================================
// CARD 5 VISUAL: Spectra Identity (ZK-Passkey Validation)
// ==========================================
const SpectraVisual: React.FC = () => {
  const [state, setState] = useState<"idle" | "scanning" | "verified">("idle");
  const [authHash, setAuthHash] = useState<string>("0x0000...0000");

  const startScan = async () => {
    if (state !== "idle") return;
    setState("scanning");
    
    // Simulate multi-layered biometric or hardware passkey scanning
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setState("verified");
    // Generate pseudo cryptograph signature
    const randomHex = Array.from({ length: 4 }, () => 
      Math.floor(Math.random() * 65536).toString(16).padStart(4, "0")
    ).join(":");
    setAuthHash(`0x${randomHex.toUpperCase()}`);

    // Wait and reset back to idle
    setTimeout(() => {
      setState("idle");
    }, 4000);
  };

  return (
    <div className="w-full flex flex-col gap-3 font-mono text-[10px] p-2 bg-brand-dark/40 rounded-lg border border-white/[0.02] h-full justify-between">
      
      {/* Concentric Cryptographic Ring Scanner */}
      <div className="relative h-[95px] flex items-center justify-center bg-brand-panel/50 border border-white/[0.03] rounded-md overflow-hidden">
        
        {/* SVG Cryptographic scanner circles */}
        <svg className="w-[85px] h-[85px] overflow-visible">
          {/* Inner Rotating Ring */}
          <motion.circle
            cx="42.5"
            cy="42.5"
            r="35"
            fill="none"
            stroke="rgba(59, 130, 246, 0.15)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          />

          {/* Outer Rotating Ring */}
          <motion.circle
            cx="42.5"
            cy="42.5"
            r="24"
            fill="none"
            stroke={state === "scanning" ? "#F59E0B" : "rgba(248, 249, 250, 0.05)"}
            strokeWidth="1"
            strokeDasharray="4 2"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />

          {/* Precision Crosshairs */}
          <line x1="42.5" y1="0" x2="42.5" y2="85" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
          <line x1="0" y1="42.5" x2="85" y2="42.5" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
        </svg>

        {/* Dynamic Center icon based on state */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {state === "idle" && (
              <motion.div
                key="fingerprint"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <Fingerprint className="w-8 h-8 text-zinc-500 hover:text-white transition-colors" />
              </motion.div>
            )}

            {state === "scanning" && (
              <motion.div
                key="scanning"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-brand-amber"
              >
                <Fingerprint className="w-8 h-8" />
              </motion.div>
            )}

            {state === "verified" && (
              <motion.div
                key="verified"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                className="text-emerald-400"
              >
                <ShieldCheck className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scanner Laser Bar */}
        {state === "scanning" && (
          <motion.div
            initial={{ top: "10%" }}
            animate={{ top: "90%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", repeatType: "reverse" }}
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-amber to-transparent z-10 blur-[1px]"
          />
        )}
      </div>

      {/* Terminal Key Display */}
      <div className="p-2 bg-black/60 rounded border border-white/[0.03] text-[9.5px]">
        <div className="flex justify-between mb-1.5 text-zinc-500 font-bold border-b border-white/[0.04] pb-1">
          <span>ZK-AUTH INTERFACE</span>
          <span className="text-[7.5px] uppercase font-semibold text-brand-blueprint">PASSKEY SHIELD</span>
        </div>
        
        <div className="flex flex-col gap-1 text-[8.5px]">
          <div className="flex justify-between">
            <span className="text-zinc-600 font-semibold">STATUS:</span>
            <span className={state === "verified" ? "text-emerald-400 font-bold" : state === "scanning" ? "text-brand-amber font-bold animate-pulse" : "text-zinc-500 font-medium"}>
              {state === "verified" ? "KEY PROVEN" : state === "scanning" ? "PROOF DECRYPTING..." : "AWAITING AUTH"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-zinc-600 font-semibold">ZK-PROOF:</span>
            <span className="text-zinc-300 font-mono select-all truncate max-w-[90px]">{authHash}</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={startScan}
        disabled={state !== "idle"}
        className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded bg-brand-blueprint/15 hover:bg-brand-blueprint/25 border border-brand-blueprint/30 text-brand-blueprint hover:text-white font-bold transition-all cursor-pointer font-mono"
      >
        <Fingerprint className="w-3.5 h-3.5" />
        AUTHENTICATE PASSKEY
      </button>

    </div>
  );
};

// ==========================================
// CARD 6 VISUAL: Mitrixo Engine Core (Cluster Term)
// ==========================================
interface HostNode {
  name: string;
  region: string;
  cpu: number;
  ram: string;
  load: string;
}

const MitrixoCoreVisual: React.FC = () => {
  const [activeHost, setActiveHost] = useState<"US-East" | "EU-West" | "AP-South">("US-East");
  const [logs, setLogs] = useState<string[]>([
    "Host cluster initialized.",
    "eBPF filters successfully mapped to eth0."
  ]);

  const hosts: Record<"US-East" | "EU-West" | "AP-South", HostNode> = {
    "US-East": { name: "mitrix-node-01.us", region: "Virginia, US", cpu: 32, ram: "42.8GB/64GB", load: "0.24" },
    "EU-West": { name: "mitrix-node-02.eu", region: "Frankfurt, DE", cpu: 58, ram: "38.1GB/64GB", load: "0.56" },
    "AP-South": { name: "mitrix-node-03.ap", region: "Singapore, SG", cpu: 18, ram: "18.5GB/64GB", load: "0.12" }
  };

  const handleHostChange = (hostKey: "US-East" | "EU-West" | "AP-South") => {
    setActiveHost(hostKey);
    setLogs([
      `Switched context to ${hosts[hostKey].name}`,
      `Routing metrics synced from ${hosts[hostKey].region}.`,
      "eBPF telemetry hook state: ACTIVE (0 packet loss)"
    ]);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 bg-brand-dark/40 p-2.5 rounded-lg border border-white/[0.02]">
      
      {/* Node Control Menu */}
      <div className="flex flex-row md:flex-col gap-1.5 w-full md:w-[130px] justify-between">
        {(["US-East", "EU-West", "AP-South"] as const).map((region) => {
          const isActive = activeHost === region;
          return (
            <button
              key={region}
              onClick={() => handleHostChange(region)}
              className="flex-grow flex items-center justify-between p-2 rounded text-left border font-mono text-[9.5px] cursor-pointer transition-all hover:bg-white/[0.02]"
              style={{
                backgroundColor: isActive ? "rgba(59, 130, 246, 0.08)" : "transparent",
                borderColor: isActive ? "rgba(59, 130, 246, 0.3)" : "rgba(255, 255, 255, 0.04)"
              }}
            >
              <div className="flex items-center gap-1.5">
                <Server className={`w-3.5 h-3.5 ${isActive ? "text-brand-blueprint" : "text-zinc-500"}`} />
                <span className={isActive ? "text-brand-white font-bold" : "text-zinc-400 font-medium"}>
                  {region}
                </span>
              </div>
              <ChevronRight className={`w-3 h-3 text-zinc-600 ${isActive ? "text-brand-blueprint translate-x-0.5" : ""} transition-all`} />
            </button>
          );
        })}
      </div>

      {/* Terminal Details */}
      <div className="flex-grow flex flex-col justify-between gap-3 font-mono text-[9px] text-zinc-400 bg-black/60 p-2.5 rounded-md border border-white/[0.03]">
        
        <div>
          <div className="text-[10px] text-zinc-300 font-bold border-b border-white/[0.05] pb-1.5 mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 text-brand-amber animate-pulse" />
              EDGE HOST TERMINAL
            </span>
            <span className="text-[7px] text-brand-blueprint font-bold">KERNEL: EBPF_19.8-LTS</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[8.5px] mb-2.5">
            <div>
              <span className="text-zinc-500 font-semibold block uppercase">SERVER NAME:</span>
              <span className="text-zinc-200 font-semibold">{hosts[activeHost].name}</span>
            </div>
            <div>
              <span className="text-zinc-500 font-semibold block uppercase">LOAD AVERAGE:</span>
              <span className="text-zinc-200 font-semibold">{hosts[activeHost].load}</span>
            </div>
            <div>
              <span className="text-zinc-500 font-semibold block uppercase">RAM UTILIZATION:</span>
              <span className="text-zinc-200 font-semibold">{hosts[activeHost].ram}</span>
            </div>
            <div>
              <span className="text-zinc-500 font-semibold block uppercase">CPU LOAD:</span>
              <span className="text-brand-blueprint font-bold">{hosts[activeHost].cpu}%</span>
            </div>
          </div>

          {/* Micro CPU Load bar indicator */}
          <div className="h-1.5 w-full bg-zinc-950 rounded overflow-hidden border border-white/[0.02] mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-blueprint to-brand-amber"
              style={{ width: `${hosts[activeHost].cpu}%` }}
              transition={mechanicalSpring}
            />
          </div>
        </div>

        {/* Live log stream */}
        <div className="pt-2 border-t border-white/[0.04] text-[8px] text-zinc-500 leading-tight">
          {logs.map((log, index) => (
            <div key={index} className="truncate flex items-start gap-1">
              <span className="text-brand-blueprint">&gt;</span>
              <span className="text-zinc-400">{log}</span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

// ==========================================
// MAIN COMPONENT EXPORT
// ==========================================
export default function ProductPipeline() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-24 px-6 md:px-12 bg-brand-dark overflow-hidden font-sans">
      
      {/* Structural Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blueprint/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-amber/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col items-center text-center gap-4 mb-20 max-w-2xl mx-auto">
        
        {/* Subtle dynamic status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.04] bg-white/[0.01] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-amber opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-amber"></span>
          </span>
          <span className="text-[10px] font-mono tracking-wider font-semibold text-zinc-300">
            MITRIXO PIPELINE ACTIVE // Q2-Q3 ARCHITECTURES
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Future-Ready Standalone <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-brand-blueprint via-brand-white to-brand-amber bg-clip-text text-transparent">
            SaaS Infrastructures
          </span>
        </h2>
        
        <p className="text-sm text-zinc-400 leading-relaxed font-normal">
          Explore our tactical blueprint of distributed database systems, federated CMS engines, and cryptographically guarded pipelines ready to back next-gen enterprise operations.
        </p>

      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
        
        {/* CARD 1: AetherDB */}
        <ProductCard
          title="AetherDB Cache Layer"
          category="Distributed Data Sync"
          tags={["Rust", "WebAssembly", "Redis", "PostgreSQL"]}
          className="md:col-span-1 md:row-span-1"
        >
          <AetherDBVisual />
        </ProductCard>

        {/* CARD 2: NexusCMS */}
        <ProductCard
          title="NexusCMS Federated Node"
          category="Enterprise Headless CMS"
          tags={["Next.js", "Edge Runtime", "Supabase", "PostgreSQL", "GraphQL"]}
          className="md:col-span-2 md:row-span-2"
        >
          <NexusCMSVisual />
        </ProductCard>

        {/* CARD 3: Spectra Identity */}
        <ProductCard
          title="Spectra Biometric Shield"
          category="Cryptographic ZK-Auth"
          tags={["WebAuthn", "ZK-Snarks", "TypeScript", "Redis"]}
          className="md:col-span-1 md:row-span-1"
        >
          <SpectraVisual />
        </ProductCard>

        {/* CARD 4: Chronos Engine */}
        <ProductCard
          title="Chronos Flow Controller"
          category="Cron/Job Runner & Orchestrator"
          tags={["Go", "Temporal", "gRPC", "Docker", "Prometheus"]}
          className="md:col-span-1 md:row-span-2"
        >
          <ChronosVisual />
        </ProductCard>

        {/* CARD 5: Helios Analytics */}
        <ProductCard
          title="Helios High-Throughput Engine"
          category="Zero-Knowledge Analytics"
          tags={["ClickHouse", "React", "Vector", "Apache Kafka"]}
          className="md:col-span-2 md:row-span-1"
        >
          <HeliosVisual />
        </ProductCard>

        {/* CARD 6: Mitrixo Engine Core */}
        <ProductCard
          title="Mitrixo Compute Engine"
          category="Bare-Metal Orchestrator"
          tags={["Kubernetes", "WASM", "Linux", "QEMU", "eBPF"]}
          className="md:col-span-2 md:row-span-1"
        >
          <MitrixoCoreVisual />
        </ProductCard>

      </div>

      {/* Global Minimalist Footer Brand Accent Badge */}
      <div className="mt-16 flex justify-center">
        <div className="relative group/badge flex items-center gap-2.5 py-2 px-5 rounded-full border border-white/[0.04] bg-white/[0.01] hover:border-brand-blueprint/30 hover:bg-brand-blueprint/5 transition-all duration-300 pointer-events-auto">
          {/* Subtle logo pulse */}
          <div className="relative flex items-center justify-center w-5 h-5 rounded bg-brand-panel border border-white/[0.05] group-hover/badge:border-brand-amber/30 transition-colors">
            <span className="text-[10px] font-bold text-brand-amber text-amber-glow">M</span>
          </div>
          
          <span className="text-[10px] font-mono tracking-wider font-semibold text-zinc-400 group-hover/badge:text-zinc-200 transition-colors">
            POWERED BY THE <span className="text-brand-amber font-extrabold">MITRIXO</span> ENGINE
          </span>

          <ChevronRight className="w-3 h-3 text-zinc-600 group-hover/badge:text-brand-amber group-hover/badge:translate-x-0.5 transition-all" />
        </div>
      </div>

    </section>
  );
}
