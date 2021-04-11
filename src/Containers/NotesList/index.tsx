import React from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { NOTES_DATA } from 'dataNotes';
import { NotesContext } from './State/NotesContext';
import NotesForm from './NotesForm';
import RoutingConfig from './Routing';
import { notesSlice } from './State/reducer';

const { getDate, clearData } = notesSlice.actions;
const Notes = (): JSX.Element => {
    const { state, dispatch } = React.useContext(NotesContext);

    const notes = React.useRef(NOTES_DATA);

    React.useEffect(() => {
        setTimeout(() => {
            dispatch(getDate({ notes: notes.current }));
        }, 1000);
        return () => {
            dispatch(clearData());
        };
    }, []);

    React.useEffect(() => {
        console.debug({ state: state.notes });
        console.debug(notes.current);
    }, [state.notes, notes.current]);

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
                    <NotesForm onView={onOpenView} onEdit={onOpenEdit}>
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
