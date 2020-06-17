import { systemReducer } from './system/reducers';
import { combineReducers } from 'redux';
import { repositoryReducer } from './repository/reducers';
import { literalsReducer } from './literals/reducers';

export const rootReducer = combineReducers({
    system: systemReducer,
    repository: repositoryReducer,
    literals: literalsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
