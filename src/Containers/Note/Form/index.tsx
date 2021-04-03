import { NOTES_DATA } from 'app';
import NoteCard from 'Components/NoteCard/NoteCard';
import { INote } from 'Containers/NotesList/Models';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { INodeQueryStringParams } from '../Models';

interface INoteFormProps {
    isCreate: boolean;
}

type TNoteForm<P> = FC<P> & {
    displayName: string;
};

const NoteEditForm: TNoteForm<INoteFormProps> = ({ isCreate }: INoteFormProps) => {
    const { id } = useParams<INodeQueryStringParams>();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const noteGuidRef = useRef(isCreate ? uuidv4() : id);
    const [note, setNote] = useState<INote>(null);

    useEffect(() => {
        setNote(NOTES_DATA.filter((it) => it.id === noteGuidRef.current)[0]);
        return () => {
            setNote(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <NoteCard>
            <NoteCard.Header title={note?.title || `Requested note ID: ${id}`} />
            <NoteCard.Container>
                <textarea name="text" id="text" value={note?.text} />
            </NoteCard.Container>
        </NoteCard>
    );
};

NoteEditForm.displayName = 'NoteEditForm';

export default React.memo(NoteEditForm);
