/* eslint-disable jsdoc/require-param */
import { Alert } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { InitializationLoginData, EVENT_DELAY } from 'Constants/Common';
import { MenuRoute } from 'Constants/Routes';
import { LoginForm } from 'Container/Login/LoginForm';
import { ILoginData } from 'Model/Authenticate';
import { thunkUpdateSession } from 'Store/system/thunks';
import style from 'Style/Login/LoginPage.less';
import {
    useLiteralValue,
    useThrottledDispatchedFunction,
    useThrottledFunction
} from 'Utils/hooks';
import { convertStringArrayToString } from '../../Utils/common';

/**
 * Login page component.
 *
 * @returns {JSX.Element} [return0] Login page.
 */
export const LogInPage: React.FC<RouteComponentProps> = (props) => {
    const { getValue: getLiteralValue } = useLiteralValue();

    const [throttledUpdateSession] = useThrottledDispatchedFunction(
        thunkUpdateSession,
        EVENT_DELAY
    );
    const [throttledHistory] = useThrottledFunction(
        () => props.history.push(MenuRoute.HOME),
        EVENT_DELAY
    );

    const handleSubmit = (data: ILoginData) => {
        throttledUpdateSession({
            loginData: data,
            loginDescription: convertStringArrayToString(
                getLiteralValue('Notification.login.description')
            ),
            loginTitle: convertStringArrayToString(
                getLiteralValue('Notification.login.title')
            ),
            errorDescription: convertStringArrayToString(
                getLiteralValue('Notification.request.error.description')
            ),
            errorTitle: convertStringArrayToString(
                getLiteralValue('Notification.request.error.title')
            )
        });
        throttledHistory();
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
