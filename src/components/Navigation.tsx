"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile drawer is open for perfect mobile UX
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Ecosystem Hub", href: "#ecosystem" },
    { name: "XO Blueprint", href: "#blueprint" },
    { name: "SaaS Pipeline", href: "#products" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        {/* Dynamic Glassmorphic Backdrop with flawless opacity fade & blur transition */}
        <div
          className={`absolute inset-0 -z-10 transition-all duration-500 ease-out ${
            isScrolled
              ? "bg-brand-dark/75 backdrop-blur-md border-b border-brand-white/5 shadow-2xl opacity-100"
              : "bg-transparent border-b border-transparent opacity-0"
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand Mark with smooth scrolling scale adjustment */}
          <a href="#" className="flex items-center space-x-3 group" id="nav-logo">
            <Image
              src="/logo.png"
              alt="Mitrixo Logo"
              width={144}
              height={44}
              priority
              className={`w-auto object-contain bg-transparent select-none transition-all duration-500 ${
                isScrolled ? "h-9 scale-95" : "h-11 scale-100"
              }`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-sans font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-blueprint transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#partner"
              className="relative inline-flex items-center justify-center px-5 py-2 text-xs font-sans font-medium tracking-widest text-white uppercase transition-all duration-300 border border-brand-white/10 hover:border-brand-amber bg-brand-white/[0.02] backdrop-blur-sm hover:bg-brand-amber/[0.04] shadow-[0_0_15px_rgba(245,158,11,0)] hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] group"
              id="nav-cta"
            >
              <span className="relative z-10 flex items-center gap-2">
                Partner With Us
                <ChevronRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 text-brand-amber" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button — min 44px touch target via p-3 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white p-3 -mr-3 transition-colors duration-300"
            aria-label="Toggle mobile menu"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu - High-End Full-Screen Slide-over with coordinate grid background */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-brand-dark/98 backdrop-blur-2xl md:hidden flex flex-col justify-between"
          >
            {/* High-fidelity blueprint grid background for mobile drawer */}
            <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />

            {/* Dynamic Glowing Accent Orbits in the background */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-brand-blueprint/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-brand-amber/5 blur-[120px] pointer-events-none" />

            {/* Drawer Header (keeps the same alignment as top navbar) */}
            <div className="relative z-10 px-6 py-6 flex items-center justify-between border-b border-brand-white/5">
              <a href="#" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/logo.png" alt="Mitrixo Logo" width={144} height={44} className="h-11 w-auto object-contain" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white p-3 -mr-3 transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Navigation Links with custom stagger animations */}
            <div className="relative z-10 flex-grow flex flex-col justify-center px-10 py-12 space-y-8">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + idx * 0.08,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-sans font-light tracking-widest text-neutral-300 hover:text-white transition-colors duration-300 flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-5 h-5 text-neutral-600 group-hover:text-brand-blueprint transition-colors duration-300" />
                    </a>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom Area: Glowing CTA button and legal text */}
            <div className="relative z-10 px-10 pb-16 pt-6 border-t border-brand-white/5 bg-brand-dark/40">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col space-y-6"
              >
                <a
                  href="#partner"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center inline-flex items-center justify-center px-6 py-4 text-xs font-sans font-medium tracking-widest text-white uppercase border border-brand-amber bg-transparent hover:bg-brand-amber/5 transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.05)] hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] rounded-none"
                >
                  Partner With Us
                </a>
                <span className="text-[10px] tracking-widest text-neutral-600 uppercase text-center">
                  Mitrixo • All Rights Reserved
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
