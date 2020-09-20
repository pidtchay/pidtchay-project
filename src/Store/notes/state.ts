import moment from 'moment';
import { uuid } from 'uuidv4';
import { DATE_TIME_FORMAT, EState } from 'Constants/Common';
import { INotesSectionContext } from 'Container/Markdown/Models';
import { EFormStep } from 'Container/Markdown/enums';

export const initialState: INotesSectionContext = {
    data: {
        currentNote: null,
        notes: [
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
        ],
        step: EFormStep.LIST,
        markdownText: ''
    },
    state: EState.NONE,
    errors: []
};
