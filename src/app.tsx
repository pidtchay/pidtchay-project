import React, { lazy, Suspense } from 'react';
import { getFakeNoteList } from 'dataNotes';
import NotesForm from 'Containers/NotesList/NotesForm';

const ErrorBoundary = lazy(() => import(/* webpackChunkName: "ErrorBoundary" */ 'Components/ErrorBoundary/ErrorBoundary'));

const NOTES_DATA = getFakeNoteList();

export const App = (): JSX.Element => {
    const onChange = (value: string): void => {
        console.group('NoteInput onChange');
        console.debug({ value });
        console.groupEnd();
    };
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
                <>
                    <NotesForm onStateChange={onChange}>
                        <NotesForm.Header title="Notes" subtitle="Mocked notes list" />
                        {NOTES_DATA.map((note) => (
                            <NotesForm.NoteInput key={note.id} note={note} />
                        ))}
                    </NotesForm>
                </>
            </ErrorBoundary>
        </Suspense>
    );
};
