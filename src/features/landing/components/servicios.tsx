'use client'

import Image from 'next/image'
import { SERVICIOS } from '../lib/data'
import { useLightbox } from '../lib/lightbox-context'

export function Servicios() {
  const { openServicio } = useLightbox()

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Servicios</h2>
        <p className="mt-3 text-muted">
          Si es un vidrio del auto, lo cambiamos en tu casa o trabajo. Toca una foto para verla más grande.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {SERVICIOS.map(({ id, icon: Icon, nombre, detalle, image, destacado }) => (
          <button
            key={id}
            onClick={() => openServicio(id)}
            className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border text-left transition-colors ${
              destacado ? 'border-brand/40' : 'border-border'
            }`}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={image}
                alt={nombre}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 18vw, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4">
              <Icon className="h-6 w-6 text-brand" />
              <h3 className="font-display text-base font-medium leading-tight">{nombre}</h3>
              <p className="text-xs text-muted">{detalle}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
