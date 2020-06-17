import React, { useState } from 'react';
import { MenuUnfoldOutlined, LoginOutlined, MenuFoldOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import style from 'Style/HeaderPanel.less';
import { Row, Col, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Store';
import { cleanSession } from 'Store/system/actions';
import history from 'Utils/history';
import { MenuRoute } from 'Constants/Routes';
import { loadLang } from 'i18n/i18n';
import { loadLiterals } from 'Store/literals/actions';
import { get } from 'Utils/common';
import { ESupportedLanguages } from 'Constants/Common';

interface IHeaderPanel {
  isSideMenuToogle: boolean;
  onToggleTrueFalse: () => void;
}

// TODO Switch language button
export const HeaderPanel: React.FC<IHeaderPanel> = ({ isSideMenuToogle, onToggleTrueFalse }) => {
  const [language, setLanguage] = useState(ESupportedLanguages.RU);
  const [languageUsed, setLanguageUsed] = useState(ESupportedLanguages.EN.toUpperCase());
  const auth = useSelector((state: RootState) => state.system.authenticated);
  const literals = useSelector((state: RootState) => state.literals);
  const dispatch = useDispatch();

  const onGoHome = () => history.push(MenuRoute.HOME);

  const changeLanguage = () => {
    setLanguage(language === ESupportedLanguages.EN ? ESupportedLanguages.RU : ESupportedLanguages.EN);
    setLanguageUsed(language.toUpperCase());
    // tslint:disable-next-line: no-floating-promises
    loadLang(language).then((lang) => dispatch(loadLiterals(lang)));
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
            <Button type="primary" onClick={changeLanguage} className={style.header_layout_i18n}>
              {languageUsed}
            </Button>
            {auth && <Avatar size="large" icon={<UserOutlined />} className={style.header_layout_avatar} />}
            {auth && (
              <Button
                type="primary"
                shape="round"
                icon={<LoginOutlined />}
                size="large"
                className={style.header_layout_button}
                onClick={() => dispatch(cleanSession())}
              >
                {get(literals, 'ACTIONS.logout')}
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};
