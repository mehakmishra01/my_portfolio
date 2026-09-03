import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import InteractivePhoto from './InteractivePhoto'
import ThemeToggle from './ThemeToggle'
import FloatingElements from './FloatingElements'
import SocialLinks from './SocialLinks'
import { navLinks } from '../data/portfolio'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3])

  return (
    <section ref={sectionRef} id="top" className="hero-section relative min-h-screen overflow-hidden section-padding pb-12 pt-5">
      <div className="organic-blob hero-blob" aria-hidden="true" />
      <FloatingElements />

      <motion.div style={{ opacity }} className="container-wide relative z-10">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4"
        >
          <span className="label-caps text-cream-muted">2026</span>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                whileHover={{ y: -2 }}
                className="nav-link label-caps text-cream-muted"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <ThemeToggle />
            <span className="label-caps hidden text-cream-muted md:inline">Software Developer</span>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
              className="text-cream md:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.header>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 flex flex-col gap-3 overflow-hidden border-b border-border pb-4 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-condensed text-2xl tracking-wider text-cream uppercase"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        <div className="relative flex flex-col items-center pt-4 md:pt-8">
          <motion.div style={{ y: titleY }} className="relative z-0 mb-2 text-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-script text-[clamp(2.5rem,7vw,4.5rem)] leading-none text-sage"
            >
              Mahak's
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="hero-portfolio-title text-cream"
            >
              Portfolio
            </motion.h1>
          </motion.div>

          <motion.div style={{ y: photoY }} className="hero-photo-wrap relative z-10">
            <InteractivePhoto />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="hero-social mt-10 w-full"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center pb-4"
        >
          <motion.a
            href="#bento"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 text-cream-muted hover:text-sage"
          >
            <span className="label-caps">Scroll</span>
            <span className="block h-8 w-px bg-gradient-to-b from-sage/60 to-transparent" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
