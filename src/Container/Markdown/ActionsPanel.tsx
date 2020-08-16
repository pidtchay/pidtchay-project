import { Row, Col, Button } from 'antd';
import React from 'react';
import { BoldOutlined, ItalicOutlined, StrikethroughOutlined, TableOutlined } from '@ant-design/icons';
import { MarkdownSyntax } from 'Container/Markdown/enums';

/**
 * @property {string} [textValue] Textarea value.
 * @property {Function} [onSetTextValue] Function set new textarea value.
 */
interface IProps {
    onSetTextValue: (value: string) => void;
}

export const ActionsPanel: React.FC<IProps> = ({ onSetTextValue }) => {
    const handleSetTextareaValue = (syntax: MarkdownSyntax) => {
        onSetTextValue(syntax);
    };
    return (
        <Row gutter={[16, 16]}>
            <Col>
                <Button onClick={() => handleSetTextareaValue(MarkdownSyntax.HEADER)}>H</Button>
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(MarkdownSyntax.BOLD)} icon={<BoldOutlined />} />
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(MarkdownSyntax.ITALIAN)} icon={<ItalicOutlined />} />
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(MarkdownSyntax.STRIKETHROUGH)} icon={<StrikethroughOutlined />} />
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(MarkdownSyntax.BLOCK_QUOTE)}>Q</Button>
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(MarkdownSyntax.BLOCK_CODE)}>C</Button>
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(MarkdownSyntax.BLOCK_TABLE)} icon={<TableOutlined />} />
            </Col>
        </Row>
    );
};
