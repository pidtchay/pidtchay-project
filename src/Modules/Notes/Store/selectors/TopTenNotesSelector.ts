import { selector } from 'recoil';
import { NotesListStateAtom } from '../atoms/NoteListState';

export const TopTenNotesSelector = selector({
    key: 'getTop10Notes',
    get: ({ get }) => {
        const items = get(NotesListStateAtom);
        if (!items) {
            return null;
        }

        return items.slice(0, 10);
    }
});
