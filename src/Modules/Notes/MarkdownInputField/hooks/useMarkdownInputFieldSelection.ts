import { useRef } from 'react';
import { ISelectionOption } from '../Models';
import { useMarkdownInputField } from './useMarkdownInputField';

/**
 * Custom hook.
 * @param {React.RefObject<HTMLTextAreaElement>} [textareaRef] - Textarea ref.
 *
 */
export function useMarkdownInputFieldSelection(
    textareaRef: React.RefObject<HTMLTextAreaElement>
): {
    getSelection: () => ISelectionOption;
    setSelection: (selection: ISelectionOption) => void;
    getLastSelection: () => ISelectionOption;
} {
    const selectionRef = useRef({ start: null, end: null });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getTextareaElement = () => useMarkdownInputField(textareaRef);

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
     * @param {ISelectionOption} [selection] - Curent selection.
     */
    const setSelection = (selection: ISelectionOption) => {
        const input = getTextareaElement();

        if (!input) {
            return;
        }
        if (selection.end === undefined) {
            // eslint-disable-next-line no-param-reassign
            selection.end = selection.start;
        }
        setTimeout(() => input.setSelectionRange(selection.start, selection.end), 0);
        selectionRef.current = getSelection();
    };
    return { getSelection, getLastSelection, setSelection };
}
