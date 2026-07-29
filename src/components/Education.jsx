import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Engineering – Computer Engineering',
      institution: "H.J. Thim Trust's Theem College of Engineering",
      location: 'Boisar, Maharashtra',
      period: 'Aug 2022 – May 2026',
      highlights: [
        'Specializing in Mobile Application Architecture, Data Structures, Software Engineering, and Cryptography.',
        'Active member of CSI Student Chapter, IQAC, and Institute Innovation Council (IIC).',
        'Consistently represented college in national level hackathons, winning 1st and 2nd positions.'
      ]
    },
    {
      degree: 'Higher Secondary Science – PCMB + IT',
      institution: 'VIVA Institute of Technology & Utkarsha Madhyamik Vidyalaya',
      location: 'Virar, Maharashtra',
      period: 'Jun 2021 – Jun 2022',
      highlights: [
        'Focus on Information Technology, Mathematics, Physics, and Chemistry.',
        'Developed foundational computer programming and algorithmic logic.'
      ]
    }
  ];

  return (
    <section id="education" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] border border-[#464554]/30 text-xs font-mono text-[#ddb7ff]">
          <GraduationCap className="w-3.5 h-3.5" /> Academic Background
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e5e2e1] tracking-tight">
          Education & Training
        </h2>
        <p className="text-sm font-mono text-[#c7c4d7] max-w-xl mx-auto">
          Formal engineering degree in Computer Engineering and software fundamentals.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {educationList.map((edu, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#464554]/40 hover:border-[#c0c1ff]/50 transition-all glow-hover shadow-xl flex flex-col md:flex-row gap-6 justify-between"
          >
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#1c1b1b] border border-[#464554]/40 text-[#c0c1ff]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#e5e2e1]">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-mono text-[#47d6ff]">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#c7c4d7] pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c0c1ff]" /> {edu.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#ddb7ff]" /> {edu.period}
                </span>
              </div>

              <ul className="space-y-1.5 pt-3 border-t border-[#464554]/20 text-xs text-[#c7c4d7]">
                {edu.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-[#c0c1ff] mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
