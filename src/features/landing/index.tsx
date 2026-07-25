import { AntesDespues } from './components/antes-despues'
import { Certificacion } from './components/certificacion'
import { ComoFunciona } from './components/como-funciona'
import { Contacto } from './components/contacto'
import { CtaFinal } from './components/cta-final'
import { Faq } from './components/faq'
import { Hero } from './components/hero'
import { Lightbox } from './components/lightbox'
import { Navbar } from './components/navbar'
import { PorQue } from './components/por-que'
import { QuoteForm } from './components/quote-form'
import { Servicios } from './components/servicios'
import { TrabajosRealizados } from './components/trabajos-realizados'
import { WhatsAppFloat } from './components/whatsapp-float'
import { LightboxProvider } from './lib/lightbox-context'

export function LandingPage() {
  return (
    <LightboxProvider>
      <Navbar />
      <main>
        <Hero />
        <QuoteForm />
        <Servicios />
        <PorQue />
        <Certificacion />
        <ComoFunciona />
        <AntesDespues />
        <TrabajosRealizados />
        <Faq />
        <CtaFinal />
      </main>
      <Contacto />
      <WhatsAppFloat />
      <Lightbox />
    </LightboxProvider>
  )
}
