import { Dispatch } from 'redux';
import { EMarkdownStep, ESyntaxType, ESpecialSyntax, EOperationType } from 'Container/Markdown/enums';
import { TMarkdownNoteActionTypes } from 'Store/markdown_notes/types';

/**
 * Data model markdown notes.
 *
 * @property {string} [id] UUID.
 * @property {string} [createDate] Create date time.
 * @property {string} [title] Note title.
 * @property {string} [text] Note text.
 * @property {string} [isEncrypted] Encryp flag.
 */
export interface IMarkdownNote {
    id: string;
    createDate: string;
    title: string;
    text: string;
    isEncrypted?: boolean;
}

/**
 * TODO why are some fields able to be null?
 *
 * @property {IMarkdownNote} [currentNote] Selected note.
 * @property {Array<IMarkdownNote>} [notes] Notes list.
 * @property {string} [markdownText] Current markdown text.
 * @property {EMarkdownStep} [step] Current step of working with notes.
 * @property {Dispatch<TMarkdownNoteActionTypes>} [dispatch] Redux-actions.
 */
export interface IMarkdownNoteContext {
    currentNote: IMarkdownNote;
    notes: IMarkdownNote[];
    markdownText?: string;
    step?: EMarkdownStep;
    dispatch?: Dispatch<TMarkdownNoteActionTypes>;
}

export interface ISpecialSyntaxConfig {
    type: ESyntaxType;
    value: ESpecialSyntax;
    operation: EOperationType;
    position?: number;
}

export const SpecialSyntaxRules: ISpecialSyntaxConfig[] = [
    {
        type: ESyntaxType.PREFIX,
        operation: EOperationType.PLUS,
        value: ESpecialSyntax.HEADER,
        position: 1
    },
    {
        type: ESyntaxType.COVERED,
        operation: EOperationType.MINUS,
        value: ESpecialSyntax.BOLD,
        position: 2
    },
    {
        type: ESyntaxType.COVERED,
        operation: EOperationType.MINUS,
        value: ESpecialSyntax.ITALIAN,
        position: 1
    },
    {
        type: ESyntaxType.COVERED,
        operation: EOperationType.MINUS,
        value: ESpecialSyntax.STRIKETHROUGH,
        position: 2
    },
    {
        type: ESyntaxType.PREFIX,
        operation: EOperationType.PLUS,
        value: ESpecialSyntax.BLOCK_QUOTE,
        position: 1
    },
    {
        type: ESyntaxType.COVERED,
        operation: EOperationType.MINUS,
        value: ESpecialSyntax.BLOCK_CODE,
        position: 4
    },
    {
        type: ESyntaxType.PREFIX,
        operation: EOperationType.HOLD,
        value: ESpecialSyntax.BLOCK_TABLE,
        position: 0
    }
];
