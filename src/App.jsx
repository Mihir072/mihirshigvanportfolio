import React, { useState, useEffect } from 'react';
import BackgroundShader from './components/BackgroundShader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Hackathons from './components/Hackathons';
import Education from './components/Education';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'hackathons', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] relative font-sans selection:bg-[#c0c1ff]/30 selection:text-[#c0c1ff]">
      {/* WebGL Ambient Particles Background Shader */}
      <BackgroundShader />

      {/* Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-8">
        <Hero />
        <About />
        <Skills />
        <WorkExperience onSelectProject={(proj) => setSelectedProject(proj)} />
        <Hackathons />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
