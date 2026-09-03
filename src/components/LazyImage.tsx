import { useEffect, useRef, useState } from 'react'

type LazyImageProps = {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

export default function LazyImage({ src, alt, className = '', eager = false }: LazyImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(eager)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (eager || shouldLoad) return

    const node = containerRef.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '240px 0px', threshold: 0.01 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [eager, shouldLoad])

  useEffect(() => {
    if (eager) setShouldLoad(true)
  }, [eager])

  return (
    <div ref={containerRef} className="lazy-image relative h-full w-full">
      <div
        className={`lazy-image-placeholder absolute inset-0 ${loaded ? 'lazy-image-placeholder--hidden' : ''}`}
        aria-hidden="true"
      />
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`lazy-image-img ${className} ${loaded ? 'lazy-image-img--loaded' : ''}`}
        />
      )}
    </div>
  )
}
