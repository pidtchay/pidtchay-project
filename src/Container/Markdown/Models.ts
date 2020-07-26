import { TMarkdownNoteActionTypes } from 'Store/markdown_notes/types';
import { EMarkdownStep } from './enums';

/**
 * Cursor position settings.
 *
 * @property {'plus' | 'minus'} [type] Type of action to be performed.
 * @property {number} [spaces] Number of spaces.
 */
export interface ICursorPositionSettings {
    type: 'plus' | 'minus';
    spaces: number;
}

/**
 * Data model markdown notes.
 *
 * @property {string} [id] UUID.
 * @property {string} [createDate] Create date time.
 * @property {string} [text] Note text.
 */
export interface IMarkdownNote {
    id: string;
    createDate: string;
    text: string;
}

/**
 * TODO why are some fields able to be null?
 *
 * @property {IMarkdownNote} [currentNote] Selected note.
 * @property {Array<IMarkdownNote>} [notes] Notes list.
 * @property {string} [markdownText] Current markdown text.
 * @property {EMarkdownStep} [step] Current step of working with notes.
 * @property {React.Dispatch<TMarkdownNoteActionTypes>} [dispatch] Redux-actions.
 */
export interface IMarkdownNoteContext {
    currentNote: IMarkdownNote;
    notes: IMarkdownNote[];
    markdownText?: string;
    step?: EMarkdownStep;
    dispatch?: React.Dispatch<TMarkdownNoteActionTypes>;
}
