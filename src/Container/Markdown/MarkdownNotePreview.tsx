import { Row, Typography, Col } from 'antd';
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownNoteContext from 'Container/Markdown/MarkdownContext';
import styles from 'Style/MarkdownEditor/MarkdownPreview.less';
import { useLiteralValue } from 'Utils/hooks';

const { Title } = Typography;

export const MarkdownNotePreview = () => {
    const { getValue: getLiteralValue } = useLiteralValue();
    const { markdownText } = useContext(MarkdownNoteContext);

    return (
        <Col offset={2} span={10}>
            <Row gutter={[16, 16]}>
                <Title level={2}>{getLiteralValue('Pages.Markdown.MarkdownPreview.title')}</Title>
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
