import { EMAIL, type Specialty } from './specialties';

export interface LocalizedText { es: string; en: string }
export interface Faq { question: LocalizedText; answer: LocalizedText }

export const homeFaqs: Faq[] = [
  {
    question: { es: '¿Qué hace Zenith?', en: 'What does Zenith do?' },
    answer: {
      es: 'Zenith es una agencia de desarrollo de software. Crea páginas web, software a medida, automatizaciones y microservicios para reducir tareas manuales y ayudar a los negocios a aprovechar más oportunidades de venta.',
      en: 'Zenith is a software development agency. It builds websites, custom software, automations and microservices to reduce manual tasks and help businesses pursue more sales opportunities.',
    },
  },
  {
    question: { es: '¿Cómo se cotiza un proyecto?', en: 'How is a project quoted?' },
    answer: {
      es: 'Primero analizamos tus requisitos. Después enviamos una propuesta con alcance, precio y plazo según el tamaño del proyecto. El desarrollo comienza después de acordar la propuesta.',
      en: 'We first analyze your requirements. Then we send a proposal with scope, pricing and a timeline based on the size of the project. Development begins after the proposal is agreed.',
    },
  },
  {
    question: { es: '¿Cuánto tarda el desarrollo?', en: 'How long does development take?' },
    answer: {
      es: 'El plazo depende del tamaño y los requisitos del proyecto. Lo acordamos durante la propuesta y entregamos avances durante el desarrollo. El software a medida se entrega después del análisis y la construcción; su acceso no es inmediato.',
      en: 'The timeline depends on the size and requirements of the project. We agree on it during the proposal and provide progress updates during development. Custom software is delivered after analysis and development; access is not immediate.',
    },
  },
  {
    question: { es: '¿Ya están disponibles las micro apps?', en: 'Are the micro apps available yet?' },
    answer: {
      es: 'Las micro apps de Zenith están en preparación y todavía no están disponibles. Serán herramientas para necesidades generales con pago mensual. Sus funciones, precios y enlaces de acceso se publicarán cuando estén listas.',
      en: 'Zenith micro apps are being prepared and are not available yet. They will be tools for common needs with monthly subscriptions. Features, prices and access links will be published when they are ready.',
    },
  },
  {
    question: { es: '¿Cómo contacto a Zenith?', en: 'How can I contact Zenith?' },
    answer: {
      es: `Escribe a ${EMAIL} y cuéntanos qué necesita tu negocio. El horario de atención es de 7:00 a 17:00, hora de la Ciudad de México (UTC−6).`,
      en: `Email ${EMAIL} and tell us what your business needs. Our office hours are 7:00 AM to 5:00 PM, Mexico City time (UTC−6).`,
    },
  },
];

export function specialtyFaqs(s: Specialty): Faq[] {
  return [
    {
      question: { es: `¿Qué ofrece Zenith en ${s.es.name.toLowerCase()}?`, en: `What does Zenith offer in ${s.en.name.toLowerCase()}?` },
      answer: { es: s.es.description, en: s.en.description },
    },
    {
      question: { es: '¿Cuánto cuesta el proyecto?', en: 'How much does the project cost?' },
      answer: {
        es: `${s.prices.map(p => `${p.label.es}: ${p.amount.es}.`).join(' ')} El precio final depende de los requisitos y del alcance acordado en la propuesta.`,
        en: `${s.prices.map(p => `${p.label.en}: ${p.amount.en}.`).join(' ')} The final price depends on the requirements and scope agreed in the proposal.`,
      },
    },
    homeFaqs[2],
  ];
}
