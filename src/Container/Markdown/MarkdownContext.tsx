import moment from 'moment';
import React from 'react';
import { uuid } from 'uuidv4';
import { DATE_TIME_FORMAT } from 'Constants/Common';
import { INotesSectionData } from 'Container/Markdown/Models';
import { EFormStep } from 'Container/Markdown/enums';

const defaultContext: INotesSectionData = {
    currentNote: null,
    notes: [
        {
            id: uuid(),
            createDate: moment(new Date()).format(DATE_TIME_FORMAT),
            title: 'Title',
            text: 'First note'
        }
    ],
    step: EFormStep.LIST,
    markdownText: ''
};

export default React.createContext(defaultContext);
