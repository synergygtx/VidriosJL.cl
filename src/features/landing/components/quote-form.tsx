'use client'

import { useEffect, useRef, useState } from 'react'
import { buildQuoteMessage, buildWhatsAppLink } from '../lib/whatsapp'
import { IconCamera, IconX } from './icons'

const TIPOS = ['Parabrisas', 'Luneta', 'Aleta', 'Vidrio de puerta', 'Lateral']
const MAX_FOTOS = 3

export function QuoteForm() {
  const [nombre, setNombre] = useState('')
  const [tipo, setTipo] = useState(TIPOS[0])
  const [modelo, setModelo] = useState('')
  const [anio, setAnio] = useState('')
  const [direccion, setDireccion] = useState('')
  const [fotos, setFotos] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const urls = fotos.map((f) => URL.createObjectURL(f))
    setPreviewUrls(urls)
    return () => urls.forEach((url) => URL.revokeObjectURL(url))
  }, [fotos])

  function addFoto(file: File | undefined) {
    if (!file) return
    setFotos((prev) => (prev.length >= MAX_FOTOS ? prev : [...prev, file]))
  }

  function removeFoto(index: number) {
    setFotos((prev) => prev.filter((_, i) => i !== index))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const message = buildQuoteMessage({
      nombre,
      tipo,
      modelo,
      anio,
      direccion,
      cantidadFotos: fotos.length,
    })

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

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="nombre" className="text-sm font-medium text-foreground/90">
              Nombre
            </label>
            <input
              id="nombre"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="ej: Juan Pérez"
              className="h-12 rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
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
            <label htmlFor="direccion" className="text-sm font-medium text-foreground/90">
              Dirección
            </label>
            <input
              id="direccion"
              required
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="ej: Av. Siempre Viva 123, Ñuñoa"
              className="h-12 rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="text-sm font-medium text-foreground/90">
              Fotos del vidrio{' '}
              <span className="font-normal text-muted">
                (opcional, hasta {MAX_FOTOS})
              </span>
            </span>

            <input
              ref={fileInputRef}
              id="foto"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(e) => {
                addFoto(e.target.files?.[0])
                if (fileInputRef.current) fileInputRef.current.value = ''
              }}
              className="hidden"
            />

            {previewUrls.length > 0 && (
              <div className="flex flex-col gap-2">
                {previewUrls.map((url, i) => (
                  <div
                    key={url}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background p-2.5"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={url}
                        alt="Foto del vidrio a cotizar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="flex-1 truncate text-sm text-muted">{fotos[i]?.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFoto(i)}
                      aria-label="Quitar foto"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
                    >
                      <IconX className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {fotos.length < MAX_FOTOS && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-dashed border-border text-sm text-muted transition-colors hover:border-brand/50 hover:text-brand"
              >
                <IconCamera className="h-5 w-5" />
                {fotos.length === 0
                  ? 'Adjuntar foto del vidrio'
                  : `Agregar otra foto (${fotos.length}/${MAX_FOTOS})`}
              </button>
            )}

            {fotos.length > 0 && (
              <p className="text-xs text-muted">
                Se abrirá el chat de WhatsApp de VidriosJL con tu mensaje listo —
                adjunta las fotos ahí mismo antes de enviar.
              </p>
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
