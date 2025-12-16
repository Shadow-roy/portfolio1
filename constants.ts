import { 
  Code2, 
  Server, 
  BrainCircuit, 
  Rocket, 
  Palette, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail 
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
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    icon: Code2,
  },
  {
    title: "Backend",
    skills: ["Node.js", "Firebase", "PostgreSQL", "Express"],
    icon: Server,
  },
  {
    title: "AI & Tools",
    skills: ["Gemini API", "OpenAI", "LangChain", "Git", "Docker"],
    icon: BrainCircuit,
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "AI Interviewer",
    description: "Real-time mock interview platform with AI feedback.",
    techStack: ["Next.js", "Gemini API", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "p2",
    title: "Smart Campus Assistant",
    description: "Chatbot for student queries and schedule management.",
    techStack: ["React", "Node.js", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "p3",
    title: "E-commerce Vibe",
    description: "Modern shopping experience with 3D product previews.",
    techStack: ["React", "Three.js", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
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
    title: "Design + Dev",
    description: "I speak both design and code for seamless collaboration.",
    icon: Palette,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:hello@sagar.dev",
    icon: Mail,
    label: "Email Me",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
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