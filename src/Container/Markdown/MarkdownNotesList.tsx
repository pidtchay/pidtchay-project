import { Col } from 'antd';
import { useContext } from 'react';
import React from 'react';
import { MarkdownNote } from './MarkdownNote';
import MarkdownNoteContext from './context';
import { IMarkdownNoteContext } from './models';

export const MarkdownNotesList = () => {
    const { notes } = useContext<IMarkdownNoteContext>(MarkdownNoteContext);
    return (
        <Col span={24}>
            {notes.map((it, idx) => {
                return <MarkdownNote key={idx} note={it} />;
            })}
        </Col>
    );
};
