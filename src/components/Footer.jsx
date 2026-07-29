import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 bg-[#0e0e0e] border-t border-[#464554]/20 relative z-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Column */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-bold text-base text-[#e5e2e1] tracking-tight flex items-center justify-center md:justify-start gap-1.5">
            MIHIR<span className="text-[#47d6ff]">.DEV</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1c1b1b] border border-[#464554]/30 text-[#c0c1ff]">
              Flutter Portfolio
            </span>
          </div>
          <p className="font-mono text-[11px] text-[#c7c4d7]/70">
            © 2026 Mihir Shigvan. Engineered with React, Tailwind CSS, Three.js & WebGL.
          </p>
        </div>

        {/* Center / Right Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[#c7c4d7]">
          <a
            href="https://github.com/Mihir072"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c0c1ff] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#47d6ff]" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/mihir072"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c0c1ff] transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-[#c0c1ff]" /> LinkedIn
          </a>
          <a
            href="mailto:mihirshigvan716@gmail.com"
            className="hover:text-[#c0c1ff] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#ddb7ff]" /> Email
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-[#e5e2e1] hover:text-[#c0c1ff] hover:border-[#c0c1ff]/40 transition-all flex items-center gap-1"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" /> Top
          </button>
        </div>

      </div>
    </footer>
  );
}
