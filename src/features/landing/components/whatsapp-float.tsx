import { IconWhatsApp } from './icons'
import { buildWhatsAppLink, QUICK_MESSAGE } from '../lib/whatsapp'

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-md" />
      <a
        href={buildWhatsAppLink(QUICK_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#0a3d1f] shadow-lg shadow-black/40 transition-transform hover:scale-110 active:scale-95 sm:h-16 sm:w-auto sm:gap-2 sm:rounded-full sm:px-5"
      >
        <IconWhatsApp className="h-7 w-7 sm:h-6 sm:w-6" />
        <span className="hidden text-sm font-semibold sm:inline">Escríbenos</span>
      </a>
    </div>
  )
}
