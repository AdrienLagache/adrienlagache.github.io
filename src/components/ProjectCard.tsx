interface ProjectCardProps {
    title: string
    image: string
    description: string
    techs: string[]
    link: string
  }
  
  export default function ProjectCard({
    title,
    image,
    description,
    techs,
    link,
  }: ProjectCardProps) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-neutral-800 overflow-hidden hover:border-cyan-500 transition group bg-neutral-950"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:opacity-90 transition"
        />
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-neutral-400 mb-3">{description}</p>
          <ul className="flex flex-wrap gap-2 text-xs text-cyan-400 font-mono">
            {techs.map((tech, i) => (
              <li key={i} className="bg-black/30 px-2 py-1 rounded border border-cyan-700">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </a>
    )
  }
  