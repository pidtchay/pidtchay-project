import { Layout } from 'antd';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import React from 'react';
import { useSelector } from 'react-redux';
import { MarkdownEditor } from 'Modules/Markdown/MarkdownEditor';
import { RootState } from 'Store';
import style from 'Style/App.less';
import { getI18nValue } from 'Utils/common';
import 'antd/dist/antd.css';
const { Content, Footer } = Layout;

export const App = () => {
    const literals = useSelector((state: RootState) => state.literals);

    return (
        <ErrorBoundary>
            <Layout className={style.site_layout}>
                <Content className={style.site_layout_content}>
                    <MarkdownEditor />
                </Content>
                <Footer>{getI18nValue(literals, 'Layout.footer')}</Footer>
            </Layout>
        </ErrorBoundary>
    );
};
