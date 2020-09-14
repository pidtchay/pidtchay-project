import { combineReducers } from 'redux';
import { reducer } from './markdown_notes/reducer';
import { systemReducer } from './system/reducers';

export const rootReducer = combineReducers({
    system: systemReducer,
    markdownNotes: reducer
});

export type RootState = ReturnType<typeof rootReducer>;
