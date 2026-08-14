# Perfil de Empresa de Google — VidriosJL

> **Estado al 2026-08-05: BLOQUEADO en re-verificación por video.**
> Esperando que el cliente grabe y suba el video. Ver "Bloqueo activo".
>
> Cuenta administradora: `vidriosjl12@gmail.com`
> ID del negocio: `03302158884412325297`
> Editar en: https://business.google.com/locations

---

## Bloqueo activo

Al cargar la dirección, Google **tumbó la verificación existente**: el perfil
pasó de `100% verified` a `0% verified`, estado **"Verification required"**.

El único método que Google ofrece es **video**. Se revisó "More options" y solo
despliega "Verify Later" — no hay teléfono, correo ni postal disponibles.

**Nadie debe editar el perfil hasta que la verificación se resuelva.** Cada
edición nueva sobre un perfil no verificado puede reiniciar la revisión.

### El video — requisitos

**Una sola toma continua. Sin cortes, sin edición, sin pausas.** Es el motivo
#1 de rechazo, más que el contenido. Tres cosas encadenadas caminando:

1. **Que es Carrión 1507** — partir en la calle, mostrar el letrero de calle
   Carrión y el número de la puerta, y entrar sin cortar.
2. **Que ahí opera un negocio de vidrios** — parabrisas almacenados, ventosas,
   uretano/selladores, herramientas, la camioneta de trabajo con el logo.
3. **Que ustedes lo administran** — abrir con llave, mostrar boleta o factura a
   nombre de VidriosJL, la iniciación de actividades del SII, o entrar al
   correo del negocio desde el celular.

