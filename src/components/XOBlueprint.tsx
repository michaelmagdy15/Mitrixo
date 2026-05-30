"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Binary,
  Database,
  Film,
  Network,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Types
type TabType = "engineering" | "dashboards" | "production" | "cloud";

interface ServiceConfig {
  id: TabType;
  label: string;
  capNum: string;
  icon: React.ReactNode;
  accentColor: string;
  accentClass: string;
  borderGlowClass: string;
  bgAccentClass: string;
  textAccentClass: string;
  heading: string;
  description: string[];
  features: string[];
  metric: string;
  gradientFrom: string;
  gradientTo: string;
  gradientVia?: string;
  visualIcon: React.ReactNode;
}

const services: ServiceConfig[] = [
  {
    id: "engineering",
    label: "Custom Software",
    capNum: "CAPABILITY 01",
    icon: <Binary size={18} />,
    accentColor: "#38bdf8",
    accentClass: "bg-sky-400",
    borderGlowClass: "bg-sky-400",
    bgAccentClass: "bg-sky-400/10",
    textAccentClass: "text-sky-400",
    heading: "Enterprise Software, Built to Scale",
    description: [
      "From SaaS platforms to internal tools, we design and engineer production-grade software that handles millions of users. Our systems are architected for performance, security, and long-term maintainability.",
      "We move fast without cutting corners — delivering full-stack applications with clean architecture, type-safe codebases, and CI/CD pipelines ready for day-one deployment.",
    ],
    features: [
      "Full-Stack Web Applications",
      "Multi-Tenant SaaS Architecture",
      "API Design & Integration",
      "Cloud-Native Deployment",
    ],
    metric: "20+ Software Projects · 99.9% Uptime",
    gradientFrom: "from-sky-500/20",
    gradientTo: "to-blue-700/10",
    gradientVia: "via-sky-600/15",
    visualIcon: <Binary size={56} strokeWidth={1} className="text-sky-400/60" />,
  },
  {
    id: "dashboards",
    label: "Operational CRM",
    capNum: "CAPABILITY 02",
    icon: <Database size={18} />,
    accentColor: "#f59e0b",
    accentClass: "bg-amber-500",
    borderGlowClass: "bg-amber-500",
    bgAccentClass: "bg-amber-500/10",
    textAccentClass: "text-amber-500",
    heading: "Custom CRM & Business Operations",
    description: [
      "We build tailored CRM systems that fit exactly how your business operates. From member management to sales pipelines, we automate your workflows and give your team the visibility they need to grow.",
      "Every dashboard we deliver is purpose-built — no generic software, no workarounds. Your operations, engineered from the ground up.",
    ],
    features: [
      "Custom Member & Client Management",
      "Automated Workflows & Notifications",
      "Real-Time Reporting Dashboards",
      "Role-Based Access & Permissions",
    ],
    metric: "Powering 5,000+ Active Members · Built for Strike Boxing EG",
    gradientFrom: "from-amber-500/20",
    gradientTo: "to-orange-700/10",
    gradientVia: "via-amber-600/15",
    visualIcon: <Database size={56} strokeWidth={1} className="text-amber-400/60" />,
  },
  {
    id: "production",
    label: "Creative Production",
    capNum: "CAPABILITY 03",
    icon: <Film size={18} />,
    accentColor: "#a78bfa",
    accentClass: "bg-violet-400",
    borderGlowClass: "bg-violet-400",
    bgAccentClass: "bg-violet-400/10",
    textAccentClass: "text-violet-400",
    heading: "Cinematic Brand Content",
    description: [
      "We produce commercial films, brand videos, and cinematic content that positions your brand at the top of its industry. Our productions combine cinematic storytelling with strategic marketing goals.",
      "From aerial drone sequences to color-graded post-production, every frame is intentional — designed to move audiences and convert viewers into clients.",
    ],
    features: [
      "Commercial Film & Brand Videos",
      "Drone Cinematography",
      "Color Grading & Post-Production",
      "Brand Identity & Visual Strategy",
    ],
    metric: "RED Camera · Dolby Audio · 4K HDR",
    gradientFrom: "from-violet-500/20",
    gradientTo: "to-purple-800/10",
    gradientVia: "via-violet-600/15",
    visualIcon: <Film size={56} strokeWidth={1} className="text-violet-400/60" />,
  },
  {
    id: "cloud",
    label: "Cloud & AI Infrastructure",
    capNum: "CAPABILITY 04",
    icon: <Network size={18} />,
    accentColor: "#34d399",
    accentClass: "bg-emerald-400",
    borderGlowClass: "bg-emerald-400",
    bgAccentClass: "bg-emerald-400/10",
    textAccentClass: "text-emerald-400",
    heading: "Cloud Infrastructure & AI Integration",
    description: [
      "We design and deploy scalable cloud architectures on AWS, GCP, and Vercel. We also integrate AI models into your product — from intelligent search to automated content pipelines.",
      "Our infrastructure is built to handle real production loads: auto-scaling, edge caching, CI/CD automation, and database optimization baked in from day one.",
    ],
    features: [
      "AWS & GCP Cloud Architecture",
      "AI Model Integration",
      "Database Design & Optimization",
      "DevOps & CI/CD Pipelines",
    ],
    metric: "<20ms Response Times · Auto-Scaling",
    gradientFrom: "from-emerald-500/20",
    gradientTo: "to-teal-800/10",
    gradientVia: "via-emerald-600/15",
    visualIcon: <Network size={56} strokeWidth={1} className="text-emerald-400/60" />,
  },
];

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
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.3 },
  },
};

