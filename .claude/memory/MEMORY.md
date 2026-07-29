# Memoria del proyecto — VidriosJL

> Ultima actualizacion: 2026-07-28
> Sitio en produccion: https://vidriosjl.cl

---

## Que es este proyecto

Landing page de **VidriosJL**, servicio de cambio de parabrisas y vidrios
automotrices **a domicilio** en Santiago y alrededores (hasta ~2h de la ciudad).

- **Cliente final:** Cleiver Barrios (dueño del negocio).
- **Modelo de negocio:** no tienen taller, van donde el cliente.
- **Conversion del sitio:** conversacion por WhatsApp. No hay carrito, ni login,
  ni backend. Todo el sitio existe para generar ese mensaje.

Es una **sola pagina** (`src/features/landing/`), sin base de datos.

---

## Stack real

| Capa | Que se usa |
|---|---|
| Framework | Next.js 16.2 (App Router, Turbopack) + React 19 + TypeScript |
| Estilos | Tailwind 3.4, tokens en `src/app/globals.css` |
| Tipografias | Bricolage Grotesque (display) + DM Sans (body), via `next/font` |
| Analitica | GA4 por `next/script` (sin dependencias extra) |
| Deploy | Vercel, proyecto `vidriosjl-cl` |

**No hay** Supabase, ni auth, ni pagos, ni IA. No agregar nada de eso sin pedirlo.

---

## Estado de la infraestructura

### Dominio
- Registrado en **NIC.cl**, titular **Cleiver Barrios**, vence **26/07/2027**.
- Nameservers: `ns1.vercel-dns.com` / `ns2.vercel-dns.com`.
- **El DNS se administra en Vercel**, no en NIC.cl:
  `vercel.com/synergygtxs-projects/~/domains` → `vidriosjl.cl` → DNS Records.

### Hosting
- Vercel, cuenta `synergygtxs-projects`, **plan Hobby**.
- Integracion con GitHub conectada: push a `main` despliega solo.
- ⚠️ **Pendiente de revisar:** el plan Hobby es para uso no comercial. Siendo el
  sitio de un negocio que factura, corresponderia Pro (~US$20/mes).

### Correo corporativo — TERMINADO
**Zoho Mail**, plan gratuito (5 buzones, 5GB c/u, 1 dominio, sin IMAP/POP).

Buzones creados:
- `contacto@vidriosjl.cl` (administrador de la organizacion)
- `cleiver.barrios@vidriosjl.cl` (el dueño)

Registros DNS verificados y funcionando:
```
MX     mx.zoho.com   prioridad 10
MX     mx2.zoho.com  prioridad 20
MX     mx3.zoho.com  prioridad 50
TXT    v=spf1 include:zoho.com ~all
TXT    zoho._domainkey  -> DKIM RSA 2048 bits
TXT    _dmarc           -> v=DMARC1; p=none; rua=mailto:contacto@vidriosjl.cl
```

DMARC esta a proposito en `p=none` (modo observacion). Subirlo a `quarantine`
solo despues de revisar unas semanas de reportes.

---

## La medicion (Fase 0 del plan)

**El codigo ya esta listo y probado.** Falta solo conectar la cuenta de Google.

### Como funciona
- `src/shared/components/google-analytics.tsx` carga GA4, **solo si existe la
  variable `NEXT_PUBLIC_GA_ID`**. Sin ella el sitio funciona igual y no carga
  nada externo.
- `src/shared/lib/analytics.ts` expone `trackWhatsAppClick(origen)`.
- `src/features/landing/components/whatsapp-link.tsx` es el componente cliente
  que centraliza enlace + evento.

### El evento
Se dispara `generate_lead` (evento **recomendado** de GA4, no uno inventado)
con dos parametros:
- `method: 'whatsapp'`
- `origen`: uno de `navbar` | `hero` | `flotante` | `formulario` | `footer`

Se eligio `generate_lead` porque se puede marcar como evento clave e **importar
despues como conversion en Google Ads**, sin instalar una etiqueta aparte.

### Las 5 salidas a WhatsApp
Todas verificadas en navegador real (no solo compiladas):

| Componente | origen |
|---|---|
| `navbar.tsx` | `navbar` |
| `hero.tsx` | `hero` |
| `whatsapp-float.tsx` | `flotante` |
| `quote-form.tsx` | `formulario` |
| `contacto.tsx` | `footer` |

El del formulario va por `window.open` / `navigator.share`, no por un `<a>`,
por eso se instrumenta distinto (llamada directa a la funcion).

---

## Decisiones tomadas (no revertir sin razon)

1. **Una sola cuenta de Google para todo.** Analytics, Search Console, Perfil de
   Empresa y luego Ads deben ir en la **misma cuenta de Cleiver**. Repartirlos
   impide vincularlos despues.

2. **Propiedad de las cuentas: Cleiver es el dueño, la agencia es admin.**
   Si el trabajo termina, el negocio no puede quedarse sin su correo ni sin el
   historial de reseñas.

