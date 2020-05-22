import { LogInForm } from "Component/LoginForm";
import { connect } from "react-redux";
import { thunkUpdateSession } from "Store/system/thunks";
import { ILoginData } from "Model/Authenticate";
import React from "react";
import { throttle } from "../../utils/common";

const loginData: ILoginData = {
    nickName: 'Tom',
    email: 'tom@test.com',
    password: '111'
}

interface IProps {
    logInSubmit: (data: ILoginData) => void;
}

const LogInContainer = ({logInSubmit}: IProps) => {
    const handleSubmit = (data: ILoginData) => {
        throttle(() => {
            console.group('onSubmit');
            console.debug(`Your nickname: ${data.nickName}`);
            console.debug(`Your email: ${data.email}`);
            console.debug(`Your password: ${data.password}`);
            console.groupEnd();
            logInSubmit(data);
        }, 1000);
    }
    return(
        <LogInForm initialData={loginData} onSubmit={handleSubmit} />
    );
}

const mapPropsToDispatch = {
    logInSubmit: thunkUpdateSession
}

export const LogIn = connect(null, mapPropsToDispatch)(LogInContainer); 