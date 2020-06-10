import React, { useState } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  GithubOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined // ,
  // UserOutlined
} from '@ant-design/icons';
import style from 'Style/App.less';
import 'antd/dist/antd.css';
import { LogInPage } from 'Container/LoginPage';
import { RepositoriesPage } from 'Container/Repositories/RepositoriesPage';
import { RepositoryDetails } from 'Container/Repositories/RepositoryDetails';
import history from 'Utils/history';
import { MenuRoute, ContentRoute } from 'Constants/Routes';
import { AuthRoute } from 'Container/AuthRoute';
const { Header, Content, Footer, Sider } = Layout;

export const App = () => {
  const [isSideMenuToogle, setSideMenuToggled] = useState(true);
  const toggleTrueFalse = () => setSideMenuToggled(!isSideMenuToogle);

  return (
    <Router history={history}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={isSideMenuToogle}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to={MenuRoute.HOME}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />}>
              <Link to={MenuRoute.ABOUT}>About</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<GithubOutlined />}>
              <Link to={MenuRoute.REPOSITORIES.DEFAULT}>Github repositories</Link>
            </Menu.Item>
            {/* <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to={MenuRoute.LOGIN}>Login</Link>
            </Menu.Item> */}
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
              <Route path={ContentRoute.LOGIN} render={(props) => <LogInPage {...props} />} />
              <Route path={ContentRoute.ABOUT} render={() => <div>About</div>} />
              <AuthRoute path={ContentRoute.REPOSITORIES.DETAILS} component={RepositoryDetails} />
              <AuthRoute path={ContentRoute.REPOSITORIES.DEFAULT} component={RepositoriesPage} />
              <AuthRoute path={ContentRoute.HOME} component={() => <div>Home</div>} />
            </Switch>
          </Content>
          <Footer>Pidtchay Project ©2020 Created by PidtChay</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};
