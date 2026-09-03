import { useEffect, useRef, useState } from 'react'

type LazyImageProps = {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

export default function LazyImage({ src, alt, className = '', eager = false }: LazyImageProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [src])

  useEffect(() => {
    const fallback = window.setTimeout(() => setLoaded(true), 1000)
    return () => window.clearTimeout(fallback)
  }, [src])

  return (
    <div className="lazy-image relative h-full w-full">
      {!loaded && <div className="lazy-image-placeholder absolute inset-0" aria-hidden="true" />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`lazy-image-img ${className}`}
      />
    </div>
  )
}
