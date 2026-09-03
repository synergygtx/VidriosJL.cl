import { IconFacebook, IconStar } from './icons'
import { RESENAS } from '../lib/data'

export function Resenas() {
  return (
    <section id="resenas" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 text-muted">Reseñas reales de nuestra página de Facebook.</p>
        </div>

        <a
          href="https://www.facebook.com/profile.php?id=61553306980953&sk=reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2 text-sm text-muted transition-colors hover:text-brand"
        >
          <IconFacebook className="h-4 w-4" />
          Ver todas en Facebook
        </a>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESENAS.map(({ nombre, texto, fecha }) => (
          <div
            key={nombre}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6"
          >
            <div className="flex gap-0.5 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-sm text-foreground/90">{texto}</p>
            <div className="mt-auto pt-2 text-xs text-muted">
              {nombre} · {fecha}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
