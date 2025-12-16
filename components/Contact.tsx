import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Footer Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
          Let’s build something impactful.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="px-6 py-3 min-w-[160px] rounded-xl glass-card flex items-center justify-center gap-2 text-slate-200 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <link.icon size={20} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Sagar. Built with React & Tailwind.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;