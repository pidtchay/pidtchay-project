import React from 'react';
import { INote } from './Models';

interface NotesFormInputProps {
    note: INote;
    key: string | number;
    currentValue?: string;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

// eslint-disable-next-line react/prop-types
const NotesFormInput = ({ currentValue, onChange, key, note }: NotesFormInputProps): React.ReactElement => {
    return (
        <label key={key}>
            <input type="radio" name={`${note.id}`} value={note.title} aria-label={note.title} checked={currentValue === note.title} aria-checked={currentValue === note.title} onChange={onChange} />
            {/* <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            </div> */}
            <div>
                <div>{`Guid: ${note.id}`}</div>
                <div>{`Description: ${note.title}`}</div>
                <div>{`Created: ${note.startDate}`}</div>
                <div>{`Updated: ${note.lastUpdate}`}</div>
            </div>
        </label>
    );
};

NotesFormInput.displayName = 'NoteItem';

export default NotesFormInput;
