import { Row, Typography, Col } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';
import { getI18nValue } from 'Utils/common';
import { MarkdownNoteEdit } from './MarkdownNoteEdit';
import { MarkdownNotePreview } from './MarkdownNotePreview';

const { Title } = Typography;

export const MarkdownNoteEditor = () => {
    const literals = useSelector((state: RootState) => state.literals);
    return (
        <Col span={24}>
            <Row gutter={[16, 16]}>
                <Title level={1}>
                    {getI18nValue(literals, 'Pages.Markdown.page_title')}
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
