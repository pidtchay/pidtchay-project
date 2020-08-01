import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    GithubOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    FileMarkdownOutlined
} from '@ant-design/icons';
import { MenuRoute } from 'Constants/Routes';
import { useLiteralValue } from 'Utils/hooks';

export const MainMenu: React.FC = () => {
    const { getValue: getLiteralValue } = useLiteralValue();
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to={MenuRoute.HOME}>
                    {getLiteralValue('SideMenu.home')}
                </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                <Link to={MenuRoute.ABOUT}>
                    {getLiteralValue('SideMenu.about')}
                </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<GithubOutlined />}>
                <Link to={MenuRoute.REPOSITORIES.DEFAULT}>
                    {getLiteralValue('SideMenu.git_repos')}
                </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileMarkdownOutlined />}>
                <Link to={MenuRoute.MARKDOWN}>
                    {getLiteralValue('SideMenu.markdown')}
                </Link>
            </Menu.Item>
        </Menu>
    );
};
