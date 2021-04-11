import React from 'react';
import { ROUTE } from 'Routing/Consts';
import NoteForm from 'Containers/Note/Form';
import NoteView from 'Containers/Note/View';
import { IRoutingConfig } from 'Constants/Common';

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
