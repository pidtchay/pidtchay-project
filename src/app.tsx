import { INote } from 'Containers/NotesList/Models';
import React, { lazy, Suspense } from 'react';

const ErrorBoundary = lazy(() => import(/* webpackChunkName: "ErrorBoundary" */ 'Components/ErrorBoundary/ErrorBoundary'));

const NotesList = lazy(() => import(/* webpackChunkName: "NotesList" */ 'Containers/NotesList/NotesList'));

const mockNotes: INote[] = [
    {
        id: 1,
        lastUpdate: '20210101',
        startDate: '20200101',
        text: 'QWERTYUI',
        title: 'ytrewq'
    }
];

export const App = (): JSX.Element => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
                <NotesList notes={mockNotes} />
            </ErrorBoundary>
        </Suspense>
    );
};
