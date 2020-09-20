import { Col } from 'antd';
import { useContext } from 'react';
import React from 'react';
import { MarkdownNote } from 'Container/Markdown/ListForm/MarkdownNote';
import MarkdownNoteContext from 'Container/Markdown/MarkdownContext';
import { INotesSectionData } from 'Container/Markdown/Models';

export const MarkdownNotesList = () => {
    const { notes } = useContext<INotesSectionData>(MarkdownNoteContext);
    return (
        <Col span={24}>
            {notes.map((it, idx) => {
                return <MarkdownNote key={idx} note={it} />;
            })}
        </Col>
    );
};
