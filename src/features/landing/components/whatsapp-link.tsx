'use client'

import type { ReactNode } from 'react'
import { trackWhatsAppClick, type WhatsAppSource } from '@/shared/lib/analytics'
import { buildWhatsAppLink } from '../lib/whatsapp'

interface WhatsAppLinkProps {
  /** Desde que parte del sitio se hizo clic. Llega a GA4 como parametro `origen`. */
  origen: WhatsAppSource
  message: string
  className?: string
  ariaLabel?: string
  children: ReactNode
}

export function WhatsAppLink({
  origen,
  message,
  className,
  ariaLabel,
  children,
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={() => trackWhatsAppClick(origen)}
    >
      {children}
    </a>
  )
}
