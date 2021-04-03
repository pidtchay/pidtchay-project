/* eslint-disable react/button-has-type */
import React from 'react';
import { INote } from './Models';

interface NotesFormInputProps {
    note: INote;
    onOpenView?(evalue: string): void;
    onOpenEdit?(value: string): void;
}

// eslint-disable-next-line react/prop-types
const NotesFormInput = ({ note, onOpenEdit, onOpenView }: NotesFormInputProps): React.ReactElement => {
    return (
        <li key={note.id}>
            <div>
                <div>{`Guid: ${note.id}`}</div>
                <div>{`Description: ${note.title}`}</div>
                <div>{`Created: ${note.startDate}`}</div>
                <div>{`Updated: ${note.lastUpdate}`}</div>
            </div>
            <div>{onOpenEdit && <button onClick={() => onOpenEdit(note.id)}>Edit</button>}</div>
            <div>{onOpenView && <button onClick={() => onOpenView(note.id)}>View</button>}</div>
        </li>
    );
};

NotesFormInput.displayName = 'NoteItem';

export default NotesFormInput;
