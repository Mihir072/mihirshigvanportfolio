import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section id="contact" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] border border-[#464554]/30 text-xs font-mono text-[#47d6ff]">
          <Send className="w-3.5 h-3.5" /> Direct Contact & Opportunities
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e5e2e1] tracking-tight">
          Initiate Transmission
        </h2>
        <p className="text-sm font-mono text-[#c7c4d7] max-w-xl mx-auto">
          Have a mobile project, full-time opportunity, or hackathon collaboration? Let's build together.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Contact Info Cards Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-panel p-6 rounded-3xl border border-[#464554]/40 space-y-6">
            <h3 className="text-lg font-bold text-[#e5e2e1] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#c0c1ff]" /> Contact Details
            </h3>

            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-[#1c1b1b]/80 border border-[#464554]/30 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-[#c7c4d7]">
                <span className="flex items-center gap-1.5 text-[#47d6ff]">
                  <Mail className="w-4 h-4" /> Email Address
                </span>
                <button
                  onClick={() => copyToClipboard('mihirshigvan716@gmail.com', 'email')}
                  className="hover:text-[#c0c1ff] transition-colors p-1"
                  title="Copy email address"
                >
                  {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a
                href="mailto:mihirshigvan716@gmail.com"
                className="block text-sm font-bold text-[#e5e2e1] hover:text-[#c0c1ff] transition-colors"
              >
                mihirshigvan716@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-2xl bg-[#1c1b1b]/80 border border-[#464554]/30 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-[#c7c4d7]">
                <span className="flex items-center gap-1.5 text-[#c0c1ff]">
                  <Phone className="w-4 h-4" /> Phone Number
                </span>
                <button
                  onClick={() => copyToClipboard('8007896241', 'phone')}
                  className="hover:text-[#c0c1ff] transition-colors p-1"
                  title="Copy phone number"
                >
                  {copiedText === 'phone' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a
                href="tel:8007896241"
                className="block text-sm font-bold text-[#e5e2e1] hover:text-[#c0c1ff] transition-colors"
              >
                +91 8007896241
              </a>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-[#1c1b1b]/80 border border-[#464554]/30 space-y-1">
              <span className="flex items-center gap-1.5 text-xs font-mono text-[#ddb7ff]">
                <MapPin className="w-4 h-4" /> Location
              </span>
              <p className="text-sm font-bold text-[#e5e2e1]">
                Virar, Maharashtra, India
              </p>
            </div>

            {/* Social Buttons */}
            <div className="pt-2 flex gap-3">
              <a
                href="https://github.com/Mihir072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-xs font-mono text-[#e5e2e1] hover:text-[#c0c1ff] hover:border-[#c0c1ff]/50 transition-all flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/mihir072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#1c1b1b] border border-[#464554]/40 text-xs font-mono text-[#e5e2e1] hover:text-[#c0c1ff] hover:border-[#c0c1ff]/50 transition-all flex items-center justify-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>

          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#464554]/40 space-y-4 shadow-2xl relative"
          >
            {submitted && (
              <div className="p-4 rounded-2xl bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-mono text-center animate-fadeIn">
                ✓ Transmission received! Thank you, Mihir will get back to you shortly.
              </div>
            )}

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#c7c4d7] mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Rivera"
                className="w-full bg-[#131313]/90 border border-[#464554]/40 rounded-xl px-4 py-3 text-sm text-[#e5e2e1] placeholder-[#464554] focus:border-[#47d6ff] focus:ring-1 focus:ring-[#47d6ff] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#c7c4d7] mb-2" htmlFor="email">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full bg-[#131313]/90 border border-[#464554]/40 rounded-xl px-4 py-3 text-sm text-[#e5e2e1] placeholder-[#464554] focus:border-[#47d6ff] focus:ring-1 focus:ring-[#47d6ff] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#c7c4d7] mb-2" htmlFor="message">
                Message & Project Scope
              </label>
              <textarea
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project, hiring needs, or technical query..."
                className="w-full bg-[#131313]/90 border border-[#464554]/40 rounded-xl px-4 py-3 text-sm text-[#e5e2e1] placeholder-[#464554] focus:border-[#47d6ff] focus:ring-1 focus:ring-[#47d6ff] outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl btn-gradient text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-transform"
            >
              <Send className="w-4 h-4" /> Send Transmission
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
