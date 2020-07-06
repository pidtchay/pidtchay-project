import { Row, Col, Typography, Input } from 'antd';
import React, { useContext } from 'react';
import { ILiterals } from 'Model/Literals';
import { getI18nValue } from 'Utils/common';
import editorContext from './Context';

const { Title } = Typography;
const { TextArea } = Input;

interface IMarkdownInputProps {
    literals: ILiterals;
}

export const MarkdownInput: React.FC<IMarkdownInputProps> = ({ literals }) => {
    const { setMarkdownText } = useContext(editorContext);

    const onInputChange = (value: string) => {
        setMarkdownText(value);
    };
    return (
        <Col span={10}>
            <Row>
                <Title level={2}>
                    {getI18nValue(
                        literals,
                        'Pages.Markdown.MarkdownInput.title'
                    )}
                </Title>
            </Row>
            <Row>
                <TextArea
                    rows={10}
                    onChange={(e) => onInputChange(e.target.value)}
                />
            </Row>
        </Col>
    );
};
