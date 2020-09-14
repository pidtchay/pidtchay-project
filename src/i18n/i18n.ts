/* eslint-disable jsdoc/require-returns */
/**
 * Lazy loading literals by using dynamic import.
 *
 * @param lang - Current language setting.
 */
export const loadLang = (lang = 'en') => {
    return import(`./${lang}.json`);
};
