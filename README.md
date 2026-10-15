# Zenith Web

Sitio de presentacion de Zenith, una agencia de desarrollo de software que resuelve problemas de negocio (paginas web, software a la medida: dashboards, inventarios y SaaS, automatizaciones CI/CD, n8n y Power Automate, y microservicios/APIs). Ofrece open source para quien si programa.

## Requisitos

- Node.js en la version que pida Astro (ver https://docs.astro.build)
- npm

## Comandos

```bash
npm run dev       # servidor de desarrollo
npm run build     # genera dist/ (sitio estatico)
npm run preview   # sirve dist/ para revisarlo
npm run check     # revision de tipos y sintaxis Astro
```

## Estructura

```
public/
  favicon.svg              logo en SVG, una sola tinta
  robots.txt               rastreo y sitemap
src/
  data/specialties.ts      textos y datos de las especialidades
  layouts/Base.astro       head SEO, estilos, script y velo de transicion
  components/              Nav, Footer, Veil, Cta, Illustration
  styles/global.css        todo el CSS del sitio
  pages/
    index.astro            home
    [slug].astro           paginas de especialidad
    404.astro              pagina no encontrada
    privacidad.astro       aviso legal y politica de privacidad
docs/
  IDENTIDAD-VISUAL.md      guia de estilo, voz y animacion
  MIGRACION-ASTRO.md       notas del proyecto y trabajo pendiente
```

Cada especialidad es una pagina real: `/paginas-web`, `/software-a-la-medida`, `/automatizaciones`, `/microservicios`. Las rutas viejas (`/dashboards`, `/inventarios`, `/saas`) redirigen a `/software-a-la-medida`. La navegacion entre paginas usa el velo morado con el logo. El sitio apunta a `https://getzenith.dev` y genera sitemap con `@astrojs/sitemap`.

## Contacto

Correos y consultas: info@getzenith.dev
