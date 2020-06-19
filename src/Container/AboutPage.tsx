import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';
import { get } from 'Utils/common';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import style from 'Style/App.less';
import { Row, Col, Typography, Spin, Tooltip, Divider } from 'antd';
const { Title } = Typography;

const iconStyle = {
    fontSize: 30
};

export const AboutPage = () => {
    const literals = useSelector((state: RootState) => state.literals);
    const isLoading = Object.keys(literals).length === 0;
    return (
        <>
            {isLoading ? (
                <div className={style.loading_spin}>
                    <Spin size="large" />
                </div>
            ) : (
                <div>
                    <Row>
                        <div>
                            <Divider orientation="left">
                                <Title>
                                    {get(literals, 'Pages.About.title')}
                                </Title>
                            </Divider>
                            <p>{get(literals, 'Pages.About.greeting')}</p>
                            <p>{get(literals, 'Pages.About.paragraph1')}</p>
                            <p>{get(literals, 'Pages.About.paragraph2')}</p>
                        </div>
                    </Row>
                    <Row>
                        <Col span={1} offset={1}>
                            <Tooltip title="https://github.com/pidtchay">
                                <GithubOutlined style={iconStyle} />
                            </Tooltip>
                        </Col>
                        <Col span={1} offset={1}>
                            <Tooltip title="pidtchay@gmail.com">
                                <MailOutlined style={iconStyle} />
                            </Tooltip>
                        </Col>
                    </Row>
                </div>
            )}
        </>
    );
};
