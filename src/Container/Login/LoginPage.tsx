import { LoginForm } from 'Container/Login/LoginForm';
import { thunkUpdateSession } from 'Store/system/thunks';
import { ILoginData } from 'Model/Authenticate';
import React from 'react';
import { throttle, get } from '../../Utils/common';
import style from 'Style/Login/LoginPage.less';
import { RouteComponentProps } from 'react-router-dom';
import { MenuRoute } from 'Constants/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Store';
import { InitializationLoginData } from 'Constants/Common';
import { Alert } from 'antd';

export const LogInPage: React.FC<RouteComponentProps> = (props) => {
  const literals = useSelector((state: RootState) => state.literals);
  const dispatch = useDispatch();

  const handleSubmit = (data: ILoginData) => {
    throttle(() => {
      dispatch(thunkUpdateSession(data, literals));
    }, 1000);
    setTimeout(() => props.history.push(MenuRoute.HOME), 1000);
  };
  return (
    <div className={style.login_form}>
      <Alert
        className={style.login_form_info}
        message={get(literals, 'Forms.Login.Info.title')}
        description={get(literals, 'Forms.Login.Info.note')}
        type="info"
        showIcon
      />
      <LoginForm initialData={InitializationLoginData} onSubmit={handleSubmit} literals={literals} />
    </div>
  );
};
