import { Row, Col, Typography, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { ILiterals } from 'Model/Literals';
import { getI18nValue } from 'Utils/common';
import { ButtonsPanel } from './ButtonsPanel';
import editorContext from './Context';

const { Title } = Typography;
const { TextArea } = Input;

interface IMarkdownInputProps {
    literals: ILiterals;
}

export const MarkdownInput: React.FC<IMarkdownInputProps> = ({ literals }) => {
    const [textArea, setTextArea] = useState('');
    const { setMarkdownText } = useContext(editorContext);

    const handleInputChange = (value: string) => {
        console.debug({ value });
        setTextArea(value);
        setMarkdownText(value);
    };

    const handleAddMarkdownSynt = (value: string) => {
        const newValue = `${textArea}${value}`;
        setTextArea(newValue);
        setMarkdownText(newValue);
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
            <ButtonsPanel onSetTextValue={handleAddMarkdownSynt} />
            <Row>
                <TextArea
                    value={textArea}
                    rows={10}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
            </Row>
        </Col>
    );
};
