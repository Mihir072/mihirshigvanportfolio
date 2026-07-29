import React, { useState } from 'react';
import { Smartphone, Server, Database, Wrench, Layers, Code2, Cpu } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Technologies' },
    { id: 'Mobile', label: 'Mobile & Web' },
    { id: 'Backend', label: 'Backend & APIs' },
    { id: 'Databases', label: 'Databases' },
    { id: 'Tools', label: 'Tools & Practices' },
  ];

  const skillList = [
    // Mobile & Web
    { name: 'Flutter', category: 'Mobile', icon: 'terminal', level: 'Expert', highlight: true, color: 'text-[#47d6ff]' },
    { name: 'Dart', category: 'Mobile', icon: 'code', level: 'Expert', highlight: true, color: 'text-[#c0c1ff]' },
    { name: 'Provider State Mgmt', category: 'Mobile', icon: 'account_tree', level: 'Advanced', highlight: true, color: 'text-[#ddb7ff]' },
    { name: 'Material UI', category: 'Mobile', icon: 'palette', level: 'Advanced', color: 'text-[#47d6ff]' },
    { name: 'Responsive Design', category: 'Mobile', icon: 'devices', level: 'Advanced', color: 'text-[#c0c1ff]' },
    { name: 'Custom Widgets', category: 'Mobile', icon: 'widgets', level: 'Advanced', color: 'text-[#ddb7ff]' },
    { name: 'flutter_test', category: 'Mobile', icon: 'fact_check', level: 'Intermediate', color: 'text-[#47d6ff]' },
    { name: 'React.js', category: 'Mobile', icon: 'integration_instructions', level: 'Intermediate', color: 'text-[#c0c1ff]' },
    { name: 'JavaScript', category: 'Mobile', icon: 'javascript', level: 'Intermediate', color: 'text-[#ddb7ff]' },

    // Backend & APIs
    { name: 'RESTful APIs', category: 'Backend', icon: 'api', level: 'Expert', highlight: true, color: 'text-[#47d6ff]' },
    { name: 'JWT Authentication', category: 'Backend', icon: 'verified_user', level: 'Advanced', highlight: true, color: 'text-[#c0c1ff]' },
    { name: 'Spring Boot', category: 'Backend', icon: 'dns', level: 'Advanced', highlight: true, color: 'text-[#ddb7ff]' },
    { name: 'Node.js & Express', category: 'Backend', icon: 'token', level: 'Intermediate', color: 'text-[#47d6ff]' },
    { name: 'Socket.io Real-time', category: 'Backend', icon: 'forum', level: 'Advanced', color: 'text-[#c0c1ff]' },
    { name: 'Apache Kafka', category: 'Backend', icon: 'stream', level: 'Intermediate', color: 'text-[#ddb7ff]' },

    // Databases
    { name: 'Firebase Firestore', category: 'Databases', icon: 'database', level: 'Expert', highlight: true, color: 'text-[#47d6ff]' },
    { name: 'PostgreSQL', category: 'Databases', icon: 'storage', level: 'Advanced', color: 'text-[#c0c1ff]' },
    { name: 'MongoDB', category: 'Databases', icon: 'table_rows', level: 'Intermediate', color: 'text-[#ddb7ff]' },
    { name: 'MySQL', category: 'Databases', icon: 'schema', level: 'Intermediate', color: 'text-[#47d6ff]' },
    { name: 'Redis Caching', category: 'Databases', icon: 'memory', level: 'Intermediate', color: 'text-[#c0c1ff]' },

    // Tools & Architecture
    { name: 'Git & GitHub', category: 'Tools', icon: 'source', level: 'Expert', color: 'text-[#47d6ff]' },
    { name: 'GitHub Actions CI/CD', category: 'Tools', icon: 'published_with_changes', level: 'Intermediate', color: 'text-[#c0c1ff]' },
    { name: 'Clean Architecture', category: 'Tools', icon: 'architecture', level: 'Expert', highlight: true, color: 'text-[#ddb7ff]' },
    { name: 'MVC / MVVM Pattern', category: 'Tools', icon: 'view_kanban', level: 'Advanced', color: 'text-[#47d6ff]' },
    { name: 'Android Studio', category: 'Tools', icon: 'adb', level: 'Advanced', color: 'text-[#c0c1ff]' },
    { name: 'VS Code', category: 'Tools', icon: 'code_blocks', level: 'Expert', color: 'text-[#ddb7ff]' },
    { name: 'Cloudinary & Multer', category: 'Tools', icon: 'cloud_upload', level: 'Advanced', color: 'text-[#47d6ff]' },
  ];

  const filteredSkills = activeCategory === 'All'
    ? skillList
    : skillList.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="scroll-mt-28 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1b] border border-[#464554]/30 text-xs font-mono text-[#47d6ff]">
          <Cpu className="w-3.5 h-3.5" /> Technical Skillset & Tools
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e5e2e1] tracking-tight">
          Technical Arsenal
        </h2>
        <p className="text-sm font-mono text-[#c7c4d7] max-w-xl mx-auto">
          Proven tech stack and architecture standards utilized across production mobile apps and hackathons.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-[#c0c1ff] to-[#47d6ff] text-[#1000a9] font-bold shadow-[0_0_15px_rgba(192,193,255,0.4)]'
                : 'bg-[#1c1b1b] border border-[#464554]/40 text-[#c7c4d7] hover:text-[#e5e2e1] hover:border-[#c0c1ff]/30'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className={`glass-panel rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2.5 glow-hover transition-all duration-300 transform hover:-translate-y-1 cursor-default group relative overflow-hidden ${
              skill.highlight ? 'border-[#c0c1ff]/40 bg-[#1c1b1b]/70' : 'border-[#464554]/30'
            }`}
          >
            {skill.highlight && (
              <span className="absolute top-2 right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#47d6ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#47d6ff]"></span>
              </span>
            )}
            <span
              className={`material-symbols-outlined text-3xl ${skill.color} group-hover:scale-110 transition-transform`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {skill.icon}
            </span>
            <span className="font-bold text-xs text-[#e5e2e1] group-hover:text-[#c0c1ff] transition-colors leading-snug">
              {skill.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#131313]/60 text-[#c7c4d7] border border-[#464554]/20">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
