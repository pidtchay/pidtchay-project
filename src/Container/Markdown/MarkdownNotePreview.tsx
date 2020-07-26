import { Row, Typography, Col } from 'antd';
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';
import styles from 'Style/MarkdownEditor/MarkdownPreview.less';
import { getI18nValue } from 'Utils/common';
import MarkdownNoteContext from './context';

const { Title } = Typography;

export const MarkdownNotePreview = () => {
    const literals = useSelector((state: RootState) => state.literals);
    const { markdownText } = useContext(MarkdownNoteContext);

    return (
        <Col offset={2} span={10}>
            <Row gutter={[16, 16]}>
                <Title level={2}>
                    {getI18nValue(
                        literals,
                        'Pages.Markdown.MarkdownPreview.title'
                    )}
                </Title>
            </Row>
            <Row gutter={[16, 16]}>
                <div className={styles.reactMarkdownContainer}>
                    <ReactMarkdown source={markdownText} />
                </div>
            </Row>
        </Col>
    );
};

MarkdownNotePreview.displayName = 'MarkdownNotePreview';
