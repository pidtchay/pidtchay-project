/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultState, TInitialState } from './NotesContext';

export const notesSlice = createSlice({
    name: 'NOTES_LIST',
    initialState: defaultState,
    reducers: {
        getDate: (state: TInitialState, action: PayloadAction<TInitialState>) => {
            state.notes = action.payload.notes;
        },
        clearData: (state: TInitialState) => {
            state.notes = [];
        }
    }
});
