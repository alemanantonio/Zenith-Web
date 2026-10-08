# Zenith · Migración de la landing a Astro

Guía para convertir `zenith-v2.html` (un solo archivo con HTML, CSS y JS) en un proyecto Astro ordenado en componentes. Cubre el scaffolding, las dependencias y los puntos donde suele fallar el paso.

> Los comandos y nombres de paquetes están escritos de memoria. Antes de empezar, confirma la versión de Node que pide la versión vigente de Astro y las opciones del asistente en <https://docs.astro.build>.

## 1. Por qué Astro encaja

- La página es contenido estático con animaciones en CSS y poco JavaScript. Astro genera HTML y **no envía JS al navegador salvo el que tú escribas**.
- Los componentes `.astro` separan cada sección sin añadir un framework.
- El resultado es estático y se puede publicar en cualquier hosting de archivos.

## 2. Requisitos

- **Node.js** en la versión que pida la versión actual de Astro (mira la sección de instalación de la documentación).
- Un gestor de paquetes: npm, pnpm o yarn. Los ejemplos usan npm.

## 3. Crear el proyecto

```bash
npm create astro@latest zenith
```

El asistente pregunta por la plantilla. Elige **minimal** (proyecto vacío). Acepta instalar dependencias, inicializar git y usa TypeScript en modo estricto si te lo ofrece.

Comandos del día a día:

```bash
npm run dev       # servidor de desarrollo
npm run build     # genera la carpeta dist/ (sitio estático)
npm run preview   # sirve dist/ para revisarlo antes de publicar
```

## 4. Dependencias

La página necesita muy poco.

| Paquete | ¿Obligatorio? | Para qué |
|---|---|---|
| `astro` | Sí | El framework. Lo instala el asistente. |
| `@fontsource-variable/jost` | Recomendado | Aloja la tipografía Jost en tu propio sitio, en lugar de cargarla desde Google Fonts. Sin petición externa y más rápido. |
| `@astrojs/sitemap` | Opcional | Genera `sitemap.xml`. Requiere definir `site` en la configuración. |
| `@astrojs/check` y `typescript` | Opcional (dev) | Revisa tipos con `astro check`. |

Instalación de las opcionales:

```bash
npm install @fontsource-variable/jost
npm install @astrojs/sitemap
npm install -D @astrojs/check typescript
```

**No hacen falta:** Tailwind, React, GSAP ni Framer Motion. Todas las animaciones son CSS y un poco de JavaScript propio (unas 80 líneas en total).

Si prefieres seguir con Google Fonts, copia las tres líneas `<link>` del HTML original al `<head>` del layout y omite Fontsource.

## 5. Estructura de carpetas

```
zenith/
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ public/
│  └─ favicon.svg                 # el logo en SVG, una sola tinta
└─ src/
   ├─ data/
   │  └─ site.ts                  # textos, enlaces y planes en un solo lugar
   ├─ layouts/
   │  └─ Base.astro               # <html>, <head>, sprite del logo, estilos globales
   ├─ pages/
   │  └─ index.astro              # ensambla las secciones
   ├─ components/
   │  ├─ Nav.astro
   │  ├─ Logo.astro               # icono (estático o animado)
   │  ├─ Hero.astro
   │  ├─ Statement.astro          # frase que se ilumina con el scroll
   │  ├─ DashboardMock.astro      # panel ilustrativo
   │  ├─ Principles.astro
   │  ├─ Plans.astro
   │  ├─ PlanCard.astro
   │  ├─ Faq.astro
   │  ├─ Cta.astro
   │  └─ Footer.astro
   ├─ scripts/
   │  ├─ reveal.ts                # IntersectionObserver de .rv, .lm, .pr, .plan
   │  ├─ scroll.ts                # barra de progreso, parallax del logo, frase, dashboard
   │  ├─ pointer.ts               # brillo del hero, inclinación de tarjetas, botón magnético
   │  └─ faq.ts                   # acordeón
   └─ styles/
      ├─ tokens.css               # variables de color, tipografía y modo oscuro
      ├─ base.css                 # reset, body, enlaces, foco
      └─ motion.css               # .rv, .lm y reglas de prefers-reduced-motion
```

## 6. De dónde sale cada parte del HTML

