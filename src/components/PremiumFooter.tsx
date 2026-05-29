"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-neutral-900 hover:border-brand-blueprint bg-brand-dark/50 hover:bg-neutral-900 rounded-none text-neutral-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-neutral-900 hover:border-brand-blueprint bg-brand-dark/50 hover:bg-neutral-900 rounded-none text-neutral-400 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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
