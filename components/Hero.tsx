import React, { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, FileText, Code2, Terminal, Cpu, Zap, ScanFace } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "import Future from './now';";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-28 pb-20">

      {/* Global Cosmic Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-glow"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full max-w-7xl">

        {/* LEFT COLUMN - Typography & Info */}
        <div className="text-left space-y-8 animate-slide-up">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span className="text-sm font-medium text-orange-100/80 tracking-wide">OPEN FOR FREELANCE</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium text-orange-200/60 font-display">
              Hi, I'm <span className="text-white">Sagar</span>
            </h2>

            {/* MAIN TYPOGRAPHY */}
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                FULL STACK
              </h1>
              <div className="flex items-center gap-4">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 leading-[0.9] whitespace-normal md:whitespace-nowrap text-glow">
                  VIBE CODING
                </h1>
                <ScanFace className="w-12 h-12 md:w-16 md:h-16 text-orange-400 hidden sm:block animate-pulse" />
              </div>
            </div>
          </div>

          <p className="text-lg text-orange-100/70 max-w-xl leading-relaxed">
            Merging <strong className="text-white">Human Creativity</strong> with <strong className="text-orange-400">AI Acceleration</strong>.
            Building scalable cloud apps & automating DevOps pipelines with a fiery passion.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="https://www.linkedin.com/in/sagar-u/" className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#006399] text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-blue-900/20">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#171515] hover:bg-[#2b2b2b] text-white rounded-full font-bold transition-all hover:scale-105 border border-white/10">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-slate-200 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-white/10">
              <FileText size={20} />
              <span>Resume</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN - Code Window & Visuals */}
        <div className="relative perspective-1000 animate-fade-in group w-full max-w-lg mx-auto lg:max-w-none">
          {/* Floating Icons Background */}
          <div className="absolute -top-12 -right-12 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 animate-float z-20">
            <Code2 className="text-orange-400 w-8 h-8" />
          </div>
          <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 animate-float [animation-delay:1s] z-20">
            <Zap className="text-amber-400 w-6 h-6" />
          </div>
          <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/10 animate-float [animation-delay:2s] z-20">
            <Cpu className="text-red-400 w-10 h-10" />
          </div>

          {/* Code Window */}
          {/* Code Window */}
          {/* Code Window */}
          <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_20px_50px_-12px_rgba(249,115,22,0.15)] overflow-hidden transform group-hover:rotate-y-2 transition-transform duration-500 ease-out">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 text-xs text-white/30 font-mono tracking-wide">vim — portfolio.tsx</div>
            </div>

            {/* Code Content */}
            {/* Code Content */}
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-hidden">
              <div className="grid grid-cols-[30px_1fr] gap-4">
                <div className="text-white/20 text-right select-none space-y-1">
                  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div>
                </div>
                <div className="space-y-1">
                  <div className="text-purple-400">import <span className="text-yellow-300">Future</span> from <span className="text-green-400">'./now'</span>;</div>
                  <div className="text-white">&nbsp;</div>
                  <div className="text-blue-400">const <span className="text-yellow-300">vibe</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}</div>
                  <div className="pl-4 text-slate-500">// AI-Augmented Workflow</div>
                  <div className="pl-4 text-orange-400">await <span className="text-amber-300">cursor.agent.build</span>(_</div>
                  <div className="pl-8 bg-white/5 rounded border-l-2 border-orange-400">
                    <span className="text-purple-400">import</span> Future <span className="text-purple-400">from</span> <span className="text-green-400">'./now'</span>;<span className="w-2 h-4 bg-orange-400 inline-block ml-1 animate-blink"></span>
                  </div>
                  <div className="pl-4 text-pink-400">{'}'});</div>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-white/5 bg-black/20 text-[10px] text-white/40 font-mono">
              <div className="flex gap-4">
                <span>NORMAL</span>
                <span>master*</span>
              </div>
              <div className="flex gap-4">
                <span>utf-8</span>
                <span>typescript</span>
                <span>Ln 6, Col 1</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;