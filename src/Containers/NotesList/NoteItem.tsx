import React, { FC } from 'react';
import { INote } from './Models';

interface INoteItemProps {
    note: INote;
}

const NoteItem: FC<INoteItemProps> = ({ note }: INoteItemProps) => {
    const { id, startDate, lastUpdate, title, text } = note;
    return (
        <div>
            <h1>{`${title},${startDate}`}</h1>
            <h5>{`${id}, last update ${lastUpdate}`}</h5>
            <div>{text}</div>
        </div>
    );
};

NoteItem.displayName = 'NoteItem';

export { NoteItem };
