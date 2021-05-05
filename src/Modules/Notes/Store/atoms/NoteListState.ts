import { INoteData } from 'Modules/Notes/Models';
import { AllNotesSelector } from 'Modules/Notes/Store/selectors/AllNotesSelector';
import { atom } from 'recoil';

/**
 * Recoil atom: get notes list state.
 */
export const NotesListStateAtom = atom<INoteData[]>({
    key: 'noteListState',
    default: AllNotesSelector
});
