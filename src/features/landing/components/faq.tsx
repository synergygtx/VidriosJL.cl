import { PREGUNTAS } from '../lib/data'

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">Preguntas frecuentes</h2>

      <div className="mt-8 divide-y divide-border border-t border-border">
        {PREGUNTAS.map(({ q, a }) => (
          <details key={q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium sm:text-lg">
              {q}
              <span className="shrink-0 text-xl text-brand transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted sm:text-base">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
