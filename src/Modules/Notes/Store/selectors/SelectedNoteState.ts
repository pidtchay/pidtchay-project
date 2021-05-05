import { INoteData } from 'Modules/Notes/Models';
import { NotesListStateAtom } from 'Modules/Notes/Store/atoms/NoteListState';
import { SelectedNoteGuidStateAtom } from 'Modules/Notes/Store/atoms/SelectedNoteGuiState';
import { selector } from 'recoil';

/**
 * Recoil selector: get state of selected note.
 */
export const SelectedNoteStateSelector = selector<INoteData | null>({
    key: 'selectedNoteState',
    get: ({ get }) => {
        const selectedGuid = get(SelectedNoteGuidStateAtom);
        if (!selectedGuid) {
            return null;
        }

        const list = get(NotesListStateAtom);
        if (!list) {
            return null;
        }
        const note = list.find((item) => item.id === selectedGuid);
        return note;
    },
    set: ({ set, get }, newValue) => {
        const items = get(NotesListStateAtom);
        if (!items) {
            return null;
        }
        const current = { ...newValue } as INoteData;
        const updatedNotesIndex = items.findIndex((note) => note.id === current.id);
        if (updatedNotesIndex !== -1) {
            const updatedNotes = [...items.slice(0, updatedNotesIndex), current, ...items.slice(updatedNotesIndex + 1)];
            set(NotesListStateAtom, updatedNotes);
        } else {
            set(NotesListStateAtom, [...items, current]);
        }
    }
});
