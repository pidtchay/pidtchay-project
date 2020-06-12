import React from 'react';
import {
    MenuUnfoldOutlined,
    LoginOutlined,
    MenuFoldOutlined,
    UserOutlined,
    HomeOutlined
  } from '@ant-design/icons';
  import style from 'Style/HeaderPanel.less';
import { Row, Col, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Store';
import { cleanSession } from 'Store/system/actions';
import history from 'Utils/history';
import { MenuRoute } from 'Constants/Routes';

interface IHeaderPanel {
    isSideMenuToogle: boolean;
    onToggleTrueFalse: () => void;
}

export const HeaderPanel:React.FC<IHeaderPanel> = ({isSideMenuToogle, onToggleTrueFalse}) => {
    const auth = useSelector((state: RootState) => state.system.authenticated);
    const dispatch = useDispatch();
    const onGoHome = () => history.push(MenuRoute.HOME);
    return(
        <div>
            <Row justify="space-between">
                <Col span={4}>
                    <Row justify="space-between">
                        <Col>
                        {React.createElement(isSideMenuToogle ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: onToggleTrueFalse
                        })}
                        </Col>
                        <Col>
                            <Button type="link" icon={<HomeOutlined />} onClick={onGoHome}>PIDTCHAY PROJECT.</Button>
                        </Col>
                    </Row>
                </Col>
                {auth && (
                    <Col span={5}>
                        <div className={style.header_layout}>
                            <Avatar size="large" icon={<UserOutlined />} className={style.header_layout_avatar} />
                            <Button type="primary" shape="round" icon={<LoginOutlined />} size="large" className={style.header_layout_button} onClick={() => dispatch(cleanSession())}>Logout</Button>
                        </div>
                    </Col>
                )}
            </Row>
        </div>
    );
};
