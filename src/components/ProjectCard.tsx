import Link from "next/link"
import Image from "next/image"

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
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-neutral-800 overflow-hidden hover:border-cyan-500 transition group bg-neutral-950"
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={240}
          className="w-full h-60 object-cover group-hover:opacity-90 transition"
        />
        <div className="p-4">
          <h3 className="text-foreground text-lg font-semibold my-2">{title}</h3>
          <p className="text-sm text-neutral-400 mb-3 h-12">{description}</p>
          <ul className="flex flex-wrap gap-2 text-xs text-cyan-400 font-mono">
            {techs.map((tech, i) => (
              <li key={i} className="bg-background/30 px-2 py-1 rounded border border-cyan-700">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    )
  }
  