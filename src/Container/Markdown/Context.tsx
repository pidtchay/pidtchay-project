import moment from 'moment';
import React from 'react';
import { uuid } from 'uuidv4';
import { DATE_TIME_FORMAT } from 'Constants/Common';
import { IMarkdownNoteContext } from 'Container/Markdown/Models';
import { EMarkdownStep } from 'Container/Markdown/enums';

const defaultContext: IMarkdownNoteContext = {
    currentNote: null,
    notes: [
        {
            id: uuid(),
            createDate: moment(new Date()).format(DATE_TIME_FORMAT),
            text: 'First note'
        }
    ],
    step: EMarkdownStep.LIST,
    markdownText: ''
};

export default React.createContext(defaultContext);
