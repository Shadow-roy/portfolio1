import React, { useEffect, useRef, useState } from 'react';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 relative z-10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Label with simple fade */}
        <div className={`mb-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-white font-medium tracking-widest text-sm uppercase">Who I Am</span>
        </div>

        {/* Text with Blur Reveal Animation */}
        <div className="relative z-10">
          <p
            className={`text-3xl md:text-5xl lg:text-6xl font-aesthetic font-bold text-orange-100 leading-tight transition-all duration-[1500ms] ease-[cubic-bezier(0.2,1,0.3,1)] ${isVisible
              ? 'opacity-100 blur-0 translate-y-0 scale-100'
              : 'opacity-0 blur-[20px] translate-y-8 scale-95'
              }`}
          >
            {ABOUT_CONTENT.text}
          </p>
        </div>

        {/* Decorative Lines/Elements */}
        <div className={`mt-16 w-24 h-1 bg-gradient-to-r from-orange-400 to-red-600 mx-auto rounded-full transition-all duration-1000 delay-500 ${isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>

      </div>
    </section>
  );
};

export default About;