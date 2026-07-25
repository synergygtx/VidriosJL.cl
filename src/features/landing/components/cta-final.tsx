export function CtaFinal() {
  return (
    <section className="border-y border-brand/20 bg-gradient-to-b from-brand/[0.08] to-transparent">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-28">
        <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          ¿Vidrio trizado? No lo dejes para después.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Mientras más esperas, más riesgo corres de manejar así.
        </p>

        <a
          href="#cotizar"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gold-metal px-8 py-4 text-base font-semibold text-background transition-transform hover:scale-105 active:scale-95"
        >
          Cotizar por WhatsApp
        </a>

        <p className="mt-4 text-xs text-muted sm:text-sm">
          Sin compromiso. Vamos a tu casa o trabajo en Santiago y alrededores.
        </p>
      </div>
    </section>
  )
}
