import { CardLayout, IFooterActions } from 'Common/Components/CardLayout/CardLayout';
import { INoteData } from 'Modules/Notes/Models';
import { NotesContext } from 'Modules/Notes/State/NotesContext';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { INodeQueryStringParams } from '../Models';
import { NotesServices } from '../State/Services';

/**
 * View note form.
 * @returns {JSX.Element} View form.
 */
const NoteViewForm = (): JSX.Element => {
    const { t } = useTranslation(['common']);
    const { id } = useParams<INodeQueryStringParams>();
    const [note, setNote] = useState<INoteData>(null);

    const { state } = React.useContext(NotesContext);

    useEffect(() => {
        NotesServices.getDataById({ entityGUID: id }).then((data) => setNote(data.note));
        return () => {
            setNote(null);
        };
    }, []);

    const handleSave = () => {
        //
    };

    const handleClose = () => {
        //
    };

    const calculateFooterButtons = (isErrorData: boolean): IFooterActions[] => {
        const actions: IFooterActions[] = [
            {
                label: t('common:ACTIONS.Cancel'),
                action: handleClose
            }
        ];

        if (!isErrorData) {
            actions.push({
                label: t('common:ACTIONS.Create'),
                action: handleSave,
                isGeneral: true
            });
        }

        return actions;
    };

    const isErrorRequest = !state.notes;

    return (
        <CardLayout
            title={note?.title || `Requested note ID: ${id}`}
            isLoading={state.notes.length === 0}
            isSuccess={state.notes.length > 0}
            isError={isErrorRequest}
            footerActions={calculateFooterButtons(isErrorRequest)}
        >
            <p>{note?.text}</p>
        </CardLayout>
    );
};

NoteViewForm.displayName = 'NoteViewForm';

export default NoteViewForm;
