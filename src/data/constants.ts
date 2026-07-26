// Keycap object names below must match what exists inside
// public/assets/skills-keyboard.spline. Only keys with a matching physical
// keycap in that scene are listed in SKILLS — everything else in the enum
// stays for type-safety but has no data, so those keycaps just sit inert
// (see animated-background.tsx, which already null-checks every lookup).
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

// Only the skills Israel actually has that also happen to exist as keycaps
// in the inherited Spline scene. His real core stack (PHP, Laravel, Python,
// MySQL) has no matching keycap object — see README section on the 3D
// keyboard for how to add them in Spline's editor.
export const SKILLS: Partial<Record<SkillNames, Skill>> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Used for interactivity on the frontend.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription: "Semantic markup for every project.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3",
    shortDescription: "Responsive layouts and styling.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Currently learning — basic level.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Version control for every project.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Where the code lives.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "npm",
    shortDescription: "Package management for frontend tooling.",
    color: "#cb3837",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Apr 2025",
    endDate: "Aug 2025",
    title: "Desarrollo web — El Campito Zafra",
    company: "Freelance",
    description: [
      "Aplicación web de reservas de apartamentos rurales.",
      "Gestión de disponibilidad, sistema de reservas y notificaciones por correo electrónico.",
      "Panel de administración a medida construido con Laravel y Filament.",
    ],
    skills: [],
  },
  {
    id: 2,
    startDate: "2025",
    endDate: "2025",
    title: "Proyecto CRM Telecom",
    company: "Desarrollo a medida",
    description: [
      "Sistema de gestión para telecomunicaciones.",
      "Usuarios, servicios, incidencias y facturación automatizada.",
    ],
    skills: [],
  },
];

export const themeDisclaimers = {
  light: ["Modo claro activado.", "Cambiando a modo claro..."],
  dark: ["Modo oscuro activado.", "Cambiando a modo oscuro..."],
};
