import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EState, IError } from 'Constants/Common';
import { INote, INotesSectionData } from 'Container/Markdown/Models';
import { EFormStep } from 'Container/Markdown/enums';
import { initialState } from './state';

export const listNotesSlice = createSlice({
    name: 'LIST_NOTES',
    initialState: initialState,
    reducers: {
        fetchNotes: (state) => {
            state.state = EState.REQUESTING;
        },
        fetchedNotes: (state, action: PayloadAction<Partial<INotesSectionData>>) => {
            state.data.notes = action.payload.notes;
            state.state = EState.SUCCESS;
        },
        fetchingError: (state, action: PayloadAction<{ error: IError }>) => {
            state.data.notes = [];
            state.state = EState.FAILED;
            state.errors.push(action.payload.error);
        },
        createNote: (state, action: PayloadAction<INote>) => {
            // CREATE_NOTE
            const addedNotes = [...state.data.notes, action.payload];
            state.data.notes = addedNotes;
        },
        updateNote: (state, action: PayloadAction<INote>) => {
            // UPDATE_NOTE
            const updatedNote = {
                ...action.payload
            };

            const updatedNotesIndex = state.data.notes.findIndex((note) => note.id === state.data.currentNote.id);
            const updatedNotes = [...state.data.notes.slice(0, updatedNotesIndex), updatedNote, ...state.data.notes.slice(updatedNotesIndex + 1)];

            state.data.currentNote = null;
            state.data.notes = updatedNotes;
        },
        changeNode: (state, action: PayloadAction<INote>) => {
            // CHANGE_CURRENT_NOTE
            state.data.currentNote = action.payload;
        },
        changeNoteText: (state, action: PayloadAction<string>) => {
            // SET_MARKDOWD_TEXT
            state.data.markdownText = action.payload;
        },
        changeStep: (state, action: PayloadAction<EFormStep>) => {
            // SET_MARKDOWD_STEP
            state.data.step = action.payload;
        }
    }
});
