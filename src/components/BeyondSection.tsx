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
            const inner = (
              <>
                <span className="font-condensed text-5xl text-cream/8">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-serif text-xl font-medium text-cream transition-colors group-hover:text-sage-soft">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-muted">{item.description}</p>
                {item.href && (
                  <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-widest text-sage uppercase opacity-0 transition-all group-hover:opacity-100">
                    Explore
                    <ArrowUpRight size={12} />
                  </span>
                )}
              </>
            )

            return (
              <FadeIn key={item.title} delay={i * 0.1}>
                <TiltCard intensity={6}>
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.98 }}
                      className="bento-tile bento-tile-hover group block h-full"
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <div className="bento-tile bento-tile-hover group h-full">{inner}</div>
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
