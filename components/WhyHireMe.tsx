import React from 'react';
import { VALUE_PROPS } from '../constants';

const WhyHireMe: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-indigo-950/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">Why Work With Me?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop) => (
            <div key={prop.id} className="glass-card text-center p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group">
              <div className="w-16 h-16 mx-auto bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <prop.icon size={32} />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-slate-200">{prop.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;