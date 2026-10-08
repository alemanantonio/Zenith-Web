# Zenith · Estilo visual e identidad

Guía de la landing de Zenith: dashboards personales personalizados. Sirve como referencia para mantener la misma identidad en cualquier pieza nueva.

## 1. Idea central

Zenith es calma, claridad y algo hecho a tu medida. La página se siente como un producto de Apple: mucho espacio, poca decoración, tipografía delgada y movimiento suave que aparece solo cuando ayuda. El morado da la personalidad; todo lo demás se mantiene quieto.

Principios:

- **Menos elementos, más aire.** Si algo no comunica, se quita.
- **El movimiento tiene un momento principal.** El logo que se forma en el hero. El resto del movimiento es discreto.
- **Nada inventado.** No hay precios, cifras ni funciones que no existan. Lo que no está definido se dice tal cual ("Precio por definir").

## 2. Logo

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

## 3. Color

| Nombre | Hex | Uso |
|---|---|---|
| Morado medio | `#a276b8` | Color principal, líneas de acento, degradados |
| Morado profundo | `#8b56a5` | Botones principales, texto de acento, inicio del degradado |
| Lila | `#b998c9` | Final del degradado, detalles secundarios |
| Lavanda | `#e2d1ea` | Líneas divisorias, bordes, elementos tenues |
| Hueso | `#f8f4fa` | Fondo de la página, logo sobre morado |
| Blanco | `#ffffff` | Tarjetas, texto sobre morado |

Complementos: tinta `#2e2237` para el texto principal y `#7d6b88` para el texto secundario.

Degradado de marca: `135deg`, de `#8b56a5` a `#a276b8` y a `#b998c9`. Se usa en el hero, en el plan de paga y en el cierre.

**Modo oscuro:** el fondo pasa a `#1c1423`, las tarjetas a `#251a2d`, las líneas a `#35273f` y el texto a `#f8f4fa`. Los morados de marca se mantienen.

## 4. Tipografía

Una sola familia: **Jost** (Google Fonts), geométrica y limpia, como el wordmark. Fallback: tipografía del sistema.

- **Titulares:** peso 200, tracking ligeramente negativo (`-0.02em`), interlineado 1.1.
- **Texto corriente:** peso 300, interlineado 1.5 a 1.6, líneas de menos de 60 caracteres.
- **Botones y énfasis:** peso 400.
- **Escala:** fluida con `clamp()`; títulos de 32 a 56 px, frase de presentación de 28 a 58 px, hero hasta 92 px.
- Se escribe en español, con mayúscula solo al inicio de la frase. Las mayúsculas se reservan para el wordmark.

## 5. Formas y espacio

- Esquinas muy redondeadas: tarjetas de planes `28px`, panel de dashboard `30px`, widgets `20px`, botones en forma de píldora (`999px`).
- Líneas finas de 1 px en lavanda para separar, nunca sombras fuertes.
- Sombras largas y suaves teñidas de morado, solo al pasar el cursor o en el panel ilustrativo.
- Márgenes verticales grandes entre secciones (de 100 a 240 px) y contenido centrado en un ancho máximo de 1080 px.

## 6. Movimiento

Curva base de todo: `cubic-bezier(.16, 1, .3, 1)` (sale rápido y frena con suavidad). Duraciones de 0.6 a 1.4 s.

| Elemento | Animación |
|---|---|
| Hero | Los cuatro pétalos giran y crecen uno tras otro; después el icono gira muy lento. Las letras de ZENITH entran con desenfoque. Ondas suaves y un brillo siguen al cursor. |
| Menú | Aparece al terminar la intro; una línea fina marca el avance del scroll. |
| Frase de presentación | Cada palabra se ilumina al hacer scroll. |
| Títulos | Suben desde una máscara. |
| Dashboard ilustrativo | Se endereza al entrar; la línea se dibuja, el anillo se llena, las barras crecen y un destello lo cruza. |
| Principios | Una línea morada se dibuja sobre cada columna. |
| Tarjetas de planes | Se inclinan siguiendo el cursor y muestran un brillo. Las palomitas se dibujan una a una. |
| Botones | Se elevan y pasa un destello; el de contacto se acerca al cursor. |
| Preguntas frecuentes | El panel se despliega suave y el signo "+" gira. |

Con `prefers-reduced-motion` todo aparece directamente en su estado final, sin animar.

## 7. Componentes

- **Botón principal:** fondo morado profundo, texto blanco, píldora. Sobre el plan de paga se invierte (fondo hueso, texto morado).
- **Botón secundario:** transparente, borde lavanda, texto de tinta. Al pasar el cursor el borde pasa a morado.
- **Botón con icono:** icono de 17 px a la izquierda del texto (descarga para "Instalar", marca de GitHub para "GitHub").
- **Tarjeta de plan:** el gratuito es claro con borde lavanda; el de paga usa el degradado de marca para distinguirse.
- **Pregunta frecuente:** filas separadas por líneas, sin cajas.

## 8. Voz y contenido

- Directa y tranquila: frases cortas, verbos simples, sin exagerar.
- Habla de lo que el producto es y hace; no promete resultados.
- Todo lo escrito sale de lo definido: dashboards personales; plan gratuito self-hosted y open source con funciones básicas; plan de paga alojado por Zenith con personalización sin tocar código a cargo del equipo; precio aún sin definir.
- Los visuales ilustrativos lo indican ("Vista ilustrativa").

## 9. Accesibilidad

- Foco visible en morado en todos los elementos interactivos.
- Contraste de texto alto: tinta sobre hueso y blanco sobre morado profundo.
- Las preguntas frecuentes usan botones con `aria-expanded`.
- Respeta el modo oscuro y el movimiento reducido del sistema.
- Diseño adaptable: en móvil las columnas pasan a una sola y el menú oculta sus enlaces.

## 10. Pendientes

- Enlaces reales de los botones (Instalar, GitHub, Solicitar plan y Contáctanos).
- Datos de contacto.
- Precio del plan de paga.
