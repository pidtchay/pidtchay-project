/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { INote } from './Models';
import { NoteItem } from './NoteItem';

interface INotesProps {
    notes: INote[];
}

const NotesList: FC<INotesProps> = ({ notes }: INotesProps) => {
    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes.map((item) => (
                    <NoteItem key={uuidv4()} note={item} />
                ))}
            </div>
        </div>
    );
};

NotesList.displayName = 'NotesList';

export default NotesList;
