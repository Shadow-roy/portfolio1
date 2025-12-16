import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import Folder from './Folder';

const Skills: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-visible">

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My digital toolkit, organized and ready for deployment. Click to inspect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 justify-items-center">
          {SKILL_CATEGORIES.map((category, index) => {
            // Map colors based on index for Circuit theme
            const colors = ['#f97316', '#ef4444', '#f59e0b']; // Orange-500, Red-500, Amber-500
            const color = colors[index % colors.length];

            // Create items for the 3 papers
            // Reduced font size to 4px which will scale up to approx 10px with scale(2.5)
            const items = category.skills.slice(0, 3).map(skill => (
              <div key={skill} className="text-center w-full flex items-center justify-center h-full p-1 pointer-events-none">
                <span className="block font-bold text-[6px] leading-tight text-slate-900 break-words w-full px-0.5 select-none">{skill}</span>
              </div>
            ));

            return (
              <div key={category.title} className="flex flex-col items-center group">
                {/* Fixed wrapper size for scale(2.2): 100px*2.2 = 220px width, 80px*2.2 = 176px height */}
                <div className="relative w-[220px] h-[180px] flex items-center justify-center transform transition-transform duration-300 hover:scale-105 mb-8">
                  <Folder
                    size={2.2}
                    color={color}
                    items={items}
                    className="pointer-events-auto"
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                </div>

                {/* Label Container - adjusted margin to sit clearly below the folder */}
                <div className="text-center mt-8 z-20">
                  <div className="inline-flex items-center gap-2 mb-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors">
                    <category.icon className="w-5 h-5" style={{ color: color }} />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest">{category.skills.length} Modules</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;