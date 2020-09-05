/* eslint-disable */
import { TMarkdownNoteActionTypes, CREATE_NOTE, UPDATE_NOTE, SET_CURRENT_NOTE, SET_MARKDOWD_STEP, SET_MARKDOWD_TEXT } from './types';
import { IMarkdownNote } from 'Container/Markdown/Models';
import { EMarkdownStep } from 'Container/Markdown/enums';

export function createNote(note: IMarkdownNote): TMarkdownNoteActionTypes {
    return {
        type: CREATE_NOTE,
        payload: note
    };
}

export function updateNote(note: IMarkdownNote): TMarkdownNoteActionTypes {
    return {
        type: UPDATE_NOTE,
        payload: note
    };
}

export function setCurrentNote(note: IMarkdownNote): TMarkdownNoteActionTypes {
    return {
        type: SET_CURRENT_NOTE,
        payload: note
    };
}

export function setMarkdownStep(step: EMarkdownStep): TMarkdownNoteActionTypes {
    return {
        type: SET_MARKDOWD_STEP,
        payload: step
    };
}

export function setMarkdownText(text: string): TMarkdownNoteActionTypes {
    return {
        type: SET_MARKDOWD_TEXT,
        payload: text
    };
}
