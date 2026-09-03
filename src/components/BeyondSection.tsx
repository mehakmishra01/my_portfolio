import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'
import TiltCard from './TiltCard'
import { personalInterests } from '../data/portfolio'

export default function BeyondSection() {
  return (
    <section id="beyond" className="section-padding border-t border-border">
      <div className="container-wide">
        <FadeIn>
          <div className="mb-10 max-w-xl">
            <p className="label-caps text-sage">Outside of code</p>
            <h2 className="section-label mt-1 text-cream">Beyond</h2>
            <p className="mt-4 text-sm leading-relaxed text-cream-muted">
              The things that keep me grounded — separate from the work, but part of who I am.
            </p>
          </div>
        </FadeIn>

        <div className="beyond-grid">
          {personalInterests.map((item, i) => {
            const cardClass =
              'bento-tile bento-tile-hover beyond-card group flex h-full min-h-[220px] flex-col'

            const inner = (
              <>
                <h3 className="font-serif text-xl font-medium text-cream transition-colors group-hover:text-sage-soft">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream-muted">{item.description}</p>
                <span
                  className={`mt-5 inline-flex min-h-[1.25rem] items-center gap-2 text-xs tracking-widest text-sage uppercase ${
                    item.href ? 'opacity-0 transition-all group-hover:opacity-100' : 'invisible'
                  }`}
                >
                  Explore
                  <ArrowUpRight size={12} />
                </span>
              </>
            )

            return (
              <FadeIn key={item.title} delay={i * 0.1} className="h-full">
                <TiltCard intensity={6} className="h-full">
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.98 }}
                      className={cardClass}
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </TiltCard>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
