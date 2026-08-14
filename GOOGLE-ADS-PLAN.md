# Plan de Campañas — Google Ads · VidriosJL

> Estado: listo para construir. No depende de la verificación del Perfil de
> Empresa ([GOOGLE-BUSINESS-PROFILE.md](GOOGLE-BUSINESS-PROFILE.md)) salvo por
> el activo de ubicación, que se agrega después.
>
> Cuenta de conversión: el sitio ya dispara `generate_lead` en cada clic a
> WhatsApp ([analytics.ts](src/shared/lib/analytics.ts)).

---

## 1. Decisiones de fondo

**Solo Búsqueda para arrancar. Nada de Performance Max.**
PMax es una caja negra que reparte el presupuesto entre Display, YouTube y
Gmail. Con presupuesto chico y cero historial de conversiones, se lo come en
impresiones irrelevantes y no deja aprender qué término trae clientes. Búsqueda
con concordancia de frase da control y datos limpios. PMax se evalúa recién con
30+ conversiones/mes de historial.

**Una sola campaña al principio.**
Cada campaña reparte el aprendizaje y el presupuesto. Con una sola campaña y
grupos de anuncios ajustados se concentra la señal. Se separa "otros vidrios" a
campaña propia recién cuando parabrisas esté estable y se le quiera dar
presupuesto protegido.

**El negocio compite por velocidad de respuesta, no por precio.**
El cliente googlea con el parabrisas trizado desde el celular y le escribe al
primero que contesta. Todo el plan apunta a eso: horario de anuncios pegado a
la capacidad real de responder, y WhatsApp como destino.

---

## 2. Configuración de la campaña

| Ajuste | Valor | Por qué |
|---|---|---|
| Tipo | Búsqueda | — |
| Objetivo | Clientes potenciales / sin objetivo | El objetivo guiado fuerza ajustes que no queremos |
| **Red de Búsqueda: socios** | **OFF** | Tráfico de menor calidad, sin control de dónde aparece |
| **Red de Display** | **OFF** | Viene activada por defecto. Es la fuga de presupuesto #1 |
| **Ubicación: presencia** | **"Presencia: personas en tus ubicaciones"** | Por defecto incluye "interés", que trae gente fuera de Chile buscando Santiago |
| Recomendaciones auto-aplicadas | **OFF** | Google activa broad match y PMax solo si se lo deja |
| Idioma | Español | — |
| Rotación de anuncios | Optimizar | — |

### Segmentación geográfica

Arranque: **radio de 25 km alrededor de Independencia** (la base). Cubre
prácticamente todo Santiago urbano sin gastar en zonas donde el viaje mata el
margen.

No incluir todavía Rancagua, San Antonio, Melipilla ni Valparaíso. Están dentro
de la cobertura declarada, pero con presupuesto de arranque conviene concentrar.
Se abren cuando el costo por lead en Santiago esté controlado.

### Horario de anuncios

Pegado a la capacidad de responder WhatsApp: **L–V 9:00–17:00 · Sáb 9:00–13:00**.

Un lead de parabrisas trizado que no recibe respuesta en minutos se pierde: ese
cliente le escribe a tres proveedores y contrata al primero que contesta. Pagar
clics fuera de horario es pagar por leads que se van a la competencia.

Si el cliente puede responder fines de semana y tardes, se amplía — es de las
palancas más rentables del plan.

---

## 3. Estructura

Campaña: **`Búsqueda · Parabrisas · Santiago`**

| Grupo de anuncios | Intención | Prioridad |
|---|---|---|
| G1 · Parabrisas genérico | Sabe que necesita cambiarlo | Alta |
| G2 · A domicilio | Busca justo el diferenciador | **Máxima** |
| G3 · Urgencia / daño | Se le acaba de romper | Alta |
| G4 · Otros vidrios | Luneta, lateral, puerta, aleta | Media |

G2 es el grupo de mayor valor: quien busca "parabrisas a domicilio" ya
descartó ir a un taller. Menos volumen, mucho mejor conversión.

---

## 4. Palabras clave

Todo en **concordancia de frase** `"..."` y **exacta** `[...]`. **Nada de
concordancia amplia al inicio** — amplia sin historial de conversiones le da
permiso a Google de gastar en lo que se le ocurra.

### G1 · Parabrisas genérico
```
"cambio de parabrisas"
"cambiar parabrisas"
"cambio de parabrisas santiago"
"reemplazo de parabrisas"
"instalacion de parabrisas"
"precio cambio de parabrisas"
"cuanto cuesta cambiar el parabrisas"
[cambio de parabrisas]
[cambio de parabrisas santiago]
```