Horizontal, con luz de día, 1–2 minutos, hablando ("Soy Cleiver, de VidriosJL,
estamos en Carrión 1507, Independencia"). Google revisa en hasta 5 días hábiles.

### Chequeo de urgencia

Buscar "VidriosJL" en Google Maps desde un celular **sin la cuenta iniciada**:

- **Aparece** → sin urgencia, esperar la revisión tranquilos.
- **No aparece** → el negocio está perdiendo llamadas; priorizar el video.

---

## Ediciones pendientes de aprobación

Las cuatro quedaron en `PENDING` antes del bloqueo. Se aplicarán o caerán junto
con la verificación — hay que reconfirmarlas después.

| Campo | Antes | Ahora |
|---|---|---|
| Descripción | 322/750 | 634/750 (ver abajo) |
| Presupuestos en línea | vacío | Sí |
| Sitio web | `https://www.vidriosjl.cl/` | `https://vidriosjl.cl/?utm_source=google&utm_medium=organic&utm_campaign=gbp` |
| Dirección | sin ubicación | Carrión 1507, Independencia, Región Metropolitana |

**Descripción cargada** (sin teléfono ni links — Google rechaza descripciones
que los incluyen):

```
VidriosJL cambia parabrisas, lunetas, aletas y vidrios laterales o de puerta a
domicilio en Santiago y alrededores, hasta 2 horas de la ciudad. No tienes que
ir a un taller ni manejar con el vidrio roto: vamos a tu casa o a tu trabajo,
instalamos en el lugar y en la mayoría de los casos quedas listo el mismo día.
Trabajamos con garantía por filtración y por instalación, y cuidamos la
carrocería en cada cambio para que no entre agua ni se oxide la lata. Atendemos
autos, camionetas y vehículos comerciales de todas las marcas. Cotiza gratis
por WhatsApp: cuéntanos el modelo, el año y tu comuna, y te confirmamos el
precio al tiro.
```

**Por qué la UTM:** el tráfico del perfil llegaba mezclado con el orgánico en
GA4. Con esa UTM se puede separar cuántos leads de WhatsApp vienen del perfil
vs. búsqueda normal vs. Ads.

---

## Lo que ya estaba bien (no tocar)

- Nombre `VidriosJL`, limpio y sin keywords → cero riesgo de suspensión.
  **Nunca** ponerle "VidriosJL - Parabrisas a domicilio Santiago": es la causa
  #1 de suspensión de perfiles.
- Categoría principal: `Servicio de reparación de cristales para automóviles`.
- Chat → `https://wa.me/56956709205` (ya estaba configurado).
- Teléfono `9 5670 9205`.
- Horario idéntico al del sitio: L–V 9:00–17:00 · Sáb 9:00–13:00 · Dom cerrado.
- Redes: Instagram `@vidriosjl.cl` y Facebook (perfil `61553306980953`).
- Áreas de servicio: Región Metropolitana, Valparaíso, Viña del Mar.

---

## Cuando la verificación pase

**En este orden:**

1. **Confirmar que las 4 ediciones pendientes se aplicaron.** Si alguna volvió a
   su valor anterior, Google la rechazó — recargarla.

2. **Categorías secundarias.** Estaban bloqueadas con el mensaje *"No disponible
   a menos que la ubicación de su negocio aparezca en Google Maps"* — con la
   dirección verificada se desbloquean. Agregar `Windshield Repair Service`
   (Servicio de reparación de parabrisas), que ya se validó que existe en el
   catálogo. Solo agregar categorías que el negocio realmente hace.

3. **NO volver a tocar la dirección.** Recomendación cambiada con la evidencia
   de esta sesión: la idea original era ocultarla después de guardarla, pero se
   comprobó que tocar la dirección cuesta la verificación completa. Con el
   perfil recién re-verificado, ocultarla puede gatillar el mismo ciclo de
   nuevo. Dejarla visible.

4. **Responder las 2 reseñas pendientes.** Respuesta corta nombrando el
   servicio. El texto de las respuestas también se indexa.

5. Completar lo que quedó sin abrir: servicios, fecha de apertura, atributos
   (Pagos, Planificación, Ofertas), horario de feriados, y fotos.

---

## Después: Google Ads

1. **Vincular perfil ↔ Google Ads** (Herramientas → Vinculaciones de cuentas).
   Habilita el recurso de ubicación: el anuncio muestra distancia y rating.
   Requiere el perfil verificado — de ahí que la verificación sea bloqueante.

2. **Importar la conversión de GA4.** El sitio ya dispara `generate_lead` en
   cada clic a WhatsApp ([analytics.ts](src/shared/lib/analytics.ts)). Marcarlo
   como evento clave en GA4 e importarlo en Ads como conversión **principal**.
   Sin esto la campaña optimiza a clics, no a leads, y paga de más.

3. **Recurso de llamada** con `+56 9 5670 9205` y reporte de llamadas activado.

4. **Campaña de Búsqueda, no Performance Max, para arrancar.** Con presupuesto
   chico PMax se come el budget en display irrelevante. Búsqueda con
   concordancia de frase sobre "cambio de parabrisas", "parabrisas a domicilio",
   "parabrisas trizado" + segmentación por radio da control y datos limpios.
   PMax después, con 30+ conversiones/mes para alimentarlo.

---

## Aprendizaje (Auto-Blindaje)

**2026-08-05 — Cambiar la dirección de un Perfil de Empresa verificado cuesta
la verificación completa.**

- **Error:** se agregó dirección a un perfil verificado y activo. Google no
  puso solo la edición en revisión: bajó el perfil a `0% verified` y exigió
  re-verificación por video, sin ofrecer método alternativo.
- **Fix:** en perfiles verificados y produciendo leads, tratar el campo
  dirección como cambio de alto riesgo. Evaluarlo con el cliente **antes**,
  contando con que el perfil puede quedar fuera de Maps varios días, y
  agendarlo en un momento de baja demanda con el video ya grabado de antemano.
- **Dato útil:** el interruptor "Mostrar la dirección" es binario — al apagarlo
  borra la dirección del formulario. No existe "guardar oculta" en un paso.
