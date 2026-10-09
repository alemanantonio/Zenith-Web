# Zenith · Estilo visual e identidad

Guía de la landing de Zenith: un equipo de desarrollo full stack que construye software para que los clientes no tengan que tocar código, y que ofrece open source a quien sí sabe programar. Sirve como referencia para mantener la misma identidad en cualquier pieza nueva.

## 1. Idea central

Zenith es calma, claridad y algo hecho a tu medida. La página se siente como un producto de Apple: mucho espacio, poca decoración, tipografía delgada y movimiento suave que aparece solo cuando ayuda. El morado da la personalidad; todo lo demás se mantiene quieto.

Principios:

- **Menos elementos, más aire.** Si algo no comunica, se quita.
- **El movimiento tiene un momento principal.** El logo que se forma en el hero. El resto del movimiento es discreto y siempre explica algo (qué hace cada especialidad, adónde lleva un enlace).
- **Nada inventado.** No hay precios, cifras ni funciones que no existan. Lo que no está definido se dice tal cual ("Todavía no tenemos precios definidos").
- **Los ejemplos se muestran sin datos.** Las ilustraciones usan formas y colores, nunca texto, números ni nombres falsos, y se rotulan como "Ejemplo ilustrativo".

## 2. Mapa de la página

**Home**

1. Menú translúcido con logo y cuatro enlaces (Qué hacemos, Principios, Preguntas, Contacto) y una línea fina que marca el avance del scroll.
2. Hero a pantalla completa: logo girando, ZENITH y el lema "Software full stack, sin que tengas que tocar código."
3. Frase de presentación que se ilumina palabra por palabra.
4. **Lo que construimos:** cuatro tarjetas con un ejemplo ilustrativo animado cada una. Cada tarjeta es un enlace a la página de su especialidad.
5. **Para quien programa y para quien no:** tres principios (full stack, código abierto, sin tocar código).
6. **Preguntas frecuentes:** cinco preguntas en acordeón.
7. Cierre con "Hablemos de tu proyecto.", el botón Contáctanos (abre el correo `zenith@antonioaleman.dev`) y el correo visible debajo.
8. Pie con el logo, © 2026 Zenith y el enlace a Privacidad y aviso legal.

**Páginas de especialidad** (páginas web, dashboards personales, sistemas de inventarios, SaaS)

1. Menú con botón **Inicio** (flecha a la izquierda) para volver al home, y el logo a la derecha, que también lleva al inicio.
2. Hero con el logo girando, la etiqueta "Especialidad", el nombre de la especialidad y su lema.
3. Frase de presentación específica.
4. La ilustración en grande, dentro de un panel redondeado.
5. **Lo esencial:** tres puntos propios de esa especialidad.
6. **Otras especialidades:** enlaces a las otras tres.
7. Cierre "Hablemos de tu…" con el botón Contáctanos (abre el correo) y el correo visible.
8. Pie con el logo, © 2026 Zenith y el enlace a Privacidad y aviso legal.

## 3. Logo

Es un círculo dividido en cuatro pétalos en forma de remolino. Se dibuja en código (SVG), no como imagen, así que es nítido a cualquier tamaño.

Geometría (viewBox de 200 × 200):

- Cada pétalo es un **disco de radio 60** (centro en 60, 60) al que se le **recorta un arco de radio 77** (centro en 60, 140).
- Los otros tres pétalos son el mismo, girado 90°, 180° y 270° alrededor del punto (100, 100).
- Una línea del mismo color de 1.2 de grosor con unión redondeada suaviza apenas las puntas.

Uso:

- Va en un solo color (`currentColor`): blanco hueso sobre morado, morado `#8b56a5` sobre fondo claro.
- El wordmark es el texto **ZENITH** en mayúsculas, peso 200, con mucho espaciado entre letras (`0.22em` en el hero, `0.28em` en el menú).
- Deja alrededor del icono un espacio libre de al menos medio ancho del icono.
- No lo estires, no le pongas sombras de color ni lo uses con un contraste bajo.

