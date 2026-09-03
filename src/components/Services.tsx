import { Code2, Layers, Plug, Rocket } from 'lucide-react'
import FadeIn from './FadeIn'
import { services } from '../data/portfolio'

const iconMap = {
  code: Code2,
  layout: Layers,
  api: Plug,
  product: Rocket,
} as const

export default function Services() {
  return (
    <section id="services" className="section-surface section-padding border-t border-border">
      <div className="container-wide">
        <FadeIn>
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] text-cream-muted uppercase">
                What I Do
              </p>
              <h2 className="section-label mt-2 text-cream">Services</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-cream-muted">
              From concept to deployment — I bring a full-stack mindset and design
              sensibility to every project I take on.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="group h-full bg-charcoal-soft p-8 transition-colors hover:bg-charcoal-muted">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-border text-sage transition-colors group-hover:border-sage group-hover:text-sage-soft">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
