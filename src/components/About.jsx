import React from 'react';
import { ShieldCheck, Cpu, Layers, Lock, RefreshCw, Award, Code2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function About() {
  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-[#47d6ff]" />,
      title: "Flutter & Dart Mastery",
      desc: "Architecting responsive, high-framerate mobile apps for iOS and Android using Flutter, Dart, and Provider state management."
    },
    {
      icon: <Lock className="w-5 h-5 text-[#c0c1ff]" />,
      title: "Secure Auth & Vaults",
      desc: "Implementing JWT 4-level role access control, encrypted AES vaults (IntelCrypt), and secure RESTful Spring Boot communication."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#ddb7ff]" />,
      title: "Real-Time & Payment Systems",
      desc: "Engineered 4-way payment escrow wallets, Socket.io group moderation, and Cloudinary KYC document upload pipelines."
    },
    {
      icon: <Layers className="w-5 h-5 text-[#47d6ff]" />,
      title: "Clean Architecture",
      desc: "Strict MVC/MVVM patterns, decoupled API integrations, Kafka messaging, and production-ready performance optimization."
    }
  ];

  return (
    <section id="about" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] border border-[#464554]/30 text-xs font-mono text-[#c0c1ff]">
          <Sparkles className="w-3.5 h-3.5" /> Professional Background
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e5e2e1] tracking-tight">
          About Mihir Shigvan
        </h2>
        <p className="text-sm font-mono text-[#c7c4d7]">
          Engineering seamless digital interfaces from mobile frontend to backend security.
        </p>
      </div>

      {/* Profile Card & Bio Container */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 max-w-6xl mx-auto border border-[#464554]/40 shadow-2xl space-y-10 relative overflow-hidden">
        
        {/* Glow ambient spots */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c0c1ff]/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#47d6ff]/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c0c1ff] via-[#ddb7ff] to-[#47d6ff] rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500" />
              
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#c0c1ff]/40 bg-[#1c1b1b] shadow-2xl">
                <img
                  src="/mihir_profile.jpg"
                  alt="Mihir Shigvan Profile Photo"
                  className="w-full h-[360px] sm:h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-80" />

                {/* Overlay Floating Specs */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#131313]/85 backdrop-blur-md border border-[#464554]/40 space-y-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#e5e2e1]">Mihir Shigvan</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#47d6ff]/20 text-[#47d6ff] border border-[#47d6ff]/40">
                      Flutter Dev
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-[#c7c4d7]">
                    BE Computer Engineering (2022 – 2026)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Summary */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#e5e2e1] leading-snug">
                Passionate Mobile Developer Specializing in <span className="text-[#c0c1ff]">Flutter</span> & Scalable Architecture
              </h3>
              <p className="text-sm sm:text-base text-[#c7c4d7] leading-relaxed font-sans">
                I am a <strong className="text-[#e5e2e1]">Flutter Developer</strong> with expertise in building cross-platform Android and iOS applications using Flutter and Dart. Experienced in developing responsive UI, integrating RESTful APIs, implementing state management with <strong className="text-[#c0c1ff]">Provider</strong>, and building scalable mobile applications with clean architecture.
              </p>
              <p className="text-sm sm:text-base text-[#c7c4d7] leading-relaxed font-sans">
                Proficient in <strong className="text-[#e5e2e1]">Firebase, JWT authentication</strong>, and backend integration with <strong className="text-[#47d6ff]">Spring Boot</strong> and <strong className="text-[#ddb7ff]">Node.js</strong>. Passionate about creating high-performance, user-friendly mobile applications with a strong focus on code quality and seamless user experience.
              </p>
            </div>

            {/* Quick Badge List */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-xs font-mono text-[#c0c1ff]">
                🏆 5+ Hackathon Awards
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-xs font-mono text-[#47d6ff]">
                ⚡ Provider State Management
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-xs font-mono text-[#ddb7ff]">
                🔐 Spring Boot REST & JWT
              </span>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Mihir072"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-xs font-mono text-[#e5e2e1] hover:text-[#c0c1ff] hover:border-[#c0c1ff]/50 transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" /> GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/mihir072"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-xs font-mono text-[#e5e2e1] hover:text-[#c0c1ff] hover:border-[#c0c1ff]/50 transition-all flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn Profile
              </a>
            </div>

          </div>

        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-[#464554]/20">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-[#464554]/30 hover:border-[#c0c1ff]/40 transition-all group glow-hover space-y-2.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-bold text-sm text-[#e5e2e1] group-hover:text-[#c0c1ff] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-[#c7c4d7] leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
