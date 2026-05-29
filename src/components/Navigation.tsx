"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Compass, ChevronRight, Menu, X } from "lucide-react";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-4 shadow-2xl" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand Mark */}
          <a href="#" className="flex items-center space-x-3 group" id="nav-logo">
            <span className="text-xl font-bold font-sans tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-neutral-300">
              MITRI<span className="text-brand-amber font-sans tracking-normal transition-all duration-300 group-hover:text-amber-400 text-amber-glow">XO</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-blueprint transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-5 py-2 text-xs font-sans font-medium tracking-widest text-white uppercase transition-all duration-300 border border-neutral-800 hover:border-brand-amber bg-transparent hover:bg-neutral-900 group"
              id="nav-cta"
            >
              <span className="relative z-10 flex items-center gap-2">
                Partner With Us
                <ChevronRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-40 bg-brand-dark/95 backdrop-blur-lg md:hidden flex flex-col justify-between p-8 border-t border-neutral-900"
          >
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-sans tracking-widest text-neutral-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mb-12">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center inline-flex items-center justify-center px-6 py-3 text-xs tracking-widest text-white uppercase border border-brand-amber bg-transparent"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
