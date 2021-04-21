/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { INote } from 'Modules/Notes/Models';

/**
 * @prop {} note Note data.
 * @prop {Function} [onOpenView] Note viewer handler.
 * @prop {Function} [onOpenEdit] Note editing handler.
 */
interface NotesFormInputProps {
    note: INote;
    onOpenView?(evalue: string): void;
    onOpenEdit?(value: string): void;
}

/**
 * Composite notes list item form.
 * @param {NotesFormInputProps} param0 Basic properties of the component.
 * @returns {JSX.Element} List item form.
 */
const NotesFormInput: React.FC<NotesFormInputProps> = ({ note, onOpenEdit, onOpenView }: NotesFormInputProps): React.ReactElement => {
    const { t } = useTranslation(['common']);
    return (
        <li key={note.id}>
            <div>
                <div>{t('common:NotesForm.guid', { guid: note.id })}</div>
                <div>{t('common:NotesForm.description', { desc: note.title })}</div>
                <div>{t('common:NotesForm.created', { createdDate: note.startDate })}</div>
                <div>{t('common:NotesForm.updated', { updatedDate: note.lastUpdate })}</div>
            </div>
            <div>{onOpenEdit && <button onClick={() => onOpenEdit(note.id)}>{t('common:ACTIONS.Edit')}</button>}</div>
            <div>{onOpenView && <button onClick={() => onOpenView(note.id)}>{t('common:ACTIONS.View')}</button>}</div>
        </li>
    );
};

NotesFormInput.displayName = 'NoteItem';

export default NotesFormInput;
