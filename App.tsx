import React, { useState, useEffect } from 'react';
import CircuitBackground from './components/CircuitBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';
import { Menu, X } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiDocker } from 'react-icons/si';
import LogoLoop from './components/LogoLoop';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <div className="relative min-h-screen text-slate-200 antialiased selection:bg-orange-500/30 font-sans overflow-x-hidden">
      <CircuitBackground />

      {/* Floating Navigation */}
      {/* Floating Navigation */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out border ${isScrolled
        ? 'w-auto px-2 py-1.5 rounded-full bg-[#050201]/80 backdrop-blur-xl border-white/10 shadow-[0_0_30px_rgba(249,115,22,0.1)]'
        : 'w-[95%] max-w-6xl px-6 py-4 rounded-full bg-[#050201]/40 backdrop-blur-md border-white/5'
        }`}>
        <div className={`flex items-center justify-between h-full transition-all duration-500 ${isScrolled ? 'gap-2' : 'px-2'}`}>

          {/* Logo Animation */}
          <div className={`${isScrolled ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'} transition-all duration-500 ease-out`}>
            <div className="text-2xl font-bold font-display tracking-tight text-white hover:text-orange-500 transition-colors cursor-pointer whitespace-nowrap">
              Sagar<span className="text-orange-500">.</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 relative group font-medium ${isScrolled
                  ? 'px-6 py-2.5 rounded-full text-sm text-slate-300 hover:text-white hover:bg-white/10'
                  : 'px-4 text-base text-slate-300 hover:text-white'
                  }`}
              >
                {link.name}
                {!isScrolled && <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>}
              </a>
            ))}
            {/* Button Animation */}
            <div className={`${isScrolled ? 'w-0 opacity-0 overflow-hidden ml-0' : 'w-auto opacity-100 ml-6'} transition-all duration-500 ease-out`}>
              <a href="#contact" className="px-6 py-2.5 rounded-full bg-orange-950/30 hover:bg-orange-900/50 text-orange-100 text-base font-medium transition-all border border-orange-500/30 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] whitespace-nowrap block">
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium text-slate-300 hover:text-white hover:text-glow transition-all">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 rounded-full bg-orange-900/20 text-orange-300 border border-orange-500/50 text-lg font-medium hover:bg-orange-800/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all">
            Let's Talk
          </a>
        </div>
      )}

      <main className="relative z-10 pt-20">
        <Hero />

        {/* Tech Stack Marquee */}
        <div className="py-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <LogoLoop
            logos={[
              { node: <SiReact color="#61DAFB" />, title: "React" },
              { node: <SiNextdotjs color="#ffffff" />, title: "Next.js" },
              { node: <SiTailwindcss color="#06B6D4" />, title: "Tailwind CSS" },
              { node: <SiMongodb color="#47A248" />, title: "MongoDB" },
              { node: <SiDocker color="#2496ED" />, title: "Docker" },
            ]}
            speed={50}
            direction="left"
            logoHeight={65}
            gap={80}
            pauseOnHover={false}
          />
        </div>

        <About />
        <Experience />
        <Skills />
        <Projects />
        <WhyHireMe />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5 bg-background/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Sagar. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;