import { Row, Typography, Col } from 'antd';
import React from 'react';
import { MarkdownNoteEdit } from 'Container/Markdown/MarkdownNoteEdit';
import { MarkdownNotePreview } from 'Container/Markdown/MarkdownNotePreview';
import { useLiteralValue } from 'Utils/hooks';

const { Title } = Typography;

export const MarkdownNoteEditor = () => {
    const { getValue: getLiteralValue } = useLiteralValue();

    return (
        <Col span={24}>
            <Row gutter={[16, 16]}>
                <Title level={1}>
                    {getLiteralValue('Pages.Markdown.page_title')}
                </Title>
            </Row>
            <Row gutter={[16, 16]}>
                <MarkdownNoteEdit />
                <MarkdownNotePreview />
            </Row>
        </Col>
    );
};

MarkdownNoteEditor.displayName = 'MarkdownNoteEditor';
