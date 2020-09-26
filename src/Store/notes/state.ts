import { EState } from 'Constants/Common';
import { INotesSectionContext } from 'Container/Markdown/Models';
import { defaultContext } from 'Container/Markdown/NotesContext';

export const initialState: INotesSectionContext = {
    data: defaultContext,
    state: EState.NONE,
    errors: []
};
