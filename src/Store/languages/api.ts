import { loadLang } from 'i18n/i18n';
/* eslint-disable jsdoc/require-returns */
import { languagesFetched, languagesFetching, languagesFetchingError } from './actions';

/**
 * FetchLanguages.
 */
export function fetchLanguages() {
    return (dispatch) => {
        dispatch(languagesFetching());
        loadLang()
            .then((languages) => {
                dispatch(languagesFetched({ languages }));
            })
            .catch((error) => {
                dispatch(languagesFetchingError({ errors: error }));
            });
    };
}

/**
 * Change language settings.
 *
 * @param {string} [languageName] - Language name.
 */
export function changeLanguage(languageName: string) {
    return (dispatch) => {
        dispatch(languagesFetching());
        loadLang(languageName)
            .then((languages) => {
                dispatch(languagesFetched({ languages }));
            })
            .catch((error) => {
                dispatch(languagesFetchingError({ errors: error }));
            });
    };
}
