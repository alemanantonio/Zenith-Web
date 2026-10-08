# Zenith · Landing Web

Proyecto web oficial de **Zenith** (dashboards personales personalizados), construido con **Astro** y TypeScript.

---

## 🚀 Puesta en marcha rápida

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Validar tipos y componentes
npm run check

# Compilar para producción (genera carpeta dist/)
npm run build

# Previsualizar el resultado de producción
npm run preview
```

---

## 📁 Estructura del proyecto

```text
Zenith-Web/
├── docs/                      # Documentación del proyecto y guías
│   ├── DESIGN.md              # Sistema de diseño, paleta, tipografía y movimiento
│   └── MIGRACION-ASTRO.md     # Registro y guía de arquitectura de la migración
├── public/                    # Archivos estáticos directos (favicon.svg, etc.)
├── src/
│   ├── components/            # Componentes Astro modulares (.astro)
│   │   ├── Cta.astro          # Llamado a la acción con botón magnético
│   │   ├── DashboardMock.astro# Simulación de dashboard interactivo 3D
│   │   ├── Faq.astro          # Acordeón de preguntas frecuentes
│   │   ├── Footer.astro       # Pie de página
│   │   ├── Hero.astro         # Hero con animación de pétalos de logo y orbes
│   │   ├── Logo.astro         # Isotipo SVG configurable (estático o animado)
│   │   ├── Nav.astro          # Menú de navegación con barra de scroll
│   │   ├── PlanCard.astro     # Tarjeta reutilizable con efecto tilt 3D
│   │   ├── Plans.astro        # Sección de planes y precios
│   │   ├── Principles.astro   # Grid de valores y principios
│   │   └── Statement.astro    # Frase que se ilumina gradualmente con el scroll
│   ├── data/
│   │   └── site.ts            # Textos, enlaces, planes y preguntas frecuentes
│   ├── layouts/
│   │   └── Base.astro         # Plantilla HTML base, fuentes, SVG sprite y scripts
│   ├── pages/
│   │   └── index.astro        # Punto de entrada / Landing page principal
│   ├── scripts/               # Lógica interactiva del cliente (TypeScript)
│   │   ├── faq.ts             # Control del acordeón FAQ
│   │   ├── pointer.ts         # Efectos de cursor (glow, tilt 3D, botón magnético)
│   │   ├── reveal.ts          # IntersectionObserver para animaciones de entrada
│   │   └── scroll.ts          # Cálculos de progreso de scroll y parallax
│   └── styles/
│       ├── base.css           # Reset y estilos tipográficos base
│       ├── motion.css         # Clases de animación y soporte para reduced-motion
│       └── tokens.css         # Variables CSS de tema (colores, fuentes, curvas)
├── astro.config.mjs           # Configuración de Astro
├── package.json               # Dependencias y scripts
└── tsconfig.json              # Configuración estricta de TypeScript
```

---

## 📚 Documentación para agentes y desarrolladores

Toda la documentación técnica y de diseño se encuentra organizada dentro de [`docs/`](file:///c:/Users/SISTEMAS/Downloads/repo/Zenith-Web/docs):

- **[`docs/DESIGN.md`](file:///c:/Users/SISTEMAS/Downloads/repo/Zenith-Web/docs/DESIGN.md)**: Reglas de identidad visual, proporciones geométricas del isotipo, paleta de color y tokens, tipografía Jost, curvas bezier y soporte de accesibilidad/dark mode.
- **[`docs/MIGRACION-ASTRO.md`](file:///c:/Users/SISTEMAS/Downloads/repo/Zenith-Web/docs/MIGRACION-ASTRO.md)**: Explicación de la arquitectura original y cómo se dividió el código estático vs interactivo.

---

## 🛠️ Modificar contenidos

Para actualizar textos, enlaces externos, preguntas frecuentes o planes sin tocar el marcado de los componentes, edita directamente [`src/data/site.ts`](file:///c:/Users/SISTEMAS/Downloads/repo/Zenith-Web/src/data/site.ts).
