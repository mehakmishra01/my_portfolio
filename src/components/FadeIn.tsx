import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const offsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-24px', amount: 0.08 })
  const [forceVisible, setForceVisible] = useState(false)
  const offset = offsets[direction]
  const visible = isInView || forceVisible

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const checkVisible = () => {
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight + 120 && rect.bottom > -120) {
        setForceVisible(true)
      }
    }

    checkVisible()
    window.addEventListener('scroll', checkVisible, { passive: true })
    window.addEventListener('resize', checkVisible, { passive: true })

    const fallback = window.setTimeout(() => setForceVisible(true), 1600)

    return () => {
      window.removeEventListener('scroll', checkVisible)
      window.removeEventListener('resize', checkVisible)
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={visible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
