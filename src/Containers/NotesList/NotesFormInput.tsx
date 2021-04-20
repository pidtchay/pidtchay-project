/* eslint-disable react/button-has-type */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { INote } from './Models';

interface NotesFormInputProps {
    note: INote;
    onOpenView?(evalue: string): void;
    onOpenEdit?(value: string): void;
}

// eslint-disable-next-line react/prop-types
const NotesFormInput = ({ note, onOpenEdit, onOpenView }: NotesFormInputProps): React.ReactElement => {
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
