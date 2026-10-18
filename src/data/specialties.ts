export const EMAIL = 'info@getzenith.dev';
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
      tag: 'Ahorra tiempo al presentar tu negocio y convierte visitas en oportunidades de venta.',
      stmt: 'Tu web explica lo que vendes, responde dudas y atrae clientes: menos consultas repetidas, más oportunidades de venta.',
      cta: 'Hablemos de tu página web.',
      description: 'Páginas web para ahorrar tiempo respondiendo dudas, atraer clientes y generar oportunidades de venta. Diseño a la medida de tu negocio.',
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
        { t: 'Más oportunidades de venta', d: 'Presenta tus servicios con claridad y facilita que los visitantes te contacten para comprar.' },
        { t: 'Menos consultas repetidas', d: 'Tu web explica servicios, horarios y formas de contacto para que dediques más tiempo a atender clientes.' },
      ],
    },
    en: {
      name: 'Websites',
      tag: 'Save time presenting your business and turn visits into sales opportunities.',
      stmt: 'Your website explains your offer, answers questions and attracts customers: fewer repetitive inquiries, more sales opportunities.',
      cta: "Let's talk about your website.",
      description: 'Custom websites to save time answering questions, attract customers and generate sales opportunities.',
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
        { t: 'More sales opportunities', d: 'Present your services clearly and make it easy for visitors to contact you to buy.' },
        { t: 'Fewer repetitive inquiries', d: 'Your website explains services, opening hours and contact options so you spend more time serving customers.' },
      ],
    },
  },
  {
    slug: 'software-a-la-medida',
    art: 'saas',
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
      name: 'Software a la medida',
      tag: 'Software según tus requisitos para ahorrar tiempo de operación y hacer crecer tus ingresos.',
      stmt: 'Menos horas operando a mano. Más tiempo para atender clientes, vender y hacer crecer tu empresa.',
      cta: 'Hablemos de tu software a la medida.',
      description: 'Software especializado para empresas: SaaS, dashboards, inventarios y otros sistemas según los requisitos del cliente. Para ahorrar tiempo y mejorar tus oportunidades de ingreso. Requiere análisis y desarrollo antes de la entrega.',
      support: 'Renovación anual con alojamiento premium, siempre alojado por nuestra parte.',
      pr: [
        { t: 'Menos trabajo repetitivo', d: 'Tu operación centralizada en un solo software, sin hojas de cálculo.' },
        { t: 'Más oportunidades de ingreso', d: 'Con tus datos a la vista, identifica qué se vende, detecta pérdidas y dedica recursos a lo que hace crecer tu negocio.' },
        { t: 'Análisis antes de desarrollar', d: 'Definimos contigo los requisitos, el alcance y los tiempos. El acceso llega después del desarrollo y la entrega; no es inmediato.' },
      ],
    },
    en: {
      name: 'Custom Software',
      tag: 'Software built to your requirements to save operational time and grow revenue.',
      stmt: 'Fewer hours on manual operations. More time to serve customers, sell and grow your business.',
      cta: "Let's talk about your custom software.",
      description: 'Specialized business software: SaaS, dashboards, inventory and other systems built to client requirements. Designed to save time and improve revenue opportunities. Analysis and development come before delivery.',
      support: 'Annual renewal with premium hosting, always hosted by us.',
      pr: [
        { t: 'Less busywork', d: 'Your operation centralized in one system, no spreadsheets.' },
        { t: 'More revenue opportunities', d: 'With your data in view, identify what sells, spot losses and focus resources on what grows your business.' },
        { t: 'Analysis before development', d: 'Together we define requirements, scope and timing. Access comes after development and delivery; it is not immediate.' },
      ],
    },
  },
  {
    slug: 'automatizaciones',
    art: 'auto',
    demos: [],
    prices: [
      {
        label: { es: 'Automatización', en: 'Automation' },
        amount: { es: 'Desde $10,000 MXN', en: 'From $500 USD' },
      },
    ],
    es: {
      name: 'Automatizaciones',
      tag: 'Menos tareas repetitivas. Más tiempo para vender y atender clientes.',
      stmt: 'Automatiza tareas, recupera horas y dedica ese tiempo a lo que genera ingresos en tu negocio.',
      cta: 'Hablemos de tu automatización.',
      description: 'Automatizaciones con CI/CD, n8n y Power Automate: ahorra tiempo, reduce errores y libera horas para atender clientes y generar ingresos.',
      support: 'Renovación anual con mantenimiento y ajustes por nuestra parte.',
      pr: [
        { t: 'Ahorras tiempo', d: 'Las tareas repetitivas se ejecutan solas, todos los días.' },
        { t: 'Menos errores', d: 'Los procesos automáticos no olvidan pasos ni se equivocan a mano.' },
        { t: 'Más tiempo para vender', d: 'Libera a tu equipo de tareas manuales para dar seguimiento a clientes y aprovechar oportunidades comerciales.' },
      ],
    },
    en: {
      name: 'Automations',
      tag: 'Fewer repetitive tasks. More time to sell and serve customers.',
      stmt: 'Automate tasks, get hours back and spend that time on what generates revenue for your business.',
      cta: "Let's talk about your automation.",
      description: 'Automations with CI/CD, n8n and Power Automate: save time, reduce errors and free up hours to serve customers and generate revenue.',
      support: 'Annual renewal with maintenance and adjustments handled by us.',
      pr: [
        { t: 'You save time', d: 'Repetitive tasks run on their own, every day.' },
        { t: 'Fewer errors', d: 'Automated processes do not skip steps or make manual mistakes.' },
        { t: 'More time to sell', d: 'Free your team from manual tasks to follow up with customers and pursue sales opportunities.' },
      ],
    },
  },
  {
    slug: 'microservicios',
    art: 'api',
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
      tag: 'Conecta tus sistemas para ahorrar tiempo y procesar más oportunidades de negocio.',
      stmt: 'Datos que fluyen entre tus sistemas: menos capturas manuales y más agilidad para atender pedidos y vender.',
      cta: 'Hablemos de tus microservicios.',
      description: 'Microservicios y APIs a la medida para ahorrar tiempo conectando sistemas, reducir capturas duplicadas y atender más oportunidades de venta.',
      support: 'Renovación anual con mantenimiento de la infraestructura por nuestra parte.',
      pr: [
        { t: 'Sistemas que se conectan', d: 'Tus herramientas se comunican entre sí sin trabajo manual.' },
        { t: 'Más capacidad para vender', d: 'Conecta pedidos, existencias y otros datos según tu operación para responder más rápido a tus clientes.' },
        { t: 'Sin tocar código', d: 'Diseñamos e implementamos todo; tú usas el resultado.' },
      ],
    },
    en: {
      name: 'Microservices',
      tag: 'Connect your systems to save time and handle more business opportunities.',
      stmt: 'Data flowing between your systems: less manual entry and faster order handling and sales.',
      cta: "Let's talk about your microservices.",
      description: 'Custom microservices and APIs to save time connecting systems, reduce duplicate data entry and handle more sales opportunities.',
      support: 'Annual renewal with infrastructure maintenance handled by us.',
      pr: [
        { t: 'Systems that connect', d: 'Your tools talk to each other with no manual work.' },
        { t: 'More capacity to sell', d: 'Connect orders, stock and other data around your operations to respond to customers faster.' },
        { t: 'No code required', d: 'We design and build everything; you use the result.' },
      ],
    },
  },
];
