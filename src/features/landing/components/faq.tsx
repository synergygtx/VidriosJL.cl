const PREGUNTAS = [
  {
    q: '¿Van a mi comuna?',
    a: 'Cubrimos Santiago y alrededores, hasta 1,5–2 horas de la ciudad. Escríbenos tu comuna por WhatsApp y confirmamos al tiro.',
  },
  {
    q: '¿Cuánto se demora la instalación?',
    a: 'Se hace en el mismo domicilio, el mismo día que agendamos. El tiempo exacto depende del tipo de vidrio y el modelo del auto.',
  },
  {
    q: '¿Qué garantía tengo?',
    a: 'Garantía por filtración y por instalación. Si algo no quedó bien, volvemos.',
  },
  {
    q: '¿Hasta dónde llegan?',
    a: 'Santiago y alrededores, hasta 1,5–2 horas de la ciudad. Si no estás seguro si te cubrimos, pregunta por WhatsApp.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende del modelo de tu auto. Cotiza gratis por WhatsApp y te lo confirmamos al tiro.',
  },
]

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
