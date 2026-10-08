export const site = {
  name: 'Zenith',
  tagline: 'Dashboards personales, hechos a tu medida.',
  description: 'Todo lo que te importa en un solo panel, y con el diseño que tú eliges. Dashboards personales, hechos a tu medida.',
  navLinks: [
    { href: '#que-es', label: 'Qué es' },
    { href: '#principios', label: 'Principios' },
    { href: '#planes', label: 'Planes' },
    { href: '#preguntas', label: 'Preguntas' },
  ],
  links: {
    install: '/download',
    github: 'https://github.com/alemanantonio/Zenith-Web',
    request: '/request',
    contact: 'mailto:info@antonioaleman.dev',
  },
  contactEmail: 'info@antonioaleman.dev',
  statement: 'Todo lo que te importa en un solo panel, y con el diseño que tú eliges.',
  principles: [
    {
      title: 'A tu medida',
      description: 'Tu dashboard se personaliza para mostrar lo que tú necesitas ver.',
    },
    {
      title: 'Código abierto',
      description: 'La versión gratuita es open source: puedes instalarla y alojarla por tu cuenta.',
    },
    {
      title: 'Sin tocar código',
      description: 'En el plan de paga, nuestro equipo se encarga de personalizarlo por ti.',
    },
  ],
  plans: {
    free: {
      kind: 'Self-hosted · Open source',
      name: 'Gratis',
      price: 'Sin costo',
      description: 'Funciones básicas. Lo instalas y lo alojas tú, y el código es abierto.',
      features: [
        'Funciones básicas',
        'Código abierto',
        'Lo alojas tú',
      ],
      actions: {
        installText: 'Instalar',
        githubText: 'GitHub',
      },
    },
    paid: {
      kind: 'Alojado por Zenith',
      name: 'De paga',
      price: 'Precios personalizados',
      description: 'Lo alojamos nosotros e incluye personalización sin tocar código.',
      features: [
        'Alojado por Zenith',
        'Personalización sin tocar código',
        'Nuestro equipo se encarga',
      ],
      actionText: 'Solicitar este plan',
    },
  },
  faq: [
    {
      q: '¿Qué es un dashboard personal?',
      a: 'Un panel que reúne en un solo lugar la información que quieres tener a la vista. En Zenith se personaliza para ti.',
    },
    {
      q: '¿Qué diferencia hay entre los planes?',
      a: 'El plan gratuito es open source y self-hosted, con funciones básicas: tú lo instalas y lo alojas. El plan de paga lo alojamos nosotros e incluye personalización a cargo de nuestro equipo.',
    },
    {
      q: '¿Necesito saber programar?',
      a: 'En el plan de paga no: la personalización no requiere que toques código. En el gratuito eres tú quien lo instala y lo aloja, así que conviene tener algo de experiencia técnica.',
    },
    {
      q: '¿Puedo revisar el código?',
      a: 'Sí. La versión gratuita es open source.',
    },
    {
      q: '¿Cuánto cuesta el plan de paga?',
      a: 'El costo se adapta a tu medida: varía según la cantidad de integraciones (nube, multimedia, domótica, APIs) y la complejidad técnica requerida.',
    },
  ],
};
