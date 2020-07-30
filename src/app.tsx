import { Layout, Spin } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { HeaderPanel } from 'Component/HeaderPanel';
import { MainMenu } from 'Container/Main/MainMenu';
import { MainRoutes } from 'Container/Main/MainRoutes';
import { RootState } from 'Store';
import style from 'Style/App.less';
import { getI18nValue } from 'Utils/common';
import 'antd/dist/antd.css';
import history from 'Utils/history';
const { Header, Content, Sider, Footer } = Layout;

export const App = () => {
    const [isSideMenuToogle, setSideMenuToggled] = useState(true);
    const toggleTrueFalse = () => setSideMenuToggled(!isSideMenuToogle);
    const literals = useSelector((state: RootState) => state.literals);

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        if (Object.keys(literals).length > 0) {
            setLoading(false);
        }
    });
    return (
        <Spin spinning={isLoading}>
            <Router history={history}>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible={true}
                        collapsed={isSideMenuToogle}
                    >
                        <MainMenu literals={literals} />
                    </Sider>
                    <Layout className={style.site_layout}>
                        <Header className={style.site_layout_header}>
                            <HeaderPanel
                                isSideMenuToogle={isSideMenuToogle}
                                onToggleTrueFalse={toggleTrueFalse}
                            />
                        </Header>
                        <Content className={style.site_layout_content}>
                            <MainRoutes />
                        </Content>
                        <Footer>
                            {getI18nValue(literals, 'Layout.footer')}
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        </Spin>
    );
};
