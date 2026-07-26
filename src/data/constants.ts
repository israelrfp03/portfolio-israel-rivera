export enum SkillNames {
  PHP = "php",
  LARAVEL = "laravel",
  PYTHON = "python",
  MYSQL = "mysql",
  ELOQUENT = "eloquent",
  APIS_REST = "apis-rest",
  JS = "js",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  GIT = "git",
  GITHUB = "github",
  NPM = "npm",
  VSCODE = "vscode",
  VITE = "vite",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PHP]: {
    id: 1,
    name: "php",
    label: "PHP",
    shortDescription: "Lenguaje principal en el backend.",
    color: "#8b5cf6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.LARAVEL]: {
    id: 2,
    name: "laravel",
    label: "Laravel",
    shortDescription: "Framework backend principal.",
    color: "#f4623a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 3,
    name: "python",
    label: "Python",
    shortDescription: "Especialización reciente.",
    color: "#3b82f6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 4,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Diseño y consultas de bases de datos.",
    color: "#f59e0b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.ELOQUENT]: {
    id: 5,
    name: "eloquent",
    label: "Eloquent ORM",
    shortDescription: "ORM de Laravel para el acceso a datos.",
    color: "#a78bfa",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  [SkillNames.APIS_REST]: {
    id: 6,
    name: "apis-rest",
    label: "APIs REST",
    shortDescription: "Diseño y consumo de APIs REST.",
    color: "#2dd4bf",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
  },
  [SkillNames.JS]: {
    id: 7,
    name: "js",
    label: "JavaScript",
    shortDescription: "Interactividad en el frontend.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 8,
    name: "html",
    label: "HTML5",
    shortDescription: "Marcado semántico en todos los proyectos.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 9,
    name: "css",
    label: "CSS3",
    shortDescription: "Maquetación responsive.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 10,
    name: "react",
    label: "React",
    shortDescription: "Nivel básico, aprendiendo.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.GIT]: {
    id: 11,
    name: "git",
    label: "Git",
    shortDescription: "Control de versiones en todos los proyectos.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 12,
    name: "github",
    label: "GitHub",
    shortDescription: "Donde vive el código.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NPM]: {
    id: 13,
    name: "npm",
    label: "npm",
    shortDescription: "Gestión de paquetes frontend.",
    color: "#cb3837",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.VSCODE]: {
    id: 14,
    name: "vscode",
    label: "VS Code",
    shortDescription: "Editor de código principal.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.VITE]: {
    id: 15,
    name: "vite",
    label: "Vite",
    shortDescription: "Herramienta de build para frontend.",
    color: "#646cff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
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
    startDate: "Abr 2025",
    endDate: "Ago 2025",
    title: "Desarrollo web — El Campito Zafra",
    company: "Freelance",
    description: [
      "Aplicación web de reservas de apartamentos rurales.",
      "Gestión de disponibilidad, sistema de reservas y notificaciones por correo electrónico.",
      "Panel de administración a medida construido con Laravel y Filament.",
    ],
    skills: [SkillNames.PHP, SkillNames.LARAVEL, SkillNames.MYSQL, SkillNames.ELOQUENT],
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
    skills: [SkillNames.PHP, SkillNames.LARAVEL, SkillNames.MYSQL],
  },
];

export const themeDisclaimers = {
  light: ["Modo claro activado.", "Cambiando a modo claro..."],
  dark: ["Modo oscuro activado.", "Cambiando a modo oscuro..."],
};
