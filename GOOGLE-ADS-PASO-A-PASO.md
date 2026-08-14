# Google Ads — Guía de armado paso a paso

> Cuenta: `895-325-7001` · Estado: **detenida por falta de pago** (CLP 424).
> Se puede construir todo estando detenida; no publica hasta regularizar.
>
> Valores y estructura salen de [GOOGLE-ADS-PLAN.md](GOOGLE-ADS-PLAN.md).

---

## PARTE A · Crear la conversión

Va primero. Si enciendes la campaña sin conversión configurada, los datos de la
fase de aprendizaje —la más cara— se pierden y no se recuperan.

**Ruta:** Objetivos → Conversiones → Resumen → **+ Nueva acción de conversión**

| Pantalla | Qué elegir |
|---|---|
| Tipo de conversión | **Sitio web** |
| Dominio | `vidriosjl.cl` → Analizar |
| Resultado del análisis | No va a detectar nada. Buscar abajo **"Agregar una acción de conversión manualmente"** |

Luego, en el formulario:

| Campo | Valor | Por qué |
|---|---|---|
| Categoría de objetivo | **Cliente potencial → Contacto** | Es un lead, no una venta cerrada |
| Nombre | `Clic a WhatsApp` | — |
| Valor | **No usar un valor** por ahora | Se agrega cuando sepamos ticket × tasa de cierre |
| **Recuento** | **Uno** ⚠️ | Si queda en "Todas", una persona que clickea 3 veces cuenta como 3 conversiones y descuadra la puja |
| Ventana de conversión | 30 días | Default, está bien |
| Incluir en "Conversiones" | **Sí** | Esto la vuelve conversión principal, la que usa la puja |
| Atribución | Dejar el default | — |

**Al terminar:** aparece la opción de configurar la etiqueta. Elegir
**"Instalar la etiqueta manualmente"** y copiar los dos datos que muestra:

```
ID de conversión:  AW-XXXXXXXXXX
Etiqueta:          xxxxxxxxxxxxxxxxxx
```

**Pásame esos dos valores** y yo los implemento en el código del sitio. El sitio
ya dispara el evento a GA4; falta agregarle el disparo directo a Ads, que
reporta más rápido y hace que las estrategias inteligentes aprendan antes.

---

## PARTE B · Crear la campaña

**Ruta:** Crear (+) → Campaña

### B1 · Objetivo

> **Elegir "Crear una campaña sin objetivo específico"** ⚠️

Es el paso donde más gente se equivoca. Si eliges un objetivo guiado, Google
esconde ajustes y activa cosas por defecto que después hay que ir a desactivar.

| Campo | Valor |
|---|---|
| Tipo de campaña | **Búsqueda** |
| Nombre | `Búsqueda · Parabrisas · Santiago` |

Si pregunta "¿cómo quieres lograr tu objetivo?", omitir o marcar visitas al
sitio web con `https://vidriosjl.cl/`.

### B2 · Ofertas (pujas)

| Campo | Valor | Por qué |
|---|---|---|
| Enfoque | **Clics** | Sin historial de conversiones, las estrategias inteligentes no tienen con qué optimizar |
| Estrategia | Maximizar clics | — |
| Límite máximo de CPC | Marcar la casilla | Sin tope, Google puede pagar mucho por clic mientras "explora" |

El monto del tope sale de la cuenta de la sección 8 del plan. Si todavía no
tenemos ticket y tasa de cierre, poner un tope conservador y ajustarlo cuando
lleguen los datos reales.

Cuando la cuenta acumule 15–30 conversiones, se cambia a **Maximizar
conversiones**. Antes de eso, no.

### B3 · Redes ⚠️ el paso que más plata salva

| Casilla | Estado |
|---|---|
| Red de Búsqueda — Socios de búsqueda | **DESMARCAR** |
| **Red de Display** | **DESMARCAR** |

Las dos vienen **marcadas por defecto**. Display es una fuga enorme: publica
banners en apps y sitios random que no tienen nada que ver con alguien buscando
un parabrisas.

### B4 · Ubicación

1. Elegir **"Ingresar otra ubicación"**
2. Buscar `Independencia, Región Metropolitana`
3. Elegir la opción de **radio** y poner **25 km**

Luego, y esto es fácil de pasar por alto:

> Abrir **Opciones de ubicación** (viene colapsado) y marcar
> **"Presencia: personas que se encuentran en tus ubicaciones incluidas"**

Por defecto viene **"Presencia o interés"**, que muestra los anuncios a gente en
cualquier parte del mundo que busque cosas sobre Santiago. Se paga por clics de
personas que nunca van a ser clientes.

