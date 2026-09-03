import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type ProjectMediaProps = {
  title: string
  image: string
  images?: readonly string[]
  variant: 'featured' | 'thumb'
}

const SCREEN_LABELS = ['Home', 'Memories', 'Entry'] as const

export default function ProjectMedia({ title, image, images, variant }: ProjectMediaProps) {
  if (images && images.length > 1 && variant === 'featured') {
    return <FeaturedShowcase title={title} images={images} />
  }

  if (images && images.length > 1 && variant === 'thumb') {
    return <ThumbPreview title={title} images={images} />
  }

  const className =
    variant === 'featured' ? 'project-featured-image' : 'project-thumb-image'

  return (
    <img
      src={image}
      alt={`${title} preview`}
      loading="lazy"
      className={`${className} h-full w-full object-cover object-top`}
    />
  )
}

function FeaturedShowcase({ title, images }: { title: string; images: readonly string[] }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [images.length, paused])

  return (
    <div
      className="journal-showcase relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="journal-showcase-bg" aria-hidden="true" />
      <div className="journal-showcase-glow" aria-hidden="true" />

      <div className="journal-showcase-inner relative z-10 px-5 py-8 md:px-8 md:py-10">
        <div className="journal-browser mx-auto w-full max-w-[520px]">
          <div className="journal-browser-bar">
            <div className="journal-browser-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="journal-browser-url">the journal</p>
          </div>

          <div className="journal-browser-viewport">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={images[active]}
                src={images[active]}
                alt={`${title} — ${SCREEN_LABELS[active] ?? `screen ${active + 1}`}`}
                loading="lazy"
                initial={{ opacity: 0, y: 8, scale: 1.015 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.985 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="journal-browser-screen"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="journal-showcase-nav">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show ${SCREEN_LABELS[i] ?? `screen ${i + 1}`}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setActive(i)
              }}
              className={`journal-showcase-tab ${i === active ? 'is-active' : ''}`}
            >
              <span className="journal-showcase-tab-index">{String(i + 1).padStart(2, '0')}</span>
              {SCREEN_LABELS[i] ?? `Screen ${i + 1}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function ThumbPreview({ title, images }: { title: string; images: readonly string[] }) {
  const hero = images[1] ?? images[0]

  return (
    <div className="journal-thumb-stack relative h-full w-full">
      <div className="journal-thumb-shadow journal-thumb-shadow-2" aria-hidden="true" />
      <div className="journal-thumb-shadow journal-thumb-shadow-1" aria-hidden="true" />
      <img
        src={hero}
        alt={`${title} preview`}
        loading="lazy"
        className="journal-thumb-front h-full w-full object-cover object-top"
      />
      <div className="journal-thumb-stack-overlay" aria-hidden="true" />
    </div>
  )
}
