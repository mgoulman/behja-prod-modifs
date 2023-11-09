// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';
import arTranslation from './locales/ar/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      En: {
        translation: enTranslation,
      },
      Fr: {
        translation: frTranslation,
      },
      Ar: {
        translation: arTranslation,
      }
    },
    lng: 'Ar', // Default language
    fallbackLng: 'Ar', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
