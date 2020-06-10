import { LoginForm } from 'Component/LoginForm';
import { connect } from 'react-redux';
import { thunkUpdateSession } from 'Store/system/thunks';
import { ILoginData } from 'Model/Authenticate';
import React from 'react';
import { throttle } from '../Utils/common';
import style from 'Style/Login/LoginPage.less';
import { RouteComponentProps } from 'react-router-dom';
import { MenuRoute } from 'Constants/Routes';

const loginData: ILoginData = {
  nickName: 'Tom',
  email: 'tom@test.com',
  password: '111'
};

interface IProps {
  logInSubmit: (data: ILoginData) => void;
}

type TLoginPageProps = IProps & RouteComponentProps;
const LogInContainer:React.FC<TLoginPageProps> = ({ logInSubmit, ...rest }) => {
  const handleSubmit = (data: ILoginData) => {
    throttle(() => {
      logInSubmit(data);
    }, 1000);
    setTimeout(() => rest.history.push(MenuRoute.HOME), 1000);
  };
  return(
        <div className={style.login_form}>
            <LoginForm initialData={loginData} onSubmit={handleSubmit} />
        </div>
  );
};

const mapPropsToDispatch = {
  logInSubmit: thunkUpdateSession
};

export const LogInPage = connect(null, mapPropsToDispatch)(LogInContainer);
