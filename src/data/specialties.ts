export const EMAIL = 'info@getzenith.dev';
export const GITHUB = 'https://github.com/alemanantonio';
export const GITHUB_USER = 'alemanantonio';
export const SITE_OWNER = 'https://antonioaleman.dev';
export const INSTAGRAM = 'https://instagram.com/get_zenith';
export const INSTAGRAM_USER = 'get_zenith';

export interface ProductText {
  name: string;
  tag: string;
  price: string;
  startingPrice: string;
}

export interface Product {
  art: 'dash' | 'inv' | 'saas';
  oss: string | null;
  demo: string | null;
  es: ProductText;
  en: ProductText;
}

export interface PriceTier {
  label: { es: string; en: string };
  amount: { es: string; en: string };
  note?: { es: string; en: string };
}

export interface SpecialtyText {
  name: string;
  tag: string;
  stmt: string;
  cta: string;
  description: string;
  support: string;
  supportItems?: { es: string; en: string }[];
  pr: { t: string; d: string }[];
}

export interface Specialty {
  slug: string;
  art: 'web' | 'saas' | 'auto' | 'api';
  oss: string[];
  demos: { href: string; es: string; en: string }[];
  prices: PriceTier[];
  products?: Product[];
  es: SpecialtyText;
  en: SpecialtyText;
}

