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
    image: '/images/servicio-laterales.webp',
    destacado: false,
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
