'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const FOTOS = [
  { id: '4083', alt: 'Audi A5 Cabriolet — cambio de parabrisas a domicilio' },
  { id: '4093', alt: 'Porsche 911 — cambio de parabrisas a domicilio' },
  { id: '4126', alt: 'Ford Raptor — cambio de parabrisas a domicilio' },
  { id: '4086', alt: 'Mitsubishi L200 — cambio de parabrisas' },
  { id: '4133', alt: 'Mercedes-Benz A200 — trabajo terminado' },
  { id: '4122', alt: 'Audi Q2 — cambio de parabrisas a domicilio' },
  { id: '4117', alt: 'Porsche 911 — trabajo terminado' },
  { id: '4091', alt: 'Toyota 4Runner — cambio de parabrisas a domicilio' },
  { id: '4129', alt: 'Chevrolet Tahoe — trabajo terminado' },
  { id: '4089', alt: 'BMW Serie 1 — trabajo terminado' },
]

const AUTOPLAY_MS = 2800

export function TrabajosRealizados() {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  function scrollByCards(dir: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: dir * (track.clientWidth * 0.8), behavior: 'smooth' })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = setInterval(() => {
      if (pausedRef.current) return
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' })
      }
    }, AUTOPLAY_MS)

    const pause = () => (pausedRef.current = true)
    const resume = () => (pausedRef.current = false)

    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)
    track.addEventListener('touchstart', pause, { passive: true })
    track.addEventListener('touchend', resume)
    track.addEventListener('pointerdown', pause)

    return () => {
      clearInterval(interval)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
      track.removeEventListener('touchstart', pause)
      track.removeEventListener('touchend', resume)
      track.removeEventListener('pointerdown', pause)
    }
  }, [])

  return (
    <section className="pt-10 pb-20 sm:pt-12 sm:pb-24">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-4 px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Trabajos realizados
          </h2>
          <p className="mt-3 text-muted">
            Un vistazo al día a día del equipo, en terreno, en distintas comunas.
          </p>
        </div>

        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            onClick={() => scrollByCards(-1)}
            aria-label="Anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg transition-colors hover:border-brand/50 hover:text-brand"
          >
            ←
          </button>
          <button
            onClick={() => scrollByCards(1)}
            aria-label="Siguiente"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg transition-colors hover:border-brand/50 hover:text-brand"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {FOTOS.map(({ id, alt }) => (
          <div
            key={id}
            className="relative aspect-[4/5] w-[68vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-surface sm:w-[280px]"
          >
            <Image
              src={`/images/trabajos/${id}.webp`}
              alt={alt}
              fill
              loading="lazy"
              sizes="(min-width: 640px) 280px, 68vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