## 4. Color

| Nombre | Hex | Uso |
|---|---|---|
| Morado medio | `#a276b8` | Color principal, líneas de acento, degradados |
| Morado profundo | `#8b56a5` | Texto de acento, iconos, inicio del degradado |
| Lila | `#b998c9` | Final del degradado, detalles secundarios |
| Lavanda | `#e2d1ea` | Líneas divisorias, bordes, elementos tenues |
| Hueso | `#f8f4fa` | Fondo de la página, logo y botones sobre morado |
| Blanco | `#ffffff` | Tarjetas, texto sobre morado |

Complementos: tinta `#2e2237` para el texto principal y `#7d6b88` para el texto secundario.

Degradado de marca: `135deg`, de `#8b56a5` a `#a276b8` y a `#b998c9`. Se usa en el hero (home y especialidades), en el cierre y en el círculo de transición entre páginas.

**Modo oscuro:** el fondo pasa a `#1c1423`, las tarjetas a `#251a2d`, las líneas a `#35273f` y el texto a `#f8f4fa`. Los morados de marca se mantienen. Los fondos de las ilustraciones se mezclan con el color de la tarjeta para funcionar en ambos modos.

## 5. Tipografía

Una sola familia: **Jost** (Google Fonts), geométrica y limpia, como el wordmark. Fallback: tipografía del sistema.

- **Titulares:** peso 200, tracking ligeramente negativo (`-0.02em`), interlineado 1.1.
- **Texto corriente:** peso 300, interlineado 1.5 a 1.6, líneas de menos de 60 caracteres.
- **Botones y énfasis:** peso 400.
- **Escala:** fluida con `clamp()`; títulos de 32 a 56 px, frase de presentación de 28 a 58 px, hero del home hasta 92 px y nombre de especialidad hasta 84 px.
- Se escribe en español, con mayúscula solo al inicio de la frase. Las mayúsculas se reservan para el wordmark y la etiqueta "Especialidad".

## 6. Formas y espacio

- Esquinas muy redondeadas: tarjetas de ejemplos `28px`, panel de ilustración grande `36px`, enlaces a otras especialidades `22px`, ilustraciones `16px`, botones en forma de píldora (`999px`).
- Líneas finas de 1 px en lavanda para separar, nunca sombras fuertes.
- Sombras largas y suaves teñidas de morado, solo al pasar el cursor y bajo las ilustraciones.
- Márgenes verticales grandes entre secciones (de 100 a 240 px) y contenido centrado en un ancho máximo de 1080 px.

## 7. Movimiento

Curva base de todo: `cubic-bezier(.16, 1, .3, 1)` (sale rápido y frena con suavidad). Duraciones de 0.6 a 1.4 s.

| Elemento | Animación |
|---|---|
| Hero del home | Los cuatro pétalos giran y crecen uno tras otro; después el icono gira muy lento. Las letras de ZENITH entran con desenfoque. Ondas suaves y un brillo siguen al cursor. |
| Hero de especialidad | El logo pequeño gira, la etiqueta aparece y el nombre entra palabra por palabra con desenfoque. |
| Menú | Aparece al terminar la intro; una línea fina marca el avance del scroll. En las especialidades baja desde arriba al entrar. |
| Frase de presentación | Cada palabra se ilumina al hacer scroll. |
| Títulos | Suben desde una máscara. |
| Principios | Una línea morada se dibuja sobre cada columna. |
| Ilustración: páginas web | Las líneas de título se dibujan, aparece un botón y un cursor llega hasta él. |
| Ilustración: dashboards | Se dibuja la línea del gráfico, se llena el anillo y crecen las barras; después un destello de luz recorre el panel en bucle. |
| Ilustración: inventarios | Se llenan las barras de nivel, una fila de nivel bajo parpadea y un barrido de luz recorre la lista. |
| Ilustración: SaaS | Aparecen usuarios, un interruptor se enciende y se apaga, y las barras en escalera laten suavemente en bucle. |
| Ilustración grande | En las especialidades se endereza y crece al entrar en pantalla. |
| Tarjetas de ejemplos | Se inclinan siguiendo el cursor, muestran un brillo y la flecha gira al pasar encima. |
| Otras especialidades | Se elevan al pasar el cursor y la flecha avanza. |
| Cambio de página | Un círculo morado con el logo se expande desde el punto donde se hizo clic, la página cambia por debajo y el círculo se desvanece. |
| Botón Contáctanos | Se acerca ligeramente al cursor y pasa un destello. |
| Preguntas frecuentes | El panel se despliega suave y el signo "+" gira. |