| En `zenith-v2.html` | Va a |
|---|---|
| `:root{...}` con variables y el bloque `prefers-color-scheme: dark` | `styles/tokens.css` |
| Reset, `body`, `a`, `:focus-visible` | `styles/base.css` |
| `.rv`, `.lm`, reglas de `prefers-reduced-motion` | `styles/motion.css` |
| `<svg><symbol id="zl">` y el gradiente `#ag` | `layouts/Base.astro` (una sola vez) |
| `<nav>` | `components/Nav.astro` |
| `<header class="hero">` | `components/Hero.astro` y `Logo.astro` |
| `.statement` | `components/Statement.astro` |
| `.showcase` y `.dboard` | `components/DashboardMock.astro` |
| `.principles` | `components/Principles.astro` |
| `.planes`, `.plan`, `.pi`, `.pb` | `components/Plans.astro` y `PlanCard.astro` |
| `.faq` y `.qa` | `components/Faq.astro` |
| `.cta` | `components/Cta.astro` |
| `<footer>` | `components/Footer.astro` |
| El `<script>` único (IIFE) | Se divide en `scripts/*.ts` |

El CSS específico de cada sección (por ejemplo `.dboard`, `.pi`, `.qa`) se mueve al bloque `<style>` de su componente.

## 7. Archivos clave

### `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // opcional

export default defineConfig({
  site: 'https://tu-dominio.com', // necesario para sitemap y URLs canónicas
  integrations: [sitemap()],
});
```

### `src/layouts/Base.astro`

```astro
---
import '@fontsource-variable/jost';
import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/motion.css';

const { title = 'Zenith', description } = Astro.props;
---
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <!-- Sprite del logo y gradiente del dashboard: una sola vez por página -->
    <svg width="0" height="0" style="position:absolute" aria-hidden="true">
      <defs>
        <symbol id="zl" viewBox="-1 -1 202 202">
          <g fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round">
            <path d="M5.6 85.4A60 60 0 1 1 114.4 85.4A77 77 0 0 0 5.6 85.4Z" />
            <path d="M5.6 85.4A60 60 0 1 1 114.4 85.4A77 77 0 0 0 5.6 85.4Z" transform="rotate(90 100 100)" />
            <path d="M5.6 85.4A60 60 0 1 1 114.4 85.4A77 77 0 0 0 5.6 85.4Z" transform="rotate(180 100 100)" />
            <path d="M5.6 85.4A60 60 0 1 1 114.4 85.4A77 77 0 0 0 5.6 85.4Z" transform="rotate(270 100 100)" />
          </g>
        </symbol>
        <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#a276b8" stop-opacity=".35" />
          <stop offset="1" stop-color="#a276b8" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <slot />
  </body>
</html>
```

En `tokens.css` la variable de fuente pasa a ser `--font: 'Jost Variable', ui-sans-serif, system-ui, sans-serif;` porque Fontsource registra la fuente variable con ese nombre.

### `src/data/site.ts`

Centraliza lo que vas a cambiar sin tocar componentes: enlaces, textos y precio.

```ts
export const site = {
  name: 'Zenith',
  tagline: 'Dashboards personales, hechos a tu medida.',
  links: {
    install: '#planes',   // reemplazar por la URL real
    github: '#planes',    // URL del repositorio
    request: '#planes',   // formulario o correo
    contact: '#contacto', // correo, WhatsApp, etc.
  },
  plans: {
    free: { kind: 'Self-hosted · Open source', name: 'Gratis', price: 'Sin costo' },
    paid: { kind: 'Alojado por Zenith', name: 'De paga', price: 'Precio por definir' },
  },
};
```

### `src/components/Logo.astro`

El logo animado del hero lleva la clase `petal` y la variable `--i` para escalonar la entrada. Se recibe una propiedad para elegir la versión estática (usa el sprite) o la animada.

```astro
---
const { animated = false, class: cls = '' } = Astro.props;
const d = 'M5.6 85.4A60 60 0 1 1 114.4 85.4A77 77 0 0 0 5.6 85.4Z';
const rots = [0, 90, 180, 270];
---
{animated ? (
  <svg class={`mark ${cls}`} viewBox="-1 -1 202 202" role="img" aria-label="Zenith">
    <g fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round">
      {rots.map((r, i) => (
        <g transform={`rotate(${r} 100 100)`}><path class="petal" style={`--i:${i}`} d={d} /></g>
      ))}
    </g>
  </svg>
) : (
  <svg class={cls} aria-hidden="true"><use href="#zl" /></svg>
)}
```

### `src/components/PlanCard.astro`

Un componente con *slots* para los botones evita duplicar el marcado de las dos tarjetas.

```astro
---
const { kind, name, price, paid = false } = Astro.props;
---
<article class:list={['plan', 'rv', { paid }]}>
  <div class="pi">
    <div>
      <span class="kind">{kind}</span>
      <h3>{name}</h3>
      <slot />
    </div>
    <div class="foot">
      <span class="price">{price}</span>
      <div class="pbtns"><slot name="actions" /></div>
    </div>
  </div>
