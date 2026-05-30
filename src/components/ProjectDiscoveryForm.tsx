"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Terminal, RefreshCw, Sparkles, Check } from "lucide-react";

const SERVICES = [
  { id: "saas", name: "Custom SaaS" },
  { id: "cms", name: "Enterprise CMS" },
  { id: "fullstack", name: "Full-Stack App" },
  { id: "cinema", name: "Cinematic Film" },
  { id: "drone", name: "Drone Cinematography" },
  { id: "assets", name: "Digital Asset Design" }
];

export default function ProjectDiscoveryForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    message: ""
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [logs, setLogs] = useState<string[]>([]);

  // Validation helpers
  const validateEmail = (email: string) => {
    if (!email) return "REQUIRED";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "INVALID FORMAT";
    return null;
  };

  const getFieldError = (field: "name" | "email" | "message") => {
    if (!touched[field]) return null;
    const value = formData[field];
    if (!value.trim()) return "REQUIRED";
    if (field === "email") return validateEmail(value);
    return null;
  };

  const isFormValid = 
    formData.name.trim() !== "" && 
    validateEmail(formData.email) === null && 
    formData.message.trim() !== "";

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: "name" | "email" | "message") => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setStatus("submitting");
    setLogs(["[SYS] COMPILING SERVICE SELECTIONS...", `[SYS] SELECTED_IDS: [${selectedServices.join(", ") || "NONE"}]`]);

    await new Promise(resolve => setTimeout(resolve, 800));
    setLogs(prev => [...prev, "[SEC] ENCRYPTING DATA TRANSMISSION PACKETS...", "[NET] NEGOTIATING EDGE ROUTER HANDSHAKE..."]);

    await new Promise(resolve => setTimeout(resolve, 850));
    setLogs(prev => [...prev, "[NET] SECURE HANDSHAKE COMPLETED // UPLOAD ACTIVE", "[SYS] WRITING TRANSMISSION FILE TO CORE SYSTEM..."]);

    await new Promise(resolve => setTimeout(resolve, 900));
    setStatus("success");
    setLogs(prev => [...prev, "✓ SUCCESS // TRANSMISSION CONFIRMED // ID: XO_PARTNER_" + Math.floor(Math.random() * 89999 + 10000)]);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", org: "", message: "" });
    setTouched({ name: false, email: false, message: false });
    setSelectedServices([]);
    setStatus("idle");
    setLogs([]);
  };

  const formatLogLine = (line: string) => {
    if (line.startsWith("[SYS]")) {
      return (
        <span className="block py-0.5">
          <span className="text-brand-blueprint font-semibold mr-1.5">[SYS]</span>
          {line.substring(6)}
        </span>
      );
    }
    if (line.startsWith("[SEC]")) {
      return (
        <span className="block py-0.5">
          <span className="text-brand-amber font-semibold mr-1.5">[SEC]</span>
          {line.substring(6)}
        </span>
      );
    }
    if (line.startsWith("[NET]")) {
      return (
        <span className="block py-0.5">
          <span className="text-purple-400 font-semibold mr-1.5">[NET]</span>
          {line.substring(6)}
        </span>
      );
    }
    if (line.startsWith("✓ SUCCESS")) {
      return (
        <span className="block py-1 text-emerald-400 font-bold tracking-wider border-t border-emerald-500/10 mt-1">
          {line}
        </span>
      );
    }
    return <span className="block py-0.5">{line}</span>;
  };

  return (
    <section id="partner" className="w-full relative py-28 px-4 md:px-8 bg-[#0A0A0C] border-t border-[#1E293B]/30 bg-grid-blueprint overflow-hidden">
      {/* Blueprint Outer Frame Corners */}
      <div className="absolute top-12 left-12 right-12 bottom-12 border border-white/[0.01] pointer-events-none rounded-2xl hidden lg:block" />

      {/* Decorative Blur Ambient Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#3B82F6]/3 to-[#F59E0B]/3 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* ==========================================
            LEFT COLUMN: BRAND DISCOVERY COPY
            ========================================== */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/5 text-[10px] font-semibold tracking-widest text-[#F59E0B] uppercase select-none">
              <Sparkles size={10} className="animate-pulse" />
              Partnership Workspace Active
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              Let&apos;s craft the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                systems of tomorrow
              </span> <br />
              together.
            </h2>
            
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Whether you need high-fidelity custom enterprise software systems engineered from ground zero, complex SaaS product launches, edge integrations, or premium commercial branding cinematography from our visuals lab, MITRIXO is your primary partner.
            </p>
            
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Select the capabilities required, submit your blueprint request, and initialize an elite engineering alignment call with our development and creative core staff.
            </p>
          </div>

          {/* Value Stats Metric Panel */}
          <div className="border border-white/[0.05] rounded-xl p-5 bg-[#111113]/30 grid grid-cols-3 gap-6 divide-x divide-white/[0.05] font-mono text-center">
            <div className="flex flex-col justify-center">
              <span className="block text-[10px] text-zinc-500 tracking-widest uppercase">SYS UPTIME</span>
              <span className="block text-base font-bold text-white mt-1">99.99%</span>
              <span className="text-[10px] text-emerald-400/90 font-medium tracking-wide mt-0.5">Production SLA</span>
            </div>
            <div className="flex flex-col justify-center pl-6">
              <span className="block text-[10px] text-zinc-500 tracking-widest uppercase">CORE SPEED</span>
              <span className="block text-base font-bold text-white mt-1">120 FPS</span>
              <span className="text-[10px] text-brand-blueprint/90 font-medium tracking-wide mt-0.5">Locked Performance</span>
            </div>
            <div className="flex flex-col justify-center pl-6">
              <span className="block text-[10px] text-zinc-500 tracking-widest uppercase">VISUAL RAW</span>
              <span className="block text-base font-bold text-white mt-1">8K RAW</span>
              <span className="text-[10px] text-brand-amber/90 font-medium tracking-wide mt-0.5">Cinematic Standard</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            RIGHT COLUMN: HIGH-FIDELITY FORM CARD
            ========================================== */}
        <div className="lg:col-span-7 w-full">
          <div className="relative rounded-2xl border border-white/[0.05] bg-[#111113]/40 backdrop-blur-xl p-6 md:p-8 shadow-2xl overflow-hidden">
            
            {/* Blueprint Grid Lines */}
            <div className="absolute inset-0 bg-grid-blueprint opacity-[0.2] pointer-events-none" />

            {/* Corner Crosshairs */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />

            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 relative z-10"
                >
                  {/* Service selector pills */}
                  <div className="space-y-3">
                    <label className="block text-[10px] font-mono tracking-widest text-zinc-500 uppercase select-none">
                      [ Select Required Capabilities ]
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {SERVICES.map(service => {
                        const isSelected = selectedServices.includes(service.id);
                        return (
                          <motion.button
                            key={service.id}
                            type="button"
                            onClick={() => toggleService(service.id)}
                            whileHover={{ y: -1, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 450, damping: 25 }}
                            aria-pressed={isSelected}
                            className={`px-3.5 py-2 rounded-lg border text-xs tracking-wider transition-all font-mono select-none flex items-center gap-1.5 focus-visible:ring-1 focus-visible:ring-brand-blueprint/50 focus-visible:outline-none cursor-pointer ${
                              isSelected
                                ? "bg-brand-blueprint/10 border-brand-blueprint text-white font-semibold shadow-[0_0_15px_rgba(59,130,246,0.12)]"
                                : "bg-white/[0.01] border-white/[0.05] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                            }`}
                          >
                            <AnimatePresence initial={false}>
                              {isSelected && (
                                <motion.span
                                  initial={{ scale: 0, width: 0 }}
                                  animate={{ scale: 1, width: "auto" }}
                                  exit={{ scale: 0, width: 0 }}
                                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                  className="inline-flex text-brand-blueprint"
                                >
                                  <Check size={11} className="stroke-[3]" />
                                </motion.span>
                              )}
                            </AnimatePresence>
                            {service.name}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Standard Text Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name input */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-500 uppercase select-none">
                        <label htmlFor="name-input">[ 01 / Name ]</label>
                        {getFieldError("name") ? (
                          <span className="text-rose-500 font-bold animate-pulse">
                            [ ERR: {getFieldError("name")} ]
                          </span>
                        ) : (
                          <span className="text-brand-blueprint font-bold">*</span>
                        )}
                      </div>
                      <div className="relative group/field">
                        <input
                          id="name-input"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("name")}
                          disabled={status === "submitting"}
                          placeholder="e.g., Alexander Vance"
                          className={`w-full bg-[#111113]/50 border rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none transition-all duration-300 ${
                            getFieldError("name")
                              ? "border-rose-500/30 focus:border-rose-500 focus:shadow-[0_0_20px_rgba(244,63,94,0.06)]"
                              : "border-white/[0.04] hover:border-white/[0.1] focus:border-brand-blueprint focus:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-500 uppercase select-none">
                        <label htmlFor="email-input">[ 02 / Email Address ]</label>
                        {getFieldError("email") ? (
                          <span className="text-rose-500 font-bold animate-pulse">
                            [ ERR: {getFieldError("email")} ]
                          </span>
                        ) : (
                          <span className="text-brand-blueprint font-bold">*</span>
                        )}
                      </div>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("email")}
                        disabled={status === "submitting"}
                        placeholder="e.g., alexander@mitrixo.com"
                        className={`w-full bg-[#111113]/50 border rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none transition-all duration-300 ${
                          getFieldError("email")
                            ? "border-rose-500/30 focus:border-rose-500 focus:shadow-[0_0_20px_rgba(244,63,94,0.06)]"
                            : "border-white/[0.04] hover:border-white/[0.1] focus:border-brand-blueprint focus:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Organization input */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-500 uppercase select-none">
                      <label htmlFor="org-input">[ 03 / Organization ]</label>
                      <span className="text-zinc-600 font-light">[ OPTIONAL ]</span>
                    </div>
                    <input
                      id="org-input"
                      type="text"
                      name="org"
                      value={formData.org}
                      onChange={handleInputChange}
                      disabled={status === "submitting"}
                      placeholder="e.g., Mitrixo Technologies Inc."
                      className="w-full bg-[#111113]/50 border border-white/[0.04] hover:border-white/[0.1] focus:border-brand-blueprint rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-500 uppercase select-none">
                      <label htmlFor="message-input">[ 04 / Project Description ]</label>
                      {getFieldError("message") ? (
                        <span className="text-rose-500 font-bold animate-pulse">
                          [ ERR: {getFieldError("message")} ]
                        </span>
                      ) : (
                        <span className="text-brand-blueprint font-bold">*</span>
                      )}
                    </div>
                    <textarea
                      id="message-input"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("message")}
                      disabled={status === "submitting"}
                      placeholder="Describe your technical scope, platform requirements, or cinematic project specifications..."
                      className={`w-full bg-[#111113]/50 border rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none transition-all duration-300 resize-none ${
                        getFieldError("message")
                          ? "border-rose-500/30 focus:border-rose-500 focus:shadow-[0_0_20px_rgba(244,63,94,0.06)]"
                          : "border-white/[0.04] hover:border-white/[0.1] focus:border-brand-blueprint focus:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
                      }`}
                    />
                  </div>

                  {/* Dynamic Technical terminal progress display during submissions */}
                  {status === "submitting" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-white/[0.08] bg-[#0A0A0C]/95 rounded-xl p-4 space-y-1.5 font-mono text-[10px] text-zinc-400 shadow-2xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
                      <div className="flex items-center justify-between text-zinc-500 border-b border-white/[0.05] pb-2 mb-2 uppercase tracking-widest text-[9px]">
                        <span className="flex items-center gap-1.5">
                          <Terminal size={11} className="text-brand-blueprint" />
                          Ingress Logs
                        </span>
                        <span className="flex items-center gap-1.5 text-brand-blueprint font-semibold">
                          <span className="flex h-1.5 w-1.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blueprint opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-blueprint"></span>
                          </span>
                          ACTIVE UPLOAD
                        </span>
                      </div>
                      <div className="space-y-1 max-h-[140px] overflow-y-auto">
                        {logs.map((log, idx) => (
                          <div key={idx} className="flex gap-2 items-start text-zinc-400">
                            <span className="text-brand-blueprint/60 select-none">&gt;</span>
                            <div className="leading-relaxed flex-1">{formatLogLine(log)}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Action Button */}
                  <motion.button
                    type="submit"
                    disabled={status === "submitting" || !isFormValid}
                    whileHover={isFormValid && status !== "submitting" ? { scale: 1.01 } : {}}
                    whileTap={isFormValid && status !== "submitting" ? { scale: 0.99 } : {}}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-medium tracking-widest border transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed group/btn cursor-pointer font-mono text-xs uppercase shadow-md select-none focus-visible:ring-1 focus-visible:ring-brand-blueprint/50 focus-visible:outline-none focus:outline-none"
                    style={{
                      borderColor: isFormValid && status !== "submitting" ? "rgba(59, 130, 246, 0.4)" : "rgba(255, 255, 255, 0.05)",
                      background: isFormValid && status !== "submitting" ? "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(245, 158, 11, 0.05))" : "rgba(255, 255, 255, 0.01)",
                      color: isFormValid && status !== "submitting" ? "#FFFFFF" : "#52525B"
                    }}
                  >
                    {status === "submitting" ? (
                      <>
                        <RefreshCw size={14} className="animate-spin text-brand-blueprint" />
                        TRANSMITTING SYSTEM REQUEST...
                      </>
                    ) : (
                      <>
                        Initialize Partnership Alignment
                        <Send size={12} className={`transition-all duration-300 ${
                          isFormValid ? "text-brand-blueprint group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-1px]" : "text-zinc-600"
                        }`} />
                      </>
                    )}
                  </motion.button>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="relative z-10 flex flex-col justify-between py-6 px-2 min-h-[380px] text-center font-mono"
                >
                  <div className="flex flex-col items-center justify-center gap-5 flex-1">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full border border-emerald-500/20 bg-emerald-500/10 flex items-center justify-center shadow-lg relative overflow-hidden group"
                    >
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </motion.div>
                    
                    <div className="space-y-2.5">
                      <h3 className="text-lg font-bold text-white tracking-widest uppercase">
                        TRANSMISSION SECURED
                      </h3>
                      <p className="text-xs text-zinc-400 max-w-sm mx-auto font-sans leading-relaxed font-light">
                        Your partnership alignment metrics have been safely encrypted and compiled into our core edge system. Our team will review your blueprint and initialize contact soon.
                      </p>
                    </div>
                  </div>

                  {/* Terminal final ledger logs */}
                  <div className="border border-white/[0.08] bg-[#0A0A0C]/95 rounded-xl p-4 space-y-1.5 font-mono text-[10px] text-zinc-400 text-left mb-6 max-h-[160px] overflow-y-auto relative shadow-2xl">
                    <div className="absolute inset-0 bg-grid-blueprint opacity-[0.05] pointer-events-none" />
                    <div className="flex items-center justify-between text-zinc-500 border-b border-white/[0.05] pb-2 mb-2 uppercase tracking-widest text-[8px]">
                      <span>Transmission Manifest Ledger</span>
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        SECURED
                      </span>
                    </div>
                    <div className="space-y-1">
                      {logs.map((log, idx) => (
                        <div key={idx} className="flex gap-2 items-start">
                          <span className="text-emerald-500/60 select-none">&gt;</span>
                          <div className="leading-relaxed flex-1">
                            {formatLogLine(log)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reset button resets form */}
                  <motion.button
                    onClick={resetForm}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-3.5 rounded-xl border border-white/[0.05] hover:border-zinc-700 bg-white/[0.01] hover:bg-white/[0.02] text-xs text-zinc-400 hover:text-white transition-all duration-300 font-mono tracking-widest uppercase cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-blueprint/50"
                  >
                    Transmit Another Request
                  </motion.button>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
