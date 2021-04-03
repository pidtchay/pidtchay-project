import React, { lazy, Suspense } from 'react';
import { getFakeNoteList } from 'dataNotes';
import NotesForm from 'Containers/NotesList/NotesForm';
import { Switch, Route, Link, useHistory } from 'react-router-dom';

const ErrorBoundary = lazy(() => import(/* webpackChunkName: "ErrorBoundary" */ 'Components/ErrorBoundary/ErrorBoundary'));

export const NOTES_DATA = getFakeNoteList();

const Home = () => <h2>Home</h2>;

export const App = (): JSX.Element => {
    const history = useHistory();
    const onOpenView = (value: string): void => {
        console.group('NoteInput onChange');
        console.debug({ value });
        console.groupEnd();
        history.push(`/notes/view/${value}`);
    };

    const onOpenEdit = (value: string): void => {
        console.group('NoteInput onChange');
        console.debug({ value });
        console.groupEnd();
        history.push(`/notes/edit/${value}`);
    };
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
                <>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/notes">Notes</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/notes">
                            <NotesForm onView={onOpenView} onEdit={onOpenEdit}>
                                <NotesForm.Header title="Notes" subtitle="Mocked notes list" />
                                {NOTES_DATA.map((note) => (
                                    <NotesForm.NoteInput note={note} key={note.id} />
                                ))}
                            </NotesForm>
                        </Route>
                    </Switch>
                </>
            </ErrorBoundary>
        </Suspense>
    );
};
