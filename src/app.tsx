import React, { useState } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  GithubOutlined,
  HomeOutlined,
  InfoCircleOutlined
  // UserOutlined
} from '@ant-design/icons';
import style from 'Style/App.less';
import 'antd/dist/antd.css';
import { LogInPage } from 'Container/Login/LoginPage';
import { RepositoriesPage } from 'Container/Repositories/RepositoriesPage';
import { RepositoryDetailsPage } from 'Container/Repositories/RepositoryDetailsPage';
import history from 'Utils/history';
import { MenuRoute, ContentRoute } from 'Constants/Routes';
import { AuthRoute } from 'Container/AuthRoute';
import { HeaderPanel } from 'Component/HeaderPanel';
import { HomePage } from 'Container/Home/HomePage';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';
import { get } from 'Utils/common';
import { AboutPage } from 'Container/AboutPage';
const { Header, Content, Footer, Sider } = Layout;

export const App = () => {
  const [isSideMenuToogle, setSideMenuToggled] = useState(true);
  const toggleTrueFalse = () => setSideMenuToggled(!isSideMenuToogle);
  const literals = useSelector((state: RootState) => state.literals);

  return (
    <Router history={history}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={isSideMenuToogle}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to={MenuRoute.HOME}>{get(literals, 'SideMenu.home')}</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />}>
              <Link to={MenuRoute.ABOUT}>{get(literals, 'SideMenu.about')}</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<GithubOutlined />}>
              <Link to={MenuRoute.REPOSITORIES.DEFAULT}>{get(literals, 'SideMenu.git_repos')}</Link>
            </Menu.Item>
            {/* <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to={MenuRoute.LOGIN}>Login</Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className={style.site_layout}>
          <Header className={style.site_layout_header}>
            <HeaderPanel isSideMenuToogle={isSideMenuToogle} onToggleTrueFalse={toggleTrueFalse} />
          </Header>
          <Content className={style.site_layout_content}>
            <Switch>
              <Route path={ContentRoute.LOGIN} render={(props) => <LogInPage {...props} />} />
              <Route path={ContentRoute.ABOUT} render={() => <AboutPage />} />
              <AuthRoute path={ContentRoute.REPOSITORIES.DETAILS} component={RepositoryDetailsPage} />
              <AuthRoute path={ContentRoute.REPOSITORIES.DEFAULT} component={RepositoriesPage} />
              <AuthRoute path={ContentRoute.HOME} component={() => <HomePage />} />
            </Switch>
          </Content>
          <Footer>{get(literals, 'Layout.footer')}</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};
