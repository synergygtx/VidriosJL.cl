'use client'

import { useEffect, useRef, useState } from 'react'
import { buildQuoteMessage, buildWhatsAppLink } from '../lib/whatsapp'
import { IconCamera, IconX } from './icons'

const TIPOS = ['Parabrisas', 'Luneta', 'Aleta', 'Vidrio de puerta', 'Lateral']

export function QuoteForm() {
  const [tipo, setTipo] = useState(TIPOS[0])
  const [modelo, setModelo] = useState('')
  const [anio, setAnio] = useState('')
  const [comuna, setComuna] = useState('')
  const [foto, setFoto] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!foto) {
      setPreviewUrl(null)
      return
    }
    const url = URL.createObjectURL(foto)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [foto])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const message = buildQuoteMessage({ tipo, modelo, anio, comuna, conFoto: !!foto })

    if (foto && navigator.share && navigator.canShare?.({ files: [foto] })) {
      try {
        await navigator.share({ text: message, files: [foto] })
        return
      } catch (err) {
        if ((err as Error).name === 'AbortError') return
      }
    }

    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="cotizar" className="relative z-10 px-4 sm:px-6">
      <div className="mx-auto -mt-10 max-w-2xl rounded-3xl border border-border bg-surface p-6 shadow-2xl shadow-black/40 sm:-mt-16 sm:p-10">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Cotiza en 10 segundos
        </h2>
        <p className="mt-2 text-sm text-muted">
          Cuéntanos qué necesitas y te escribimos directo por WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="tipo" className="text-sm font-medium text-foreground/90">
              Tipo de vidrio
            </label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="h-12 rounded-xl border border-border bg-background px-4 text-base text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            >
              {TIPOS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="modelo" className="text-sm font-medium text-foreground/90">
              Modelo del auto
            </label>
            <input
              id="modelo"
              required
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              placeholder="ej: Toyota Yaris"
              className="h-12 rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="anio" className="text-sm font-medium text-foreground/90">
              Año
            </label>
            <input
              id="anio"
              required
              inputMode="numeric"
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              placeholder="ej: 2015"
              className="h-12 rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="comuna" className="text-sm font-medium text-foreground/90">
              Comuna
            </label>
            <input
              id="comuna"
              required
              value={comuna}
              onChange={(e) => setComuna(e.target.value)}
              placeholder="ej: Ñuñoa"
              className="h-12 rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="text-sm font-medium text-foreground/90">
              Foto del vidrio <span className="font-normal text-muted">(opcional)</span>
            </span>

            <input
              ref={fileInputRef}
              id="foto"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(e) => setFoto(e.target.files?.[0] ?? null)}
              className="hidden"
            />

            {previewUrl ? (
              <>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-2.5">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewUrl}
                      alt="Foto del vidrio a cotizar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="flex-1 truncate text-sm text-muted">{foto?.name}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setFoto(null)
                      if (fileInputRef.current) fileInputRef.current.value = ''
                    }}
                    aria-label="Quitar foto"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    <IconX className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-muted">
                  En el celular se comparte directo por WhatsApp con la foto. En
                  computador, se abre WhatsApp con el mensaje y adjuntas la foto ahí.
                </p>
              </>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-dashed border-border text-sm text-muted transition-colors hover:border-brand/50 hover:text-brand"
              >
                <IconCamera className="h-5 w-5" />
                Adjuntar foto del vidrio
              </button>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex h-14 items-center justify-center rounded-xl bg-gold-metal px-6 text-base font-semibold text-background transition-transform hover:scale-[1.02] active:scale-95 sm:col-span-2"
          >
            Cotizar por WhatsApp
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-muted">
          Sin compromiso. Te respondemos directo por WhatsApp.
        </p>
      </div>
    </section>
  )
}
