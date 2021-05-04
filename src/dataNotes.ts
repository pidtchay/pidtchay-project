/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-plusplus */
import faker from 'faker';
import { INote } from 'Modules/Notes/Models';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const DATE_TIME_FORMAT = 'MM/DD/YYYY HH:mm:ss';

const getFakeNoteList = (): INote[] => {
    const fakeList = [] as INote[];
    for (let step = 0; step < 5; step++) {
        fakeList.push({
            id: uuidv4(),
            startDate: moment(new Date()).format(DATE_TIME_FORMAT),
            lastUpdate: moment(new Date()).format(DATE_TIME_FORMAT),
            text: faker.lorem.paragraphs(),
            title: faker.lorem.lines()
        });
    }
    return fakeList;
};

export const NOTES_DATA = getFakeNoteList();