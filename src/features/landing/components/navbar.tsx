'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { buildWhatsAppLink, QUICK_MESSAGE } from '../lib/whatsapp'
import { SERVICIOS } from '../lib/data'
import { useLightbox } from '../lib/lightbox-context'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { openServicio } = useLightbox()

  useEffect(() => {
    if (!open) return
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onClick)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="VidriosJL"
            width={140}
            height={56}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              Servicios
              <span className={`text-xs transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {open && (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-border bg-surface p-2 shadow-2xl shadow-black/40">
                {SERVICIOS.map(({ id, nombre, detalle, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => {
                      openServicio(id)
                      setOpen(false)
                    }}
                    className="flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-background"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>
                      <span className="block text-sm font-medium text-foreground">{nombre}</span>
                      <span className="block text-xs text-muted">{detalle}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#antes-despues" className="transition-colors hover:text-foreground">
            Trabajos reales
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            Preguntas
          </a>
        </nav>

        <a
          href={buildWhatsAppLink(QUICK_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold-metal px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95 sm:px-5"
        >
          Cotizar
        </a>
      </div>
    </header>
  )
}
