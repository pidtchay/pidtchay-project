/* eslint-disable jsdoc/require-returns */
import { createAction } from '@reduxjs/toolkit';
import { IInitialState } from './state';

/**
 * Return Payload Type.
 */
export function withPayloadType<T>() {
    return (t: T) => ({ payload: t });
}

export const listRepositoriesFetching = createAction('LIST_REPOSITORIES_FETCHING');
export const listRepositoriesFetched = createAction('LIST_REPOSITORIES_FETCHED', withPayloadType<Partial<IInitialState>>());
export const listRepositoriesFetchingError = createAction('LIST_REPOSITORIES_FETCH_ERROR', withPayloadType<Partial<IInitialState>>());
export const listRepositoriesClean = createAction('LIST_REPOSITORIES_CLEAR');
