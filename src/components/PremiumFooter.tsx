"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070709] border-t border-zinc-900/80 overflow-hidden" id="footer">
      {/* Background visual detail */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-brand-blueprint/15 to-transparent" />
      
      {/* Radial soft glowing ambient elements */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-brand-blueprint/5 rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-brand-amber/5 rounded-full blur-[120px] pointer-events-none select-none" />
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-zinc-900/60">
          
          {/* Brand Info Column */}
          <div className="sm:col-span-2 md:col-span-2 space-y-6">
            <a href="#" className="inline-block group">
              <Image src="/logo.png" alt="Mitrixo Logo" width={144} height={36} className="h-9 w-auto object-contain bg-transparent select-none transition-transform duration-300 group-hover:scale-[1.02]" />
            </a>
            <p className="text-sm font-sans tracking-wide text-zinc-400 max-w-sm leading-relaxed font-light">
              We engineer the digital infrastructure for the next generation. High-end custom enterprise systems, scalable SaaS platforms, and premium cinematic brand assets.
            </p>
            
            {/* Branding location */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2 max-w-md">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-sans tracking-[0.15em] text-zinc-500 uppercase">
                  MITRIXO • CAIRO, EGYPT
                </span>
              </div>
              
              <div className="flex space-x-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-zinc-900/60 hover:border-brand-blueprint/50 bg-zinc-950/30 hover:bg-zinc-900/40 rounded text-zinc-400 hover:text-white transition-all duration-300 group/icon"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-zinc-900/60 hover:border-brand-blueprint/50 bg-zinc-950/30 hover:bg-zinc-900/40 rounded text-zinc-400 hover:text-white transition-all duration-300 group/icon"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-zinc-900/60 hover:border-brand-blueprint/50 bg-zinc-950/30 hover:bg-zinc-900/40 rounded text-zinc-400 hover:text-white transition-all duration-300 group/icon"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 fill-current group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Core Offerings Column */}
          <div className="space-y-5">
            <h4 className="text-[11px] font-mono font-semibold tracking-[0.2em] text-zinc-400 uppercase">
              Capabilities
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#ecosystem" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300 flex items-center group">
                  <span>Enterprise Software</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-zinc-500 opacity-0 group-hover:opacity-100 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300 flex items-center group">
                  <span>SaaS Architectures</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-zinc-500 opacity-0 group-hover:opacity-100 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300 flex items-center group">
                  <span>Headless CMS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-zinc-500 opacity-0 group-hover:opacity-100 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300 flex items-center group">
                  <span>Mitry Visuals Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-zinc-500 opacity-0 group-hover:opacity-100 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="space-y-5">
            <h4 className="text-[11px] font-mono font-semibold tracking-[0.2em] text-zinc-400 uppercase">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#ecosystem" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300 flex items-center group">
                  <span>Ecosystem Hub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-zinc-500 opacity-0 group-hover:opacity-100 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#blueprint" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300 flex items-center group">
                  <span>XO Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-zinc-500 opacity-0 group-hover:opacity-100 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300 flex items-center group">
                  <span>SaaS Pipeline</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-zinc-500 opacity-0 group-hover:opacity-100 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#partner" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300 flex items-center group">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-zinc-500 opacity-0 group-hover:opacity-100 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Final Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs font-mono tracking-wider text-zinc-600 gap-4 md:gap-0">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-2 sm:space-y-0">
            <p>© {currentYear} MITRIXO. All rights reserved.</p>
            <div className="flex space-x-3 items-center">
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <span className="text-zinc-800">/</span>
              <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {/* Elegant Studio Badge */}
            <div className="flex items-center space-x-1.5 select-none pointer-events-none text-zinc-550 text-[10px] tracking-widest uppercase font-medium">
              <span>Elite Digital Studio</span>
            </div>
            
            <span className="text-zinc-800 hidden sm:inline">|</span>
            
            <button
              onClick={scrollToTop}
              className="text-xs font-mono tracking-widest text-zinc-500 hover:text-white transition-colors duration-300 uppercase flex items-center space-x-1.5 group"
            >
              <span>Back to Top</span>
              <span className="transform group-hover:-translate-y-0.5 transition-transform duration-300">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
