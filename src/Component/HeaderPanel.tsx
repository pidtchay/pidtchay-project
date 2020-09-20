import { Row, Col, Avatar, Button } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MenuUnfoldOutlined, LoginOutlined, MenuFoldOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { ESupportedLanguages, EVENT_DELAY } from 'Constants/Common';
import { MenuRoute } from 'Constants/Routes';
import { cleanAuthSession } from 'Store/authSession/actions';
import { changeLanguage } from 'Store/languages/api';
import { NewRootState } from 'Store/root';
import style from 'Style/HeaderPanel.less';
import history from 'Utils/history';
import { useLiteralValue, useThrottledDispatchedFunction } from 'Utils/hooks';

interface IHeaderPanel {
    isSideMenuToogle: boolean;
    onToggleTrueFalse: () => void;
}

export const HeaderPanel: React.FC<IHeaderPanel> = ({ isSideMenuToogle, onToggleTrueFalse }) => {
    const [language, setLanguage] = useState(ESupportedLanguages.RU);
    const [languageUsed, setLanguageUsed] = useState(ESupportedLanguages.EN.toUpperCase());
    const [throttledLoadLiterals] = useThrottledDispatchedFunction(changeLanguage, EVENT_DELAY);

    const [throttledCleanSession] = useThrottledDispatchedFunction(cleanAuthSession, EVENT_DELAY);

    const { getValue: getLiteralValue } = useLiteralValue();

    const auth = useSelector((state: NewRootState) => state.authSession.authenticated);

    const onGoHome = () => history.push(MenuRoute.HOME);

    const onChangeLanguage = () => {
        setLanguage(language === ESupportedLanguages.EN ? ESupportedLanguages.RU : ESupportedLanguages.EN);
        setLanguageUsed(language.toUpperCase());
        // tslint:disable-next-line: no-floating-promises
        throttledLoadLiterals(language);
    };
    return (
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
                            <Button type="link" icon={<HomeOutlined />} onClick={onGoHome}>
                                PIDTCHAY PROJECT.
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={5}>
                    <div className={style.header_layout}>
                        <Button type="primary" onClick={onChangeLanguage} className={style.header_layout_i18n}>
                            {languageUsed}
                        </Button>
                        {auth && <Avatar size="large" icon={<UserOutlined />} className={style.header_layout_avatar} />}
                        {auth && (
                            <Button type="primary" shape="round" icon={<LoginOutlined />} size="large" className={style.header_layout_button} onClick={() => throttledCleanSession()}>
                                {getLiteralValue('ACTIONS.logout')}
                            </Button>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};
