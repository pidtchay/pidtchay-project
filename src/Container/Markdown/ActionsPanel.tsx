import { Row, Col, Button } from 'antd';
import React from 'react';
import { BoldOutlined, ItalicOutlined, StrikethroughOutlined, TableOutlined } from '@ant-design/icons';
import { ESpecialSyntax } from 'Container/Markdown/enums';

/**
 * @property {string} [textValue] Textarea value.
 * @property {Function} [onSetTextValue] Function set new textarea value.
 */
interface IProps {
    onSetTextValue: (value: string) => void;
}

export const ActionsPanel: React.FC<IProps> = ({ onSetTextValue }) => {
    const handleSetTextareaValue = (syntax: ESpecialSyntax) => {
        onSetTextValue(syntax);
    };
    return (
        <Row gutter={[16, 16]}>
            <Col>
                <Button onClick={() => handleSetTextareaValue(ESpecialSyntax.HEADER)}>H</Button>
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(ESpecialSyntax.BOLD)} icon={<BoldOutlined />} />
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(ESpecialSyntax.ITALIAN)} icon={<ItalicOutlined />} />
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(ESpecialSyntax.STRIKETHROUGH)} icon={<StrikethroughOutlined />} />
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(ESpecialSyntax.BLOCK_QUOTE)}>Q</Button>
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(ESpecialSyntax.BLOCK_CODE)}>C</Button>
            </Col>
            <Col>
                <Button onClick={() => handleSetTextareaValue(ESpecialSyntax.BLOCK_TABLE)} icon={<TableOutlined />} />
            </Col>
        </Row>
    );
};
