import React from 'react';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Trophy, Smartphone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Text Details & CTAs */}
        <div className="flex-1 space-y-8 z-10 text-left">
          
          {/* Developer Profile Header Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1c1b1b]/90 border border-[#c0c1ff]/30 shadow-[0_0_20px_rgba(192,193,255,0.2)]">
            <div className="relative">
              <img
                src="/mihir_profile.jpg"
                alt="Mihir Shigvan"
                className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-[#47d6ff] shadow-[0_0_15px_rgba(71,214,255,0.4)]"
              />
              <span className="absolute bottom-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 ring-2 ring-[#131313]"></span>
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[#c0c1ff] font-bold text-xs tracking-wider uppercase flex items-center gap-1.5">
                Mihir Shigvan
                <span className="text-[10px] px-2 py-0.2 rounded-full bg-[#47d6ff]/20 text-[#47d6ff] border border-[#47d6ff]/40 font-mono">
                  PRO
                </span>
              </span>
              <span className="text-[11px] font-mono text-[#c7c4d7]">
                Flutter & Cross-Platform Engineer
              </span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#e5e2e1] leading-[1.1]">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0c1ff] via-[#ddb7ff] to-[#47d6ff]">Seamless Mobile</span> & Cross-Platform Experiences
            </h1>
            <p className="text-base sm:text-lg text-[#c7c4d7] max-w-2xl leading-relaxed">
              Specialized in building high-performance, visually rich mobile applications with <strong className="text-[#e5e2e1]">Flutter, Dart, Provider</strong>, and robust backends (<strong className="text-[#e5e2e1]">Spring Boot, Firebase, Node.js</strong>). Winner of multiple national-level hackathons.
            </p>
          </div>

          {/* Quick Contact & Info Pills */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#c7c4d7]">
            <a
              href="mailto:mihirshigvan716@gmail.com"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c1b1b]/70 border border-[#464554]/30 hover:border-[#c0c1ff]/50 hover:text-[#c0c1ff] transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#47d6ff]" />
              mihirshigvan716@gmail.com
            </a>
            <a
              href="tel:8007896241"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c1b1b]/70 border border-[#464554]/30 hover:border-[#c0c1ff]/50 hover:text-[#c0c1ff] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#ddb7ff]" />
              +91 8007896241
            </a>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c1b1b]/70 border border-[#464554]/30">
              <MapPin className="w-3.5 h-3.5 text-[#c0c1ff]" />
              Virar, Maharashtra
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#experience"
              className="px-6 py-3.5 rounded-xl btn-gradient text-xs uppercase font-bold tracking-widest flex items-center gap-2 shadow-lg"
            >
              View Work Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl btn-ghost text-[#e5e2e1] text-xs font-semibold uppercase tracking-widest hover:text-[#c0c1ff]"
            >
              Initiate Contact
            </a>
            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/Mihir072"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-[#c7c4d7] hover:text-[#c0c1ff] hover:border-[#c0c1ff]/50 transition-all shadow-md"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/mihir072"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-[#c7c4d7] hover:text-[#c0c1ff] hover:border-[#c0c1ff]/50 transition-all shadow-md"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#464554]/20">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#47d6ff] font-bold text-xl sm:text-2xl">
                <Trophy className="w-5 h-5 text-[#47d6ff]" />
                5+
              </div>
              <div className="text-[11px] font-mono text-[#c7c4d7]">Hackathon Awards</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#c0c1ff] font-bold text-xl sm:text-2xl">
                <Smartphone className="w-5 h-5 text-[#c0c1ff]" />
                2+
              </div>
              <div className="text-[11px] font-mono text-[#c7c4d7]">Production Mobile Apps</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#ddb7ff] font-bold text-xl sm:text-2xl">
                <Sparkles className="w-5 h-5 text-[#ddb7ff]" />
                100%
              </div>
              <div className="text-[11px] font-mono text-[#c7c4d7]">Clean Architecture</div>
            </div>
          </div>

        </div>

        {/* 3D Visual Column */}
        <div className="flex-1 w-full h-[380px] sm:h-[460px] lg:h-[540px] relative rounded-3xl overflow-hidden glass-panel border border-[#464554]/40 p-2 shadow-2xl">
          <ThreeHeroCanvas />
        </div>

      </div>
    </section>
  );
}
