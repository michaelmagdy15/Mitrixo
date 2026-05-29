"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Twitter, Linkedin, Terminal } from "lucide-react";

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070709] border-t border-neutral-900 overflow-hidden" id="footer">
      {/* Background visual detail */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-brand-blueprint/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-neutral-900">
          
          {/* Brand Info Column */}
          <div className="md:col-span-2 space-y-6">
            <a href="#" className="inline-block text-xl font-bold tracking-[0.25em] text-white">
              MITRI<span className="text-brand-amber text-amber-glow">XO</span>
            </a>
            <p className="text-sm font-sans tracking-wide text-neutral-400 max-w-sm leading-relaxed">
              We engineer the digital infrastructure for the next generation. High-end custom enterprise systems, scalable SaaS platforms, and premium cinematic brand assets.
            </p>
            {/* Pulsing XO Glow Badge */}
            <div className="flex items-center space-x-3 pt-2">
              <div className="relative w-2.5 h-2.5 flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-amber opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-amber" />
              </div>
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                Experience Optimization Engine Active
              </span>
            </div>
          </div>

          {/* Core Offerings Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans font-medium tracking-widest text-neutral-300 uppercase">
              Capabilities
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#ecosystem" className="text-sm text-neutral-500 hover:text-white transition-colors duration-300 flex items-center group">
                  Enterprise Software
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="text-sm text-neutral-500 hover:text-white transition-colors duration-300 flex items-center group">
                  SaaS Architectures
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="text-sm text-neutral-500 hover:text-white transition-colors duration-300 flex items-center group">
                  CMS Platforms
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="text-sm text-neutral-500 hover:text-white transition-colors duration-300 flex items-center group">
                  Mitry Visuals Ecosystem
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1 text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Direct Connect Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans font-medium tracking-widest text-neutral-300 uppercase">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-neutral-900 hover:border-brand-blueprint bg-brand-dark/50 hover:bg-neutral-900 rounded-none text-neutral-400 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-neutral-900 hover:border-brand-blueprint bg-brand-dark/50 hover:bg-neutral-900 rounded-none text-neutral-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-neutral-900 hover:border-brand-blueprint bg-brand-dark/50 hover:bg-neutral-900 rounded-none text-neutral-400 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="text-xs font-sans font-medium tracking-widest text-neutral-500 hover:text-white transition-colors duration-300 uppercase flex items-center space-x-1"
              >
                <span>Back to Top</span>
                <span>↑</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Final Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs font-mono tracking-wider text-neutral-600">
          <p>© {currentYear} MITRIXO. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
          </div>
          {/* Animated tiny Amber glowing XO Badge */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center space-x-1 select-none pointer-events-none mt-4 md:mt-0"
          >
            <span className="text-[10px]">XO ENGINE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
