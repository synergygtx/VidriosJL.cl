import Image from 'next/image'
import { IconShield } from './icons'

export function Certificacion() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-10 rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium tracking-wide text-brand">
            <IconShield className="h-3.5 w-3.5" />
            Somos profesionales
          </span>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Formación certificada, no aprendida sobre la marcha
          </h2>

          <p className="mt-4 max-w-md text-muted">
            Nuestro técnico se certificó como{' '}
            <span className="text-foreground">Windshield Installer Technician</span> con
            Automotores Gildemeister — el importador oficial de Hyundai en Chile. Formación
            real, evaluada y aprobada, no algo que se aprende viendo videos.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md rotate-1 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40 sm:rotate-2">
          <Image
            src="/images/certificado.webp"
            alt="Certificado Windshield Installer Technician de Automotores Gildemeister a nombre de Cleiver Barrios"
            width={640}
            height={446}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
