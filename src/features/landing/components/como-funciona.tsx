const PASOS = [
  {
    numero: '01',
    titulo: 'Cotiza',
    detalle: 'Llena el formulario o escríbenos por WhatsApp.',
  },
  {
    numero: '02',
    titulo: 'Agendamos',
    detalle: 'Coordinamos el día y la hora que te acomode.',
  },
  {
    numero: '03',
    titulo: 'Instalamos en tu domicilio',
    detalle: 'Llegamos a tu casa o trabajo. Tú no te mueves.',
  },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">Cómo funciona</h2>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {PASOS.map(({ numero, titulo, detalle }, i) => (
          <div key={numero} className="relative pl-2">
            <span className="font-display text-5xl font-semibold text-brand/25">
              {numero}
            </span>
            <h3 className="mt-3 font-display text-xl font-medium">{titulo}</h3>
            <p className="mt-2 text-sm text-muted">{detalle}</p>
            {i < PASOS.length - 1 && (
              <span className="pointer-events-none absolute right-[-1.25rem] top-6 hidden text-2xl text-border sm:block">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
