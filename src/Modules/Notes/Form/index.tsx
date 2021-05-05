import { CardLayout, IFooterActions } from 'Common/Components/CardLayout/CardLayout';
import { INoteData } from 'Modules/Notes/Models';
import { NotesServices } from 'Modules/Notes/State/Services';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useTextAreaState } from '../MarkdownInputField/hooks/useMarkdownInputFieldState';
import { INodeQueryStringParams } from '../Models';
import { NotesContext } from '../State/NotesContext';

/**
 * @prop {boolean} isCreate Create form flag.
 */
interface INoteFormProps {
    isCreate: boolean;
}

type TNoteForm<P> = FC<P> & {
    displayName: string;
};

/**
 * Create note form.
 * @param {INoteFormProps} param0 Basic properties of the component.
 * @returns {JSX.Element} Create form.
 */
const NoteEditForm: TNoteForm<INoteFormProps> = ({ isCreate }: INoteFormProps) => {
    const { t } = useTranslation(['common']);
    const { id } = useParams<INodeQueryStringParams>();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const noteGuidRef = useRef<string>(isCreate ? uuidv4() : id);
    const [note, setNote] = useState<INoteData>(null);
    const { textareaRef, getLastState, getState, setState, setStateSyntax, processChange, processChangeSyntax } = useTextAreaState(note);

    const { state } = React.useContext(NotesContext);

    useEffect(() => {
        NotesServices.getDataById({ entityGUID: noteGuidRef.current }).then((data) => setNote(data.note));
        return () => {
            setNote(null);
        };
    }, []);

    const handleSave = () => {
        NotesServices.create({ note });
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
            <textarea name="text" id="text" value={note?.text} ref={textareaRef} rows={10} />
        </CardLayout>
    );
};

NoteEditForm.displayName = 'NoteEditForm';

export default React.memo(NoteEditForm);
