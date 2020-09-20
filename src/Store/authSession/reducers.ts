import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ISystemState } from 'Model/Authenticate';
import { changeAuthSession, cleanAuthSession } from './actions';
import { initialState } from './state';

export const authSessionReducer = createReducer(initialState, {
    [cleanAuthSession.type]: (state) => {
        state.authenticated = false;
        state.session = '';
        state.userName = '';
    },
    [changeAuthSession.type]: (state, action: PayloadAction<ISystemState>) => {
        state.authenticated = action.payload.authenticated;
        state.session = action.payload.session;
        state.userName = action.payload.userName;
    }
});
