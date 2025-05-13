import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Locali",
    image: "/greenbite.jpg",
    description:
      "Landing pages pour une entreprise fictive de livraison de repas",
    techs: ["Next.js", "Tailwind", "Typescript"],
    link: "https://greenbite.surge.sh",
  },
  {
    title: "MilleShop",
    image: "/millesim.jpg",
    description:
      "Site vitrine pour Milleshop, conception et réalisation de pièces sur mesure",
    techs: ["Next.js", "Tailwind", "Typescript"],
    link: "https://millesim.surge.sh",
  },
  {
    title: "MapTalents",
    image: "/maptalents.jpg",
    description: "Plateforme de mise en relation via carte interactive",
    techs: ["React", "Redux", "NestJS"],
    link: "https://maptalents.website/carte",
  },
  {
    title: "Forge Club",
    image: "/forge-club.jpg",
    description: "Landing page pour une salle de sport fictive avec Next.js",
    techs: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://forge-club.surge.sh",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projets" className="px-6 sm:px-24 w-full py-12 mx-auto">
      <h2 className="text-3xl font-bold text-white ml-5 mb-12">Projets</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex justify-center basis-[400px] max-w-[500px] grow"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
