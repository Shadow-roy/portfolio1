import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Tech Stack</h2>
           <p className="text-slate-400">The tools I use to build the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title} 
              className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-display">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;