import { INote } from 'Modules/Notes/Models';
import { useRef } from 'react';
import { ESyntaxType, EOperationType } from '../enums';
import { IMarkdownInputFieldState, ISelectionOption, SpecialSyntaxRules } from '../Models';
import { useMarkdownInputFieldSelection } from './useMarkdownInputFieldSelection';
import { useMarkdownNote } from './useMarkdownNote';

/**
 * Custom textarea field state hook.
 *
 * @param {INote} [data] - These notes that are being edited.
 */
export function useTextAreaState(data?: INote) {
    const textareaRef = useRef<HTMLTextAreaElement>();
    const { getSelection, getLastSelection, setSelection } = useMarkdownInputFieldSelection(textareaRef);
    const { note, noteSyntax, prevNoteSyntax, prevNote, getTitle, changeValue } = useMarkdownNote(data?.title, data?.text);

    const getLastState = (): IMarkdownInputFieldState => ({
        selection: getLastSelection(),
        note: prevNote,
        noteSyntax: prevNoteSyntax
    });

    const getState = (): IMarkdownInputFieldState => ({
        selection: getSelection(),
        note,
        noteSyntax
    });

    const setState = (selection: ISelectionOption, value: string, syntax: string) => {
        setSelection(selection);
        changeValue(value, syntax);
    };

    /**
     * Process change.
     * @param {IMarkdownInputFieldState} [currentState] - Current textarea state.
     * @param {IMarkdownInputFieldState} [prevState] - Preview textarea state.
     */
    const processChange = (currentState: IMarkdownInputFieldState, prevState: IMarkdownInputFieldState): IMarkdownInputFieldState => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { selection, note, noteSyntax } = currentState;
        const prevSelection = prevState.selection;
        const cursorPosition = Math.min(prevSelection.start, selection.start);

        if (selection.end > prevSelection.start) {
            return {
                note,
                noteSyntax,
                selection: { start: selection.start, end: selection.end }
            };
        }
        return {
            note,
            noteSyntax,
            selection: { start: cursorPosition, end: cursorPosition }
        };
    };

    const processChangeSyntax = (
        currentState: IMarkdownInputFieldState,
        prevState: IMarkdownInputFieldState,
        syntaxValue: string
    ): IMarkdownInputFieldState => {
        let selection: ISelectionOption = { start: null, end: null };
        let newValue = '';
        if (syntaxValue) {
            const exist = SpecialSyntaxRules.find((x) => x.value === syntaxValue);
            if (exist) {
                const startValue = note.text.substring(0, currentState.selection.start);
                const endValue = note.text.substring(currentState.selection.end);
                if (exist.type === ESyntaxType.PREFIX && exist.operation === EOperationType.PLUS) {
                    newValue = `${startValue}${exist.value}${' '.repeat(exist.position)}${endValue}`;
                    selection = {
                        start: currentState.selection.start + exist.value.length + exist.position,
                        end: currentState.selection.start + exist.value.length + exist.position
                    };
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
            note: {
                title: getTitle(newValue),
                text: newValue
            },
            selection: newSelection.selection
        };
    };

    return { textareaRef, note, noteSyntax, getLastState, getState, setStateSyntax: setState, processChange, processChangeSyntax };
}
