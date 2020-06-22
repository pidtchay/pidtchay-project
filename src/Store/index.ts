import { combineReducers } from 'redux';
import { literalsReducer } from './literals/reducers';
import { repositoryReducer } from './repository/reducers';
import { systemReducer } from './system/reducers';

export const rootReducer = combineReducers({
    system: systemReducer,
    repository: repositoryReducer,
    literals: literalsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
