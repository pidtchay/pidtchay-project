import { INoteData } from 'Modules/Notes/Models';
import moment from 'moment';
import { selector } from 'recoil';
import { NotesListStateAtom } from '../atoms/NoteListState';

export const TopTenLatestNotesSelector = selector<INoteData[] | null>({
    key: 'getTop10LatestNotes',
    get: ({ get }) => {
        const items = get(NotesListStateAtom);
        if (!items) {
            return null;
        }

        return (items || [])
            .slice()
            .sort((left, right) => moment.utc(left.lastUpdate).diff(moment.utc(right.lastUpdate)))
            .slice(0, 10);
    }
});
