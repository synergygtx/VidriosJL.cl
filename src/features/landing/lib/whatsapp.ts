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
  nombre: string
  tipo: string
  modelo: string
  anio: string
  comuna: string
  direccion: string
  cantidadFotos?: number
}) {
  const lines = [
    'Hola VidriosJL! Quiero cotizar:',
    `• Nombre: ${fields.nombre}`,
    `• Vidrio: ${fields.tipo}`,
    `• Modelo: ${fields.modelo}`,
    `• Año: ${fields.anio}`,
    `• Comuna: ${fields.comuna}`,
    `• Dirección: ${fields.direccion}`,
  ]
  const cantidadFotos = fields.cantidadFotos ?? 0
  if (cantidadFotos > 0) {
    lines.push(cantidadFotos === 1 ? '(Adjunto foto del vidrio)' : `(Adjunto ${cantidadFotos} fotos del vidrio)`)
  }
  return lines.join('\n')
}
