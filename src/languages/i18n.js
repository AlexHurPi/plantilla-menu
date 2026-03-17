import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import spanish from './spanish.json';  
import english from './english.json';  // ← Importa el archivo de inglés

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: spanish },
      en: { translation: english }  // ← Recurso para inglés
    },
    lng: 'en',  // Idioma por defecto
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
