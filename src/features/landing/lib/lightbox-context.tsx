'use client'

import { createContext, useContext, useMemo, useState } from 'react'

type LightboxContextValue = {
  servicioId: string | null
  openServicio: (id: string) => void
  close: () => void
}

const LightboxContext = createContext<LightboxContextValue | null>(null)

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [servicioId, setServicioId] = useState<string | null>(null)

  const value = useMemo(
    () => ({
      servicioId,
      openServicio: (id: string) => setServicioId(id),
      close: () => setServicioId(null),
    }),
    [servicioId],
  )

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>
}

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox debe usarse dentro de LightboxProvider')
  return ctx
}
