import React, { FC, lazy, ReactElement, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useRouteMatch } from 'react-router-dom';

const NotesFormInput = lazy(() => import(/* webpackChunkName: "NotesFormInput" */ 'Modules/Notes/List/NotesFormInput'));
const HeaderLazy = lazy(() => import(/* webpackChunkName: "NotesFormHeader" */ 'Components/Header/Header').then((mod) => ({ default: mod.Header })));

/**
 * @prop {Function} [onView] Note viewer handler.
 * @prop {Function} [onEdit] Note editing handler.
 */
interface Props {
    onView?(value: string): void;
    onEdit?(value: string): void;
}

type TNotesFormProps<P> = FC<P> & {
    displayName: string;
    Header: typeof HeaderLazy;
    NoteInput: typeof NotesFormInput;
};

/**
 * Composite notes list form.
 * @param {Props} root0 Basic properties of the component.
 * @param {React.ReactNode} root0.children Child components.
 * @param {Function} [root0.onView] Note viewer handler.
 * @param {Function} [root0.onEdit] Note editing handler.
 * @returns {JSX.Element} Notes form.
 */
const NotesForm: TNotesFormProps<React.PropsWithChildren<Props>> = ({ children, onView, onEdit }: React.PropsWithChildren<Props>) => {
    const { t } = useTranslation(['common']);
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
            <NavLink to={`${match.url}/create`}>{t('common:ACTIONS.Create')}</NavLink>
            <div>{React.Children.map(children as ReactElement<any>, (child: ReactElement) => React.cloneElement(child, { ...providerState }))}</div>
        </>
    );
};

NotesForm.displayName = 'NotesForm';
NotesForm.NoteInput = NotesFormInput;
NotesForm.Header = HeaderLazy;

export default NotesForm;
