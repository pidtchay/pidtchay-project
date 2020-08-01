import { Alert } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { InitializationLoginData } from 'Constants/Common';
import { MenuRoute } from 'Constants/Routes';
import { LoginForm } from 'Container/Login/LoginForm';
import { ILoginData } from 'Model/Authenticate';
import { thunkUpdateSession } from 'Store/system/thunks';
import style from 'Style/Login/LoginPage.less';
import { useLiteralValue } from 'Utils/hooks';
import { throttle, convertStringArrayToString } from '../../Utils/common';

export const LogInPage: React.FC<RouteComponentProps> = (props) => {
    const { getValue: getLiteralValue } = useLiteralValue();
    const dispatch = useDispatch();

    const handleSubmit = (data: ILoginData) => {
        throttle(() => {
            dispatch(
                thunkUpdateSession({
                    loginData: data,
                    loginDescription: convertStringArrayToString(
                        getLiteralValue('Notification.login.description')
                    ),
                    loginTitle: convertStringArrayToString(
                        getLiteralValue('Notification.login.title')
                    ),
                    errorDescription: convertStringArrayToString(
                        getLiteralValue(
                            'Notification.request.error.description'
                        )
                    ),
                    errorTitle: convertStringArrayToString(
                        getLiteralValue('Notification.request.error.title')
                    )
                })
            );
        }, 1000);
        setTimeout(() => props.history.push(MenuRoute.HOME), 1000);
    };
    return (
        <div className={style.login_form}>
            <Alert
                className={style.login_form_info}
                message={getLiteralValue('Forms.Login.Info.title')}
                description={getLiteralValue('Forms.Login.Info.note')}
                type="info"
                showIcon={true}
            />
            <LoginForm
                initialData={InitializationLoginData}
                onSubmit={handleSubmit}
            />
        </div>
    );
};
