import NoteCard from 'Components/NoteCard/NoteCard';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { INote } from 'Modules/Notes/Models';
import { INodeQueryStringParams } from '../Models';
import { NotesContext } from '../State/NotesContext';

/**
 * @prop {boolean} isCreate Create form flag.
 */
interface INoteFormProps {
    isCreate: boolean;
}

type TNoteForm<P> = FC<P> & {
    displayName: string;
};

/**
 * Create note form.
 * @param {INoteFormProps} param0 Basic properties of the component.
 * @returns {JSX.Element} Create form.
 */
const NoteEditForm: TNoteForm<INoteFormProps> = ({ isCreate }: INoteFormProps) => {
    const { id } = useParams<INodeQueryStringParams>();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const noteGuidRef = useRef(isCreate ? uuidv4() : id);
    const [note, setNote] = useState<INote>(null);

    const { state } = React.useContext(NotesContext);

    useEffect(() => {
        setNote((state.notes || []).filter((it) => it.id === noteGuidRef.current)[0]);
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
