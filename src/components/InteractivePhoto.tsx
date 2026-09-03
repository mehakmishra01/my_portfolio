import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type PanInfo,
} from 'framer-motion'
import { useRef, useState } from 'react'

const SPRING = { stiffness: 180, damping: 22, mass: 0.8 }

export default function InteractivePhoto() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const spinY = useMotionValue(0)
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)

  const spinSpring = useSpring(spinY, SPRING)
  const tiltXSpring = useSpring(tiltX, { ...SPRING, stiffness: 220 })
  const tiltYSpring = useSpring(tiltY, { ...SPRING, stiffness: 220 })

  const rotateX = useTransform(tiltXSpring, (v) => `${v}deg`)
  const rotateY = useTransform(
    [spinSpring, tiltYSpring],
    ([spin, tilt]: number[]) => `${spin + tilt}deg`,
  )
  const glowX = useTransform(tiltYSpring, [-20, 20], [-12, 12])
  const glowY = useTransform(tiltXSpring, [-15, 15], [-8, 8])

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current || isDragging) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    tiltY.set(x * 18)
    tiltX.set(-y * 12)
  }

  const handlePointerLeave = () => {
    if (!isDragging) {
      tiltX.set(0)
      tiltY.set(0)
    }
  }

  const handleDrag = (_: unknown, info: PanInfo) => {
    spinY.set(spinY.get() + info.delta.x * 0.6)
    setHasInteracted(true)
  }

  return (
    <div
      ref={containerRef}
      className="photo-scene relative mx-auto"
      style={{ perspective: '1200px' }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className="pointer-events-none absolute -inset-8 rounded-3xl opacity-60 blur-2xl"
        style={{
          x: glowX,
          y: glowY,
          background:
            'radial-gradient(ellipse at center, color-mix(in srgb, var(--theme-sage) 25%, transparent), transparent 70%)',
        }}
      />

      <motion.div
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDrag={handleDrag}
        onDragEnd={() => setIsDragging(false)}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="photo-card relative cursor-grab active:cursor-grabbing"
        whileTap={{ scale: 0.98 }}
      >
        <div className="photo-frame">
          <motion.img
            initial={{ opacity: 0, scale: 0.88, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            src="/mehak.jpg"
            alt="Mehak Mishra — drag to rotate"
            className="photo-image"
            draggable={false}
          />
          <div className="photo-shine" aria-hidden="true" />
          <div className="photo-edge photo-edge-left" aria-hidden="true" />
          <div className="photo-edge photo-edge-right" aria-hidden="true" />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: hasInteracted ? 0 : 1, y: hasInteracted ? -4 : 0 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute -bottom-10 left-1/2 w-max -translate-x-1/2 text-[10px] tracking-[0.25em] text-cream-muted uppercase"
      >
        Drag to rotate 360°
      </motion.p>
    </div>
  )
}
