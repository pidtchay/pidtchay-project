import { NODE_ENV } from 'Common/Consts';
import { DebugObserver } from 'Core/DebugObserver/DebugObserver';
import NotesForm from 'Modules/Notes/List/NotesForm';
import RoutingConfig from 'Modules/Notes/List/Routing';
import { INoteData } from 'Modules/Notes/Models';
import { NotesListStateAtom } from 'Modules/Notes/Store/atoms/NoteListState';
import React from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

/**
 * Notes list form.
 * @returns {JSX.Element} List form.
 */
const NotesComponent = (): JSX.Element => {
    const notesList = useRecoilValueLoadable(NotesListStateAtom);
    const history = useHistory();
    const match = useRouteMatch();

    const onOpenView = (value: string): void => history.push(`/notes/view/${value}`);

    const onOpenEdit = (value: string): void => history.push(`/notes/edit/${value}`);

    const isSuccessData = notesList.state === 'hasValue';
    return (
        <>
            <Switch>
                {RoutingConfig.map((route) => (
                    <Route path={route.path} key={route.path}>
                        {route.component}
                    </Route>
                ))}
                <Route path={match.path}>
                    <NotesForm
                        isLoading={notesList.state === 'loading'}
                        isError={notesList.state === 'hasError'}
                        isSuccess={isSuccessData}
                        onView={onOpenView}
                        onEdit={onOpenEdit}
                    >
                        <NotesForm.Header title="Notes" subtitle="Mocked notes list" />
                        {isSuccessData &&
                            ((notesList.contents as INoteData[]) || []).map((note) => <NotesForm.NoteInput note={note} key={note.id} />)}
                    </NotesForm>
                </Route>
            </Switch>
        </>
    );
};

const Notes = (): JSX.Element => (
    <>
        {NODE_ENV === 'development' && <DebugObserver />}
        <NotesComponent />
    </>
);

export default Notes;
