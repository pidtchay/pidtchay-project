import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from 'assets/locales/en/common.json';
import translationEn from 'assets/locales/en/translations.json';
import welcomeEn from 'assets/locales/en/welcome.json';
import commonRu from 'assets/locales/ru/common.json';
import translationRu from 'assets/locales/ru/translations.json';
import welcomeRu from 'assets/locales/ru/welcome.json';

/**
 * Configuration of lists for translation.
 * @returns {Resource} Map of translation lists.
 */
const resources: Resource = {
    en: {
        translation: translationEn,
        welcome: welcomeEn,
        common: commonEn
    },
    ru: {
        translation: translationRu,
        welcome: welcomeRu,
        common: commonRu
    }
};

i18n.use(initReactI18next).init({
    resources,
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'ru'],
    interpolation: {
        escapeValue: false // react already safes from xss
    }
});

export default i18n;
