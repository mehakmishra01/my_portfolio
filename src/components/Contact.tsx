import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import FadeIn from './FadeIn'
import { GithubIcon, LinkedinIcon } from './Icons'
import { contact } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-border pb-12">
      <div className="container-wide">
        <FadeIn>
          <div className="relative overflow-hidden">
            <h2
              className="editorial-heading watermark-text pointer-events-none text-center select-none"
              aria-hidden="true"
            >
              Together
            </h2>

            <div className="relative -mt-16 md:-mt-24">
              <div className="mx-auto max-w-xl text-center">
                <p className="text-sm leading-relaxed text-cream-muted">
                  Have a project in mind or looking for a developer who cares about
                  the details? Let's create something meaningful together.
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="btn-editorial btn-editorial-filled mt-8 inline-flex"
                >
                  Let's Work Together
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="divider-line my-16" />

              <div className="grid gap-10 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12">
                <FadeIn delay={0.1}>
                  <div className="flex items-center gap-4">
                    <img
                      src="/mehak.jpg"
                      alt="Mehak Mishra"
                      className="h-16 w-16 rounded-full object-cover object-top grayscale-[20%]"
                    />
                    <div>
                      <p className="font-serif text-lg font-medium text-cream">
                        Mehak Mishra
                      </p>
                      <p className="text-xs tracking-[0.15em] text-cream-muted uppercase">
                        Software Developer
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="flex flex-wrap items-center gap-6 md:justify-center">
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-cream-muted transition-colors hover:text-sage"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-cream-muted transition-colors hover:text-sage"
                    >
                      <GithubIcon size={20} />
                    </a>
                    <span className="hidden h-4 w-px bg-border sm:block" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 text-sm text-cream-muted transition-colors hover:text-cream"
                    >
                      <Mail size={14} />
                      {contact.email}
                    </a>
                    <a
                      href={`tel:+91${contact.phone}`}
                      className="flex items-center gap-2 text-sm text-cream-muted transition-colors hover:text-cream"
                    >
                      <Phone size={14} />
                      +91 {contact.phone}
                    </a>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <motion.a
                    href="#work"
                    whileHover={{ scale: 1.03 }}
                    className="group mx-auto flex h-28 w-28 flex-col items-center justify-center rounded-xl border border-border bg-charcoal-soft transition-colors hover:border-sage md:mx-0"
                  >
                    <span className="font-condensed text-xs tracking-[0.2em] text-sage uppercase">
                      View
                    </span>
                    <span className="font-condensed text-lg tracking-wider text-cream uppercase">
                      My Work
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="mt-1 text-cream-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sage"
                    />
                  </motion.a>
                </FadeIn>
              </div>

              <p className="mt-16 text-center text-xs tracking-[0.15em] text-cream-muted/60 uppercase">
                © {new Date().getFullYear()} Mehak Mishra · Designed & Built with Intention
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
