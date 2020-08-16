import { Col, Row, Typography, Divider } from 'antd';
import React from 'react';
import { HyperLink } from 'Component/Common/HyperLink';
import style from 'Style/Home.less';
import { useLiteralValue } from 'Utils/hooks';
import { CommentComponent } from './Comment';
import { RoadMap } from './RoadMap';
const { Title } = Typography;

/**
 * Home page component.
 *
 * @returns {JSX.Element} [return0] Home page.
 */
export const HomePage = () => {
    const { getValue: getLiteralValue } = useLiteralValue();
    return (
        <>
            <Row gutter={[16, 16]}>
                <div className={style.home_title}>
                    <Title>{getLiteralValue('Pages.Home.welcome.title')}</Title>
                    <Title level={2}>
                        {getLiteralValue('Pages.Home.welcome.title2')}
                        <HyperLink href="https://pidtchay.github.io/pidtchay-project/">pidtchay.github.io</HyperLink>
                    </Title>
                </div>
            </Row>

            <Divider />

            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <RoadMap />
                </Col>
                <Col offset={2}>
                    <CommentComponent />
                </Col>
            </Row>
        </>
    );
};
