import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Footer Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full -z-10 animate-pulse-glow"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight text-white">
          Let’s build something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">impactful together.</span>
        </h2>

        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to full-time opportunities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-20">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="group relative px-8 py-4 rounded-full border border-orange-500/30 bg-orange-900/10 flex items-center gap-3 text-lg font-medium text-orange-100 transition-all hover:scale-105 hover:border-orange-400 hover:bg-orange-900/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <link.icon size={22} className="relative z-10 group-hover:text-orange-300 transition-colors" />
              <span className="relative z-10">{link.label}</span>
              {link.platform === 'Email' && <ArrowRight size={18} className="relative z-10 -ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-300" />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;