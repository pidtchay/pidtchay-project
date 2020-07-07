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
import { ILiterals } from 'Model/Literals';
import { getI18nValue } from 'Utils/common';

export const MainMenu: React.FC<{ literals: ILiterals }> = ({ literals }) => {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to={MenuRoute.HOME}>
                    {getI18nValue(literals, 'SideMenu.home')}
                </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                <Link to={MenuRoute.ABOUT}>
                    {getI18nValue(literals, 'SideMenu.about')}
                </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<GithubOutlined />}>
                <Link to={MenuRoute.REPOSITORIES.DEFAULT}>
                    {getI18nValue(literals, 'SideMenu.git_repos')}
                </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileMarkdownOutlined />}>
                <Link to={MenuRoute.MARKDOWN}>
                    {getI18nValue(literals, 'SideMenu.markdown')}
                </Link>
            </Menu.Item>
        </Menu>
    );
};
