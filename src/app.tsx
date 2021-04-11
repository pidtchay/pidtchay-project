import { defaultState, NotesProvider } from 'Containers/NotesList/State/NotesContext';
import { notesSlice } from 'Containers/NotesList/State/reducer';
// import { NOTES_DATA } from 'dataNotes';
import React, { lazy, Suspense } from 'react';
import NotesForm from 'Containers/NotesList';
import { Switch, Route, Link } from 'react-router-dom';
import { ROUTE } from 'Routing/Consts';

const ErrorBoundary = lazy(() => import(/* webpackChunkName: "ErrorBoundary" */ 'Components/ErrorBoundary/ErrorBoundary'));

const Home = () => <h2>Home</h2>;

export const App = (): JSX.Element => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
                <>
                    <ul>
                        <li>
                            <Link to={ROUTE.HOME.PATH}>Home</Link>
                        </li>
                        <li>
                            <Link to={ROUTE.NOTES.PATH}>Notes</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path={ROUTE.HOME.PATH}>
                            <Home />
                        </Route>
                        <Route path={ROUTE.NOTES.PATH}>
                            <NotesProvider initialState={defaultState} reducer={notesSlice.reducer}>
                                <NotesForm />
                            </NotesProvider>
                        </Route>
                    </Switch>
                </>
            </ErrorBoundary>
        </Suspense>
    );
};
