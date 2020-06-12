import React from 'react';
import {
    MenuUnfoldOutlined,
    LoginOutlined,
    MenuFoldOutlined,
    UserOutlined
  } from '@ant-design/icons';
  import style from 'Style/HeaderPanel.less';
import { Row, Col, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Store';
import { cleanSession } from 'Store/system/actions';

interface IHeaderPanel {
    isSideMenuToogle: boolean;
    onToggleTrueFalse: () => void;
}

export const HeaderPanel:React.FC<IHeaderPanel> = ({isSideMenuToogle, onToggleTrueFalse}) => {
    const auth = useSelector((state: RootState) => state.system.authenticated);
    const dispatch = useDispatch();
    return(
        <div>
            <Row>
                <Col span={1}>
                    {React.createElement(isSideMenuToogle ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: onToggleTrueFalse
                    })}
                </Col>
                
                {auth && (
                    <Col span={8} offset={14}>
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
