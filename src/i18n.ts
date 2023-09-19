// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translations/en.json';
import translationUK from './translations/uk.json';

const resources = {
  uk: {
    translation: translationUK,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Set the default language here
    fallbackLng: 'uk', // Fallback language
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18n;
