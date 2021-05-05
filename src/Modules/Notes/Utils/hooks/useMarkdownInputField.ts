/**
 * Custom hook.
 * @param {React.RefObject<HTMLTextAreaElement>} fieldRef - Textarea ref.
 * @returns {HTMLTextAreaElement | null} Field or null.
 */
export const useMarkdownInputField = (fieldRef: React.RefObject<HTMLTextAreaElement>): HTMLTextAreaElement | null => {
    const field = fieldRef.current;
    if (!field) {
        return null;
    }
    return field;
};
