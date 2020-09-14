import { createReducer } from '@reduxjs/toolkit';
import { languagesFetched, languagesFetching, languagesFetchingError } from './actions';
import { initialState } from './state';

export const languagesReducer = createReducer(initialState, {
    [languagesFetching.type]: (state) => {
        state.state = 'requesting';
    },
    [languagesFetched.type]: (state, action) => {
        state.state = 'success';
        state.languages = { ...action.payload.languages };
    },
    [languagesFetchingError.type]: (state, action) => {
        state.state = 'failed';
        state.errors = action.payload.errors;
    }
});
