import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

const savedLang = localStorage.getItem('moniqopay-lang') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    fr: { translation: fr },
    es: { translation: es },
  },
  lng: savedLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;

export const LANGUAGES = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
];

export function changeLanguage(code) {
  i18n.changeLanguage(code);
  localStorage.setItem('moniqopay-lang', code);
}
