import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/40 transition-colors duration-300 hover:border-accent-sky/40">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-hairline-strong bg-void/70 px-3 py-1 font-mono text-[11px] text-accent-sky backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-text-primary">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-hairline bg-surface-2 px-2 py-1 font-mono text-[11px] text-text-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 border-t border-hairline pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors hover:text-accent-sky"
            >
              Live Demo
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              Production System
            </span>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent-sky"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <FaGithub size={15} />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
