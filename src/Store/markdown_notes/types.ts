import { IMarkdownNote } from 'Container/Markdown/Models';
import { EMarkdownStep } from 'Container/Markdown/enums';

export const CREATE_NOTE = 'CREATE_NOTE';
export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const SET_MARKDOWD_STEP = 'SET_MARKDOWD_STEP';
export const SET_MARKDOWD_TEXT = 'SET_MARKDOWD_TEXT';

interface ISetCurrentNote {
    type: typeof SET_CURRENT_NOTE;
    payload: IMarkdownNote;
}

interface ICreateNote {
    type: typeof CREATE_NOTE;
    payload: IMarkdownNote;
}

interface IUpdateNote {
    type: typeof UPDATE_NOTE;
    payload: string;
}

interface ISetStep {
    type: typeof SET_MARKDOWD_STEP;
    payload: EMarkdownStep;
}

interface ISetMarkdownText {
    type: typeof SET_MARKDOWD_TEXT;
    payload: string;
}

export type TMarkdownNoteActionTypes = ISetCurrentNote | ICreateNote | IUpdateNote | ISetStep | ISetMarkdownText;
