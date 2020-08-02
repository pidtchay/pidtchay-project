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

// import React, { useState } from 'react';
// import { useThrottledFunction } from 'Utils/hooks';

export const App = () => {
    const [isSideMenuToogle, setSideMenuToggled] = useState(true);
    const toggleTrueFalse = () => setSideMenuToggled(!isSideMenuToogle);
    const { isLoading, getValue: getLiteralValue } = useLiteralValue();

    // const [eventCount, setEvenntCount] = useState(0);
    // const [functionCount, setFunctionCount] = useState(0);
    // const [throtledSetFunctionCount] = useThrottledFunction(
    //     setFunctionCount,
    //     300
    // );

    // const handleClick = () => {
    //     setEvenntCount(eventCount + 1);
    //     throtledSetFunctionCount(functionCount + 1);
    // };

    return (
        //     <div>
        //         <div>
        //             <button onClick={handleClick}>Click Me!</button>
        //         </div>
        //         <div>
        //             <p>
        //                 Event triggered: <label>{eventCount}</label>
        //             </p>
        //         </div>
        //         <div>
        //             <p>
        //                 Function executed: <label>{functionCount}</label>
        //             </p>
        //         </div>
        //     </div>
        <Spin spinning={isLoading}>
            <Router history={history}>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible={true}
                        collapsed={isSideMenuToogle}
                    >
                        <MainMenu />
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
                        <Footer>{getLiteralValue('Layout.footer')}</Footer>
                    </Layout>
                </Layout>
            </Router>
        </Spin>
    );
};
