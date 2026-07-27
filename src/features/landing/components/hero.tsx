import Image from 'next/image'
import { buildWhatsAppLink, QUICK_MESSAGE } from '../lib/whatsapp'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden pt-16">
      <Image
        src="/images/hero-instalacion.webp"
        alt="Técnico de VidriosJL instalando un parabrisas a domicilio"
        fill
        priority
        className="object-cover object-[50%_22%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/45 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-8 pt-24 sm:px-6 sm:pb-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium tracking-wide text-brand sm:text-sm">
          100% a domicilio, te ahorramos el tiempo de ir a un taller, vamos nosotros!
        </span>

        <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
          El cambio de parabrisas que llega a tu puerta
        </h1>

        <p className="mt-5 max-w-lg text-base text-muted sm:text-lg">
          Vamos a tu casa o trabajo en Santiago y alrededores y cambiamos tu
          parabrisas, luneta o vidrio lateral ahí mismo. Sin manejar con el
          vidrio roto, sin pisar un taller.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#cotizar"
            className="inline-flex items-center justify-center rounded-full bg-gold-metal px-7 py-3.5 text-base font-semibold text-background transition-transform hover:scale-105 active:scale-95"
          >
            Cotizar por WhatsApp
          </a>
          <a
            href={buildWhatsAppLink(QUICK_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm text-foreground/90 transition-colors hover:border-brand/50 hover:text-brand"
          >
            Escribenos directo
          </a>
        </div>

        <p className="mt-4 text-xs text-muted sm:text-sm">
          Cotización sin compromiso · Santiago y alrededores, hasta 2 horas de la ciudad
        </p>
      </div>
    </section>
  )
}
