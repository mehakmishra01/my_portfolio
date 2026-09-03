import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'
import LazyImage from './LazyImage'
import TiltCard from './TiltCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="work-section section-padding border-t border-border">
      <div className="container-wide">
        <FadeIn>
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-caps text-sage">Selected</p>
              <h2 className="section-label mt-1 text-cream">Work</h2>
            </div>
            <motion.a
              href="https://github.com/mehakmishra01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="btn-editorial self-start"
            >
              View All
              <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </FadeIn>

        <div className="work-bento">
          {featured && (
            <FadeIn className="work-featured">
              <TiltCard intensity={5}>
                <motion.a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.99 }}
                  className="bento-tile bento-tile-hover group block h-full overflow-hidden p-0"
                >
                  <div className="work-featured-inner">
                    <div className="project-featured-media relative h-[180px] md:h-[220px] md:min-h-0 md:w-[45%] md:shrink-0">
                      <LazyImage
                        src={featured.image}
                        alt={`${featured.title} preview`}
                        eager
                        className="project-featured-image h-full w-full object-cover object-center"
                      />
                      <div className="project-featured-overlay" aria-hidden="true" />
                      <span className="project-featured-index font-condensed text-5xl uppercase md:text-6xl">
                        01
                      </span>
                    </div>
                    <div className="work-featured-body p-5 md:flex md:flex-1 md:flex-col md:justify-center md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="label-caps text-sage">Featured</span>
                          <h3 className="mt-1.5 font-serif text-xl font-medium text-cream transition-colors group-hover:text-sage-soft md:mt-2 md:text-2xl">
                            {featured.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-cream-muted md:mt-2">
                            {featured.description}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={20}
                          className="shrink-0 text-cream-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sage"
                        />
                      </div>
                      <p className="mt-3 label-caps text-sage md:mt-4">{featured.tags.join(' · ')}</p>
                    </div>
                  </div>
                </motion.a>
              </TiltCard>
            </FadeIn>
          )}

          <div className="work-grid-rest">
            {rest.map((project, i) => (
              <FadeIn key={project.title} delay={0.1 + i * 0.08}>
                <TiltCard intensity={7}>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.98 }}
                    className="bento-tile bento-tile-hover group block h-full overflow-hidden p-0"
                  >
                    <div className="work-card-inner">
                      <div
                        className={`project-thumb relative h-[130px] w-full shrink-0 overflow-hidden sm:w-[42%]${project.title === 'JobSingha' ? ' project-thumb-framed' : ''}`}
                      >
                        <LazyImage
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="project-thumb-image h-full w-full object-cover object-center"
                        />
                        <div className="project-thumb-overlay" aria-hidden="true" />
                        <span className="project-thumb-index font-condensed text-3xl uppercase">
                          {String(i + 2).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="work-card-body flex flex-1 flex-col justify-center p-4 sm:p-5">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-serif text-lg font-medium text-cream transition-colors group-hover:text-sage-soft">
                            {project.title}
                          </h3>
                          <ArrowUpRight
                            size={16}
                            className="shrink-0 text-cream-muted opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sage"
                          />
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-cream-muted">{project.description}</p>
                        <p className="mt-2.5 text-xs tracking-wider text-sage uppercase">
                          {project.tags.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
