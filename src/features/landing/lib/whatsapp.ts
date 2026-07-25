export const WHATSAPP_NUMBER = '56956709205'

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const QUICK_MESSAGE = [
  'Hola VidriosJL! Quiero cotizar el cambio de mi vidrio.',
  'Marca:',
  'Modelo:',
  'Año:',
  'Patente:',
  '(Adjunto foto del vidrio)',
].join('\n')

export function buildQuoteMessage(fields: {
  tipo: string
  modelo: string
  anio: string
  comuna: string
  conFoto?: boolean
}) {
  const lines = [
    'Hola VidriosJL! Quiero cotizar:',
    `• Vidrio: ${fields.tipo}`,
    `• Modelo: ${fields.modelo}`,
    `• Año: ${fields.anio}`,
    `• Comuna: ${fields.comuna}`,
  ]
  if (fields.conFoto) lines.push('(Adjunto foto del vidrio)')
  return lines.join('\n')
}
