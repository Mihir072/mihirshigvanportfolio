import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Send, Sparkles } from 'lucide-react';

export default function Header({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#131313]/80 backdrop-blur-xl border-b border-[#464554]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Brand Logo with Profile Photo Avatar */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <img
              src="/mihir_profile.jpg"
              alt="Mihir Shigvan Avatar"
              className="w-10 h-10 rounded-xl object-cover object-top border border-[#47d6ff]/50 shadow-[0_0_12px_rgba(71,214,255,0.4)] group-hover:scale-105 transition-transform"
            />
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c0c1ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c0c1ff]"></span>
            </span>
          </div>

          <div className="flex flex-col text-left">
            <span className="font-extrabold text-lg tracking-tight text-[#e5e2e1] group-hover:text-[#c0c1ff] transition-colors flex items-center gap-1">
              MIHIR<span className="text-[#47d6ff]">.DEV</span>
            </span>
            <span className="text-[10px] font-mono text-[#c7c4d7] tracking-wider uppercase">
              Flutter Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1c1b1b]/60 backdrop-blur-md border border-[#464554]/30 rounded-full px-4 py-1.5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#c0c1ff]/20 text-[#c0c1ff] shadow-[0_0_10px_rgba(192,193,255,0.3)] border border-[#c0c1ff]/40'
                    : 'text-[#c7c4d7] hover:text-[#e5e2e1] hover:bg-[#353534]/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Mihir072"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl btn-ghost text-xs font-semibold flex items-center gap-1.5 text-[#e5e2e1]"
          >
            <Download className="w-3.5 h-3.5 text-[#47d6ff]" />
            Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-xl btn-gradient text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-[#e5e2e1] hover:text-[#c0c1ff] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#131313]/95 backdrop-blur-2xl border-b border-[#464554]/30 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-[#1c1b1b] border border-[#464554]/30 text-sm font-medium text-[#e5e2e1] hover:text-[#c0c1ff] hover:border-[#c0c1ff]/40 flex items-center justify-between"
              >
                {link.name}
                <Sparkles className="w-3.5 h-3.5 text-[#47d6ff]" />
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://github.com/Mihir072"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl btn-ghost text-xs font-semibold flex items-center justify-center gap-2 text-[#e5e2e1]"
            >
              <Download className="w-4 h-4 text-[#47d6ff]" /> Download Resume PDF
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl btn-gradient text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Initiate Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
