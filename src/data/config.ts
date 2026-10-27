const config = {
  title: "Israel Rivera | Desarrollador Web Junior",
  description: {
    long: "Portfolio de Israel Rivera, desarrollador web junior especializado en PHP, Laravel y MySQL, con formación reciente en Python. Descubre sus proyectos, como El Campitoo, y su experiencia como desarrollador backend.",
    short:
      "Portfolio de Israel Rivera, desarrollador web junior especializado en PHP, Laravel, MySQL y Python.",
  },
  keywords: [
    "Israel Rivera",
    "portfolio",
    "desarrollador web junior",
    "PHP",
    "Laravel",
    "MySQL",
    "Python",
    "desarrollador backend",
    "El Campitoo",
  ],
  author: "Israel Rivera",
  email: "israelrfp@gmail.com",
  phone: "+34 646 53 61 48",
  site: "https://portfolio-israel-rivera.vercel.app",

  // for github stars button
  githubUsername: "israelrfp03",
  githubRepo: "portfolio-israel-rivera",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/israel-rivera-92a7a4392/",
    github: "https://github.com/israelrfp03",
  },
};
export { config };
