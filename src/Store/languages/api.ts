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
