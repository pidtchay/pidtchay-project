import { Row, Col, Typography } from 'antd';
import React, { useContext, useState, useRef, useEffect } from 'react';
import { ILiterals } from 'Model/Literals';
import { getI18nValue } from 'Utils/common';
import { ButtonsPanel } from './ButtonsPanel';
import editorContext from './Context';
import { useSelection } from './hooks';
import { getSpacesInSyntax } from './utils';

const { Title } = Typography;

interface IMarkdownInputProps {
    literals: ILiterals;
}

export const MarkdownInput: React.FC<IMarkdownInputProps> = ({ literals }) => {
    const myRef = useRef<HTMLTextAreaElement>();

    const { setSelection } = useSelection(myRef);
    const [textArea, setTextArea] = useState('');

    const [currentSyntax, setCurrentSyntax] = useState('');
    const { setMarkdownText } = useContext(editorContext);

    useEffect(() => {
        if (!myRef || !myRef.current) {
            return;
        }
        const { selectionStart, selectionEnd } = myRef.current;
        const spaces = getSpacesInSyntax(currentSyntax);
        if (spaces.type === 'plus') {
            setSelection({
                start: selectionStart + spaces.spaces,
                end: selectionEnd + spaces.spaces
            });
        } else {
            setSelection({
                start: selectionStart - spaces.spaces,
                end: selectionEnd - spaces.spaces
            });
        }
    });

    const handleInputChange = (value: string) => {
        setTextArea(value);
        setMarkdownText(value);
        setCurrentSyntax('');
    };

    const handleAddMarkdownSynt = (value: string) => {
        const newValue = `${textArea}${value}`;
        setTextArea(newValue);
        setMarkdownText(newValue);
        setCurrentSyntax(value);
        if (myRef && myRef.current) {
            myRef.current.focus();
        }
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
                <textarea
                    ref={myRef}
                    value={textArea}
                    rows={10}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
            </Row>
        </Col>
    );
};
