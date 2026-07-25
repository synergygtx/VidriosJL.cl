import { IconHome, IconPaint, IconPin, IconShield } from './icons'

const RAZONES = [
  {
    icon: IconHome,
    titulo: 'A domicilio, siempre',
    detalle: 'Vamos a tu casa o trabajo. No existe una dirección de taller a la que tengas que llegar.',
    grande: true,
  },
  {
    icon: IconShield,
    titulo: 'Garantía por escrito',
    detalle: 'Filtración e instalación cubiertas.',
  },
  {
    icon: IconPaint,
    titulo: 'No rayamos tu carrocería',
    detalle: 'Trabajo prolijo, sin dejar marcas.',
  },
  {
    icon: IconPin,
    titulo: 'Cobertura amplia',
    detalle: 'Santiago y alrededores, hasta 2 horas.',
  },
]

export function PorQue() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Tu auto no se raya.
              <br />Y si algo filtra, respondemos.
            </h2>
            <p className="mt-5 max-w-md text-muted">
              Una instalación apurada deja entrar agua sin que se note — y esa
              humedad oxida la lata por dentro. Por eso en VidriosJL
              trabajamos prolijo y lo respaldamos con garantía: si filtra,
              volvemos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {RAZONES.map(({ icon: Icon, titulo, detalle, grande }) => (
              <div
                key={titulo}
                className={`flex flex-col justify-between gap-4 rounded-2xl border border-border bg-background p-5 ${
                  grande ? 'col-span-2 sm:col-span-1 sm:row-span-2' : ''
                }`}
              >
                <Icon className="h-6 w-6 text-brand" />
                <div>
                  <h3 className="font-display text-base font-medium">{titulo}</h3>
                  <p className="mt-1 text-sm text-muted">{detalle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
