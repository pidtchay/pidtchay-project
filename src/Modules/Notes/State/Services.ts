import { GET, POST } from 'Core/Services';
import { INote } from 'Modules/Notes/Models';

export const NotesServices = {
    getData: GET<{ notes: INote[] }>('/notes/getData'),
    getDataById: GET<{ note: INote }, { entityGUID: string }>('/notes/getDataById'),
    create: POST<{ note: INote }, { note: INote }>('/note/create')
};
