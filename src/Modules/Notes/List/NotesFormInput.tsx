/* eslint-disable react/require-default-props */
import { MarkdownField } from 'Components/MarkdownField/MarkdownField';
import { INoteData } from 'Modules/Notes/Models';
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @prop {INote} note Note data.
 * @prop {Function} [onOpenView] Note viewer handler.
 * @prop {Function} [onOpenEdit] Note editing handler.
 */
interface NotesFormInputProps {
    note: INoteData;
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
        <li
            key={note.id}
            style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid black', padding: '15px 5px', marginBottom: '5px' }}
        >
            <div>
                <div>{t('common:NotesForm.guid', { guid: note.id })}</div>
                <MarkdownField source={note.title} label={t('common:NotesForm.description')} />
                <div>{t('common:NotesForm.created', { createdDate: note.startDate })}</div>
                <div>{t('common:NotesForm.updated', { updatedDate: note.lastUpdate })}</div>
            </div>
            <div style={{ display: 'flex' }}>
                {onOpenEdit && (
                    <button type="button" onClick={() => onOpenEdit(note.id)}>
                        {t('common:ACTIONS.Edit')}
                    </button>
                )}
                {onOpenView && (
                    <button type="button" onClick={() => onOpenView(note.id)}>
                        {t('common:ACTIONS.View')}
                    </button>
                )}
            </div>
        </li>
    );
};

NotesFormInput.displayName = 'NotesFormInput';

export default NotesFormInput;
