import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="work" className="section-padding border-t border-border">
      <div className="container-wide">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] text-cream-muted uppercase">
                Selected
              </p>
              <h2 className="section-label mt-2 text-cream">Work</h2>
            </div>
            <a
              href="https://github.com/mehakmishra01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial self-start"
            >
              View All Projects
              <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="card-editorial group block overflow-hidden rounded-2xl"
              >
                <div className="project-card-bg relative flex h-48 items-end p-5">
                  <div className="project-card-radial absolute inset-0" />
                  <span className="project-card-number relative font-condensed text-4xl tracking-wider uppercase">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="absolute top-4 right-4 text-cream-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-sage"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-medium text-cream transition-colors group-hover:text-sage-soft">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-cream-muted">{project.description}</p>
                  <p className="mt-3 text-xs tracking-wider text-sage uppercase">
                    {project.tags.join(' · ')}
                  </p>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
