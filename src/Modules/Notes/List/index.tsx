/* eslint-disable no-console */
import { NotesContext } from 'Modules/Notes/State/NotesContext';
import { notesSlice } from 'Modules/Notes/State/Reducer';
import { NotesServices } from 'Modules/Notes/State/Services';
import React from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import NotesForm from './NotesForm';
import RoutingConfig from './Routing';

const { getData, clearData } = notesSlice.actions;

/**
 * Notes list form.
 * @returns {JSX.Element} List form.
 */
const Notes = (): JSX.Element => {
    const { state, dispatch } = React.useContext(NotesContext);

    const initView = async () => {
        await NotesServices.getData().then((data) => dispatch(getData({ notes: data.notes })));
    };

    React.useEffect(() => {
        initView();
        return () => {
            dispatch(clearData());
        };
    }, []);

    const history = useHistory();
    const MATCH = useRouteMatch();

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
        <>
            <Switch>
                {RoutingConfig.map((route) => (
                    <Route path={route.path} key={route.path}>
                        {route.component}
                    </Route>
                ))}
                <Route path={MATCH.path}>
                    <NotesForm
                        onView={onOpenView}
                        onEdit={onOpenEdit}
                        isLoading={state.notes.length === 0}
                        isSuccess={state.notes.length > 0}
                        isError={!state.notes}
                    >
                        <NotesForm.Header title="Notes" subtitle="Mocked notes list" />
                        {(state.notes || []).map((note) => (
                            <NotesForm.NoteInput note={note} key={note.id} />
                        ))}
                    </NotesForm>
                </Route>
            </Switch>
        </>
    );
};

export default Notes;
