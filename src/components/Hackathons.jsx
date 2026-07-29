import React from 'react';
import { Trophy, Medal, Award, Star, Calendar, MapPin, IndianRupee } from 'lucide-react';

export default function Hackathons() {
  const achievements = [
    {
      id: 1,
      rank: '🏆 Winner (1st Place)',
      title: 'HackNova 2026',
      sub: '12-Hour National Level Hybrid Hackathon (Cybertech Track)',
      org: 'Shivajirao S. Jondhale College of Engineering, Dombivli',
      date: 'March 2026',
      prize: '₹10,000 Cash Prize',
      team: 'Team "Developers"',
      color: 'from-amber-500/20 via-[#201f1f] to-amber-400/10 border-amber-500/40 text-amber-300',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      icon: <Trophy className="w-6 h-6 text-amber-400" />
    },
    {
      id: 2,
      rank: '🥈 2nd Position',
      title: 'HackCrypt: Cosmic Cipher',
      sub: 'National Level Hackathon organized by DevClub, TRCAC',
      org: 'Thakur Ramnarayan College of Arts and Commerce',
      date: 'January 2026',
      prize: '₹25,000 Cash Prize',
      team: 'Team "Developers"',
      color: 'from-[#c0c1ff]/20 via-[#201f1f] to-[#47d6ff]/10 border-[#c0c1ff]/40 text-[#c0c1ff]',
      badgeBg: 'bg-[#c0c1ff]/20 text-[#c0c1ff] border-[#c0c1ff]/40',
      icon: <Medal className="w-6 h-6 text-[#c0c1ff]" />
    },
    {
      id: 3,
      rank: '🥈 2nd Rank',
      title: 'Innovathon 2.0',
      sub: 'Interdepartmental Project Competition (Web Development Domain)',
      org: 'Dept. of IT Engineering in association with CSI, IQAC & IIC, Theem College of Engineering',
      date: 'October 2025',
      prize: 'Project Domain Winner',
      team: 'Lead Developer',
      color: 'from-[#47d6ff]/20 via-[#201f1f] to-[#8083ff]/10 border-[#47d6ff]/40 text-[#47d6ff]',
      badgeBg: 'bg-[#47d6ff]/20 text-[#47d6ff] border-[#47d6ff]/40',
      icon: <Award className="w-6 h-6 text-[#47d6ff]" />
    },
    {
      id: 4,
      rank: '🥇 1st Rank',
      title: 'Theem Hackathon 2025',
      sub: 'National Hackathon organized by IQAC, IIC & CSI Student Chapter',
      org: 'Theem College of Engineering, Boisar',
      date: 'September 2025',
      prize: '1st Rank Overall',
      team: 'Team Lead',
      color: 'from-[#ddb7ff]/20 via-[#201f1f] to-[#c0c1ff]/10 border-[#ddb7ff]/40 text-[#ddb7ff]',
      badgeBg: 'bg-[#ddb7ff]/20 text-[#ddb7ff] border-[#ddb7ff]/40',
      icon: <Trophy className="w-6 h-6 text-[#ddb7ff]" />
    },
    {
      id: 5,
      rank: '🥉 3rd Position',
      title: "Innovathon '24",
      sub: 'Project Competition (Domain: Open Source Based Models)',
      org: 'Dept. of IT Engineering & Institute Innovation Council (IIC)',
      date: 'October 2024',
      prize: 'Open Source Category Winner',
      team: 'Project Contributor',
      color: 'from-purple-500/20 via-[#201f1f] to-indigo-500/10 border-purple-500/40 text-purple-300',
      badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      icon: <Star className="w-6 h-6 text-purple-300" />
    }
  ];

  return (
    <section id="hackathons" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] border border-[#464554]/30 text-xs font-mono text-amber-400">
          <Trophy className="w-3.5 h-3.5" /> Hackathons & Awards
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e5e2e1] tracking-tight">
          Achievements & Competition Victories
        </h2>
        <p className="text-sm font-mono text-[#c7c4d7] max-w-xl mx-auto">
          Consistently winning national and intercollegiate technical hackathons with problem-solving and teamwork skills.
        </p>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item) => (
          <div
            key={item.id}
            className={`glass-panel rounded-3xl p-6 border bg-gradient-to-b ${item.color} hover:scale-[1.02] transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group`}
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div className="p-3 rounded-2xl bg-[#131313]/90 border border-[#464554]/40 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <span className={`px-3 py-1 rounded-full border text-xs font-mono font-bold ${item.badgeBg}`}>
                  {item.rank}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#e5e2e1] group-hover:text-[#c0c1ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#47d6ff] mt-0.5">
                  {item.sub}
                </p>
              </div>

              <p className="text-xs text-[#c7c4d7] leading-relaxed">
                {item.org}
              </p>
            </div>

            <div className="pt-4 border-t border-[#464554]/20 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="flex items-center gap-1 text-[#c7c4d7]">
                  <Calendar className="w-3.5 h-3.5 text-[#c0c1ff]" /> {item.date}
                </span>
                <span className="text-amber-300 font-bold flex items-center gap-0.5">
                  {item.prize}
                </span>
              </div>

              <div className="text-[11px] font-mono text-right text-[#c7c4d7]/70">
                {item.team}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
