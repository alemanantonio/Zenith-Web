export const EMAIL = 'zenith@antonioaleman.dev';
export const GITHUB = 'https://github.com/alemanantonio';
export const GITHUB_USER = 'alemanantonio';
export const SITE_OWNER = 'https://antonioaleman.dev';

export interface SpecialtyText {
  name: string;
  tag: string;
  stmt: string;
  cta: string;
  description: string;
  price: string;
  support: string;
  pr: { t: string; d: string }[];
}

export interface Specialty {
  slug: string;
  art: 'web' | 'dash' | 'inv' | 'saas';
  oss: string | null;
  es: SpecialtyText;
  en: SpecialtyText;
}

export const specialties: Specialty[] = [
  {
    slug: 'paginas-web',
    art: 'web',
    oss: null,
    es: {
      name: 'Páginas web',
      tag: 'Sitios para presentar tu negocio con claridad.',
      stmt: 'Tu negocio, presentado con claridad y construido por un equipo que se encarga de todo el código.',
      cta: 'Hablemos de tu página web.',
      description: 'Páginas web a la medida de tu negocio, construidas por un equipo full stack. Tú no tocas código.',
      price: 'El precio depende del tamaño del proyecto y se cotiza según el alcance de cada página.',
      support: 'Renovación anual por mantenimiento, hosting y actualizaciones. La página web se construye a la medida del cliente y no incluye open source: se mantiene como sistema de pago.',
      pr: [
        { t: 'Pensadas para tu negocio', d: 'Cada página se construye para presentar tu negocio con claridad.' },
        { t: 'Full stack', d: 'Del diseño de la interfaz a la lógica y los datos que la sostienen.' },
        { t: 'Sin tocar código', d: 'Tú no tienes que escribir ni modificar código: nuestro equipo se encarga.' },
      ],
    },
    en: {
      name: 'Websites',
      tag: 'Sites that present your business with clarity.',
      stmt: 'Your business, presented with clarity and built by a team that handles all the code.',
      cta: "Let's talk about your website.",
      description: 'Custom websites for your business, built by a full stack team. You do not touch code.',
      price: 'The price depends on the size of the project and is quoted based on the scope of each site.',
      support: 'Annual renewal for maintenance, hosting and updates. The website is custom-built to the client\u2019s needs and has no open source: it is kept as a paid system.',
      pr: [
        { t: 'Built for your business', d: 'Every page is built to present your business with clarity.' },
        { t: 'Full stack', d: 'From interface design to the logic and data behind it.' },
        { t: 'No code required', d: 'You do not have to write or modify code: our team handles it.' },
      ],
    },
  },
  {
    slug: 'dashboards',
    art: 'dash',
    oss: 'https://github.com/alemanantonio/Zenith-Dashboard',
    es: {
      name: 'Dashboards personales',
      tag: 'Un panel con lo que quieres tener a la vista.',
      stmt: 'Todo lo que te importa en un solo panel, a tu manera y sin que tengas que tocar código.',
      cta: 'Hablemos de tu dashboard.',
      description: 'Dashboards personales a tu medida: tus datos en un solo panel, sin tocar código.',
      price: 'El precio depende del tamaño del proyecto. El dashboard incluye más funcionalidades y siempre está alojado por nuestra parte.',
      support: 'Renovación anual con alojamiento más premium, siempre alojado por nuestra parte.',
      pr: [
        { t: 'A tu medida', d: 'Tu dashboard se personaliza para mostrar lo que tú necesitas ver.' },
        { t: 'Código abierto', d: 'Si sabes programar, puedes instalarlo, revisarlo y alojarlo por tu cuenta.' },
        { t: 'Sin tocar código', d: 'Si no programas, nuestro equipo se encarga de personalizarlo por ti.' },
      ],
    },
    en: {
      name: 'Personal dashboards',
      tag: 'A panel with everything you want in view.',
      stmt: 'Everything that matters to you in one panel, your way and without touching code.',
      cta: "Let's talk about your dashboard.",
      description: 'Personal dashboards built around you: your data in one panel, no code required.',
      price: 'The price depends on the size of the project. The dashboard includes more features and is always hosted by us.',
      support: 'Annual renewal with more premium hosting, always hosted by us.',
      pr: [
        { t: 'Built around you', d: 'Your dashboard is customized to show what you need to see.' },
        { t: 'Open source', d: 'If you can program, you can install it, review it and host it yourself.' },
        { t: 'No code required', d: 'If you do not program, our team customizes it for you.' },
      ],
    },
  },
  {
    slug: 'inventarios',
    art: 'inv',
    oss: 'https://github.com/alemanantonio/Zenith-Inventario',
    es: {
      name: 'Sistemas de inventarios',
      tag: 'Control de existencias a la medida de cómo trabajas.',
      stmt: 'Un sistema para llevar tus existencias, hecho a la medida de cómo trabajas.',
      cta: 'Hablemos de tu sistema de inventarios.',
      description: 'Sistemas de inventarios a la medida de tu operación: control de existencias sin tocar código.',
      price: 'El precio depende del tamaño del proyecto. El sistema de inventarios incluye más funcionalidades y siempre está alojado por nuestra parte.',
      support: 'Renovación anual con alojamiento más premium, siempre alojado por nuestra parte.',
      pr: [
        { t: 'A la medida', d: 'Se adapta a la forma en que trabajas, no al revés.' },
        { t: 'Full stack', d: 'Interfaz, lógica y datos en manos del mismo equipo.' },
        { t: 'Sin tocar código', d: 'Tú lo usas; nuestro equipo se encarga del código.' },
      ],
    },
    en: {
      name: 'Inventory systems',
      tag: 'Stock control shaped around how you work.',
      stmt: 'A system to manage your stock, shaped around how you work.',
      cta: "Let's talk about your inventory system.",
      description: 'Inventory systems built around your operation: stock control without touching code.',
      price: 'The price depends on the size of the project. The inventory system includes more features and is always hosted by us.',
      support: 'Annual renewal with more premium hosting, always hosted by us.',
      pr: [
        { t: 'Made to measure', d: 'It adapts to the way you work, not the other way around.' },
        { t: 'Full stack', d: 'Interface, logic and data in the hands of one team.' },
        { t: 'No code required', d: 'You use it; our team handles the code.' },
      ],
    },
  },
  {
    slug: 'saas',
    art: 'saas',
    oss: 'https://github.com/alemanantonio/Zenith-SaaS',
    es: {
      name: 'SaaS',
      tag: 'Plataformas web construidas para crecer con tu proyecto.',
      stmt: 'Tu idea convertida en una plataforma web, construida de principio a fin por nuestro equipo.',
      cta: 'Hablemos de tu SaaS.',
      description: 'Plataformas SaaS construidas de principio a fin por un equipo full stack, para crecer con tu proyecto.',
      price: 'El precio depende del tamaño del proyecto. El SaaS incluye más funcionalidades y siempre está alojado por nuestra parte.',
      support: 'Renovación anual con alojamiento más premium, siempre alojado por nuestra parte.',
      pr: [
        { t: 'Pensado para crecer', d: 'Plataformas web construidas para crecer con tu proyecto.' },
        { t: 'Full stack', d: 'De la interfaz a los datos, todo en manos de un mismo equipo.' },
        { t: 'Sin tocar código', d: 'Tú te enfocas en tu proyecto; nuestro equipo se encarga del código.' },
      ],
    },
    en: {
      name: 'SaaS',
      tag: 'Web platforms built to grow with your project.',
      stmt: 'Your idea turned into a web platform, built end to end by our team.',
      cta: "Let's talk about your SaaS.",
      description: 'SaaS platforms built end to end by a full stack team, designed to grow with your project.',
      price: 'The price depends on the size of the project. The SaaS includes more features and is always hosted by us.',
      support: 'Annual renewal with more premium hosting, always hosted by us.',
      pr: [
        { t: 'Built to grow', d: 'Web platforms built to grow with your project.' },
        { t: 'Full stack', d: 'From interface to data, all in the hands of one team.' },
        { t: 'No code required', d: 'You focus on your project; our team handles the code.' },
      ],
    },
  },
];
