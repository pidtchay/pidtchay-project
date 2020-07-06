import { Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';
import { getI18nValue } from 'Utils/common';
import EditorContext from './Context';
import { MarkdownInput } from './MarkDownInput';
import { MarkdownResult } from './MarkdownResult';

const { Title } = Typography;

export const MarkdownEditor = () => {
    const [markdownText, setMarkdownText] = useState('');
    const literals = useSelector((state: RootState) => state.literals);

    const contextValue = {
        markdownText,
        setMarkdownText: (value: string) => setMarkdownText(value)
    };
    return (
        <EditorContext.Provider value={contextValue}>
            <Row>
                <Title level={1}>
                    {getI18nValue(literals, 'Pages.Markdown.page_title')}
                </Title>
            </Row>
            <Row>
                <MarkdownInput literals={literals} />
                <MarkdownResult literals={literals} />
            </Row>
        </EditorContext.Provider>
    );
};
