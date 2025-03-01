import { useEffect, useState, useRef, RefObject } from 'react'

interface IntersectionOptions {
  threshold?: number
  rootMargin?: string
}

export function useInView(options: IntersectionOptions = {}): [RefObject<HTMLElement>, boolean] {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const { threshold = 0.1, rootMargin = '0px' } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return [ref, isInView] as const
} 