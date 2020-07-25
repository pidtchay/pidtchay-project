import { Row, Col, Button } from 'antd';
import React from 'react';
import {
    BoldOutlined,
    ItalicOutlined,
    StrikethroughOutlined,
    TableOutlined
} from '@ant-design/icons';

export enum MarkdownSyntax {
    HEADER = '# ',
    BOLD = '****',
    ITALIAN = '**',
    // UNDERLINE = '__', // TODO This syntax does not work. Need to find working syntax.
    STRIKETHROUGH = '~~~~',
    BLOCK_QUOTE = '> ',
    BLOCK_CODE = '```\n\n```',
    BLOCK_TABLE = '| ColumnName1 | ColumnName2 |\n| --------- | ------- |\n| Value1 | Value2 |\n'
}

/**
 * @property {string} [textValue] Textarea value.
 * @property {Function} [onSetTextValue] Function set new textarea value.
 */
interface IProps {
    onSetTextValue: (value: string) => void;
}

export const ButtonsPanel: React.FC<IProps> = ({ onSetTextValue }) => {
    const handleSetTextareaValue = (syntax: MarkdownSyntax) => {
        onSetTextValue(syntax);
    };
    return (
        <Row>
            <Col>
                <Button
                    onClick={() =>
                        handleSetTextareaValue(MarkdownSyntax.HEADER)
                    }
                >
                    H
                </Button>
            </Col>
            <Col>
                <Button
                    onClick={() => handleSetTextareaValue(MarkdownSyntax.BOLD)}
                    icon={<BoldOutlined />}
                />
            </Col>
            <Col>
                <Button
                    onClick={() =>
                        handleSetTextareaValue(MarkdownSyntax.ITALIAN)
                    }
                    icon={<ItalicOutlined />}
                />
            </Col>
            <Col>
                <Button
                    onClick={() =>
                        handleSetTextareaValue(MarkdownSyntax.STRIKETHROUGH)
                    }
                    icon={<StrikethroughOutlined />}
                />
            </Col>
            <Col>
                <Button
                    onClick={() =>
                        handleSetTextareaValue(MarkdownSyntax.BLOCK_QUOTE)
                    }
                >
                    Q
                </Button>
            </Col>
            <Col>
                <Button
                    onClick={() =>
                        handleSetTextareaValue(MarkdownSyntax.BLOCK_CODE)
                    }
                >
                    C
                </Button>
            </Col>
            <Col>
                <Button
                    onClick={() =>
                        handleSetTextareaValue(MarkdownSyntax.BLOCK_TABLE)
                    }
                    icon={<TableOutlined />}
                />
            </Col>
        </Row>
    );
};

// <Col>
// <Button
// onClick={() =>
// handleSetTextareaValue(MarkdownSyntax.UNDERLINE)
// }
// icon={<UnderlineOutlined />}
// />
// </Col>
