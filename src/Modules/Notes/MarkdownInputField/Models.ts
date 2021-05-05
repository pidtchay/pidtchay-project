import { INote } from '../Models';
import { ESyntaxType, ESpecialSyntax, EOperationType } from './enums';

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
