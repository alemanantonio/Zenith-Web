interface InquiryFormLanguage {
  url: string;
  title: string;
}

export interface InquiryForm {
  es: InquiryFormLanguage;
  en: InquiryFormLanguage;
}

const formUrl = (id: string) => `https://docs.google.com/forms/d/e/${id}/viewform`;

export const inquiryForms: Record<string, InquiryForm> = {
  'paginas-web': {
    es: { url: formUrl('1FAIpQLSc4PbaVhJl96WgUj7Z_b1tlx4WK6er8hhBRAP3dRFDag7AQiA'), title: 'Cuéntanos sobre tu página web' },
    en: { url: formUrl('1FAIpQLScizsXosdJSB2ySHt1uaxO_95xRfzJ3CB_IQd-adcziNJLSRg'), title: 'Tell us about your website' },
  },
  'software-a-la-medida': {
    es: { url: formUrl('1FAIpQLSfV7tNMdvIV3Cs43glixmTL4M0j8YFqHjX_YOlISQKWman3aw'), title: 'Cuéntanos sobre tu software a la medida' },
    en: { url: formUrl('1FAIpQLScp6DElryaqegQxudnxZXqbAeS-TzmRZ_g8jiFBAvoV6jsI4Q'), title: 'Tell us about your custom software' },
  },
  microservicios: {
    es: { url: formUrl('1FAIpQLSfvSn5g8jdBR-TsYXjPNMfAm-lAjcSo_TmYZLCDHyZdPuE_DA'), title: 'Cuéntanos sobre tus microservicios' },
    en: { url: formUrl('1FAIpQLScHtzZiaeUQU2kP06UFb04bnbyM0PUCH3tVdFF-B2MliNiIKg'), title: 'Tell us about your microservices' },
  },
  automatizaciones: {
    es: { url: formUrl('1FAIpQLSeUuYLUvbd8qhnjQIwXtK2kMOccsrucq1c-TTx9zq4CDEkFhw'), title: 'Cuéntanos sobre tu automatización' },
    en: { url: formUrl('1FAIpQLSfvtE47jUA5Rshrjf3MCTp4XmOkscE_KLDi1lJ_o2f5FMlQgw'), title: 'Tell us about your automation' },
  },
};
