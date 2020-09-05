/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-description */
import React, { useRef, useState, useEffect } from 'react';
import { IMarkdownNote, SpecialSyntaxRules } from 'Container/Markdown/Models';
import { ESpecialSyntax, ESyntaxType, EOperationType } from 'Container/Markdown/enums';
import { openNotificationWithIcon, convertStringArrayToString } from 'Utils/common';
import { useLiteralValue } from 'Utils/hooks';

export interface ITextareaSelection {
    start?: number;
    end?: number;
    length?: number;
}

interface ITextareaState {
    selection: ITextareaSelection;
    noteText: string;
    noteSyntax: string;
    noteTitle?: string;
}
/**
 * @param {unknown} [textareaRef] - Textarea ref.
 */
export function useTextAreaElement(textareaRef: React.RefObject<HTMLTextAreaElement>): HTMLTextAreaElement | null {
    const textarea = textareaRef.current;
    if (!textarea) {
        return null;
    }

    return textarea;
}

/**
 * @param {unknown} [textareaRef] - Textarea ref.
 */
export function useTextareaSelection(textareaRef) {
    const selectionRef = useRef({ start: null, end: null });
    const getTextareaElement = () => useTextAreaElement(textareaRef);

    /**
     * Get current textarea selection.
     */
    const getSelection = () => {
        const input = getTextareaElement();
        if (input) {
            const start = input.selectionStart;
            const end = input.selectionEnd;
            return {
                start,
                end,
                length: end - start
            };
        }
        return selectionRef.current;
    };

    /**
     * Get last textarea selection.
     */
    const getLastSelection = () => selectionRef.current;

    /**
     * Set current textarea selection.
     *
     * @param {ITextareaSelection} [selection] - Curent selection.
     */
    const setSelection = (selection: ITextareaSelection) => {
        const input = getTextareaElement();

        if (!input) {
            return;
        }
        if (selection.end === undefined) {
            selection.end = selection.start;
        }
        setTimeout(() => input.setSelectionRange(selection.start, selection.end), 0);
        selectionRef.current = getSelection();
    };
    return { getSelection, getLastSelection, setSelection };
}

/**
 * Custom textarea field state hook.
 *
 * @param {IMarkdownNote} [data] - These notes that are being edited.
 */
export function useTextAreaState(data?: IMarkdownNote) {
    const textareaRef = useRef<HTMLTextAreaElement>();
    const { getSelection, getLastSelection, setSelection } = useTextareaSelection(textareaRef);
    const { noteText, noteSyntax, prevNoteText, prevNoteSyntax, title, prevNoteTitle, changeValue } = useMarkdownNote(data?.title, data?.text);

    const getLastState = (): ITextareaState => ({
        selection: getLastSelection(),
        noteText: prevNoteText,
        noteSyntax: prevNoteSyntax,
        noteTitle: prevNoteTitle
    });

    const getState = (): ITextareaState => ({
        selection: getSelection(),
        noteText: noteText,
        noteSyntax: noteSyntax,
        noteTitle: title
    });

    const setState = (selection: ITextareaSelection, value: string) => {
        setSelection(selection);
        changeValue(value);
    };

    const setStateSyntax = (selection: ITextareaSelection, value: string, syntax: string) => {
        setSelection(selection);
        changeValue(value, syntax);
    };

    /**
     * @param {ITextareaState} [currentState] - Current textarea state.
     * @param {ITextareaState} [prevState] - Preview textarea state.
     */
    const processChange = (currentState: ITextareaState, prevState: ITextareaState): ITextareaState => {
        const { selection, noteText, noteSyntax } = currentState;
        const prevSelection = prevState.selection;
        const cursorPosition = Math.min(prevSelection.start, selection.start);

        if (selection.end > prevSelection.start) {
            return {
                noteText,
                noteSyntax,
                selection: { start: selection.start, end: selection.end }
            };
        }
        return {
            noteText,
            noteSyntax,
            selection: { start: cursorPosition, end: cursorPosition }
        };
    };

    const processChangeSyntax = (currentState: ITextareaState, prevState: ITextareaState, syntaxValue: string): ITextareaState => {
        let selection: ITextareaSelection = { start: null, end: null };
        let newValue = '';
        if (syntaxValue) {
            const exist = SpecialSyntaxRules.find((x) => x.value === syntaxValue);
            if (exist) {
                const startValue = noteText.substring(0, currentState.selection.start);
                const endValue = noteText.substring(currentState.selection.end);
                if (exist.type === ESyntaxType.PREFIX && exist.operation === EOperationType.PLUS) {
                    newValue = `${startValue}${exist.value}${' '.repeat(exist.position)}${endValue}`;
                    selection = { start: currentState.selection.start + exist.value.length + exist.position, end: currentState.selection.start + exist.value.length + exist.position };
                }
                if (exist.type === ESyntaxType.COVERED && exist.operation === EOperationType.MINUS) {
                    newValue = `${startValue}${exist.value}${endValue}`;
                    selection = { start: currentState.selection.start + exist.position, end: currentState.selection.start + exist.position };
                }
            }
        }
        const newSelection = processChange({ ...currentState, selection }, prevState);
        return {
            noteSyntax: syntaxValue,
            noteText: newValue,
            selection: newSelection.selection
        };
    };

    return { textareaRef, noteText, noteSyntax, title, getLastState, getState, setState, setStateSyntax, processChange, processChangeSyntax };
}

