import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative text-slate-200 antialiased selection:bg-indigo-500/30">
      <Background />
      
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-dark/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-xl font-bold font-display tracking-tight hover:text-indigo-400 transition-colors cursor-pointer">
            Sagar<span className="text-indigo-500">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10">
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhyHireMe />
        <Contact />
      </main>
    </div>
  );
};

export default App;