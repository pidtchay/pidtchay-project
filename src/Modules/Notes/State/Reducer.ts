/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INoteData } from 'Modules/Notes/Models';
import { defaultState } from './NotesContext';

type TNotePayload = {
    note: INoteData;
};

type TNotesPayload = {
    notes: INoteData[];
};

export const notesSlice = createSlice({
    name: 'NOTES_SLICE',
    initialState: defaultState,
    reducers: {
        getData: (state, action: PayloadAction<TNotesPayload>) => {
            state.notes = action.payload.notes;
        },
        getDataById: (state, action: PayloadAction<TNotePayload>) => {
            state.details = action.payload.note;
        },
        create: (state, action: PayloadAction<TNotePayload>) => {
            const updatedNote = {
                ...action.payload.note
            };
            const updatedNotesIndex = state.notes.findIndex((note) => note.id === state.details.id);
            const updatedNotes = [...state.notes.slice(0, updatedNotesIndex), updatedNote, ...state.notes.slice(updatedNotesIndex + 1)];

            state.details = null;
            state.notes = updatedNotes;
        },
        clearData: (state) => {
            state.notes = [];
            state.details = null;
        }
    }
});
