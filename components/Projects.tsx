import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
           <div>
             <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Featured Projects</h2>
             <p className="text-slate-400">Selected works that showcase my passion.</p>
           </div>
           <a href="https://github.com" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 group">
             View all archives 
             <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="glass-card p-6 rounded-2xl group flex flex-col h-full"
            >
              <div className="mb-4">
                 <div className="w-full h-48 rounded-lg bg-gradient-to-br from-indigo-900/50 to-purple-900/50 mb-6 flex items-center justify-center overflow-hidden relative border border-white/5">
                    {/* Noise texture for placeholder */}
                    <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                    
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    <span className="text-indigo-200/50 font-display text-4xl font-bold uppercase tracking-widest opacity-40 select-none group-hover:scale-110 transition-transform duration-500">
                      {project.title.substring(0, 2)}
                    </span>
                 </div>
                 
                 <h3 className="text-xl font-bold font-display mb-2 text-white group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                 <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">
                   {project.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-2 mb-6">
                   {project.techStack.map(tech => (
                     <span key={tech} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/10">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>
              
              <div className="mt-auto flex gap-4 pt-4 border-t border-white/5">
                <a href={project.liveUrl} className="flex-1 text-center py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href={project.githubUrl} className="flex-1 text-center py-2 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Github size={14} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;