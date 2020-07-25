/* eslint-disable jsdoc/require-returns */
import { useRef, useCallback } from 'react';
import { setInputSelection, getInputSelection } from './utils';

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
