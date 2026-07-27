export const WHATSAPP_NUMBER = '56956709205'

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const QUICK_MESSAGE = [
  'Hola VidriosJL! Quiero cotizar el cambio de mi vidrio.',
  'Tipo de vidrio:',
  'Modelo:',
  'Año:',
  'Patente o N° Chacis:',
  '(Adjunto foto del vidrio)',
].join('\n')

export function buildQuoteMessage(fields: {
  nombre: string
  tipo: string
  modelo: string
  anio: string
  direccion: string
}) {
  return [
    'Hola VidriosJL! Quiero cotizar:',
    `• Nombre: ${fields.nombre}`,
    `• Vidrio: ${fields.tipo}`,
    `• Modelo: ${fields.modelo}`,
    `• Año: ${fields.anio}`,
    `• Dirección: ${fields.direccion}`,
    '(Adjunto foto del vidrio)',
  ].join('\n')
}
