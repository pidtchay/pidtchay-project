import { Row, Col, Typography, Tooltip, Divider } from 'antd';
import React from 'react';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import { useLiteralValue } from 'Utils/hooks';
const { Title } = Typography;

const iconStyle = {
    fontSize: 30
};

export const AboutPage = () => {
    const { getValue: getLiteralValue } = useLiteralValue();
    return (
        <>
            <div>
                <Row gutter={[16, 16]}>
                    <div>
                        <Divider orientation="left">
                            <Title>{getLiteralValue('Pages.About.title')}</Title>
                        </Divider>
                        <p>{getLiteralValue('Pages.About.greeting')}</p>
                        <p>{getLiteralValue('Pages.About.paragraph1')}</p>
                        <p>{getLiteralValue('About.paragraph2')}</p>
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
        </>
    );
};
