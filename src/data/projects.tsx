import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SiPhp, SiLaravel, SiMysql, SiHtml5, SiCss3 } from "react-icons/si";
import { Palette } from "lucide-react";

const ProjectsLinks = ({ live }: { live?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visitar sitio
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const chip = (title: string, icon: ReactNode): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon,
});
const PROJECT_SKILLS = {
  php: chip("PHP", <SiPhp />),
  laravel: chip("Laravel", <SiLaravel />),
  mysql: chip("MySQL", <SiMysql />),
  html: chip("HTML5", <SiHtml5 />),
  css: chip("CSS3", <SiCss3 />),
  design: chip("Diseño web", <Palette />),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "elcampitoo",
    category: "Apartamentos rurales",
    title: "El Campito",
    src: "/assets/projects-screenshots/elcampitoo/landing.jpg",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.laravel, PROJECT_SKILLS.mysql],
    },
    live: "https://elcampitoo.net/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Plataforma de reservas de apartamentos rurales.
          </TypographyP>
          <TypographyP className="font-mono">
            Desarrollado con Laravel, MySQL y Filament. Incluye gestión de
            disponibilidad, sistema de reservas y notificaciones por correo
            electrónico, con un panel de administración a medida para gestionar
            apartamentos, reservas y clientes.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "prolystudio",
    category: "Estudio de diseño web",
    title: "Proly Studio",
    src: "/assets/projects-screenshots/prolystudio/landing.jpg",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.design],
      backend: [],
    },
    live: "https://prolystudio.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Marca propia de diseño y desarrollo web.
          </TypographyP>
          <TypographyP className="font-mono">
            Proyecto orientado al diseño y desarrollo de páginas web para
            clientes, donde reúne parte de sus proyectos como desarrollador
            freelance.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "nubeastudio",
    category: "Estudio de diseño web",
    title: "Nube A Estudio",
    src: "/assets/projects-screenshots/nubeastudio/landing.jpg",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.design],
      backend: [],
    },
    live: "https://nubeastudio.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Estudio de desarrollo y diseño web.
          </TypographyP>
          <TypographyP className="font-mono">
            Centrado en la creación de páginas para pequeños negocios y
            proyectos personales.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
];

export default projects;
