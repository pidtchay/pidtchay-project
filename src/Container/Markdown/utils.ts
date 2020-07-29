import { ICursorPositionSettings } from 'Container/Markdown/Models';

/**
 * Input's selection settings.
 *
 * @property {number} [start] Cursor start position.
 * @property {number} [end] Cursor end position.
 * @property {number} [length] Length.
 */
interface ISelection {
    start: number;
    end: number;
    length: number;
}

/**
 * Set cursor selection in input element.
 *
 * @param {HTMLTextAreaElement} [input] - Input element.
 * @param {number} [start] - Cursor start position.
 * @param {number} [end] - Cursor end position.
 */
export function setInputSelection(
    input: HTMLTextAreaElement,
    start: number,
    end?: number
) {
    if (end == undefined) {
        end = start;
    }
    if (input !== undefined && typeof input.setSelectionRange === 'function') {
        input.setSelectionRange(start, end);
    }
}

/**
 * Return current selection settings of input element.
 *
 * @param {HTMLTextAreaElement} [input] - Input element.
 * @returns {ISelection} Selection settings.
 */
export function getInputSelection(input: HTMLTextAreaElement): ISelection {
    if (input === undefined) {
        return {
            start: null,
            end: null,
            length: null
        };
    }
    const { selectionStart, selectionEnd } = input;
    return {
        start: selectionStart,
        end: selectionEnd,
        length: selectionEnd - selectionStart
    };
}

/**
 * Will return the value by how much to move the cursor.
 *
 * @param {string} [syntax] - Selected markdown syntax.
 *
 * @returns {ICursorPositionSettings} Cursor position change settings.
 */
export const getSpacesInSyntax = (syntax: string): ICursorPositionSettings => {
    // needs to be added 1 space after syntax. example - header syntax.
    if (syntax.length === 1) {
        return {
            type: 'plus',
            spaces: 1
        };
    }
    // needs to be shifted 1 step back. example - italian syntax.
    if (syntax.length === 2) {
        return {
            type: 'minus',
            spaces: syntax.length / 2
        };
    }
    // needs to be shifted 2 steps back. example - bold syntax.
    if (syntax.length === 4) {
        return {
            type: 'minus',
            spaces: syntax.length / 2
        };
    }
    // needs to be shifted 3 steps back. example - bold syntax.
    if (syntax.length === 6) {
        return {
            type: 'minus',
            spaces: syntax.length / 2
        };
    }
    // needs to be shifted 4 steps back. example - bold syntax.
    if (syntax.length === 8) {
        return {
            type: 'minus',
            spaces: syntax.length / 2
        };
    }
    return {
        type: 'plus',
        spaces: 0
    };
};
