import { createAction } from '@reduxjs/toolkit';
import { withPayloadType } from 'Store/utils';
import { IInitialState } from './state';

export const listRepositoriesFetching = createAction('LIST_REPOSITORIES_FETCHING');
export const listRepositoriesFetched = createAction('LIST_REPOSITORIES_FETCHED', withPayloadType<Partial<IInitialState>>());
export const listRepositoriesFetchingError = createAction('LIST_REPOSITORIES_FETCH_ERROR', withPayloadType<Partial<IInitialState>>());
export const listRepositoriesClean = createAction('LIST_REPOSITORIES_CLEAR');