export const specialties: Specialty[] = [
  {
    slug: 'paginas-web',
    art: 'web',
    oss: [],
    demos: [],
    prices: [
      {
        label: { es: 'Página web', en: 'Website' },
        amount: { es: 'Desde $2,000 MXN', en: 'From $100 USD' },
        note: {
          es: 'El precio depende del tamaño del proyecto y se cotiza según el alcance de cada página.',
          en: 'The price depends on the size of the project and is quoted based on the scope of each site.',
        },
      },
    ],
    es: {
      name: 'Páginas web',
      tag: 'Un sitio claro que convierte visitas en clientes.',
      stmt: 'Tu negocio en línea, presentado con claridad: que te encuentren, te entiendan y te escriban.',
      cta: 'Hablemos de tu página web.',
      description: 'Páginas web a la medida de tu negocio, presentadas con claridad para que te encuentren y te escriban. Tú no tocas código.',
      support: 'Renovación anual. Incluye:',
      supportItems: [
        { es: 'Hosting, dominio y correos', en: 'Hosting, domain and email' },
        { es: 'Renovación del certificado SSL/HTTPS', en: 'SSL/HTTPS certificate renewal' },
        { es: 'Escaneo de malware y cortafuegos WAF', en: 'Malware scanning and web application firewall (WAF)' },
        { es: 'Auditoría de cuentas administradoras, baja de usuarios inactivos y actualización de contraseñas seguras', en: 'Admin account audit, removal of inactive users and secure password updates' },
        { es: 'Respaldos y recuperación', en: 'Backups and recovery' },
        { es: 'Auditoría SEO', en: 'SEO audit' },
        { es: 'Actualización de información general', en: 'General information updates' },
      ],
      pr: [
        { t: 'Te encuentran', d: 'Un sitio claro hace que tu negocio aparezca cuando te buscan.' },
        { t: 'Generas confianza', d: 'Una presencia profesional que da seguridad desde el primer vistazo.' },
        { t: 'Sin tocar código', d: 'Tú no tienes que escribir ni modificar código: nuestro equipo se encarga.' },
      ],
    },
    en: {
      name: 'Websites',
      tag: 'A clear site that turns visitors into customers.',
      stmt: 'Your business online, presented with clarity: so people find you, understand you and reach out.',
      cta: "Let's talk about your website.",
      description: 'Custom websites for your business, presented with clarity so people find you and reach out. You do not touch code.',
      support: 'Annual renewal. Includes:',
      supportItems: [
        { es: 'Hosting, dominio y correos', en: 'Hosting, domain and email' },
        { es: 'Renovación del certificado SSL/HTTPS', en: 'SSL/HTTPS certificate renewal' },
        { es: 'Escaneo de malware y cortafuegos WAF', en: 'Malware scanning and web application firewall (WAF)' },
        { es: 'Auditoría de cuentas administradoras, baja de usuarios inactivos y actualización de contraseñas seguras', en: 'Admin account audit, removal of inactive users and secure password updates' },
        { es: 'Respaldos y recuperación', en: 'Backups and recovery' },
        { es: 'Auditoría SEO', en: 'SEO audit' },
        { es: 'Actualización de información general', en: 'General information updates' },
      ],
      pr: [
        { t: 'People find you', d: 'A clear site makes your business show up when people search for it.' },
        { t: 'You build trust', d: 'A professional presence that inspires confidence at first sight.' },
        { t: 'No code required', d: 'You do not have to write or modify code: our team handles it.' },
      ],
    },
  },
  {
    slug: 'software-a-la-medida',
    art: 'saas',
    oss: [
      'https://github.com/alemanantonio/Zenith-Dashboard',
      'https://github.com/alemanantonio/Zenith-Inventario',
      'https://github.com/alemanantonio/Zenith-SaaS',
    ],
    demos: [
      { href: '/demo/dashboards', es: 'Demo dashboard', en: 'Dashboard demo' },
      { href: '/demo/inventarios', es: 'Demo inventario', en: 'Inventory demo' },
      { href: '/demo/saas', es: 'Demo SaaS', en: 'SaaS demo' },
    ],
    prices: [
      {
        label: { es: 'Dashboard', en: 'Dashboard' },
        amount: { es: 'Desde $10,000 MXN', en: 'From $500 USD' },
      },
      {
        label: { es: 'Inventario', en: 'Inventory' },
        amount: { es: 'Desde $25,000 MXN', en: 'From $1,250 USD' },
      },
      {
        label: { es: 'SaaS', en: 'SaaS' },
        amount: { es: 'Cotización personalizada', en: 'Custom quote' },
      },
    ],
    products: [
      {
        art: 'dash',
        oss: 'https://github.com/alemanantonio/Zenith-Dashboard',
        demo: '/demo/dashboards',
        es: {
          name: 'Dashboard',
          tag: 'Tus números en un solo panel, a tu manera.',
          price: 'El precio depende del tamaño del proyecto. El dashboard siempre está alojado por nuestra parte.',
          startingPrice: 'Desde $10,000 MXN',
        },
        en: {
          name: 'Dashboard',
          tag: 'Your numbers in one panel, your way.',
          price: 'The price depends on the size of the project. The dashboard is always hosted by us.',
          startingPrice: 'From $500 USD',
        },
      },
      {
        art: 'inv',
        oss: 'https://github.com/alemanantonio/Zenith-Inventario',
        demo: '/demo/inventarios',
        es: {
          name: 'Inventario',
          tag: 'Control de existencias a la medida de cómo trabajas.',
          price: 'El precio depende del tamaño del proyecto. El sistema de inventarios siempre está alojado por nuestra parte.',
          startingPrice: 'Desde $25,000 MXN',
        },
        en: {
          name: 'Inventory',
          tag: 'Stock control shaped around how you work.',
          price: 'The price depends on the size of the project. The inventory system is always hosted by us.',
          startingPrice: 'From $1,250 USD',
        },
      },
      {
        art: 'saas',
        oss: 'https://github.com/alemanantonio/Zenith-SaaS',
        demo: '/demo/saas',
        es: {
          name: 'SaaS',
          tag: 'Plataformas web construidas para crecer con tu proyecto.',
          price: 'El precio depende del tamaño del proyecto. El SaaS siempre está alojado por nuestra parte.',
          startingPrice: 'Cotización personalizada',
        },
        en: {
          name: 'SaaS',
          tag: 'Web platforms built to grow with your project.',
          price: 'The price depends on the size of the project. The SaaS is always hosted by us.',
          startingPrice: 'Custom quote',
        },
      },
    ],
    es: {
      name: 'Software A La Medida',
      tag: 'Dashboards, inventarios y plataformas SaaS: un solo software para operar sin hojas de cálculo.',
      stmt: 'Tu operación centralizada: menos trabajo repetitivo y decisiones tomadas con los datos a la vista.',
      cta: 'Hablemos de tu software a la medida.',
      description: 'Dashboards, sistemas de inventarios y plataformas SaaS a la medida de tu operación: tres productos para centralizar tu trabajo sin tocar código.',
      support: 'Renovación anual con alojamiento premium, siempre alojado por nuestra parte.',
      pr: [
        { t: 'Menos trabajo repetitivo', d: 'Tu operación centralizada en un solo software, sin hojas de cálculo.' },
        { t: 'Decisiones con datos', d: 'Tus números a la vista para decidir con información, no con intuición.' },
        { t: 'Código abierto', d: 'Dashboard, inventario y SaaS son open source: puedes instalarlos y revisarlos.' },
      ],
    },
    en: {
      name: 'Custom Software',
      tag: 'Dashboards, inventory systems and SaaS platforms: one piece of software to run without spreadsheets.',
      stmt: 'Your operation in one place: less busywork and decisions made with the data in view.',
      cta: "Let's talk about your custom software.",
      description: 'Custom dashboards, inventory systems and SaaS platforms for your operation: three products to centralize your work without touching code.',
      support: 'Annual renewal with premium hosting, always hosted by us.',
      pr: [
        { t: 'Less busywork', d: 'Your operation centralized in one system, no spreadsheets.' },
        { t: 'Decisions backed by data', d: 'Your numbers in view so you decide with information, not guesswork.' },
        { t: 'Open source', d: 'Dashboard, inventory and SaaS are open source: you can install and review them.' },
      ],
    },
  },
  {
    slug: 'automatizaciones',
    art: 'auto',
    oss: [],
    demos: [],
    prices: [
      {
        label: { es: 'Automatización', en: 'Automation' },
        amount: { es: 'Desde $10,000 MXN', en: 'From $500 USD' },
      },
    ],
    es: {
      name: 'Automatizaciones',
      tag: 'Trabajos repetitivos que la máquina hace por ti.',
      stmt: 'Recupera horas cada semana: conectamos tus herramientas para que las tareas repetitivas se hagan solas.',
      cta: 'Hablemos de tu automatización.',
      description: 'Automatizaciones con CI/CD, n8n y Power Automate: menos tiempo perdido y menos errores en tu operación.',
      support: 'Renovación anual con mantenimiento y ajustes por nuestra parte.',
      pr: [
        { t: 'Ahorras tiempo', d: 'Las tareas repetitivas se ejecutan solas, todos los días.' },
        { t: 'Menos errores', d: 'Los procesos automáticos no olvidan pasos ni se equivocan a mano.' },
        { t: 'Sin tocar código', d: 'Nosotros diseñamos y conectamos la automatización; tú solo la usas.' },
      ],
    },
    en: {
      name: 'Automations',
      tag: 'Repetitive work the machine does for you.',
      stmt: 'Get hours back every week: we connect your tools so repetitive tasks run on their own.',
      cta: "Let's talk about your automation.",
      description: 'Automations with CI/CD, n8n and Power Automate: less time lost and fewer errors in your operation.',
      support: 'Annual renewal with maintenance and adjustments handled by us.',
      pr: [
        { t: 'You save time', d: 'Repetitive tasks run on their own, every day.' },
        { t: 'Fewer errors', d: 'Automated processes do not skip steps or make manual mistakes.' },
        { t: 'No code required', d: 'We design and wire the automation; you just use it.' },
      ],
    },
  },
  {
    slug: 'microservicios',
    art: 'api',
    oss: [],
    demos: [],
    prices: [
      {
        label: { es: 'API estándar de integración', en: 'Standard integration API' },
        amount: { es: 'Desde $70,000 MXN', en: 'From $3,500 USD' },
      },
      {
        label: { es: 'Infraestructura completa (AWS, Azure, Docker)', en: 'Full infrastructure (AWS, Azure, Docker)' },
        amount: { es: 'Desde $300,000 MXN', en: 'From $15,000 USD' },
      },
    ],
    es: {
      name: 'Microservicios',
      tag: 'APIs que conectan tus sistemas y los hacen crecer.',
      stmt: 'Tus sistemas hablando entre sí: integraciones estándar e infraestructura lista para crecer.',
      cta: 'Hablemos de tus microservicios.',
      description: 'Microservicios e APIs a la medida: integraciones estándar e infraestructura completa (AWS, Azure, Docker) sin tocar código.',
      support: 'Renovación anual con mantenimiento de la infraestructura por nuestra parte.',
      pr: [
        { t: 'Sistemas que se conectan', d: 'Tus herramientas se comunican entre sí sin trabajo manual.' },
        { t: 'Listos para crecer', d: 'La infraestructura aguanta cuando tu operación crece.' },
        { t: 'Sin tocar código', d: 'Diseñamos e implementamos todo; tú usas el resultado.' },
      ],
    },
    en: {
      name: 'Microservices',
      tag: 'APIs that connect your systems and let them grow.',
      stmt: 'Your systems talking to each other: standard integrations and infrastructure ready to grow.',
      cta: "Let's talk about your microservices.",
      description: 'Custom microservices and APIs: standard integrations and full infrastructure (AWS, Azure, Docker) without touching code.',
      support: 'Annual renewal with infrastructure maintenance handled by us.',
      pr: [
        { t: 'Systems that connect', d: 'Your tools talk to each other with no manual work.' },
        { t: 'Ready to grow', d: 'Infrastructure that holds up as your operation grows.' },
        { t: 'No code required', d: 'We design and build everything; you use the result.' },
      ],
    },
  },
];
