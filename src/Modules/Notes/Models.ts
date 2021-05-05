import { ESyntaxType, ESpecialSyntax, EOperationType } from 'Modules/Notes/enums';

export interface INodeQueryStringParams {
    id: string;
}

export interface INote {
    title: string;
    text: string;
}

export interface INoteData extends INote {
    id: string;
    startDate: string;
    lastUpdate: string;
}

/**
 * @prop {number} [start]
 * @prop {number} [end]
 * @prop {nimber} [length]
 */
export interface ISelectionOption {
    start?: number;
    end?: number;
    length?: number;
}

/**
 * @prop {ISelectionOption} selection
 * @prop {INote} note
 * @prop {string} noteSyntax
 */
export interface IMarkdownInputFieldState {
    selection: ISelectionOption;
    note: INote;
    noteSyntax: string;
}

interface ISpecialSyntaxConfig {
    type: ESyntaxType;
    value: ESpecialSyntax;
    operation: EOperationType;
    position?: number;
}

export const SpecialSyntaxRules: ISpecialSyntaxConfig[] = [
    {
        type: ESyntaxType.PREFIX,
        operation: EOperationType.PLUS,
        value: ESpecialSyntax.HEADER1,
        position: 1
    },
    {
        type: ESyntaxType.PREFIX,
        operation: EOperationType.PLUS,
        value: ESpecialSyntax.HEADER2,
        position: 2
    },
    {
        type: ESyntaxType.PREFIX,
        operation: EOperationType.PLUS,
        value: ESpecialSyntax.HEADER3,
        position: 3
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
        operation: EOperationType.MINUS,
        value: ESpecialSyntax.IMAGE,
        position: 10
    },
    {
        type: ESyntaxType.PREFIX,
        operation: EOperationType.MINUS,
        value: ESpecialSyntax.HYPER_LINK,
        position: 10
    }
];
