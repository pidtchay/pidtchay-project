import { combineReducers } from 'redux';
import { literalsReducer } from './literals/reducers';
import { reducer } from './markdown_notes/reducer';
import { repositoryReducer } from './repository/reducers';
import { systemReducer } from './system/reducers';

export const rootReducer = combineReducers({
    system: systemReducer,
    repository: repositoryReducer,
    literals: literalsReducer,
    markdownNotes: reducer
});

export type RootState = ReturnType<typeof rootReducer>;
