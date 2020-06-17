/**
 * Lazy loading literals by using dynamic import.
 * @param lang current language setting
 */
export const loadLang = (lang = 'en') => {
    return import(`./${lang}.json`);
};
