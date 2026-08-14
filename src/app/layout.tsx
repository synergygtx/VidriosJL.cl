import type { Metadata } from 'next'
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@/shared/components/google-analytics'
import './globals.css'

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
})

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID

const SITE_URL = 'https://vidriosjl.cl'
const TITLE = 'VidriosJL — Cambio de parabrisas a domicilio en Santiago'
const DESCRIPTION =
  'Cambio de parabrisas, lunetas y vidrios automotrices a domicilio en Santiago y alrededores. Sin taller, sin trámites: cotiza por WhatsApp en segundos.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s · VidriosJL',
  },
  description: DESCRIPTION,
  keywords: [
    'cambio de parabrisas',
    'parabrisas a domicilio',
    'vidrios automotrices Santiago',
    'cambio de luneta',
    'vidrio de auto trizado',
    'VidriosJL',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: SITE_URL,
    siteName: 'VidriosJL',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'VidriosJL' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/opengraph-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        {children}
        <Analytics />
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} adsId={ADS_ID} /> : null}
      </body>
    </html>
  )
}
