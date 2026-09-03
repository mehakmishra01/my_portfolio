import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import InteractivePhoto from './InteractivePhoto'
import ThemeToggle from './ThemeToggle'
import { contact, navLinks } from '../data/portfolio'

const LETTERS = 'PORTFOLIO'.split('')

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <section
      ref={sectionRef}
      id="top"
      className="hero-section relative flex min-h-screen flex-col overflow-hidden section-padding pb-16 pt-6"
    >
      <motion.div
        style={{ rotate: circleRotate }}
        className="decor-circle anim-circle-1 -left-32 top-24 h-[480px] w-[480px]"
        aria-hidden="true"
      />
      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
        className="decor-circle anim-circle-2 -right-24 top-[420px] h-[360px] w-[360px]"
        aria-hidden="true"
      />
      <div className="decor-circle anim-circle-3 left-1/2 top-[180px] h-[620px] w-[620px] -translate-x-1/2" aria-hidden="true" />

      <div className="container-wide relative z-10 flex flex-1 flex-col">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hero-nav mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4"
        >
          <span className="text-[11px] font-medium tracking-[0.28em] text-cream-muted uppercase">
            2026
          </span>

          <nav className="hidden items-center justify-center gap-10 md:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="nav-link text-[11px] tracking-[0.22em] text-cream-muted uppercase"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3 md:gap-4">
            <ThemeToggle />
            <span className="hidden text-[11px] font-medium tracking-[0.28em] text-cream-muted uppercase md:inline">
              Software Developer
            </span>
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
              className="mb-4 flex flex-col gap-4 overflow-hidden border-b border-border pb-5 md:hidden"
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

        <div className="relative flex flex-1 flex-col items-center justify-center py-6 md:py-10">
          <motion.div
            style={{ y: titleY }}
            className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 select-none"
            aria-hidden="true"
          >
            <h1 className="hero-portfolio-title flex justify-center overflow-hidden">
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  initial={{ opacity: 0, y: 80, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="hero-portfolio-letter inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.div style={{ y: photoY }} className="relative z-10">
            <InteractivePhoto />
          </motion.div>
        </div>

        <div className="relative z-20 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-end md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight font-semibold tracking-wide text-cream uppercase">
              Mehak Mishra
            </h2>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="pill-badge mt-3 inline-block"
            >
              Web & Software Developer
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-4 max-w-xs text-sm leading-relaxed text-cream-muted"
            >
              Crafting digital experiences with intention — clean code, thoughtful
              design, products that earn trust.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="signature mt-3"
            >
              Mehak
            </motion.p>
          </motion.div>

          <div className="hidden md:block" />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:text-right"
          >
            <p className="text-[11px] tracking-[0.22em] text-cream-muted uppercase">
              Based in India
            </p>
            <p className="mt-2 text-[11px] tracking-[0.22em] text-sage uppercase">
              Available for Opportunities
            </p>
            <motion.a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial mt-5 inline-flex"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View GitHub
              <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="#services"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-cream-muted transition-colors hover:text-sage"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <span className="block h-8 w-px bg-gradient-to-b from-sage/60 to-transparent" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
