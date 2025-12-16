import React from 'react';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase mb-4">About Me</h2>
        <p className="text-2xl md:text-4xl font-display font-medium text-slate-200 leading-relaxed">
          {ABOUT_CONTENT.text}
        </p>
      </div>
    </section>
  );
};

export default About;