export default function XOBlueprint() {
  const [activeTab, setActiveTab] = useState<TabType>("engineering");

  const activeService = services.find((s) => s.id === activeTab)!;

  return (
    <div className="w-full min-h-screen bg-[#030712] text-[#F8F9FA] relative overflow-hidden font-sans p-4 sm:p-8 md:p-12">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Structural Container */}
      <div className="relative max-w-7xl mx-auto border border-white/[0.05] bg-[#0E0E11]/80 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col min-h-[80vh]">

        {/* Component Header */}
        <header className="border-b border-white/[0.04] p-6 flex items-center gap-4 bg-white/[0.01]">
          <div className="relative flex items-center justify-center w-10 h-10 border border-white/[0.08] bg-white/[0.02] rounded-xl overflow-hidden flex-shrink-0">
            <span className="text-zinc-200 font-extrabold text-sm tracking-widest">XO</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-semibold tracking-wider text-white uppercase">
                Our Core Capabilities
              </h1>
              <span className="text-[9px] py-0.5 px-2 bg-white/[0.05] border border-white/[0.08] text-zinc-300 font-medium rounded">
                Studio Services
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-medium tracking-tight mt-0.5 uppercase">
              Enterprise Engineering &amp; Creative Media Suite
            </p>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="flex flex-row border-b border-white/[0.04] bg-black/25 p-2 gap-2 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className="flex-1 min-w-[140px] flex-shrink-0 snap-start relative flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-350 group overflow-hidden border border-transparent"
            >
              {activeTab === service.id && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="absolute inset-0 bg-white/[0.03] border border-white/[0.06] rounded-xl shadow-inner"
                  transition={mechanicalSpring}
                />
              )}
              {activeTab === service.id && (
                <motion.div
                  layoutId="activeTabBorderGlow"
                  className={`absolute left-0 top-0 bottom-0 w-[3px] ${service.borderGlowClass}`}
                  transition={mechanicalSpring}
                />
              )}
              <div className="relative z-10 flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg transition-colors ${
                    activeTab === service.id
                      ? `${service.bgAccentClass} ${service.textAccentClass}`
                      : "bg-white/[0.02] text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {service.icon}
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-zinc-500 tracking-wider">
                    {service.capNum}
                  </span>
                  <span
                    className={`block font-semibold tracking-wide text-xs uppercase ${
                      activeTab === service.id
                        ? "text-white"
                        : "text-zinc-400 group-hover:text-zinc-200"
                    }`}
                  >
                    {service.label}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </nav>

        {/* Content Canvas */}
        <div className="flex-1 p-6 md:p-8 flex flex-col relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full"
            >
              {/* Left: Text Content */}
              <div className="lg:col-span-5 flex flex-col gap-8 h-full">
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 ${activeService.accentClass} rounded-full`} />
                    <span
                      className={`text-[10px] font-mono tracking-widest ${activeService.textAccentClass} uppercase`}
                    >
                      {activeService.label}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                    {activeService.heading}
                  </h2>

                  {activeService.description.map((para, i) => (
                    <p key={i} className="text-sm text-zinc-400 leading-relaxed font-light">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Feature List */}
                <div className="space-y-2.5">
                  {activeService.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className={activeService.textAccentClass} />
                      <span className="text-sm text-zinc-300 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Metric Row */}
                <div className="border border-white/[0.06] rounded-xl p-4 bg-white/[0.01] flex items-center justify-between gap-4">
                  <span className={`text-xs font-mono font-semibold ${activeService.textAccentClass}`}>
                    {activeService.metric}
                  </span>
                </div>
              </div>

              {/* Right: Visual Card */}
              <div className="lg:col-span-7 h-full">
                <ServiceVisualCard service={activeService} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SERVICE VISUAL CARD
   ============================================================================ */

function ServiceVisualCard({ service }: { service: ServiceConfig }) {
  return (
    <div className="w-full h-full flex flex-col border border-white/[0.06] bg-[#111113]/40 rounded-2xl overflow-hidden backdrop-blur-md relative min-h-[380px]">

      {/* Card Top Bar */}
      <div className="border-b border-white/[0.05] bg-white/[0.02] px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`w-2 h-2 rounded-full ${service.accentClass} animate-pulse`} />
          <span className="text-xs font-semibold text-zinc-300 tracking-wide uppercase">
            {service.label}
          </span>
        </div>
        <span className={`text-[9px] font-mono tracking-widest ${service.textAccentClass} uppercase opacity-70`}>
          {service.capNum}
        </span>
      </div>

      {/* Hero Gradient Area */}
      <div
        className={`flex-1 relative flex flex-col items-center justify-center bg-gradient-to-br ${service.gradientFrom} ${service.gradientVia ?? ""} ${service.gradientTo} p-10 overflow-hidden`}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glowing orb behind icon */}
        <div
          className={`absolute w-48 h-48 rounded-full blur-3xl opacity-20 ${service.accentClass}`}
          style={{ background: service.accentColor }}
        />

        {/* Central Icon */}
        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <div
            className={`p-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm ${service.bgAccentClass}`}
          >
            {service.visualIcon}
          </div>

          <div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              {service.heading}
            </h3>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              {service.description[0]}
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-2 max-w-sm">
            {service.features.map((feat) => (
              <span
                key={feat}
                className={`text-[10px] font-medium px-3 py-1 rounded-full border ${service.bgAccentClass} border-white/[0.08] ${service.textAccentClass}`}
              >
                {feat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="border-t border-white/[0.05] px-5 py-4 flex items-center justify-between bg-white/[0.01]">
        <span className="text-[11px] text-zinc-500 font-mono">
          {service.metric}
        </span>
        <button
          className={`flex items-center gap-2 text-xs font-semibold ${service.textAccentClass} hover:opacity-80 transition-opacity`}
        >
          Discuss This Service
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
