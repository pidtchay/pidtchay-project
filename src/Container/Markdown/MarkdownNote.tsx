import { Button } from 'antd';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';
import { setCurrentNote, setMarkdownStep } from 'Store/markdown_notes/actions';
import { getI18nValue } from 'Utils/common';
import MarkdownNoteContext from './context';
import { EMarkdownStep } from './enums';
import { IMarkdownNote, IMarkdownNoteContext } from './models';

interface IProps {
    note: IMarkdownNote;
}
export const MarkdownNote: React.FC<IProps> = ({ note }) => {
    const { dispatch } = useContext<IMarkdownNoteContext>(MarkdownNoteContext);

    const literals = useSelector((state: RootState) => state.literals);

    const handleEditNote = () => {
        dispatch(setCurrentNote(note));
        dispatch(setMarkdownStep(EMarkdownStep.UPDATE));
    };

    return (
        <div
            style={{
                margin: '15px',
                border: '1px solid #d3d3d3',
                padding: '12px 6px'
            }}
        >
            <p>{note.createDate}</p>
            <p>{note.text}</p>
            <div>
                <Button type="primary" onClick={handleEditNote}>
                    {getI18nValue(literals, 'ACTIONS.edit')}
                </Button>
            </div>
        </div>
    );
};
