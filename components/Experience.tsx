import React from 'react';
import { Network, Code, Briefcase, GraduationCap } from 'lucide-react';

const EXPERIENCE_DATA = [
    {
        id: 1,
        title: "Freelance Developer",
        role: "AI-Assisted Development",
        period: "May 2023 - Present",
        description: "Built and deployed 15+ web applications on Vercel, gaining hands-on experience and deepening my understanding by learning directly through real-world project development.",
        icon: Network,
    },
    {
        id: 2,
        title: "BCA Student",
        role: "Academic Journey",
        period: "2023 - (Expected Jan) 2026",
        description: "Focusing on Data Structures, Algorithms, and Web Technologies. Worked on the build the Webpage for the Inter college Website ",
        icon: GraduationCap,
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 px-6 relative overflow-hidden">

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md mb-6">
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                        <span className="text-sm font-medium text-orange-100/80 tracking-wide">CAREER PATH</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Professional Journey
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto">
                        A timeline of my technical growth and milestones.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-orange-500/50 to-transparent"></div>

                    <div className="space-y-24">
                        {EXPERIENCE_DATA.map((item, index) => (
                            <div key={item.id} className={`relative flex flex-col md:flex-row items-center justify-between group gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Empty Space for alignment (Desktop Only) */}
                                <div className="hidden md:block md:w-[45%]"></div>

                                {/* Timeline Node */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#050201] border-4 border-orange-500/30 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110 group-hover:border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-orange-400 group-hover:text-amber-200 transition-colors" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-[45%] z-20 pl-16 md:pl-0">
                                    <div className="relative glass-card p-8 rounded-2xl border-l-4 border-l-orange-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.3)] bg-gradient-to-br from-white/5 to-transparent">

                                        {/* Date Badge */}
                                        <span className="absolute -top-4 right-8 px-4 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                                            {item.period}
                                        </span>

                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{item.title}</h3>
                                        <p className="text-orange-200/80 font-medium mb-4 text-sm uppercase tracking-wider">{item.role}</p>
                                        <p className="text-white/50 leading-relaxed text-sm">
                                            {item.description}
                                        </p>


                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
