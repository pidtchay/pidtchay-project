import moment from 'moment';
import { uuid } from 'uuidv4';
import { DATE_TIME_FORMAT, EVENT_DELAY } from 'Constants/Common';
import { INote } from 'Container/Markdown/Models';
import { listNotesSlice } from './slice';

const { fetchNotes, fetchedNotes, fetchingError } = listNotesSlice.actions;

export const getNotesData = () => {
    return async (dispatch) => {
        dispatch(fetchNotes);
        await new Promise<INote[]>((res, rej) => {
            res([
                {
                    id: uuid(),
                    createDate: moment(new Date()).format(DATE_TIME_FORMAT),
                    title: 'Title',
                    text: '1ju7OW3uOhy0oYqLTiEPNg==',
                    isEncrypted: true
                },
                {
                    id: uuid(),
                    createDate: moment(new Date()).format(DATE_TIME_FORMAT),
                    title: 'Title',
                    text: '# Header\n>this decrypted note.',
                    isEncrypted: false
                }
            ]);

            setTimeout(() => {
                rej('Timeout error');
            }, EVENT_DELAY);
        })
            .then((notes) => {
                dispatch(fetchedNotes({ notes }));
            })
            .catch((error) => {
                dispatch(fetchingError({ error }));
            });
    };
};
