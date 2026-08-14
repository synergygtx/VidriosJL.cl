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
 * Destino de la conversion de Google Ads, tal cual lo entrega Ads en `send_to`
 * (AW-XXXXXXXXXX/EtiquetaDeLaConversion).
 */
const ADS_CONVERSION = process.env.NEXT_PUBLIC_ADS_CONVERSION

/**
 * Registra una salida hacia WhatsApp como lead.
 *
 * Dispara dos eventos sobre el mismo clic, a proposito:
 *
 * 1. `generate_lead` en GA4, evento recomendado que se puede marcar como
 *    evento clave. Sirve para el analisis del embudo.
 * 2. `conversion` directo a Google Ads. Se agrega aparte porque la
 *    importacion desde GA4 llega con retraso, y las estrategias de puja
 *    necesitan la senal cuanto antes para aprender.
 *
 * Google documenta esta conversion asumiendo una pagina de gracias, que este
 * sitio no tiene: el lead se genera al salir hacia WhatsApp, asi que el evento
 * se dispara aca y no en una vista aparte.
 *
 * Si GA no esta cargado (por ejemplo en local, sin NEXT_PUBLIC_GA_ID), las
 * llamadas no hacen nada.
 */
export function trackWhatsAppClick(origen: WhatsAppSource) {
  window.gtag?.('event', 'generate_lead', {
    method: 'whatsapp',
    origen,
  })

  if (ADS_CONVERSION) {
    window.gtag?.('event', 'conversion', {
      send_to: ADS_CONVERSION,
    })
  }
}
