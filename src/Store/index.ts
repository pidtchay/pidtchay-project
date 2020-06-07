import { systemReducer } from './system/reducers';
import { combineReducers } from 'redux';
import { repositoryReducer } from './repository/reducers';

export const rootReducer = combineReducers({ system: systemReducer, repository: repositoryReducer });

export type RootState = ReturnType<typeof rootReducer>;