### G2 · A domicilio
```
"parabrisas a domicilio"
"cambio de parabrisas a domicilio"
"instalacion de parabrisas a domicilio"
"cambio de parabrisas a domicilio santiago"
"vidrios automotrices a domicilio"
[parabrisas a domicilio]
[cambio de parabrisas a domicilio]
```

### G3 · Urgencia / daño
```
"parabrisas trizado"
"parabrisas roto"
"parabrisas quebrado"
"cambio parabrisas trizado"
"se me trizo el parabrisas"
"me rompieron el parabrisas"
[parabrisas trizado]
[parabrisas roto]
```

### G4 · Otros vidrios
```
"cambio de luneta"
"cambio de luneta auto"
"vidrio trasero auto"
"cambio vidrio puerta auto"
"vidrio lateral auto"
"cambio de vidrios automotrices"
"vidrios para autos"
```

> **No agregar marcas ni modelos todavía** ("parabrisas toyota", "parabrisas
> hilux"). Multiplican los términos y diluyen el presupuesto. Se agregan cuando
> el informe de términos de búsqueda muestre cuáles aparecen de verdad.

---

## 5. Negativas — cargar ANTES de encender

Esto es lo que decide si el presupuesto rinde o se evapora. La palabra "vidrios"
atrae muchísima búsqueda de vidrios de casa, que no sirve.

**Vidrio de construcción / hogar** (la fuga más grande):
```
casa · hogar · ventana · ventanas · termopanel · termopaneles · espejo
espejos · ducha · mampara · cerramiento · quincho · logia · puerta de vidrio
vitrina · aluminio · pvc · edificio · oficina
```

**Empleo, formación y DIY:**
```
gratis · empleo · trabajo · trabajos · curso · cursos · como hacer · como cambiar
diy · casero · tutorial · paso a paso · aprender
```

**Repuesto usado / venta de piezas:**
```
usado · usados · segunda mano · desarmaduria · desarmadurias · yonke
repuestos usados · vendo · venta de repuestos · mercadolibre · yapo
```

**Vehículos fuera de alcance** (confirmar con el cliente antes de cargar):
```
camion · camiones · bus · buses · maquinaria · retroexcavadora · tractor
grua · moto · motos · lancha · tren
```

**Servicios que no prestan** (confirmar):
```
polarizado · polarizados · lamina · laminas · pulir · pulido · pulidor
rayones · limpiaparabrisas · plumillas · escobillas · sellador venta
```

**Mayoristas:**
```
fabrica · mayorista · distribuidor · importador · al por mayor
```

> `limpiaparabrisas`, `plumillas` y `escobillas` tienen volumen alto y cero
> intención de compra para este negocio. Solas justifican revisar la lista.

---

## 6. Anuncios (RSA)

Un anuncio adaptable por grupo. Google respeta los límites: **títulos 30
caracteres, descripciones 90**. Todos los de abajo están dentro.

### Títulos (los 15)
```
Cambio de Parabrisas
Parabrisas a Domicilio
Vamos a Tu Casa o Trabajo
Sin Ir a un Taller
Cotiza Gratis por WhatsApp
Instalamos el Mismo Día
Cambio de Parabrisas Stgo
¿Parabrisas Trizado?
No Manejes con Vidrio Roto
Garantía por Filtración
Garantía de Instalación
Todo Santiago y Alrededores
Lunetas y Vidrios Laterales
Precio al Tiro por WhatsApp
No Rayamos Tu Carrocería
```

**Fijar en la posición 1** el título que calce con el grupo:
- G1 → `Cambio de Parabrisas`
- G2 → `Parabrisas a Domicilio`
- G3 → `¿Parabrisas Trizado?`
- G4 → `Lunetas y Vidrios Laterales`

Fijar solo esa posición: el resto rota y Google encuentra la combinación que
rinde. Fijar todo desactiva el aprendizaje.

### Descripciones (las 4)
```
Cambiamos tu parabrisas en tu casa o trabajo, el mismo día. Cotiza por WhatsApp.
No manejes con el vidrio roto. Vamos donde estés en Santiago y alrededores.
Garantía por filtración e instalación. Cuidamos la carrocería en cada cambio.
Dinos modelo, año y comuna por WhatsApp y te confirmamos el precio al tiro.
```

### URL
Final: `https://vidriosjl.cl/`
Ruta visible: `vidriosjl.cl/parabrisas/a-domicilio`

El copy de los anuncios repite el del hero a propósito ("El cambio de parabrisas
que llega a tu puerta", "No conduzcas con tu vidrio roto"). Que el anuncio y la
página digan lo mismo sube el Quality Score y baja el CPC real.

---

## 7. Recursos (extensiones)

**Sitelinks** — apuntan a las anclas que ya existen en la landing:

| Texto | URL | Descripción |
|---|---|---|
| Cotizar por WhatsApp | `/#cotizar` | Modelo, año y comuna |
| Nuestros servicios | `/#servicios` | Parabrisas, lunetas y más |
| Trabajos realizados | `/#antes-despues` | Fotos reales de instalaciones |
| Preguntas frecuentes | `/#faq` | Cobertura, plazos y garantía |

**Textos destacados:**
```
100% a domicilio · Garantía por filtración · Instalación el mismo día
Cotización sin compromiso · No rayamos la carrocería · Santiago y alrededores
```

**Fragmento estructurado** — Encabezado `Servicios`:
```
Parabrisas · Lunetas · Aletas · Vidrios de puerta · Vidrios laterales
```

**Recurso de llamada:** `+56 9 5670 9205`, con informes de llamadas activados.
En móvil una parte de la gente prefiere llamar antes que escribir.

**Recurso de ubicación:** pendiente de la verificación del perfil. Agregar
apenas se apruebe — suma distancia y estrellas al anuncio.

---

## 8. Puja y presupuesto

### Estrategia por fase

**Fase 1 (semanas 1–3): Maximizar clics con límite de CPC.**
Sin historial de conversiones, las estrategias inteligentes no tienen con qué
optimizar. Maximizar clics con tope de CPC junta datos a costo predecible.

**Fase 2 (desde ~15–30 conversiones): Maximizar conversiones.**
Recién ahí el algoritmo tiene señal suficiente. Antes, tira el presupuesto
explorando.

### Cuánto pujar — la cuenta que falta

Los CPC reales hay que sacarlos del **Planificador de Palabras Clave** con la
segmentación ya cargada; no sirve estimarlos de memoria. Pero el techo de puja
sale de números del negocio:

```
Ticket promedio de un parabrisas       →  $ ______
Margen por trabajo (%)                 →  ______ %
Margen en pesos                        →  $ ______

Tasa de cierre (leads WhatsApp → venta)→  ______ %
   Ej: si de 10 conversaciones cierran 3 → 30%

Máximo a pagar por lead  = margen × tasa de cierre × 0,5
   (el 0,5 deja la mitad del margen como utilidad real)

Máximo por clic = máximo por lead × tasa de conversión del sitio
   (qué % de visitas hace clic a WhatsApp — sale de GA4)
```

Con esos tres datos —ticket, margen y tasa de cierre— queda definido el CPC
máximo y el presupuesto diario deja de ser un número al azar.

---

## 9. Conversiones

Sin esto bien puesto, la campaña optimiza a clics y paga de más. Es el paso que
no se puede saltar.

**Mínimo:** en GA4 marcar `generate_lead` como evento clave, e importarlo en
Ads como conversión **principal**. Las demás (Vercel Analytics, pageviews) van
como secundarias para que no contaminen la puja.

**Mejor:** instalar además la etiqueta de conversión propia de Google Ads
disparada en el mismo clic a WhatsApp. La importación desde GA4 tiene latencia
y modelado; la etiqueta directa reporta más rápido y más completo, y las
estrategias inteligentes aprenden antes.

Eso se implementa en [analytics.ts](src/shared/lib/analytics.ts), junto al
`generate_lead` que ya existe. Requiere el **ID de conversión y la etiqueta**,
que salen recién al crear la conversión en la cuenta de Ads.

---

## 10. Rutina de revisión

**Días 1 a 14 — revisar el informe de términos de búsqueda cada 2 días.**
Es lo único que importa al principio. Cada término irrelevante que aparezca se
agrega como negativa. La lista de negativas de la sección 5 es el punto de
partida, no la lista final.

**Semanal:** CPC promedio por grupo, costo por lead, y qué grupo trae los leads
que terminan en trabajo (eso lo sabe el cliente, no la plataforma).

**Mensual:** subir presupuesto en el grupo con mejor costo por trabajo cerrado,
no por CTR ni por volumen de clics.

---

## 11. Errores caros a evitar

1. **Encender sin negativas cargadas.** El primer día se va en "vidrios para
   ventanas" y "cursos de instalación".
2. **Dejar Display activado.** Viene por defecto en el flujo guiado.
3. **Aceptar las recomendaciones auto-aplicadas.** Activan broad match y PMax
   sin avisar.
4. **Anunciar fuera del horario de respuesta.** El lead sin respuesta es dinero
   quemado, no un lead pendiente.
5. **Cambiar pujas todos los días.** Cada cambio reinicia el aprendizaje.
   Mínimo 7–10 días entre ajustes estructurales.
6. **Medir por CTR.** El CTR no paga sueldos. La métrica es costo por trabajo
   cerrado.
