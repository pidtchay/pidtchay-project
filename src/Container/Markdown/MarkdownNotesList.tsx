import { Col } from 'antd';
import { useContext } from 'react';
import React from 'react';
import MarkdownNoteContext from 'Container/Markdown/MarkdownContext';
import { MarkdownNote } from 'Container/Markdown/MarkdownNote';
import { IMarkdownNoteContext } from 'Container/Markdown/Models';

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
