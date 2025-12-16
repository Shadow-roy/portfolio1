import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-orange-400 tracking-wide uppercase">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-300">
              Selected Works
            </h2>
          </div>

          <a href="#" className="group flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all">
            <span className="font-medium text-orange-200 group-hover:text-white">View Archive</span>
            <ArrowUpRight className="w-4 h-4 text-orange-300 group-hover:text-white group-hover:rotate-45 transition-all" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card relative group overflow-hidden rounded-3xl p-8 flex flex-col justify-between
                ${index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-1'}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-80"></div>

              {/* Dynamic Project Screenshot */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img
                  src={`https://api.microlink.io?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0202] via-[#0f0202]/80 to-transparent/30"></div>
              </div>

              {/* Top Content */}
              <div className="relative z-20 flex justify-between items-start opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="flex gap-2">
                  <a href={project.githubUrl} className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors border border-white/5" title="View Code">
                    <Github size={20} />
                  </a>
                  <a href={project.liveUrl} className="p-2 bg-white text-black hover:bg-slate-200 rounded-full transition-colors" title="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-bold px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/5 backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-bold font-display text-white mb-2 leading-tight group-hover:text-glow transition-all">{project.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2 md:line-clamp-none max-w-lg group-hover:text-white transition-colors">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;