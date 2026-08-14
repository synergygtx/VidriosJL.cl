import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId: string
  /**
   * ID de la cuenta de Google Ads (AW-...). Opcional: si no viene, el sitio
   * mide en GA4 igual, solo que sin registrar conversiones de Ads.
   */
  adsId?: string
}

export function GoogleAnalytics({ gaId, adsId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');${adsId ? `
gtag('config', '${adsId}');` : ''}`}
      </Script>
    </>
  )
}
