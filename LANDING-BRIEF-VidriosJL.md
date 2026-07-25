# Landing Brief — VidriosJL

## Negocio
- Nombre: VidriosJL
- Rubro: cambio de parabrisas y vidrios automotrices A DOMICILIO
- WhatsApp: +56 9 5670 9205 (wa.me → 56956709205)
- Instagram: @vidriosjl.cl
- Facebook: facebook.com/vidriosjl
- Horario: Lun a Vie 9:00–17:00 · Sáb 9:00–13:00 · Dom cerrado
- Contexto de compra: urgencia + búsqueda móvil. El cliente googlea con el
  parabrisas trizado desde el celular y llama al primero que responde.
  El sitio tiene UN trabajo: que cotice por WhatsApp en menos de 10 seg.

## Diferenciador principal (va en el HERO)
- Atención a domicilio ÚNICAMENTE. No hay taller al que ir: VidriosJL llega
  a la casa o al trabajo del cliente. Ángulo: comodidad + seguridad (no
  manejas con el vidrio roto).
- Cobertura: Santiago y alrededores, hasta 1,5–2 horas de la ciudad.

## Servicios (cambio de:)
Parabrisas (principal) · Lunetas · Aletas · Vidrios de puertas · Laterales

## Garantías (sección propia)
- No rayamos la carrocería al trabajar → el vehículo no se oxida por
  humedad mal sellada.
- Garantía por filtración.
- Garantía por instalación.
Ángulo técnico: una instalación descuidada deja entrar agua y oxida la
lata. El trabajo prolijo de VidriosJL protege el auto.

## CTA #1 — Formulario de cotización
Client-side puro, sin backend/Supabase: arma un link `wa.me` con los
datos URL-encoded y abre WhatsApp con el mensaje pre-escrito.

Campos: Tipo de vidrio (Parabrisas/Luneta/Aleta/Vidrio de puerta/Lateral) ·
Modelo del auto (texto) · Año (texto/número) · Comuna (texto libre).
Botón: "Cotizar por WhatsApp".

Mensaje generado:
```
Hola VidriosJL! Quiero cotizar:
• Vidrio: {tipo}
• Modelo: {modelo}
• Año: {año}
• Comuna: {comuna}
```

## CTA #2 — Botón flotante de WhatsApp
Fijo, esquina inferior, visible en toda la página. Mismo número. Grande y
obvio en móvil.

## Estructura de la landing
1. Hero — urgencia + "vamos a tu casa o trabajo" + CTA grande. Fondo: foto
   real del equipo instalando (no stock).
2. Formulario de cotización rápida.
3. Servicios — grilla de 5 con íconos.
4. Por qué VidriosJL — a domicilio · garantías · sin rayar carrocería ·
   cobertura amplia.
5. Cómo funciona — 3 pasos: cotizas / agendamos / vamos a instalar.
6. Antes y después — fotos reales del cliente (Instagram).
7. FAQ — ¿van a mi comuna? ¿cuánto demora? ¿qué garantía tengo? ¿hasta
   dónde llegan?
8. Contacto — WhatsApp, horario, zona de cobertura (texto, sin mapa de
   dirección fija), Instagram, Facebook.

## Ajustes explícitos
- SIN sección de precios (depende del modelo; el form la reemplaza).
- Testimonios: reseñas REALES de Google. No inventar ninguna.
- Tono: cercano, chileno, confiable. Rapidez + respaldo + comodidad.

## Diseño (para /design)
- Paleta exacta del logo: negro de fondo, dorado de acento, texto blanco.
  Tema oscuro premium. Aprox: negro #0A0A0A · dorado ~#E6B31E · blanco
  #FFFFFF (muestrear tonos exactos desde el archivo del logo).
- Logo: vectorizar primero (imagen/PDF → SVG limpio) antes de correr
  /design.

## Pendiente del usuario
- [ ] Texto de 3–5 reseñas reales de Google (para prueba social).
- [ ] Archivo del logo (imagen o PDF) para vectorizar.
- [ ] Fotos reales "antes y después" (o confirmar que se sacan de
      Instagram @vidriosjl.cl).
- [ ] Foto real del equipo instalando, para el fondo del Hero.
