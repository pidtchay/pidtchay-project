/* eslint-disable jsdoc/require-returns */
import { createAction } from '@reduxjs/toolkit';
import { ILanguagesState } from './state';

/**
 * Return Payload Type.
 */
export function withPayloadType<T>() {
    return (t: T) => ({ payload: t });
}

export const languagesFetching = createAction('LANGUAGE_FETCHING');
export const languagesFetched = createAction('LANGUAGE_FETCHED', withPayloadType<Partial<ILanguagesState>>());
export const languagesFetchingError = createAction('LANGUAGE_FETCHING_ERROR', withPayloadType<Partial<ILanguagesState>>());
