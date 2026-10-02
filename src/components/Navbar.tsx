"use client";

import React, { useState } from "react";
import { Download, Linkedin, Mail, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  sectionRefs: { [key: string]: React.RefObject<HTMLElement | null> };
}

export default function Navbar({ sectionRefs }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (section: string) => {
    setMobileMenuOpen(false);
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0518]/85 backdrop-blur-xl z-50 border-b border-purple-500/20 shadow-lg shadow-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[2px] shadow-md shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0d0722] rounded-[10px] flex items-center justify-center font-bold text-white tracking-wider text-base">
              BM
            </div>
          </div>
          <div>
            <div className="font-bold text-white text-base tracking-tight flex items-center gap-1.5">
              Boopathi M
              <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                <Sparkles className="w-2.5 h-2.5 mr-1 text-cyan-400" />
                GenAI & Cloud
              </span>
            </div>
            <p className="text-xs text-slate-400">Intern @ Cloud Kinetics</p>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions (Resume & LinkedIn) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/Boopathi-M-60341b269/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors border border-white/10"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:boopathi11std@gmail.com"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-purple-400 transition-colors border border-white/10"
            title="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="/Boopathi_Resume.pdf"
            download="Boopathi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="/Boopathi_Resume.pdf"
            download
            className="p-2 rounded-lg bg-purple-600/20 text-purple-300 border border-purple-500/30 text-xs font-semibold"
          >
            CV
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0722]/95 border-b border-purple-500/20 px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-white/5 hover:text-purple-300 font-medium"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/Boopathi-M-60341b269/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/10"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
            </a>
            <a
              href="/Boopathi_Resume.pdf"
              download
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
