import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechFolderProps {
    title: string;
    skills: string[];
    icon: LucideIcon;
    colorIndex: number;
}

const TechStackFolder: React.FC<TechFolderProps> = ({ title, skills, icon: Icon, colorIndex }) => {
    // Color schemes (Magma Theme)
    const colors = [
        { main: 'bg-orange-600', front: 'bg-orange-500', tab: 'bg-orange-700', text: 'text-orange-100', shadow: 'shadow-orange-900/50' },
        { main: 'bg-red-600', front: 'bg-red-500', tab: 'bg-red-700', text: 'text-red-100', shadow: 'shadow-red-900/50' },
        { main: 'bg-amber-600', front: 'bg-amber-500', tab: 'bg-amber-700', text: 'text-amber-100', shadow: 'shadow-amber-900/50' },
    ];

    const theme = colors[colorIndex % colors.length];

    return (
        <motion.div
            className="relative w-64 h-52 cursor-pointer perspective-1000 mx-auto"
            initial="initial"
            whileHover="hover"
            animate="initial"
        >
            {/* Folder Tab (Back) - Static but part of the look */}
            <div
                className={`absolute top-0 left-0 w-24 h-8 rounded-t-xl ${theme.tab} z-0`}
            ></div>

            {/* Folder Back Body */}
            <div
                className={`absolute top-4 inset-x-0 bottom-0 rounded-xl ${theme.main} ${theme.shadow} shadow-2xl border border-white/10 z-0`}
            ></div>

            {/* Files / Cards inside */}
            <div className="absolute inset-x-4 top-10 bottom-6 flex flex-col items-center justify-end z-10 pointer-events-none">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill}
                        className="absolute w-full h-12 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center text-sm font-bold text-slate-800 origin-bottom"
                        variants={{
                            initial: {
                                y: 0,
                                scale: 0.95 - (i * 0.05),
                                rotate: 0,
                                zIndex: skills.length - i
                            },
                            hover: {
                                y: -(i + 1) * 40 + 20,
                                scale: 1,
                                rotate: (i - (skills.length - 1) / 2) * 5, // Fanning rotation
                                zIndex: skills.length + i,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                    delay: i * 0.05
                                }
                            }
                        }}
                    >
                        <div className="absolute inset-0 flex items-center px-4 gap-3 bg-white rounded-lg">
                            <div className={`w-2 h-2 rounded-full ${theme.main}`}></div>
                            <span className="truncate">{skill}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Folder Front Body (Cover) */}
            <motion.div
                className={`absolute top-10 inset-x-0 bottom-0 rounded-xl ${theme.front} shadow-[0_-5px_15px_rgba(0,0,0,0.1)] border-t border-white/20 flex flex-col items-center justify-center z-30`}
                variants={{
                    initial: { rotateX: 0, y: 0 },
                    hover: {
                        rotateX: -20,
                        y: 5,
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                        }
                    }
                }}
                style={{ transformOrigin: "bottom" }}
            >
                <motion.div
                    className="p-3 bg-white/10 rounded-full mb-3 backdrop-blur-sm shadow-inner"
                    variants={{
                        hover: { scale: 1.1 }
                    }}
                >
                    <Icon className="text-white w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold font-display text-white tracking-wide shadow-black drop-shadow-md">{title}</h3>
                <span className="text-xs text-white/80 mt-2 bg-black/20 px-3 py-1 rounded-full border border-white/5">{skills.length} Skills</span>
            </motion.div>

        </motion.div>
    );
};

export default TechStackFolder;
