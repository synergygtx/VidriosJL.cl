import { PREGUNTAS, RESENAS } from '../lib/data'

const SITE_URL = 'https://www.vidriosjl.cl'

const business = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'VidriosJL',
  description:
    'Cambio de parabrisas, lunetas y vidrios automotrices a domicilio en Santiago y alrededores.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  telephone: '+56956709205',
  email: 'contacto@vidriosjl.cl',
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'Santiago de Chile',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    'https://instagram.com/vidriosjl.cl',
    'https://www.facebook.com/profile.php?id=61553306980953',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: String(RESENAS.length),
  },
  review: RESENAS.map(({ nombre, texto }) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: nombre },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: texto,
  })),
}

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PREGUNTAS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
