import { Row, Col, Typography, Spin, Tooltip, Divider } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import { RootState } from 'Store';
import style from 'Style/App.less';
import { getI18nValue } from 'Utils/common';
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
                    <Row gutter={[16, 16]}>
                        <div>
                            <Divider orientation="left">
                                <Title>
                                    {getI18nValue(
                                        literals,
                                        'Pages.About.title'
                                    )}
                                </Title>
                            </Divider>
                            <p>
                                {getI18nValue(literals, 'Pages.About.greeting')}
                            </p>
                            <p>
                                {getI18nValue(
                                    literals,
                                    'Pages.About.paragraph1'
                                )}
                            </p>
                            <p>
                                {getI18nValue(
                                    literals,
                                    'Pages.About.paragraph2'
                                )}
                            </p>
                        </div>
                    </Row>
                    <Row gutter={[16, 16]}>
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
