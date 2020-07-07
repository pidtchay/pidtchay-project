import { Layout } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { InputField } from 'Component/Common/ImputField';
// import { MarkdownEditor } from 'Modules/Markdown/MarkdownEditor';
import { RootState } from 'Store';
import style from 'Style/App.less';
import { getI18nValue } from 'Utils/common';
import 'antd/dist/antd.css';
const { Content, Footer } = Layout;

export const App = () => {
    const literals = useSelector((state: RootState) => state.literals);

    // const handleChangePassword = (value: string) => {
    //     console.debug({ value });
    // };
    return (
        <Layout className={style.site_layout}>
            <Content className={style.site_layout_content}>
                <div>
                    <InputField
                        name=""
                        type="password"
                        label="Enter password"
                        value=""
                        // onChange={handleChangePassword}
                    />
                </div>
                {/* <MarkdownEditor /> */}
            </Content>
            <Footer>{getI18nValue(literals, 'Layout.footer')}</Footer>
        </Layout>
    );
};
