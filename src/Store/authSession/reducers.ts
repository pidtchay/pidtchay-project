import { createReducer } from '@reduxjs/toolkit';
import { changeAuthSession, cleanAuthSession } from './actions';
import { initialState } from './state';

export const authSessionReducer = createReducer(initialState, {
    [cleanAuthSession.type]: (state) => {
        state.authenticated = false;
        state.session = '';
        state.userName = '';
    },
    [changeAuthSession.type]: (state, action) => {
        console.debug({ state, action });
        state = { ...state, ...action.payload };
    }
});
