import Image from 'next/image'

const PARES = [
  { slug: 'porsche-911', nombre: 'Porsche 911' },
  { slug: 'audi-q2', nombre: 'Audi Q2' },
  { slug: 'gmc-pickup', nombre: 'Camioneta GMC' },
  { slug: 'scirocco', nombre: 'VW Scirocco' },
  { slug: 'swift', nombre: 'Suzuki Swift' },
  { slug: 'subaru', nombre: 'Subaru Forester' },
]

export function AntesDespues() {
  return (
    <section id="antes-despues" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Trabajos reales, autos reales
        </h2>
        <p className="mt-3 text-muted">
          Así queda cada vidrio que cambiamos. Sin retoques, sin montajes.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PARES.map(({ slug, nombre }) => (
          <div key={slug} className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="grid grid-cols-2">
              <div className="relative aspect-square">
                <Image
                  src={`/images/ad/${slug}-antes.webp`}
                  alt={`${nombre} — antes del cambio de vidrio`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 1024px) 16vw, 45vw"
                />
                <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground/90">
                  Antes
                </span>
              </div>
              <div className="relative aspect-square">
                <Image
                  src={`/images/ad/${slug}-despues.webp`}
                  alt={`${nombre} — después del cambio de vidrio`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 1024px) 16vw, 45vw"
                />
                <span className="absolute left-2 top-2 rounded-full bg-brand/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-background">
                  Después
                </span>
              </div>
            </div>
            <p className="px-4 py-3 text-sm text-muted">{nombre}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
