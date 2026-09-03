import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const FLOATERS = [
  { id: 'react', label: 'React', x: '8%', y: '18%', delay: 0, rotate: -8, factor: 14 },
  { id: 'ts', label: 'TS', x: '88%', y: '22%', delay: 0.2, rotate: 12, factor: -12 },
  { id: 'py', label: 'Python', x: '6%', y: '72%', delay: 0.3, rotate: 10, factor: 12 },
  { id: 'git', label: 'Git', x: '92%', y: '48%', delay: 0.4, rotate: -12, factor: -16 },
]

export default function FloatingElements() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / (window.innerWidth / 2))
      mouseY.set((e.clientY - window.innerHeight / 2) / (window.innerHeight / 2))
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
      {FLOATERS.map((item) => (
        <Floater key={item.id} item={item} springX={springX} springY={springY} />
      ))}

      <motion.svg
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 0.35, pathLength: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute top-[28%] left-[12%] h-16 w-16 text-sage"
        viewBox="0 0 60 60"
        fill="none"
      >
        <path d="M5 30 Q20 5, 40 25 T55 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M48 12 L55 15 L50 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </motion.svg>
    </div>
  )
}

type FloaterProps = {
  item: (typeof FLOATERS)[number]
  springX: ReturnType<typeof useSpring>
  springY: ReturnType<typeof useSpring>
}

function Floater({ item, springX, springY }: FloaterProps) {
  const x = useTransform(springX, (v) => v * item.factor)
  const y = useTransform(springY, (v) => v * -item.factor * 0.6)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + item.delay, duration: 0.6 }}
      style={{ left: item.x, top: item.y, x, y, rotate: item.rotate }}
      className="absolute"
    >
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + item.delay * 2, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
        className="floater-badge"
      >
        {item.label}
      </motion.span>
    </motion.div>
  )
}
