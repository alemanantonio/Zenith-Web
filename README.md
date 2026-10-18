# Zenith Web

Sitio de presentación de Zenith, una agencia de desarrollo de software especializado para empresas según sus requisitos y micro apps generales, más económicas, con suscripción mensual y acceso inmediato. El software a medida requiere análisis y desarrollo antes de la entrega. También ofrece páginas web, automatizaciones e integraciones. La página de páginas web incluye ejemplos, comenzando por https://3d.getzenith.dev.

## Requisitos

- Node.js en la version que pida Astro (ver https://docs.astro.build)
- pnpm 12.3.4

## Instalación

```bash
pnpm install --frozen-lockfile
```

## Comandos

```bash
pnpm run dev       # servidor de desarrollo
pnpm run build     # genera dist/ (sitio estatico)
pnpm run preview   # sirve dist/ para revisarlo
pnpm run check     # revision de tipos y sintaxis Astro
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

La oferta comunica ahorro de tiempo y oportunidades de ingreso según cada servicio. `/micro-apps` presenta la próxima oferta de herramientas de pago mensual con estado «Próximamente». No hay suscripciones activas ni productos o precios publicados todavía.