</article>
```

### `src/pages/index.astro`

```astro
---
import Base from '../layouts/Base.astro';
import Nav from '../components/Nav.astro';
import Hero from '../components/Hero.astro';
import Statement from '../components/Statement.astro';
import DashboardMock from '../components/DashboardMock.astro';
import Principles from '../components/Principles.astro';
import Plans from '../components/Plans.astro';
import Faq from '../components/Faq.astro';
import Cta from '../components/Cta.astro';
import Footer from '../components/Footer.astro';
---
<Base title="Zenith" description="Escribe aquí tu descripción para buscadores.">
  <Nav />
  <Hero />
  <Statement />
  <DashboardMock />
  <Principles />
  <Plans />
  <Faq />
  <Cta />
  <Footer />
</Base>
```

## 8. Scripts

En Astro, un `<script>` dentro de un componente se procesa, se empaqueta y se carga una sola vez aunque el componente aparezca varias veces. También puede importar módulos:

```astro
<script>
  import '../scripts/reveal';
  import '../scripts/scroll';
  import '../scripts/pointer';
  import '../scripts/faq';
</script>
```

Ponlo en `Base.astro` o en `index.astro`, una sola vez. Cada archivo toma el contenido del IIFE original que le corresponde:

- `reveal.ts`: el `IntersectionObserver` que añade `.in` a `.rv`, `.lm`, `.pr` y `.plan`.
- `scroll.ts`: barra de progreso, parallax del logo, frase que se ilumina y la variable `--t` del dashboard.
- `pointer.ts`: brillo del hero, inclinación de las tarjetas y botón magnético. Sale si `prefers-reduced-motion` está activo.
- `faq.ts`: abre y cierra las preguntas y actualiza `aria-expanded`.

En cada módulo busca los elementos y sal si no existen (`if (!el) return;`), para que un cambio en la página no rompa el resto.

## 9. Puntos donde suele fallar

1. **Estilos con alcance (scoped).** Astro limita por defecto el CSS de un componente a sus propios elementos. Los nodos que crea JavaScript no reciben ese alcance. En la versión HTML, la frase se divide en `<span class="w">` con JS: esos estilos no se aplicarían. Dos soluciones:
   - Mejor: divide las palabras en el *frontmatter* de `Statement.astro` (`text.split(' ').map(...)`) y deja que Astro las renderice. Así el CSS queda con alcance y el HTML ya viene completo.
   - Alternativa: escribir esos selectores con `:global(.w)`.
2. **Clases utilitarias compartidas** (`.rv`, `.lm`, `.in`): déjalas en `motion.css` (global), no dentro de un componente.
3. **IDs duplicados.** El sprite `#zl` y el gradiente `#ag` van una sola vez, en `Base.astro`. No los repitas dentro de componentes.
4. **`:root` con `padding-top: env(safe-area-inset-top)`.** Era necesario para el visor donde se publicó el prototipo. En un sitio normal solo importa en móviles con muesca y `viewport-fit=cover`. Puedes quitarlo y dejar el relleno solo en el `nav`.
5. **Enlaces temporales.** Los botones apuntan a `#planes`. Cambia los valores en `src/data/site.ts` cuando existan las URLs reales.
6. **Modo oscuro.** Las variables ya cubren `prefers-color-scheme`. Si algún componente usa colores fijos (por ejemplo, el fondo de los widgets del dashboard en modo oscuro), muévelos a variables.
7. **Fuente.** Con Fontsource el nombre de la familia cambia a `'Jost Variable'`; si dejas `'Jost'`, el navegador usará la tipografía de reserva.

## 10. Orden recomendado de trabajo

1. Crear el proyecto y verificar que `npm run dev` abre la página vacía.
2. Copiar los estilos a `styles/` y crear `Base.astro` con el sprite del logo.
3. Migrar secciones de arriba abajo: `Nav`, `Hero` (con `Logo`), `Statement`, etc. Revisa el navegador después de cada una.
4. Mover los scripts a `scripts/` y comprobar cada animación.
5. Extraer los textos y enlaces a `data/site.ts`.
6. Agregar `<title>` y descripción definitivos, favicon y, si quieres, sitemap.
7. `npm run build` y `npm run preview`; compara con el HTML original en escritorio, móvil, modo oscuro y con movimiento reducido activado.

## 11. Publicación

`npm run build` crea `dist/` con archivos estáticos. Sirve en cualquier hosting estático. Antes de publicar, define `site` en `astro.config.mjs` con tu dominio real. Si la publicas en una subcarpeta (por ejemplo, GitHub Pages en un repositorio), también necesitas `base`.
