# Plan de Campañas — Google Ads · VidriosJL

> **Estado al 2026-08-13: campaña creada y DETENIDA, lista para activar.**
>
> Campaña `Parabrisas Santiago` · ID `24140246107` · cuenta `895-325-7001`
>
> | Elemento | Estado |
> |---|---|
> | 1 grupo de anuncios, 24 palabras clave (frase + exacta) | ✅ |
> | 1 anuncio: 15 títulos, 4 descripciones, sin fijar nada | ✅ |
> | URL `https://www.vidriosjl.cl` · ruta `parabrisas/a-domicilio` | ✅ |
> | 4 vínculos a sitios · 6 textos destacados · fragmento "Servicios" | ✅ |
> | 52 palabras negativas a nivel de campaña | ✅ |
> | Recurso de llamada `9 5670 9205` | ✅ (ya existía) |
> | Red de Display y socios de búsqueda | ✅ apagadas |
> | Ubicación en "Presencia", no "Presencia o interés" | ✅ |
> | IA Max | ✅ desactivado |
> | Presupuesto CLP 13.296/día · tope CPC CLP 900 | ✅ |
> | Objetivos de conversión específicos, con la fuente Sitio web incluida | ✅ |
> | **Activar la campaña** | ⬜ pendiente |
>
> Las otras 7 campañas de la cuenta quedaron en "Quitado" y no gastan.
> El activo de ubicación sigue esperando la verificación del Perfil de Empresa
> ([GOOGLE-BUSINESS-PROFILE.md](GOOGLE-BUSINESS-PROFILE.md)).
>
> Conversión: el sitio dispara `generate_lead` (GA4) y `conversion` (Ads) en
> cada clic a WhatsApp ([analytics.ts](src/shared/lib/analytics.ts)).

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

### Decisión de lanzamiento (2026-08-13): arrancar con UN solo grupo

Se lanza con **un grupo único que fusiona G1 + G2 + G3** (todo lo que es
parabrisas de auto). G4 y camiones quedan fuera hasta tener datos.

Motivo: es la primera campaña del cliente y hay que poder gestionarla. Los
grupos **no reparten el presupuesto** — solo mejoran la relevancia anuncio ↔
búsqueda. El costo de fusionar es un Quality Score algo menor; el beneficio es
que se lanza esta semana y los datos llegan concentrados en vez de repartidos.

Se divide cuando el informe de términos de búsqueda muestre qué intención
convierte de verdad. G4 (lunetas, laterales) solo cuando tenga su propio
anuncio: mandar una búsqueda de luneta a un anuncio de parabrisas es pagar por
un clic que no calza.

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

**En el grupo único de lanzamiento: no fijar ningún título.** Con tres
intenciones mezcladas en un mismo grupo, fijar es contraproducente — se quiere
justo lo contrario, que Google elija `¿Parabrisas Trizado?` cuando la búsqueda
sea de urgencia y `Parabrisas a Domicilio` cuando sea del diferenciador. Eso es
para lo que existe el anuncio adaptable.

También en el grupo único se cambia `Lunetas y Vidrios Laterales` por
`Todas las Marcas y Modelos`: ese grupo no tiene palabras clave de luneta, así
que el título gasta un espacio sin traer nada.

Cuando la campaña se divida en G1–G4, ahí sí conviene **fijar en la posición 1**
el título que calce con cada grupo:
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

### Mejoras pendientes — aplicar SOLO cuando el anuncio esté aprobado

**No editar mientras diga "En proceso de revisión": cada edición reinicia el
reloj de la revisión y retrasa la salida al aire.** Cuando el estado pase a
"Aprobado", aplicar las tres cosas **en una sola edición** para pasar por
revisión una vez.

Contexto: la "Calidad del anuncio" marca *Promedio*. Esa métrica es de Google y
**no afecta el Ad Rank ni el costo** — lo que decide el costo es el Nivel de
Calidad. Aun así las tres sugerencias son razonables por sí solas.

**1. Descripciones — solo 1 de 4 dice "parabrisas".** Reemplazar por:
```
Cambiamos tu parabrisas en tu casa o trabajo, el mismo día. Cotiza por WhatsApp.
No manejes con el parabrisas roto. Vamos donde estés en Santiago y alrededores.
Cambio de parabrisas con garantía por filtración e instalación. No rayamos tu auto.
Dinos tu modelo, año y comuna por WhatsApp y te cotizamos el parabrisas al tiro.
```
Google pone en negrita las coincidencias con la búsqueda; más negrita, más clics.

**2. Títulos — pasar de 4 a 7 con la palabra clave** (no más: si los 15 dicen lo
mismo se cae el check "Utilice títulos únicos", hoy en verde):

| Actual | Nuevo |
|---|---|
| Sin Ir a un Taller | Parabrisas Sin Ir al Taller |
| Instalamos el Mismo Día | Parabrisas el Mismo Día |
| No Manejes con Vidrio Roto | No Manejes con Parabrisas Roto |

**3. Dos vínculos a sitio más (4 → 6).** ✅ **Código listo (2026-09-02)** — las
secciones `Resenas` y `ComoFunciona` ya tienen `id`. Falta desplegar y crear:

| Texto | Destino |
|---|---|
| Opiniones de clientes | `https://www.vidriosjl.cl/#resenas` |
| Cómo funciona | `https://www.vidriosjl.cl/#como-funciona` |

No apuntar dos vínculos nuevos a URLs ya usadas solo para llegar a 6.

### URL
Final: `https://www.vidriosjl.cl/`
Ruta visible: `vidriosjl.cl/parabrisas/a-domicilio`

**Con `www`, no el apex.** `vidriosjl.cl` responde 308 y redirige a `www`, que
es el dominio que sirve el sitio en Vercel. Poner el apex en el anuncio agrega
un salto de redirección que Google cuenta contra la experiencia de destino.
✅ **Alineado (2026-09-02):** `layout.tsx`, `sitemap.ts`, `json-ld.tsx` y
`robots.txt` declaran `www`. Además se agregó `scroll-padding-top` en
`globals.css`: el header es fijo (65px) y sin eso toda ancla —los 6 vínculos a
sitio incluidos— aterrizaba con el título tapado por la barra.

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

### Lo que quedó cargado (2026-08-13)

| Parámetro | Valor | De dónde salió |
|---|---|---|
| Presupuesto diario | **CLP 13.296** | Valor recomendado por Google; decisión del cliente |
| Límite de CPC máximo | **CLP 900** | ~1,5× el CPC promedio que estima Google (CLP 585) |
| Estimación semanal | 159 clics · CLP 93.072 | Previsión de Google con esa configuración |

**El tope de CPC bajó de CLP 700 a CLP 900 respecto de la recomendación
inicial.** La cifra de 700 salía de los rangos bajos del Planificador de
Palabras Clave. Con la campaña ya armada, Google estima un CPC promedio de
CLP 585 para *este* conjunto de palabras clave y segmentación — un tope de 700
habría quedado apenas por encima del promedio y habría dejado fuera justo las
búsquedas más competidas, que son las de urgencia ("parabrisas trizado"), o
sea las que más convierten. Un tope ~1,5× el promedio recorta solo la cola
cara sin matar el volumen.

CLP 93.072/semana ≈ CLP 399.000/mes, dentro del rango de CLP 200.000–500.000
que definió el cliente.

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
