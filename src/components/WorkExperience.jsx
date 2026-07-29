import React from 'react';
import { ExternalLink, Shield, Wallet, Users, Key, Server, Lock, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function WorkExperience({ onSelectProject }) {
  const projects = [
    {
      id: 'gighunt',
      title: 'GigHunt – Gig Workforce Management Platform',
      role: 'Flutter Developer',
      period: 'Oct 2025 – Present',
      repo: 'https://github.com/GigHunt/GigHunt.git',
      badge: 'Active Production Project',
      badgeColor: 'border-[#47d6ff]/50 text-[#47d6ff]',
      description: 'A full-scale, cross-platform gig marketplace and workforce management app connecting Workers, Vendors, and Admins with real-time tracking, escrow payment workflows, and automated KYC verification.',
      imageGradient: 'from-[#8083ff]/30 via-[#201f1f] to-[#47d6ff]/20',
      tags: ['Flutter', 'Dart', 'Provider', 'JWT Auth', 'Socket.io', 'Cloudinary', 'Multer', 'Payment Escrow', 'KYC'],
      keyFeatures: [
        { icon: <Key className="w-4 h-4 text-[#47d6ff]" />, text: 'JWT Authentication with 4 Role-Based Access Levels (Worker, Vendor, Admin, Super Admin).' },
        { icon: <Wallet className="w-4 h-4 text-[#c0c1ff]" />, text: 'Wallet & Payment System supporting 4 payment workflows, withdrawal requests, escrow, and transaction tracking.' },
        { icon: <Shield className="w-4 h-4 text-[#ddb7ff]" />, text: 'Automated KYC Verification pipeline with Aadhaar, PAN, and selfie upload via Cloudinary & Multer.' },
        { icon: <Users className="w-4 h-4 text-[#47d6ff]" />, text: 'Real-time communication using Socket.io for group chats, live polls, and message moderation.' },
        { icon: <Layers className="w-4 h-4 text-[#c0c1ff]" />, text: 'End-to-End Gig Lifecycle: Job posting, admin approvals, candidate application, attendance, and job completion.' },
      ]
    },
    {
      id: 'intelcrypt',
      title: 'IntelCrypt – Extended AES-Based Data Vault',
      role: 'Flutter Developer',
      period: 'Jun 2025 – Feb 2026',
      repo: 'https://github.com/Mihir072/IntelCrypt',
      badge: 'Security Vault Platform',
      badgeColor: 'border-[#c0c1ff]/50 text-[#c0c1ff]',
      description: 'A mobile-first encrypted vault for secure data exchange and storage, featuring AES-based encryption flows, REST API synchronization with Spring Boot, and structured clean navigation.',
      imageGradient: 'from-[#ddb7ff]/30 via-[#201f1f] to-[#8083ff]/20',
      tags: ['Flutter', 'Dart', 'Spring Boot', 'AES Encryption', 'RESTful APIs', 'Clean UI', 'JWT Auth'],
      keyFeatures: [
        { icon: <Lock className="w-4 h-4 text-[#c0c1ff]" />, text: 'Mobile-side integration of secure data vault platform using Flutter.' },
        { icon: <Server className="w-4 h-4 text-[#47d6ff]" />, text: 'Integrated Flutter app with Spring Boot REST APIs for secure data exchange.' },
        { icon: <Shield className="w-4 h-4 text-[#ddb7ff]" />, text: 'AES Encrypted data flows and token authentication mechanisms for safe API consumption.' },
        { icon: <Layers className="w-4 h-4 text-[#c0c1ff]" />, text: 'Clean UI components and structured navigation for complex security workflows.' },
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] border border-[#464554]/30 text-xs font-mono text-[#c0c1ff]">
          <Sparkles className="w-3.5 h-3.5" /> Featured Engineering Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e5e2e1] tracking-tight">
          Work Experience & Projects
        </h2>
        <p className="text-sm font-mono text-[#c7c4d7] max-w-xl mx-auto">
          Production applications and security platforms built with Flutter, Provider, Spring Boot, and Socket.io.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <article
            key={proj.id}
            className="glass-panel rounded-3xl overflow-hidden border border-[#464554]/40 hover:border-[#c0c1ff]/50 transition-all duration-500 flex flex-col justify-between group shadow-xl"
          >
            {/* Header Banner */}
            <div className={`p-6 sm:p-8 bg-gradient-to-br ${proj.imageGradient} border-b border-[#464554]/30 relative`}>
              <div className="flex justify-between items-start gap-4 mb-3">
                <span className={`px-3 py-1 rounded-full bg-[#131313]/80 border text-[11px] font-mono font-semibold ${proj.badgeColor}`}>
                  {proj.badge}
                </span>
                <span className="text-xs font-mono text-[#c7c4d7] bg-[#1c1b1b]/80 px-3 py-1 rounded-full border border-[#464554]/30">
                  {proj.period}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#e5e2e1] group-hover:text-[#c0c1ff] transition-colors leading-tight">
                {proj.title}
              </h3>
              <p className="text-xs font-mono text-[#47d6ff] mt-1">
                Role: {proj.role}
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <p className="text-sm text-[#c7c4d7] leading-relaxed font-sans">
                {proj.description}
              </p>

              {/* Key Features Bullet List */}
              <div className="space-y-3 pt-2 border-t border-[#464554]/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#e5e2e1] font-bold">
                  Key Technical Achievements:
                </h4>
                <div className="space-y-2.5">
                  {proj.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#c7c4d7]">
                      <span className="mt-0.5 shrink-0">{feat.icon}</span>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#1c1b1b] border border-[#464554]/30 text-[11px] font-mono text-[#c0c1ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Repository Footer Link */}
              <div className="pt-4 border-t border-[#464554]/20 flex items-center justify-between">
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#47d6ff] hover:text-[#c0c1ff] transition-colors group/link"
                >
                  <GithubIcon className="w-4 h-4 text-[#e5e2e1]" />
                  <span>{proj.repo.replace('https://', '')}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>

                <button
                  onClick={() => onSelectProject(proj)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#1c1b1b] border border-[#c0c1ff]/30 text-xs font-mono text-[#c0c1ff] hover:bg-[#c0c1ff]/20 transition-all"
                >
                  View Details
                </button>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
