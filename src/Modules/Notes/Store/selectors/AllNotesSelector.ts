import { INoteData } from 'Modules/Notes/Models';
import { NotesServices } from 'Modules/Notes/Services';
import { selector } from 'recoil';

/**
 * Recoil selector: get all notes list.
 */
export const AllNotesSelector = selector<INoteData[]>({
    key: 'getAllNotes',
    get: async () => {
        const response = await NotesServices.getData();
        return response.notes;
    }
});
