import { EState, IError } from 'Constants/Common';
import { EFormStep, ESyntaxType, ESpecialSyntax, EOperationType } from 'Container/Markdown/enums';

/**
 * Data model markdown notes.
 *
 * @property {string} [id] UUID.
 * @property {string} [createDate] Create date time.
 * @property {string} [title] Note title.
 * @property {string} [text] Note text.
 * @property {string} [isEncrypted] Encryp flag.
 */
export interface INote {
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
 * @property {EFormStep} [step] Current step of working with notes.
 */
export interface INotesSectionData {
    currentNote: INote;
    notes: INote[];
    markdownText?: string;
    step?: EFormStep;
}

export interface INotesSectionContext {
    data: INotesSectionData;
    state: EState;
    errors: IError[];
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
