import NoteCard from 'Components/NoteCard/NoteCard';
import { NotesContext } from 'Modules/Notes/State/NotesContext';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { INote } from 'Modules/Notes/Models';
import { INodeQueryStringParams } from '../Models';

/**
 * View note form.
 * @returns {JSX.Element} View form.
 */
const NoteViewForm = (): JSX.Element => {
    const { id } = useParams<INodeQueryStringParams>();
    const [note, setNote] = useState<INote>(null);

    const { state } = React.useContext(NotesContext);

    useEffect(() => {
        setNote((state.notes || []).filter((it) => it.id === id)[0]);
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
