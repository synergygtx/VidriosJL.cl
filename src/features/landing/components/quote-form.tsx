'use client'

import { useState } from 'react'
import { buildQuoteMessage, buildWhatsAppLink } from '../lib/whatsapp'

const TIPOS = ['Parabrisas', 'Luneta', 'Aleta', 'Vidrio de puerta', 'Lateral']

export function QuoteForm() {
  const [nombre, setNombre] = useState('')
  const [tipo, setTipo] = useState(TIPOS[0])
  const [modelo, setModelo] = useState('')
  const [anio, setAnio] = useState('')
  const [direccion, setDireccion] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const message = buildQuoteMessage({ nombre, tipo, modelo, anio, direccion })

    window.location.href = buildWhatsAppLink(message)
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
