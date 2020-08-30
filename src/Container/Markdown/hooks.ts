/* eslint-disable jsdoc/require-returns */
import { useRef, useCallback, useState } from 'react';
import { setInputSelection, getInputSelection } from 'Container/Markdown/utils';
import { IMarkdownNote } from './Models';
import { MarkdownSyntax } from './enums';

/**
 * Custom react hook.
 * Get last selection settings & set selection settings.
 *
 * @param {React.RefObject<HTMLTextAreaElement>} [inputRef] - Input element ref.
 */
export function useSelection(inputRef: React.RefObject<HTMLTextAreaElement>) {
    const selectRef = useRef({ start: null, end: null });

    const inputElement = inputRef.current;

    const getLastSelection = useCallback(() => {
        return selectRef.current;
    }, []);

    const setSelection = useCallback(
        (selection) => {
            setInputSelection(inputElement, selection.start, selection.end);
            selectRef.current = getInputSelection(inputElement);
        },
        [inputElement, getInputSelection]
    );

    return { getLastSelection, setSelection };
}

/**
 * Custom hook handles input value and syntax.
 *
 * @param {IMarkdownNote} [noteData] - Current note.
 */
export function useMarkdownNoteEdit(noteData: IMarkdownNote) {
    const TITLE_MAX_LENGTH = 120;

    const currentNote = noteData;
    // State
    const [title, setTitle] = useState(currentNote?.title || '');
    const [noteText, setNoteText] = useState(currentNote?.text || `${MarkdownSyntax.HEADER} `);
    const [currentSyntax, setCurrentSyntax] = useState('');

    const changeValue = (value: string, syntax = '') => {
        const lines = value.split('\n');
        const newTitle = lines[0].length <= TITLE_MAX_LENGTH ? lines[0] : lines[0].substring(0, TITLE_MAX_LENGTH);
        if (newTitle !== title) {
            setTitle(newTitle);
        }
        setNoteText(value);
        setCurrentSyntax(syntax);
    };

    const changeMarkdownSyntax = (syntax: string) => {
        const value = `${noteText}${syntax}`;
        changeValue(value, syntax);
    };

    return { noteText, currentSyntax, title, changeValue, changeMarkdownSyntax };
}
