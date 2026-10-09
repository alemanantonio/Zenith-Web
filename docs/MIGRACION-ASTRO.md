# Zenith · Estructura del proyecto

Notas sobre cómo está construido el sitio de Zenith hoy. Nació como un archivo HTML único; hoy es un proyecto Astro estático con una página real por especialidad y componentes compartidos.

## 1. Cómo funciona

- **Astro estático.** `npm run build` genera `dist/` con archivos que se pueden servir en cualquier hosting de archivos. No hay servidor ni framework de UI.
- **Una página por especialidad.** El home (`index.astro`) y cada especialidad (`[slug].astro` → `/paginas-web`, `/dashboards`, `/inventarios`, `/saas`) son páginas Astro reales, con título, descripción y URL canónica propios. Los textos y datos viven en `src/data/specialties.ts`.
- **Navegación fluida.** Al navegar entre páginas, un velo morado con el logo se expande desde el punto del clic, cubre la carga y se desvanece en la página nueva (mismo efecto de antes, ahora entre documentos). Se desactiva con `prefers-reduced-motion`.
- **Componentes compartidos.** `Base.astro` (head, estilos, script), `Nav`, `Footer`, `Veil`, `Cta` e `Illustration` se reutilizan en todas las páginas.
- **Páginas aparte.** `404.astro` (noindex) y `privacidad.astro` (aviso legal y política de privacidad) conservan estilos propios mínimos.
- **Tipografía propia.** Jost se sirve desde el propio sitio con `@fontsource-variable/jost`; no hay peticiones a Google Fonts.
- **SEO.** `site` apunta a `https://zenith.antonioaleman.dev`; hay sitemap (`@astrojs/sitemap`), `robots.txt`, canónicas y Open Graph por página.

## 2. Comandos

```bash
npm run dev       # servidor de desarrollo
npm run build     # genera dist/
npm run preview   # sirve dist/
npm run check     # revisión de tipos Astro
```

## 3. Archivos

```
public/favicon.svg            logo en SVG, una sola tinta
public/robots.txt             permite rastreo y apunta al sitemap
src/data/specialties.ts       textos y datos de las cuatro especialidades
src/layouts/Base.astro        <head> SEO, estilos globales, script y velo de transición
src/components/               Nav, Footer, Veil, Cta, Illustration
src/styles/global.css         todo el CSS del sitio
src/pages/index.astro         home
src/pages/[slug].astro        páginas de especialidad
src/pages/404.astro           página no encontrada (noindex)
src/pages/privacidad.astro    aviso legal y política de privacidad
docs/IDENTIDAD-VISUAL.md      guía de estilo, voz y animación
docs/MIGRACION-ASTRO.md       este archivo
```

## 4. SEO

- `site` en `astro.config.mjs` apunta a `https://zenith.antonioaleman.dev`.
- Cada página tiene title, description, canónica y `og:url` propios.
- `@astrojs/sitemap` genera `sitemap-index.xml`; `public/robots.txt` lo referencia.
- `og:image` apunta a `/og.png` (1200×630), generada desde el logo con `npm run og` (`scripts/generate-og.mjs`).

## 5. Publicación

`npm run build` crea `dist/` y `sitemap-index.xml`. El dominio ya está definido en `astro.config.mjs`. Si se publica en una subcarpeta (por ejemplo GitHub Pages), también hace falta `base`.
