import React from 'react';
import { VALUE_PROPS } from '../constants';

const WhyHireMe: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 text-white">
          Why <span className="text-gradient">Work With Me?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PROPS.map((prop, index) => {
            return (
              <div
                key={prop.id}
                className="relative group p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-orange-500/30 hover:-translate-y-2"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Icon Box */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500/10 to-transparent border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <prop.icon size={28} className="text-orange-400 relative z-10" />
                </div>

                <h3 className="text-xl font-bold font-display mb-3 text-white group-hover:text-orange-100 transition-colors">{prop.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;