export type WhatsAppSource = 'navbar' | 'hero' | 'flotante' | 'formulario' | 'footer'

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      params?: Record<string, string | number | boolean>,
    ) => void
  }
}

/**
 * Registra una salida hacia WhatsApp como lead en GA4.
 *
 * Se usa `generate_lead` porque es un evento recomendado por GA4: se puede
 * marcar como evento clave e importar despues como conversion en Google Ads,
 * sin instalar una etiqueta aparte.
 *
 * Si GA no esta cargado (por ejemplo en local, sin NEXT_PUBLIC_GA_ID), la
 * llamada no hace nada.
 */
export function trackWhatsAppClick(origen: WhatsAppSource) {
  window.gtag?.('event', 'generate_lead', {
    method: 'whatsapp',
    origen,
  })
}