/**
 * Custom markdown note state hook.
 *
 * @param {string} [noteTitle] - Note title value.
 * @param {string} [noteValue] - Note text value.
 */
export function useMarkdownNote(noteTitle: string, noteValue: string) {
    const TITLE_MAX_LENGTH = 120;

    const [title, setTitle] = useState(noteTitle || '');
    const [noteText, setNoteText] = useState(noteValue || `${ESpecialSyntax.HEADER} `);
    const [noteSyntax, setNoteSyntax] = useState('');
    const [prevNoteText, setPrevNoteText] = useState('');
    const [prevNoteSyntax, setPrevNoteSyntax] = useState('');
    const [prevNoteTitle, setPrevNoteTitle] = useState('');

    useEffect(() => setPrevNoteText(noteText), [noteText]);
    useEffect(() => setPrevNoteSyntax(noteSyntax), [noteSyntax]);
    useEffect(() => setPrevNoteTitle(title), [title]);

    const changeValue = (value: string, syntax = '') => {
        const lines = value.split('\n');
        const newTitle = lines[0].length <= TITLE_MAX_LENGTH ? lines[0] : lines[0].substring(0, TITLE_MAX_LENGTH);
        if (newTitle !== title) {
            setTitle(newTitle);
        }
        setTitle(value.split('\n')[0]);
        setNoteText(value);
        setNoteSyntax(syntax);
    };

    return { noteText, noteSyntax, prevNoteText, prevNoteSyntax, title, prevNoteTitle, changeValue };
}

/**
 * Custom cryptography state hook.
 */
export function useNotePassword() {
    const { getValue: getLiteralValue } = useLiteralValue();
    const [passwd, setPasswd] = useState('');
    const [isPasswordEnable, setPasswordEnable] = useState(false);

    const changePassword = (password: string) => {
        setPasswd(password);
    };

    const verifyPassword = (): boolean => {
        if (passwd === null || passwd === undefined) {
            openNotificationWithIcon({
                description: convertStringArrayToString(getLiteralValue('Notification.passPhrase.description')),
                title: convertStringArrayToString(getLiteralValue('Notification.passPhrase.title')),
                type: 'error'
            });
            return false;
        }
        if (passwd.length < 8) {
            openNotificationWithIcon({
                description: convertStringArrayToString(getLiteralValue('Notification.passPhrase.minimumLength.description')),
                title: convertStringArrayToString(getLiteralValue('Notification.passPhrase.minimumLength.title')),
                type: 'warning'
            });
            return false;
        }
        return true;
    };

    const togglePasswordEnable = () => setPasswordEnable(!isPasswordEnable);

    return { passwd, isPasswordEnable, changePassword, verifyPassword, togglePasswordEnable };
}
