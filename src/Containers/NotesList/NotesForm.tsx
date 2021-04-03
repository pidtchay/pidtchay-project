import NoteForm from 'Containers/Note/Form';
import NoteView from 'Containers/Note/View';
import React, { FC, lazy, ReactElement, useMemo } from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

const NotesFormInput = lazy(() => import(/* webpackChunkName: "NotesFormInput" */ 'Containers/NotesList/NotesFormInput'));
const HeaderLazy = lazy(() => import(/* webpackChunkName: "NotesFormHeader" */ 'Components/Header/Header').then((mod) => ({ default: mod.Header })));

interface Props {
    onView?(value: string): void;
    onEdit?(value: string): void;
}

type TNotesFormProps<P> = FC<P> & {
    displayName: string;
    Header: typeof HeaderLazy;
    NoteInput: typeof NotesFormInput;
};
const NotesForm: TNotesFormProps<React.PropsWithChildren<Props>> = ({ children, onView, onEdit }: React.PropsWithChildren<Props>) => {
    const match = useRouteMatch();

    const providerState = useMemo(
        () => ({
            onOpenView: (value: string): void => {
                onView?.(value);
            },
            onOpenEdit: (value: string): void => {
                onEdit?.(value);
            }
        }),
        [onView, onEdit]
    );

    return (
        <>
            <Switch>
                <Route path={`${match.path}/create`}>
                    <NoteForm isCreate />
                </Route>
                <Route path={`${match.path}/view/:id`}>
                    <NoteView />
                </Route>
                <Route path={`${match.path}/edit/:id`}>
                    <NoteForm isCreate={false} />
                </Route>
                <Route path={match.path}>
                    <>
                        <NavLink to={`${match.url}/create`}>Create</NavLink>
                        <div>{React.Children.map(children as ReactElement<any>, (child: ReactElement) => React.cloneElement(child, { ...providerState }))}</div>
                    </>
                </Route>
            </Switch>
        </>
    );
};

NotesForm.displayName = 'NotesForm';
NotesForm.NoteInput = NotesFormInput;
NotesForm.Header = HeaderLazy;

export default NotesForm;
