import { GET, POST } from 'Core/Services';
import { INoteData } from 'Modules/Notes/Models';

export const NotesServices = {
    getData: GET<{ notes: INoteData[] }>('/notes/getData'),
    getDataById: GET<{ note: INoteData }, { entityGUID: string }>('/note/get'),
    create: POST<{ note: INoteData }, { note: INoteData }>('/note/create'),
    update: POST<{ note: INoteData }, { note: INoteData }>('/note/update')
};
