import { Alert } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { InitializationLoginData } from 'Constants/Common';
import { MenuRoute } from 'Constants/Routes';
import { LoginForm } from 'Modules/Login/LoginForm';
import { ILoginData } from 'Model/Authenticate';
import { RootState } from 'Store';
import { thunkUpdateSession } from 'Store/system/thunks';
import style from 'Style/Login/LoginPage.less';
import { throttle, getI18nValue } from '../../Utils/common';

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
                message={getI18nValue(literals, 'Forms.Login.Info.title')}
                description={getI18nValue(literals, 'Forms.Login.Info.note')}
                type="info"
                showIcon={true}
            />
            <LoginForm
                initialData={InitializationLoginData}
                onSubmit={handleSubmit}
                literals={literals}
            />
        </div>
    );
};
