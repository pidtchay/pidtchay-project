/* eslint-disable no-console */
import { NotesContext } from 'Modules/Notes/State/NotesContext';
import { notesSlice } from 'Modules/Notes/State/Reducer';
import { NotesServices } from 'Modules/Notes/State/Services';
import React from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import NotesForm from './NotesForm';
import RoutingConfig from './Routing';

const { getData: getDate, clearData } = notesSlice.actions;

/**
 * Notes list form.
 * @returns {JSX.Element} List form.
 */
const Notes = (): JSX.Element => {
    const { state, dispatch } = React.useContext(NotesContext);

    const initView = async () => {
        // await NotesServices.getDataById({ entityGUID: '123' }).then((data) => console.log('Data by id: ', { data }));
        // await NotesServices.create({
        //     note: {
        //         id: '74430e6b-b831-4e04-b8e7-456b7bb7060e',
        //         startDate: '04/20/2021 19:01:45',
        //         lastUpdate: '04/20/2021 19:01:45',
        //         text:
        //             'Voluptatibus ea voluptatem. Accusantium et magni est voluptas qui facilis. Placeat sapiente dignissimos veritatis voluptatum animi pariatur rerum rem est. Reiciendis error tenetur iste doloribus voluptatibus autem ut. Architecto sed magni eum sunt. At vel nihil est sit in praesentium ut.\n \rNostrum sed iste qui ad reprehenderit et quia est ut. Animi ullam blanditiis. Eum corrupti molestiae. Qui ea omnis perferendis hic porro.\n \rLibero sunt quibusdam nisi iste nesciunt quia quasi. Ut voluptas architecto quia quidem ut quidem. Velit voluptatibus quam doloribus error ipsum odit fuga voluptas. Culpa esse accusamus ratione in dolore voluptatem consequatur. Vitae laudantium veritatis dolorem veritatis ea id debitis.',
        //         title:
        //             'Rerum consequatur dolores non.\nDebitis deleniti eveniet minima pariatur.\nEst dolorem sed et necessitatibus doloremque ullam autem id.\nReprehenderit distinctio quia explicabo deserunt sed non mollitia error.\nMagnam non blanditiis dolorem asperiores dolore et repellendus adipisci non.'
        //     }
        // });
        await NotesServices.getData().then((data) => dispatch(getDate({ notes: data.notes })));
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
