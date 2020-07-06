import { Row, Col, Typography } from 'antd';
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { ILiterals } from 'Model/Literals';
import { get } from 'Utils/common';
import editorContext from './Context';

const { Title } = Typography;

interface IMarkdownResultProps {
    literals: ILiterals;
}
export const MarkdownResult: React.FC<IMarkdownResultProps> = ({
    literals
}) => {
    const { markdownText } = useContext(editorContext);
    return (
        <Col offset={2} span={10}>
            <Row>
                <Title level={2}>
                    {get(literals, 'Pages.Markdown.MarkdownInput.title')}
                </Title>
            </Row>
            <Row>
                <div>
                    <ReactMarkdown source={markdownText} />
                </div>
            </Row>
        </Col>
    );
};
