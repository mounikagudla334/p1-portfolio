import { projects, type Project } from '../../data/portfolio'

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8 py-8 border-b border-line group">
      <p className="font-mono text-sm text-ink/40">{project.year}</p>
      <div>
        <h3 className="font-display text-xl md:text-2xl group-hover:text-teal-dark transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-ink/70 max-w-2xl leading-relaxed">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-1 border border-rust/30 text-rust rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} className="text-sm font-body text-teal-dark hover:underline">
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} className="text-sm font-body text-teal-dark hover:underline">
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <p className="font-mono text-sm text-ink/50 mb-2">Selected work</p>
        <div>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