Con `prefers-reduced-motion` todo aparece directamente en su estado final, sin animar, y el cambio de página es inmediato.

## 8. Componentes

- **Botón de contacto:** píldora color hueso con texto morado, sobre el degradado. Es magnético y tiene un destello.
- **Botón Inicio:** píldora transparente con borde lavanda y flecha a la izquierda; al pasar el cursor el borde pasa a morado y la flecha retrocede.
- **Tarjeta de ejemplo:** arriba una ilustración animada (sin texto ni datos) sobre un fondo lila muy suave; abajo, el nombre de la especialidad, una línea de descripción y un botón circular con flecha. Toda la tarjeta es un enlace a la página de esa especialidad.
- **Enlace a otra especialidad:** tarjeta pequeña con el nombre y una flecha.
- **Pregunta frecuente:** filas separadas por líneas, sin cajas.

## 9. Voz y contenido

- Directa y tranquila: frases cortas, verbos simples, sin exagerar.
- Habla de lo que Zenith es y hace; no promete resultados.
- Todo lo escrito sale de lo definido: equipo full stack; los clientes no tocan código; open source para quien programa; ejemplos de trabajo (páginas web, dashboards personales, sistemas de inventarios, SaaS); precios aún sin definir.
- Los textos de cada especialidad son descripciones generales. No incluyen cifras, tiempos ni funciones concretas.

## 10. Accesibilidad

- Foco visible en morado en todos los elementos interactivos.
- Contraste de texto alto: tinta sobre hueso y blanco sobre morado profundo.
- Las preguntas frecuentes usan botones con `aria-expanded`; las tarjetas de ejemplos llevan `aria-label` con el nombre de la especialidad.
- El título de la pestaña cambia en cada especialidad ("Páginas web · Zenith").
- Respeta el modo oscuro y el movimiento reducido del sistema.
- Diseño adaptable: en móvil las columnas pasan a una sola, el menú del home oculta sus enlaces y las ilustraciones grandes reducen su escala.

## 11. Estado y pendientes

Hecho:

- Botón Contáctanos con destino real: `mailto:zenith@antonioaleman.dev` en el home y en cada especialidad; el correo también se muestra visible en el cierre.
- Favicon en el `<head>`, meta description, Open Graph, `theme-color`, URL canónica y `og:url` con el dominio `https://zenith.antonioaleman.dev`.
- Cada especialidad es una página real e indexable: `/paginas-web`, `/dashboards`, `/inventarios`, `/saas`, con título y descripción propios; incluidas en `sitemap-index.xml` y `robots.txt`.
- La navegación entre el home y las especialidades conserva el círculo morado con el logo (velo) entre páginas reales.
- Página de privacidad y aviso legal enlazada desde el pie (`/privacidad`).
- Página 404.
- Tipografía alojada en el propio sitio con `@fontsource-variable/jost` (sin peticiones a Google Fonts).
- Imagen de Open Graph (`/og.png`, 1200×630): logo hueso sobre el degradado de marca, generada con `npm run og`.

Pendiente:

- Revisar y validar los textos de cada especialidad.
- Precios, cuando se definan.
- Decisión de navegación en móvil (hoy los enlaces del menú se ocultan sin hamburguesa).
