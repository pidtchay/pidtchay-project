import { atom } from 'recoil';

/**
 * Recoil atom: get current note GUID state.
 */
export const SelectedNoteGuidStateAtom = atom({
    key: 'SELECTED_NOTE_GUID_STATE',
    default: ''
});
