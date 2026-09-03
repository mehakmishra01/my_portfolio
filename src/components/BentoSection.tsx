import { ArrowUpRight } from 'lucide-react'
import { Code2, Layers, Plug, Rocket } from 'lucide-react'
import FadeIn from './FadeIn'
import TiltCard from './TiltCard'
import { services, stats, tools } from '../data/portfolio'

const iconMap = {
  code: Code2,
  layout: Layers,
  api: Plug,
  product: Rocket,
} as const

export default function BentoSection() {
  return (
    <section id="bento" className="section-padding pt-4">
      <div className="container-wide">
        <FadeIn>
          <div className="mb-8">
            <p className="label-caps text-sage">Introduction</p>
            <h2 className="section-label mt-1 text-cream">About</h2>
          </div>
        </FadeIn>

        <div className="bento-grid">
          <FadeIn className="bento-about">
            <TiltCard intensity={4}>
              <div className="bento-tile bento-tile-lg h-full">
                <p className="label-caps text-sage">Who Am I</p>
                <h3 className="mt-3 font-serif text-2xl font-medium text-cream md:text-3xl">
                  Mahak Mishra
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                  I build digital products with care — from marketing sites to full-stack
                  applications. I value clarity in code, intention in design, and work that
                  feels meaningful. Based in India, open to opportunities that challenge me
                  to grow.
                </p>
                <p className="signature mt-4">Mahak</p>
              </div>
            </TiltCard>
          </FadeIn>

          <FadeIn delay={0.08} className="bento-stats">
            <TiltCard intensity={5}>
              <div className="bento-tile h-full">
                <p className="label-caps text-sage">At a Glance</p>
                <div className="mt-4 space-y-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stat-row">
                      <span className="font-condensed text-3xl text-cream">{stat.value}</span>
                      <span className="text-xs text-cream-muted">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </FadeIn>

          <FadeIn delay={0.12} className="bento-photo">
            <div className="bento-tile bento-tile-photo h-full overflow-hidden p-0">
              <img src="/mehak.jpg" alt="Mahak Mishra" className="h-full w-full object-cover object-top subtle-photo" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              <span className="absolute bottom-3 left-3 label-caps text-white/90">Based in India</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.16} className="bento-tools">
            <div className="bento-tile h-full">
              <p className="label-caps text-sage">Stack & Tools</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="tool-chip"
                    style={{ '--chip-color': tool.color } as Record<string, string>}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <FadeIn key={service.title} delay={0.2 + i * 0.06} className={`bento-service-${i + 1}`}>
                <TiltCard intensity={6}>
                  <div className="bento-tile bento-tile-hover group h-full">
                    <div className="flex items-start justify-between">
                      <span className="text-2xl opacity-60">{service.emoji}</span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sage transition-colors group-hover:border-sage group-hover:bg-sage/10">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h4 className="mt-4 font-serif text-lg font-medium text-cream">{service.title}</h4>
                    <p className="mt-2 text-sm text-cream-muted">{service.description}</p>
                  </div>
                </TiltCard>
              </FadeIn>
            )
          })}

          <FadeIn delay={0.5} className="bento-words">
            <TiltCard intensity={5}>
              <a
                href="#contact"
                className="bento-tile bento-tile-accent group flex h-full flex-col justify-center"
              >
                <p className="label-caps text-cream/80">Let's connect</p>
                <p className="mt-3 font-serif text-xl leading-snug text-cream md:text-2xl">
                  Open to internships, collaborations, and full-time roles.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-widest text-cream/80 uppercase transition-all group-hover:gap-3">
                  Get in touch
                  <ArrowUpRight size={12} />
                </span>
              </a>
            </TiltCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
