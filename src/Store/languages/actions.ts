/* eslint-disable jsdoc/require-returns */
import { createAction } from '@reduxjs/toolkit';
import { withPayloadType } from 'Store/utils';
import { ILanguagesState } from './state';

export const languagesFetching = createAction('LANGUAGE_FETCHING');
export const languagesFetched = createAction('LANGUAGE_FETCHED', withPayloadType<Partial<ILanguagesState>>());
export const languagesFetchingError = createAction('LANGUAGE_FETCHING_ERROR', withPayloadType<Partial<ILanguagesState>>());
