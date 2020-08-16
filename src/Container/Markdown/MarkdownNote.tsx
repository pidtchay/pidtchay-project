import { Button } from 'antd';
import React, { useContext } from 'react';
import MarkdownNoteContext from 'Container/Markdown/Context';
import { IMarkdownNote, IMarkdownNoteContext } from 'Container/Markdown/Models';
import { EMarkdownStep } from 'Container/Markdown/enums';
import { setCurrentNote, setMarkdownStep } from 'Store/markdown_notes/actions';
import styles from 'Style/MarkdownEditor/MarkdownNote.less';
import { useLiteralValue } from 'Utils/hooks';

interface IProps {
    note: IMarkdownNote;
}

/**
 * Note display component.
 *
 * @param {IProps} [param0] - Component properties.
 * @param {IMarkdownNote} [param0.note] - Note model.
 * @returns {JSX.Element} [return0] Note JSX Element.
 */
export const MarkdownNote: React.FC<IProps> = ({ note }) => {
    const { dispatch } = useContext<IMarkdownNoteContext>(MarkdownNoteContext);

    const { getValue: getLiteralValue } = useLiteralValue();

    const handleEditNote = () => {
        dispatch(setCurrentNote(note));
        dispatch(setMarkdownStep(EMarkdownStep.UPDATE));
    };

    return (
        <div className={styles.markdownNote}>
            <p>{note.createDate}</p>
            <p>{note.title}</p>
            <div>
                <Button type="primary" onClick={handleEditNote}>
                    {getLiteralValue('ACTIONS.edit')}
                </Button>
            </div>
        </div>
    );
};
