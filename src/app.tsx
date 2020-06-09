import style from 'Style/App.less';
import React, { useState } from 'react';
import { LogIn } from 'Container/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AuthRoute } from 'Container/AuthRoute';
import { HomPage } from 'Container/HomePage';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { HomeOutlined, IdcardOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export const App = () => {
  const [isSideMenuToogle, setSideMenuToggled] = useState(false);
  const toggleTrueFalse = () => setSideMenuToggled(!isSideMenuToogle);

  return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={isSideMenuToogle}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<IdcardOutlined />}>
              About
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={style.site_layout}>
          <Header className={style.site_layout_header}>
            {React.createElement(isSideMenuToogle ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggleTrueFalse
            })}
          </Header>
          <Content className={style.site_layout_content}>
            <Switch>
              <Route path="/login">
                <div className={style.main}>
                  <LogIn />
                </div>
              </Route>
              <AuthRoute path="/" Component={HomPage} />
            </Switch>
          </Content>
          <Footer>Pidtchay Project ©2020 Created by PidtChay</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};
