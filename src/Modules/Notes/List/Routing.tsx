import React from 'react';
import { ROUTE } from 'Core/Routing/Consts';
import NoteForm from 'Modules/Notes/Form';
import NoteView from 'Modules/Notes/View';
import { IRoutingConfig } from 'Common/Consts';

/**
 * Notes route settings.
 */
const RoutingConfig: IRoutingConfig[] = [
    {
        path: ROUTE.NOTES.CREATE.PATH,
        component: <NoteForm isCreate />
    },
    {
        path: ROUTE.NOTES.EDIT.PATH,
        component: <NoteForm isCreate={false} />
    },
    {
        path: ROUTE.NOTES.VIEW.PATH,
        component: <NoteView />
    }
];

export default RoutingConfig;
