import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full text-center space-y-8">
        
        {/* Animated Headline */}
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 animate-slide-up pb-2 leading-tight">
          {HERO_CONTENT.headline}
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto animate-slide-up [animation-delay:200ms] opacity-0">
          {HERO_CONTENT.subtext}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:400ms] opacity-0">
          <a 
            href="#projects" 
            className="group relative px-8 py-3.5 bg-white text-black font-semibold rounded-full transition-all hover:scale-105 flex items-center gap-2 overflow-hidden"
          >
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10"></div>
            
            <span className="relative z-20">View Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-20" />
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-3.5 bg-white/5 text-white border border-white/10 rounded-full font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105 flex items-center gap-2"
          >
            Contact Me
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;