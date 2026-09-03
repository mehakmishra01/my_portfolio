import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import FadeIn from './FadeIn'
import SocialLinks from './SocialLinks'
import { contact } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-border pb-10">
      <div className="container-wide">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-charcoal-soft p-8 md:p-14">
            <h2 className="editorial-heading watermark-text pointer-events-none absolute inset-x-0 top-4 text-center select-none" aria-hidden="true">
              Together
            </h2>

            <div className="relative">
              <div className="mx-auto max-w-lg text-center pt-8 md:pt-12">
                <p className="font-script text-3xl text-sage md:text-4xl">Let's create something</p>
                <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                  Have a project in mind or looking for a developer who cares about the details?
                  I'd love to hear from you.
                </p>
                <motion.a
                  href={`mailto:${contact.email}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-editorial btn-editorial-filled mt-8 inline-flex"
                >
                  Let's Work Together
                  <ArrowUpRight size={14} />
                </motion.a>
              </div>

              <div className="divider-line my-12" />

              <div className="grid gap-10 md:grid-cols-3 md:items-center">
                <FadeIn delay={0.1}>
                  <div className="flex items-center gap-4">
                    <img src="/mehak.jpg" alt="Mahak Mishra" className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-sage/30 subtle-photo" />
                    <div>
                      <p className="font-serif text-lg font-medium text-cream">{contact.name}</p>
                      <p className="label-caps text-cream-muted">Software Developer</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                  <div className="flex flex-col items-center gap-5">
                    <SocialLinks showHandle={false} size={18} />
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <a href={`mailto:${contact.email}`} className="interactive-link flex items-center gap-2 text-sm text-cream-muted">
                        <Mail size={14} />
                        {contact.email}
                      </a>
                      <a href={`tel:+91${contact.phone}`} className="interactive-link flex items-center gap-2 text-sm text-cream-muted">
                        <Phone size={14} />
                        +91 {contact.phone}
                      </a>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <motion.a
                    href="#work"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group mx-auto flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-border bg-charcoal transition-colors hover:border-sage hover:bg-sage/10 md:ml-auto md:mr-0"
                  >
                    <span className="label-caps text-sage">View</span>
                    <span className="font-condensed text-lg tracking-wider text-cream uppercase">Work</span>
                    <ArrowUpRight size={14} className="mt-1 text-cream-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sage" />
                  </motion.a>
                </FadeIn>
              </div>

              <p className="mt-12 text-center label-caps text-cream-muted/60">
                © {new Date().getFullYear()} {contact.name}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
