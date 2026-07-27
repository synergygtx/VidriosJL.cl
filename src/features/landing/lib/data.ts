import {
  IconAleta,
  IconLateral,
  IconLuneta,
  IconParabrisas,
  IconPuerta,
} from '../components/icons'

export const SERVICIOS = [
  {
    id: 'parabrisas',
    nombre: 'Parabrisas',
    detalle: 'El servicio más pedido — cambio completo en tu domicilio.',
    icon: IconParabrisas,
    image: '/images/servicio-parabrisas.webp',
    destacado: true,
  },
  {
    id: 'lunetas',
    nombre: 'Lunetas',
    detalle: 'Vidrio trasero cambiado sin que te muevas de tu casa.',
    icon: IconLuneta,
    image: '/images/servicio-lunetas.webp',
    destacado: false,
  },
  {
    id: 'aletas',
    nombre: 'Aletas',
    detalle: 'Los vidrios triangulares laterales, también a domicilio.',
    icon: IconAleta,
    image: '/images/servicio-aletas.webp',
    destacado: false,
  },
  {
    id: 'puertas',
    nombre: 'Vidrios de puerta',
    detalle: 'Cambio de vidrio de puerta, delantero o trasero.',
    icon: IconPuerta,
    image: '/images/servicio-puertas.webp',
    destacado: false,
  },
  {
    id: 'laterales',
    nombre: 'Laterales',
    detalle: 'Vidrios laterales completos, instalados en el momento.',
    icon: IconLateral,
    image: '/images/servicio-laterales.jpg',
    destacado: false,
  },
] as const

export const RESENAS = [
  {
    nombre: 'Cristian A.',
    texto:
      'Excelente servicio de principio a fin. La comunicación fue clara y rápida, cumplieron con los horarios acordados y realizaron la instalación directamente en mi domicilio comercial. La calidad del parabrisas fue impecable, se nota la preocupación por el detalle y el profesionalismo.',
    fecha: 'noviembre 2025',
  },
  {
    nombre: 'Sujei C.',
    texto:
      'Excelente servicio, 10/10, super profesionales. Nos atendió Don Cleiver muy amable y simpático, nos cambió el parabrisas de la camioneta sin ningún problema para que pudiéramos salir a trabajar al otro día. Se agradece enormemente encontrar un servicio como el de ustedes.',
    fecha: 'abril 2025',
  },
  {
    nombre: 'Andrés S.',
    texto:
      'Excelente atención, muy rápidos y profesionales para trabajar, con buenas terminaciones y preocupados de que quede como corresponde. 100% recomendables.',
    fecha: 'junio 2025',
  },
  {
    nombre: 'Luis V.',
    texto: 'Profesionalismo y puntualidad, preocupados de cada detalle. Muy buen trabajo.',
    fecha: 'septiembre 2025',
  },
  {
    nombre: 'Gerardo P.',
    texto:
      '100% recomendable, muy profesional y los precios muy accesibles. Cambio de parabrisas delantero a BMW 528i, año 2011.',
    fecha: 'marzo 2024',
  },
  {
    nombre: 'Tammy P.',
    texto:
      'Excelente trabajo, tuve suerte de encontrar a alguien profesional para arreglar mi auto. Muy recomendado.',
    fecha: 'julio 2024',
  },
] as const

export const PREGUNTAS = [
  {
    q: '¿Van a mi comuna?',
    a: 'Cubrimos Santiago y alrededores, hasta 1,5–2 horas de la ciudad. Escríbenos tu comuna por WhatsApp y confirmamos al tiro.',
  },
  {
    q: '¿Cuánto se demora la instalación?',
    a: 'Se hace en el mismo domicilio, el mismo día que agendamos. El tiempo exacto depende del tipo de vidrio y el modelo del auto.',
  },
  {
    q: '¿Qué garantía tengo?',
    a: 'Garantía por filtración y por instalación. Si algo no quedó bien, volvemos.',
  },
  {
    q: '¿Hasta dónde llegan?',
    a: 'Santiago y alrededores, hasta 1,5–2 horas de la ciudad. Si no estás seguro si te cubrimos, pregunta por WhatsApp.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende del modelo de tu auto. Cotiza gratis por WhatsApp y te lo confirmamos al tiro.',
  },
] as const