### B5 · Idioma, presupuesto y horario

| Campo | Valor |
|---|---|
| Idioma | Español |
| Presupuesto diario | **CLP 11.600** (≈ $350.000/mes) |
| Programación | **Los 7 días, 8:00 a 22:00** |

Sobre el horario: como pueden responder WhatsApp cualquier día, los anuncios
corren los 7 días. Arrancamos 8:00–22:00 en vez de 24/7 porque de madrugada el
clic suele rendir poco; se revisa el informe por hora a las 2–3 semanas y se
ajusta con datos.

⚠️ Google muestra el presupuesto como **promedio diario**: puede gastar hasta el
doble un día puntual y compensar en otros. El tope real es mensual, no diario.
No asustarse al ver un día con el doble.

### B6 · Desactivar el piloto automático

Antes de terminar, ir a **Configuración de la campaña** y desactivar
**"Aplicar automáticamente las recomendaciones"**. Si queda activo, Google
enciende concordancia amplia y PMax por su cuenta, sin avisar.

---

## PARTE C · Grupos de anuncios

Cinco grupos. Las keywords completas están en la sección 4 del
[plan](GOOGLE-ADS-PLAN.md); acá va el resumen de qué crear:

| Grupo | Intención |
|---|---|
| `G1 · Parabrisas genérico` | Sabe que necesita cambiarlo |
| `G2 · A domicilio` | Busca el diferenciador — **el de mayor valor** |
| `G3 · Urgencia / daño` | Se le acaba de romper |
| `G4 · Otros vidrios` | Luneta, lateral, puerta, aleta |
| `G5 · Camiones y buses` | **Nuevo** — ticket más alto, menos competencia |

**Al pegar las keywords, respetar los símbolos:**
- `"entre comillas"` = concordancia de frase
- `[entre corchetes]` = concordancia exacta
- Sin símbolos = **concordancia amplia** ⚠️ que es justo la que NO queremos

Si pegas la lista sin comillas, Google las toma todas como amplia y el
presupuesto se va en búsquedas irrelevantes.

### Keywords del grupo nuevo (G5 · Camiones)
```
"parabrisas de camion"
"parabrisas camion"
"vidrios para camiones"
"parabrisas de bus"
"parabrisas maquinaria"
"cambio de parabrisas camion"
[parabrisas de camion]
```

---

## PARTE D · Negativas — antes de encender

**Ruta:** Públicos, palabras clave y contenido → Palabras clave → Negativas

La lista completa está en la sección 5 del plan. Dos cambios respecto de esa
versión, según lo que me confirmaste:

- **NO bloquear** camión, bus, maquinaria → sí atienden esos vehículos
- **SÍ bloquear** polarizado y láminas → no lo ofrecen

Sobre reparación de trizaduras: **no bloquear la palabra "reparar" completa.** En
Chile mucha gente dice "reparar el parabrisas" queriendo decir "cambiarlo".
Bloquear solo lo inequívoco: `resina`, `reparar trizadura`, `sin cambiar el vidrio`.

La fuga más grande de todas es el vidrio de casa: `ventana`, `termopanel`,
`espejo`, `ducha`, `mampara`. Y `limpiaparabrisas`, `plumillas`, `escobillas`,
que tienen muchísimo volumen y cero intención de compra.

---

## PARTE E · Anuncios

Un anuncio adaptable por grupo. Los 15 títulos y 4 descripciones están en la
sección 6 del plan, ya dentro de los límites de caracteres.

**Fijar en la posición 1** solo el título que calce con el grupo (G1 → "Cambio
de Parabrisas", G2 → "Parabrisas a Domicilio", etc.). El resto se deja rotar:
fijar todos los títulos apaga el aprendizaje de Google.

**Extensiones** (sección 7 del plan): sitelinks a `/#cotizar`, `/#servicios`,
`/#antes-despues` y `/#faq`; textos destacados; fragmento de servicios; y el
recurso de llamada con `+56 9 5670 9205`.

---

## Antes de encender — checklist

- [ ] Conversión creada, recuento en **"Uno"**, incluida en Conversiones
- [ ] Display **desmarcado**
- [ ] Socios de búsqueda **desmarcados**
- [ ] Ubicación en **"Presencia"**, no "Presencia o interés"
- [ ] Recomendaciones automáticas **desactivadas**
- [ ] Keywords con sus comillas y corchetes
- [ ] Negativas cargadas
- [ ] Presupuesto diario correcto
- [ ] Deuda de CLP 424 pagada y tarjeta vigente

Cuando lo tengas armado, **mándame capturas o dime en qué pantalla estás** y lo
reviso antes de que le des a encender.
