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
  },
  {
    id: 'aletas',
    nombre: 'Aletas',
    detalle: 'Los vidrios triangulares laterales, también a domicilio.',
    icon: IconAleta,
    image: '/images/servicio-aletas.webp',
  },
  {
    id: 'puertas',
    nombre: 'Vidrios de puerta',
    detalle: 'Cambio de vidrio de puerta, delantero o trasero.',
    icon: IconPuerta,
    image: '/images/servicio-puertas.webp',
  },
  {
    id: 'laterales',
    nombre: 'Laterales',
    detalle: 'Vidrios laterales completos, instalados en el momento.',
    icon: IconLateral,
    image: '/images/servicio-laterales.webp',
  },
] as const
