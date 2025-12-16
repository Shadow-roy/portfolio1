import {
  Code2,
  Server,
  BrainCircuit,
  Rocket,
  Palette,
  Terminal,
  Github,
  Linkedin,
  Mail,
  Smartphone
} from 'lucide-react';
import { Project, SkillCategory, ValueProp, SocialLink } from './types';

export const HERO_CONTENT = {
  headline: "Hi, I’m Sagar — I build AI-powered & modern web experiences.",
  subtext: "Crafting intuitive digital solutions that bridge the gap between design and artificial intelligence.",
};

export const ABOUT_CONTENT = {
  text: "Full-stack developer & BCA student focused on AI apps, clean UI, and real-world solutions. I turn complex problems into elegant, user-centric web applications.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["Framer Motion", "Next.js", "React", "TypeScript"],
    icon: Code2,
  },
  {
    title: "Backend",
    skills: ["Node.js", "Firebase", "Supabase", "Express"],
    icon: Server,
  },
  {
    title: "AI & Tools",
    skills: ["Gemini API", "OpenAI", "AI-Studio", "Git", "Docker"],
    icon: BrainCircuit,
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "AI Interviewer",
    description: "Ace your next job interview with real-time AI feedback and mock sessions.",
    techStack: ["React", "Gemini API", "Tailwind"],
    liveUrl: "https://ai-interviewer1.vercel.app",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200", // AI Abstract
  },
  {
    id: "p2",
    title: "Smart Campus Assistant",
    description: "An intelligent chatbot assistant helping students navigate campus life effortlessly.",
    techStack: ["React", "AI", "Node.js"],
    liveUrl: "https://smart-campus-ai-assistant.vercel.app/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200", // Students/Campus
  },
  {
    id: "p3",
    title: "Clothing Store",
    description: "A modern, responsive fashion e-commerce platform with a sleek design.",
    techStack: ["React", "Redux", "Tailwind"],
    liveUrl: "https://clotthing.vercel.app/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200", // Clothing Store
  },
  {
    id: "p4",
    title: "Photography Portfolio",
    description: "A visually immersive portfolio for photographers enabling stunning high-resolution galleries.",
    techStack: ["React", "Framer Motion", "Tailwind"],
    liveUrl: "https://photography-1.vercel.app/",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=1200", // Photography/Camera
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: "v1",
    title: "Build Fast MVPs",
    description: "Turning ideas into deployable products in record time.",
    icon: Rocket,
  },
  {
    id: "v2",
    title: "AI-Integrated Apps",
    description: "Leveraging LLMs to create smarter user experiences.",
    icon: BrainCircuit,
  },
  {
    id: "v3",
    title: "Mobile First",
    description: "Built with a mobile-first approach to ensure smooth performance across all devices.",
    icon: Smartphone,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:sagaru.works@gmail.com",
    icon: Mail,
    label: "sagaru.works@gmail.com",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sagar-u/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    platform: "GitHub",
    url: "https://github.com",
    icon: Github,
    label: "GitHub",
  },
];