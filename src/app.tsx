import { Layout, Spin } from 'antd';
import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { HeaderPanel } from 'Component/HeaderPanel';
import { MainMenu } from 'Container/Main/MainMenu';
import { MainRoutes } from 'Container/Main/MainRoutes';
import style from 'Style/App.less';
import 'antd/dist/antd.css';
import history from 'Utils/history';
import { useLiteralValue } from 'Utils/hooks';
const { Header, Content, Sider, Footer } = Layout;

export const App = () => {
    const [isSideMenuToogle, setSideMenuToggled] = useState(true);
    const toggleTrueFalse = () => setSideMenuToggled(!isSideMenuToogle);
    const { isLoading, getValue: getLiteralValue } = useLiteralValue();

    return (
        <Spin spinning={isLoading}>
            <Router history={history}>
                <Layout>
                    <Sider trigger={null} collapsible={true} collapsed={isSideMenuToogle}>
                        <MainMenu />
                    </Sider>
                    <Layout className={style.site_layout}>
                        <Header className={style.site_layout_header}>
                            <HeaderPanel isSideMenuToogle={isSideMenuToogle} onToggleTrueFalse={toggleTrueFalse} />
                        </Header>
                        <Content className={style.site_layout_content}>
                            <MainRoutes />
                        </Content>
                        <Footer>{getLiteralValue('Layout.footer')}</Footer>
                    </Layout>
                </Layout>
            </Router>
        </Spin>
    );
};
