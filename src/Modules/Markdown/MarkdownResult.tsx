import { Row, Col, Typography } from 'antd';
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { ILiterals } from 'Model/Literals';
import { getI18nValue } from 'Utils/common';
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
                    {getI18nValue(
                        literals,
                        'Pages.Markdown.MarkdownResult.title'
                    )}
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
