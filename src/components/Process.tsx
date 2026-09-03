import { motion } from 'framer-motion'
import { useState } from 'react'
import FadeIn from './FadeIn'
import { processSteps } from '../data/portfolio'

export default function Process() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="process" className="section-padding border-t border-border">
      <div className="container-wide">
        <FadeIn>
          <div className="mb-12">
            <p className="label-caps text-sage">How I Work</p>
            <h2 className="section-label mt-1 text-cream">Process</h2>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="process-line hidden md:block" aria-hidden="true" />

          <div className="grid gap-4 md:grid-cols-5 md:gap-3">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <motion.div
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  animate={{
                    y: active === i ? -6 : 0,
                    borderColor: active === i ? 'color-mix(in srgb, var(--theme-sage) 40%, transparent)' : undefined,
                  }}
                  transition={{ duration: 0.3 }}
                  className="bento-tile bento-tile-hover relative cursor-default text-center md:text-left"
                >
                  <div className="mx-auto mb-4 flex items-center gap-3 md:mx-0">
                    <motion.span
                      animate={{ scale: active === i ? 1.1 : 1, color: active === i ? 'var(--theme-sage-soft)' : 'var(--theme-sage)' }}
                      className="font-condensed text-3xl"
                    >
                      {step.number}
                    </motion.span>
                    <span className="process-dot hidden md:block" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-cream">{step.title}</h3>
                  <motion.p
                    animate={{ opacity: active === i ? 1 : 0.75 }}
                    className="mt-2 text-sm leading-relaxed text-cream-muted"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
