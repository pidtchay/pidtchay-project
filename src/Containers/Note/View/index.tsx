import { NOTES_DATA } from 'app';
import NoteCard from 'Components/NoteCard/NoteCard';
import { INote } from 'Containers/NotesList/Models';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { INodeQueryStringParams } from '../Models';

const NoteViewForm = (): JSX.Element => {
    const { id } = useParams<INodeQueryStringParams>();
    const [note, setNote] = useState<INote>(null);

    useEffect(() => {
        setNote(NOTES_DATA.filter((it) => it.id === id)[0]);
        return () => {
            setNote(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <NoteCard>
            <NoteCard.Header title={note?.title || `Requested note ID: ${id}`} />
            <NoteCard.Container isMarkDownPreview>
                <p>{note?.text}</p>
            </NoteCard.Container>
        </NoteCard>
    );
};

NoteViewForm.displayName = 'NoteViewForm';

export default NoteViewForm;
