import Image from 'next/image'
import { IconPin, IconWhatsApp } from './icons'
import { buildWhatsAppLink, QUICK_MESSAGE } from '../lib/whatsapp'

export function Contacto() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/logo.svg" alt="VidriosJL" width={140} height={56} className="h-9 w-auto" />
            <p className="mt-4 max-w-[22ch] text-sm text-muted">
              Cambio de parabrisas y vidrios automotrices a domicilio.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground/90">Contacto</h3>
            <a
              href={buildWhatsAppLink(QUICK_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand"
            >
              <IconWhatsApp className="h-4 w-4" />
              +56 9 5670 9205
            </a>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted">
              <IconPin className="h-4 w-4 shrink-0" />
              Santiago y alrededores, hasta 2 horas de la ciudad
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground/90">Horario</h3>
            <p className="mt-3 text-sm text-muted">Lun a Vie 9:00–17:00</p>
            <p className="text-sm text-muted">Sáb 9:00–13:00</p>
            <p className="text-sm text-muted">Dom cerrado</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground/90">Síguenos</h3>
            <a
              href="https://instagram.com/vidriosjl.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm text-muted transition-colors hover:text-brand"
            >
              Instagram @vidriosjl.cl
            </a>
            <a
              href="https://facebook.com/vidriosjl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-muted transition-colors hover:text-brand"
            >
              Facebook /vidriosjl
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} VidriosJL. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
