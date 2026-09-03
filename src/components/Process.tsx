import FadeIn from './FadeIn'
import { processSteps } from '../data/portfolio'

export default function Process() {
  return (
    <section id="process" className="section-surface section-padding border-t border-border">
      <div className="container-wide">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] text-cream-muted uppercase">
              My Process
            </p>
            <h2 className="section-label mt-2 text-cream">Steps</h2>
          </div>
        </FadeIn>

        <div className="relative">
          <div
            className="absolute top-8 right-0 left-0 hidden h-px bg-border md:block"
            aria-hidden="true"
          />

          <div className="grid gap-10 md:grid-cols-5 md:gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="relative text-center md:text-left">
                  <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center md:mx-0">
                    <div className="absolute inset-0 rounded-full border border-border bg-charcoal-soft" />
                    <span className="relative font-condensed text-2xl tracking-wider text-sage">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
