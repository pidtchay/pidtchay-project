import { INote } from 'Modules/Notes/Models';
import { useState, useEffect } from 'react';
import { ESpecialSyntax } from '../enums';

/**
 * Custom markdown note state hook.
 *
 * @param {string} [noteTitle] - Note title value.
 * @param {string} [noteValue] - Note text value.
 */
export function useMarkdownNote(
    noteTitle: string,
    noteValue: string
): {
    note: INote;
    noteSyntax: string;
    prevNote: INote;
    prevNoteSyntax: string;
    getTitle: (value: string) => string;
    changeValue: (value: string, syntax?: string) => void;
} {
    const TITLE_MAX_LENGTH = 120;
    const [note, setNote] = useState<INote>({ title: noteTitle || '', text: noteValue || `${ESpecialSyntax.HEADER} ` });
    const [noteSyntax, setNoteSyntax] = useState('');
    const [prevNote, setPrevNote] = useState<INote>(null);
    const [prevNoteSyntax, setPrevNoteSyntax] = useState('');

    useEffect(() => {
        setPrevNote(note);
        setPrevNoteSyntax(noteSyntax);
    }, [note, noteSyntax]);

    const getTitle = (value: string): string => {
        const lines = value.split('\n');
        return lines[0].length <= TITLE_MAX_LENGTH ? lines[0] : lines[0].substring(0, TITLE_MAX_LENGTH);
    };

    const changeValue = (value: string, syntax = '') => {
        if (value !== note.text) {
            setNote({ text: value, title: getTitle(value) });
            setNoteSyntax(syntax);
        }
    };

    return { note, noteSyntax, prevNote, prevNoteSyntax, getTitle, changeValue };
}
