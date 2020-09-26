import { Row, Typography, Col } from 'antd';
import React from 'react';
import { MarkdownNotePreview } from 'Container/Markdown/EditForm/MarkdownNotePreview';
import { NoteEditForm } from 'Container/Markdown/EditForm/NoteEditForm';
import { useLiteralValue } from 'Utils/hooks';

const { Title } = Typography;

export const NoteEditor = () => {
    const { getValue: getLiteralValue } = useLiteralValue();

    return (
        <Col span={24}>
            <Row gutter={[16, 16]}>
                <Title level={1}>{getLiteralValue('Pages.Markdown.page_title')}</Title>
            </Row>
            <Row gutter={[16, 16]}>
                <NoteEditForm />
                <MarkdownNotePreview />
            </Row>
        </Col>
    );
};

NoteEditor.displayName = 'NoteEditor';
