/* eslint-disable */
import { TMarkdownNoteActionTypes, CREATE_NOTE, UPDATE_NOTE, SET_CURRENT_NOTE, SET_MARKDOWD_STEP, SET_MARKDOWD_TEXT } from './types';
import { IMarkdownNoteContext } from 'Container/Markdown/Models';
import { EMarkdownStep } from 'Container/Markdown/enums';
import { uuid } from 'uuidv4';
import moment from 'moment';
import { DATE_TIME_FORMAT } from 'Constants/Common';

const initialState: IMarkdownNoteContext = {
    currentNote: null,
    notes: [
        {
            id: uuid(),
            createDate: moment(new Date()).format(DATE_TIME_FORMAT),
            title: 'Title',
            text: '1ju7OW3uOhy0oYqLTiEPNg==',
            isEncrypted: true
        },
        {
            id: uuid(),
            createDate: moment(new Date()).format(DATE_TIME_FORMAT),
            title: 'Title',
            text: '# Header\n>this decrypted note.',
            isEncrypted: false
        }
    ],
    step: EMarkdownStep.LIST,
    markdownText: ''
};

export function reducer(state: IMarkdownNoteContext = initialState, action: TMarkdownNoteActionTypes) {
    switch (action.type) {
        case CREATE_NOTE: {
            const addedNotes = [...state.notes, action.payload];
            return {
                ...state,
                notes: addedNotes
            };
        }
        case UPDATE_NOTE: {
            const updatedNote = {
                ...action.payload
            };

            const updatedNotesIndex = state.notes.findIndex((note) => note.id === state.currentNote.id);

            const updatedNotes = [...state.notes.slice(0, updatedNotesIndex), updatedNote, ...state.notes.slice(updatedNotesIndex + 1)];

            return {
                currentNote: null,
                notes: updatedNotes
            };
        }
        case SET_CURRENT_NOTE:
            return {
                ...state,
                currentNote: action.payload
            };
        case SET_MARKDOWD_STEP: {
            return {
                ...state,
                step: action.payload
            };
        }
        case SET_MARKDOWD_TEXT: {
            return {
                ...state,
                markdownText: action.payload
            };
        }
        default:
            return state;
    }
}
