"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Layers, Cpu, Wrench, ShieldAlert, Award, Grid, Compass, Terminal } from "lucide-react";

interface Project {
  id: string;
  name: string;
  category: "SaaS & CRMs" | "IoT & Hardware" | "Systems & Utilities" | "Aviation & EdTech" | "Design & Visuals";
  stack: string[];
  description: string;
  scope: string;
  capabilities: string[];
  externalUrl?: string;
}

const projectsData: Project[] = [
  {
    id: "alpha-calisthenics",
    name: "Alpha Calisthenics Platform",
    category: "SaaS & CRMs",
    stack: ["React", "Firebase Auth", "Google Drive API", "Paymob API"],
    description: "Custom calisthenics coaching website & athlete onboarding manager.",
    scope: "Coaching subscriptions portal with multi-step biometrics onboarding, video uploads directly to specific Google Drive directories, and Paymob payment gateway integration.",
    capabilities: ["English & Arabic localization", "Firebase Google Auth", "Coach mission dashboard", "Paymob webhook verification"]
  },
  {
    id: "atplvector",
    name: "EASA Flight Theory Engine",
    category: "Aviation & EdTech",
    stack: ["TypeScript", "React", "TailwindCSS", "Gemini 2.5 Flash API"],
    description: "High-fidelity aviation theory preparation platform for EASA pilots.",
    scope: "Interactive flight preparation study platform with progress trackers, weather METAR/TAF to JSON decoders, and conversational ATC voice roleplays.",
    capabilities: ["ATC roleplay voice simulator", "Progress stars mastery tracker", "Aerofoil geometry force visualizer", "METAR/TAF decoder engine"]
  },
  {
    id: "autodesk-fixer",
    name: "Autodesk Registry & License Scrubber",
    category: "Systems & Utilities",
    stack: ["C#", "WPF", "PowerShell"],
    description: "Graphical system utility for purging Autodesk licensing remnants.",
    scope: "Graphical cleaner application to silence lingering background services and scrub Autodesk keys from the Windows registry.",
    capabilities: ["UAC administrative auto-elevation", "Registry key sanitization", "ODIS silent uninstall sweeps", "Active process termination"]
  },
  {
    id: "coptic-pascha",
    name: "Trilingual Liturgical Reader",
    category: "Design & Visuals",
    stack: ["React", "TailwindCSS", "Bible-API"],
    description: "Trilingual digital companion for Holy Week liturgical rites.",
    scope: "Liturgical reading application displaying synchronized parallel columns in English, Coptic, and Arabic Amiri fonts.",
    capabilities: ["Trilingual layout alignment", "Deacon-specific hymn markers", "Dynamic font scaling accessibility overrides", "External Bible search integration"]
  },
  {
    id: "dec-tracker",
    name: "DEC Milestone & Activity Tracker",
    category: "SaaS & CRMs",
    stack: ["React 19", "Supabase", "C# Background Service", "Zoho Mail API"],
    description: "Milestone tracker and active monitoring dashboard for Dar Al Khalij Engineering.",
    scope: "Operational tracker tracing active milestones, integrated with a C# desktop time tracker logging window context switches.",
    capabilities: ["Supabase Realtime WebSockets", "Zoho business email sync", "Auto invoice creator", "C# idle time & title tracker"]
  },
  {
    id: "egygrafx",
    name: "EGYGRAFX B2B Procurement Hub",
    category: "SaaS & CRMs",
    stack: ["React", "Vite", "Tailwind CSS v4", "Firebase", "Clerk"],
    description: "Serverless B2B printing equipment matchmaker platform.",
    scope: "Industrial printing matchmaker dashboard utilizing bento application sectors and dynamic cost calculations.",
    capabilities: ["Bento application filter matrices", "Width/printhead parameter configurator", "Multi-currency ROI profit modeler", "Specialized leads parser"]
  },
  {
    id: "faa-test-guide",
    name: "FAA Knowledge Examination System",
    category: "Aviation & EdTech",
    stack: ["React", "Firestore", "LocalStorage"],
    description: "FAA pilot test simulator for the Egyptian Aviation Academy.",
    scope: "Interactive study engine backing candidate preparations for FAA Knowledge Exams.",
    capabilities: ["PPL, IR, CPL question selectors", "Firestore auto-sync", "Incorrect answers review queue", "Visual supplement graphic support"]
  },
  {
    id: "feasibility-study",
    name: "TAQA Facilities Feasibility Modeler",
    category: "Design & Visuals",
    stack: ["Next.js", "Framer Motion", "Python (Whisper transcribing)"],
    description: "Asset feasibility platform comparing facility renewal vs reconstruction for TAQA distribution.",
    scope: "Interactive platform mapping refurbishment sunk costs versus reconstruction ROI projections.",
    capabilities: ["Refurbishment cost models", "Scroll-guided slide presentation decks", "Whisper speech-to-text transcribers", "Civil defense regulations checklists"]
  },
  {
    id: "gameneg-storefront",
    name: "GAMÉN 3D Customization Storefront",
    category: "Design & Visuals",
    stack: ["React", "Three.js", "React Three Fiber", "Firebase"],
    description: "Interactive storefront showcasing hand-crafted accessories.",
    scope: "High-end retail storefront using procedural 3D model customization and interactive layouts.",
    capabilities: ["3D dynamic model visualizers", "Spring-based box emergence animations", "Horizontal scrolling collection timelines", "Isolate collection namespaces"]
  },
  {
    id: "gameneg-landing",
    name: "GAMÉN Premium Brand Experience",
    category: "Design & Visuals",
    stack: ["React", "TailwindCSS", "Framer Motion", "Web Audio API"],
    description: "Luxury brand experience page featuring wooden bowties and custom centerpieces.",
    scope: "Scroll-linked interactive page featuring 3D tilt customizers and timeline carvings stories.",
    capabilities: ["3D tilt centralization configuration", "Scroll-triggered unboxing animations", "Synthesized ambient audio effects", "Exploded layer component parallax"]
  },
  {
    id: "inzan-platform",
    name: "INZAN High-Performance Fitness PWA",
    category: "SaaS & CRMs",
    stack: ["React 19", "Vite", "Tailwind CSS v4", "Stripe", "Firebase"],
    description: "Elite fitness platform with portals for members, coaches, nutritionists, and administrators.",
    scope: "Comprehensive fitness ecosystem incorporating AI recovery calculations and Stripe subscription portals.",
    capabilities: ["AI Recovery Coach & wear data", "Trainer consultation calendar", "IoT temperature/lighting control panels", "Real-time Kitchen Display System (KDS)"]
  },
  {
    id: "inzan-locker",
    name: "MQTT Smart Locker Gateway",
    category: "IoT & Hardware",
    stack: ["HTML", "MQTT", "Cloud Run", "SSH Secure Tunnels"],
    description: "MQTT smart locker middleware bridge.",
    scope: "Outbound secure tunnel connection routing mobile client check-outs to physical locker relays.",
    capabilities: ["Zero-login credential caching", "Auto-pulsing solenoid coil guards", "Outbound Pinggy/Bore secure tunnels", "Apple Wallet pkpass generation"]
  },
  {
    id: "joyful-mendel",
    name: "Saitek DirectInput Calibration Deck",
    category: "IoT & Hardware",
    stack: ["C++", "Windows Multimedia APIs", "Dear ImGui"],
    description: "Saitek flight yoke and rudder pedal direct calibration utility.",
    scope: "Low-level calibration desktop utility reading DirectInput offsets from connected Saitek flight hardware.",
    capabilities: ["WinMM USB hardware scan hooks", "Interactive yoke/rudder UI dashboard", "Calibration offset overrides", "Mathematical input simulator curves"]
  },
  {
    id: "kaabapass",
    name: "Umrah Travel Booking Automator",
    category: "SaaS & CRMs",
    stack: ["React", "TypeScript", "Stripe", "ICAO Passport MRZ Parser"],
    description: "One-click Umrah travel booking system for US Muslims.",
    scope: "Umrah bookings portal with client-side passport scanning parser and visa rule eligibility validators.",
    capabilities: ["Client passport photo scanner", "Affirm/Klarna installments gates", "Dynamic package SmartBuilder sheets", "Visa rule validations engine"]
  },
  {
    id: "matchmaking-crm",
    name: "PureMatch Broker CRM & Client Portal",
    category: "SaaS & CRMs",
    stack: ["React", "Deno", "Resend", "LocalStorage"],
    description: "Matchmaker CRM and anonymous candidate portal.",
    scope: "Privacy-focused matchmaking CRM providing candidate portals with three-stage client data privacy gates.",
    capabilities: ["Three-stage privacy gate handshake", "Isolated Deno email dispatcher", "Post-date chemistry feedback loops", "Auto staff follow-up check-ins"]
  },
  {
    id: "mi5a-com",
    name: "Mitry Visuals Creative Portfolio",
    category: "Design & Visuals",
    stack: ["React", "TailwindCSS", "Formspree", "JSON Database"],
    description: "Interactive visual artist, pilot, and engineer portfolio dashboard.",
    scope: "Dynamic creative hub demonstrating portfolio galleries and in-app Instagram reel visual players.",
    capabilities: ["Dynamic catalog runtime load", "Bento categorizations index", "Embedded Instagram Reel overlay modal", "Glitch intro loader animation"]
  },
  {
    id: "mi5a-gh-pages",
    name: "WebGL Spatial Parallax Engine",
    category: "Design & Visuals",
    stack: ["HTML5", "CSS4", "JavaScript", "Framer Motion"],
    description: "Highly interactive creative portfolio with scroll parallax spatial grids.",
    scope: "Personal airspace site featuring cursor-following 3D perspective grids and timeline carousels.",
    capabilities: ["Sci-Fi canvas particle load", "Scroll-linked drag project carousel", "3D pointermove spatial grids", "CSS 3D perspective vector animations"]
  },
  {
    id: "mitrixio-portal",
    name: "MITRIXO SaaS Studio Gateway",
    category: "Design & Visuals",
    stack: ["Next.js 16", "Tailwind CSS 4", "Framer Motion"],
    description: "Visual waitlist portal and custom database structure skeletons.",
    scope: "Active brand landing page for MITRIXO SaaS studio, featuring breathing glowing graphics and customized cursors.",
    capabilities: ["Lerp custom cursor tracker", "Breathing ambient glows overlays", "Waitlist client format validation", "Skeleton database models interfaces"]
  },
  {
    id: "presentation-generator",
    name: "XML Document Slide Compiler",
    category: "Systems & Utilities",
    stack: ["Python", "python-docx", "python-pptx"],
    description: "Clinical/study document-to-presentation automation engine.",
    scope: "Python pipeline analyzing Microsoft Word XML structures and building formatted PowerPoint slide decks.",
    capabilities: ["In-place XML image maps parsing", "Auto 25+ slide generation scripts", "Adaptive vertical image placement", "Aesthetic dark theme overrides"]
  },
  {
    id: "save-tarek",
    name: "Linguistic Humanizer & Anti-AI Pipeline",
    category: "Systems & Utilities",
    stack: ["Python", "python-docx", "Gemini 3.5 API"],
    description: "Custom document rephrasing and semantic optimizer pipeline.",
    scope: "French text rephrasing service using Gemini API structured outputs to humanize academic and professional docx documents.",
    capabilities: ["Microsoft Word file parser", "Syntactic inversion rephrasing model", "Acoustic style burstiness configs", "Document layout retention sweeps"]
  },
  {
    id: "strike-boxing-crm",
    name: "Strike Boxing Member Management CRM",
    category: "SaaS & CRMs",
    stack: ["React 19", "Vite", "Firebase Firestore"],
    description: "Custom gym management platform and client pipelines.",
    scope: "Branch operations CRM tracing lead stages, payments, session balances, and coach schedulers.",
    capabilities: ["Lead conversion tracking maps", "Sequential Member ID transaction counter", "Instapay 12-digit reference check", "Super-admin role configurations"]
  },
  {
    id: "syncwave",
    name: "SyncWave Multi-Device Audio Streamer",
    category: "IoT & Hardware",
    stack: ["C++", "Dear ImGui", "miniaudio"],
    description: "Windows GUI low-latency multi-device audio player.",
    scope: "C++ desktop application capturing loopback output and streaming to multiple output devices simultaneously with latency corrections.",
    capabilities: ["Dual playback device loopback stream", "Acoustic calibration mic estimations", "Low/high-pass Butterworth filters", "Manual phase-nulling alignments"]
  },
  {
    id: "workout-mitrixo",
    name: "MITRIXO Health Coach MCP Server",
    category: "SaaS & CRMs",
    stack: ["Next.js", "Model Context Protocol Server", "OpenAI API"],
    description: "AI-powered fitness tracking application.",
    scope: "Comprehensive AI fitness application bridging a Next.js client with an MCP server to log activities in natural language.",
    capabilities: ["Conversational natural language coach", "SSE/HTTP Model Context Protocol tools", "Offline activity logs queue caching", "Python PDF regimen handout builder"],
    externalUrl: "https://workout.mitrixo.com"
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "SaaS & CRMs", "IoT & Hardware", "Systems & Utilities", "Aviation & EdTech", "Design & Visuals"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.stack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.capabilities.some(cap => cap.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "SaaS & CRMs": return <Layers className="w-4 h-4" />;
      case "IoT & Hardware": return <Cpu className="w-4 h-4" />;
      case "Systems & Utilities": return <Wrench className="w-4 h-4" />;
      case "Aviation & EdTech": return <Compass className="w-4 h-4" />;
      case "Design & Visuals": return <Grid className="w-4 h-4" />;
      default: return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section id="portfolio" className="w-full max-w-6xl mx-auto px-4 py-20 border-t border-white/[0.03]">
      {/* Title block */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] font-bold tracking-wider uppercase mb-3 border-amber-glow">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Verified Capabilities Catalog
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
            SYSTEM <span className="text-amber-500 text-amber-glow">PORTFOLIO</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-md font-sans">
            A comprehensive look at our completed enterprise systems, IoT integrations, AI engines, and hardware utilities.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input 
            type="text"
            placeholder="Filter by tech stack or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#171717] pl-10 pr-4 py-2.5 rounded-xl border border-white/5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500/30 focus:ring-1 focus:ring-amber-500/30 transition-all"
          />
        </div>
      </div>

      {/* Category selector chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
              selectedCategory === cat
                ? "bg-amber-500 text-brand-dark font-extrabold border border-amber-400 shadow-lg shadow-amber-500/10 border-amber-glow scale-[1.02]"
                : "bg-[#171717] text-zinc-400 border border-white/[0.03] hover:text-white hover:border-white/10"
            }`}
          >
            {cat !== "All" && getCategoryIcon(cat)}
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid count summary */}
      <div className="text-[10px] font-mono tracking-widest text-zinc-500 mb-6 uppercase flex justify-between">
        <span>ACTIVE REGISTRY: {filteredProjects.length} SOLUTIONS</span>
        {searchQuery && <span>FILTERED SEARCH ENABLED</span>}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group glass-card bg-[#171717]/60 hover:bg-[#171717]/90 p-6 rounded-2xl border border-white/[0.03] hover:border-amber-500/20 shadow-xl cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Lines */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/0 group-hover:via-amber-500/30 to-transparent transition-all duration-500" />
              
              <div className="flex justify-between items-start gap-4 mb-4">
                <span className="text-[10px] font-mono font-bold tracking-wider text-amber-500 bg-amber-500/5 px-2.5 py-0.5 rounded-full border border-amber-500/15 uppercase">
                  {project.category}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-500 transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors font-sans uppercase">
                {project.name}
              </h3>
              <p className="text-zinc-400 text-xs line-clamp-2 mb-4 leading-relaxed font-sans">
                {project.description}
              </p>

              {/* Technologies pills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.stack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-[9px] font-mono text-zinc-500 bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.04]">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="text-[9px] font-mono text-zinc-500 bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.04]">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Detail overlay Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/85 backdrop-blur-md z-[1000] flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#171717] w-full max-w-lg rounded-3xl p-8 border border-amber-500/20 shadow-2xl relative border-amber-glow"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-amber-500/30" />
              <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-amber-500/30" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-amber-500/30" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-amber-500/30" />

              <div className="flex justify-between items-start gap-4 mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-500 bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/15 uppercase">
                  {activeProject.category}
                </span>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="text-zinc-500 hover:text-white transition-colors cursor-pointer text-sm font-mono tracking-widest"
                >
                  [CLOSE]
                </button>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2 uppercase font-sans border-b border-white/[0.04] pb-3">
                {activeProject.name}
              </h3>

              <div className="space-y-5 my-6">
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-1 flex items-center gap-1">
                    <Compass className="w-3 h-3" /> Project Scope
                  </h4>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    {activeProject.scope}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-1 flex items-center gap-1">
                    <Terminal className="w-3 h-3" /> Technical Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5 mt-2">
                    {activeProject.capabilities.map((cap, i) => (
                      <li key={i} className="text-zinc-300 text-xs flex items-start gap-2">
                        <Award className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-1 flex items-center gap-1">
                    <Cpu className="w-3 h-3" /> Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {activeProject.stack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono text-amber-500 bg-amber-500/5 px-2.5 py-1 rounded-lg border border-amber-500/15">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {activeProject.externalUrl && (
                  <div className="pt-4 border-t border-white/[0.04] mt-6">
                    <a
                      href={activeProject.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-brand-dark font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/10 transition-all duration-200"
                    >
                      Launch Application ↗
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