3. **Zoho por sobre Cloudflare Email Routing.** Cloudflare tambien es gratis pero
   exige mover los nameservers fuera de Vercel, y es solo reenvio (para *enviar*
   como `contacto@` hay que montar un SMTP aparte).

4. **Google Workspace descartado:** ya no es gratis desde 2022.

5. **Local Services Ads (sello "Google Garantizado") no existe en Chile.**
   Verificado. No perder tiempo buscandolo.

6. **La miniatura de compartir es JPEG, no PNG.** Estaba en PNG de 643KB y
   WhatsApp no generaba la vista previa. Convertida a JPEG de 92KB
   (`src/app/opengraph-image.jpg`). No volver a PNG.

---

## Pendientes, en orden

### Inmediato
- [ ] **Mergear el PR #4** (medicion GA4). Sin eso no esta en produccion.
- [ ] Crear la propiedad **GA4 con la cuenta de Cleiver** → obtener `G-XXXXXXXXXX`.
- [ ] Cargar `NEXT_PUBLIC_GA_ID` en Vercel (los 3 entornos) y **redesplegar**.
- [ ] Verificar en el navegador que los eventos lleguen de verdad.
- [ ] En GA4: marcar `generate_lead` como evento clave y crear la dimension
      personalizada del parametro `origen` (solo aplica hacia adelante, hacerlo
      el mismo dia).
- [ ] Conectar **Search Console** y enviar `https://vidriosjl.cl/sitemap.xml`.

### Corto plazo
- [ ] **Perfil de Empresa en Google** — el de mayor retorno y cuesta $0.
      Registrarlo como **empresa con area de servicio** (sin direccion visible).
      Hay 26 fotos reales listas en `public/images/` para cargar.
- [ ] Agregar `contacto@vidriosjl.cl` al pie de pagina y al `email` del JSON-LD
      (`src/features/landing/components/json-ld.tsx`).
- [ ] Definir a nombre de quien quedan **Vercel y GitHub** (decision comercial,
      no tecnica).

### Antes del 1 de diciembre de 2026
- [ ] **Banner de cookies.** La Ley 21.719 de proteccion de datos entra en
      vigencia esa fecha y exige consentimiento explicito para cookies de
      analitica. GA4 usa cookies, asi que aplica.

### Fases siguientes del plan
- **Fase 2 — Google Ads:** solo campaña de busqueda, concordancia de frase y
  exacta, lista de negativas desde el dia uno. NO usar Performance Max al
  principio (sin historial de conversiones gasta sin control).
- **Fase 3 — SEO:** el problema de fondo es que el sitio es **una sola pagina**.
  Hay que pasar a ~15-20: una por servicio (los 5 ya estan en `lib/data.ts`),
  una por comuna, y guias. Publicar rangos de precio.

---

## Trampas ya descubiertas (no repetir)

### Vercel — panel de DNS
- El campo **Name se deja VACIO** para la raiz del dominio. Si Zoho (u otro)
  dice `@`, en Vercel va vacio. Escribir `@` genera `vidriosjl.cl.vidriosjl.cl`.
- La **prioridad del MX va en su propio campo**, nunca dentro del Value.
- Los valores en **gris son placeholders, no contenido**. El formulario muestra
  `10` en gris en Priority y hay que teclearlo igual, si no da
  `missing required property mxPriority`.
- Excepcion: en el DKIM el Name **si** lleva valor: `zoho._domainkey`.
- Solo puede existir **un** registro que empiece con `v=spf1`. Si mañana se suma
  otra herramienta que envie correo, se fusiona dentro del mismo, no se agrega
  un segundo.

### Vercel — deploy
- El primer deploy se hizo por CLI (`vercel --prod`) y **Vercel no detecto el
  framework** (`framework: null`), lo que devolvia 404 en la home aunque el
  build pasara. Se arreglo **conectando el repositorio de GitHub**, porque ese
  pipeline si lee el `package.json`. Si vuelve a aparecer un 404 raro, revisar
  el Framework Preset antes que el codigo.

### Entorno
- Usar siempre `npm run dev`, nunca `next dev` directo.
- El proyecto usa Turbopack; `npm run build` corre typecheck completo.

---

## Documentos de referencia

Dos documentos publicados con el plan y los pasos operativos:

- **Plan de captacion digital (SEO + Ads), 4 fases:**
  https://claude.ai/code/artifact/c34a336e-502a-425d-adab-1fd3d67f8d39
- **Puesta en marcha de medicion y Perfil de Google (paso a paso):**
  https://claude.ai/code/artifact/077ee511-4c8e-4644-9e20-768150e086a4

---

## Verificar el correo en cualquier momento

```bash
python3 tools/verificar-correo.py
```

Revisa MX, SPF, DKIM, DMARC y que el sitio siga resolviendo. Requiere
`pip install dnspython`.
