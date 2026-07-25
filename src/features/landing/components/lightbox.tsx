'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useLightbox } from '../lib/lightbox-context'
import { SERVICIOS } from '../lib/data'

export function Lightbox() {
  const { servicioId, close } = useLightbox()
  const servicio = servicioId ? SERVICIOS.find((s) => s.id === servicioId) : null

  useEffect(() => {
    if (!servicio) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [servicio, close])

  if (!servicio) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={close}
        aria-label="Cerrar"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-xl text-foreground/80 transition-colors hover:text-brand"
      >
        ×
      </button>

      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full">
          <Image src={servicio.image} alt={servicio.nombre} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold">{servicio.nombre}</h3>
            <p className="mt-1 text-sm text-muted">{servicio.detalle}</p>
          </div>
          <a
            href="#cotizar"
            onClick={close}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-gold-metal px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Cotizar
          </a>
        </div>
      </div>
    </div>
  )
}
