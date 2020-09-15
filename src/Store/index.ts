import { combineReducers } from 'redux';
import { reducer } from './markdown_notes/reducer';

export const rootReducer = combineReducers({
    markdownNotes: reducer
});

export type RootState = ReturnType<typeof rootReducer>;
