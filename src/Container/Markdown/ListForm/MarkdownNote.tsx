import { Button } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { INote } from 'Container/Markdown/Models';
import { EFormStep } from 'Container/Markdown/enums';
import styles from 'Style/MarkdownEditor/MarkdownNote.less';
import { useLiteralValue } from 'Utils/hooks';
import { useNoteContext } from '../hooks';

interface IProps {
    note: INote;
}

/**
 * Note display component.
 *
 * @param {IProps} [param0] - Component properties.
 * @param {INote} [param0.note] - Note model.
 * @returns {JSX.Element} [return0] Note JSX Element.
 */
export const MarkdownNote: React.FC<IProps> = ({ note }) => {
    const { setCurrentNote, setNextStep } = useNoteContext();

    const { getValue: getLiteralValue } = useLiteralValue();

    const handleEditNote = () => {
        setCurrentNote(note);
        setNextStep(EFormStep.UPDATE);
    };

    return (
        <div className={styles.markdownNote}>
            <p>{note.createDate}</p>
            <ReactMarkdown source={note.title} />
            <ReactMarkdown source={note.text.split(note.title).filter(Boolean).join('')} />
            <div>
                <Button type="primary" onClick={handleEditNote}>
                    {getLiteralValue('ACTIONS.edit')}
                </Button>
            </div>
        </div>
    );
};
