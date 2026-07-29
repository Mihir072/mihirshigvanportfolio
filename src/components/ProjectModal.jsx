import React from 'react';
import { X, ExternalLink, Shield, Layers, Code2, Server } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-3xl rounded-3xl border border-[#c0c1ff]/30 overflow-hidden shadow-2xl space-y-0 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#1c1b1b] via-[#201f1f] to-[#131313] border-b border-[#464554]/30 flex justify-between items-center">
          <div>
            <span className="text-xs font-mono text-[#47d6ff] uppercase tracking-wider">
              Deep-Dive Project Specs
            </span>
            <h3 className="text-xl font-extrabold text-[#e5e2e1]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-[#c7c4d7] hover:text-[#e5e2e1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 font-sans">
          
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-[#c0c1ff] font-bold">
              Project Description
            </h4>
            <p className="text-sm text-[#c7c4d7] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Achievements */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#47d6ff] font-bold">
              Technical Implementation & Modules
            </h4>
            <div className="space-y-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#1c1b1b]/90 border border-[#464554]/30 flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 p-1.5 rounded-lg bg-[#131313] border border-[#464554]/40">
                    {feat.icon}
                  </span>
                  <span className="text-xs text-[#e5e2e1] leading-relaxed">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-[#ddb7ff] font-bold">
              Technologies & Libraries Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-xs font-mono text-[#c0c1ff]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#131313] border-t border-[#464554]/30 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl btn-gradient text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4 text-[#1000a9]" /> Open Repository on GitHub
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl btn-ghost text-xs font-mono text-[#c7c4d7] hover:text-[#e5e2e1]"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
