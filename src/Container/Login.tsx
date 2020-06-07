import { LoginForm } from "Component/LoginForm";
import { connect } from "react-redux";
import { thunkUpdateSession } from "Store/system/thunks";
import { ILoginData } from "Model/Authenticate";
import React from "react";
import { throttle } from "../Utils/common";

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
            logInSubmit(data);
        }, 1000);
    }
    return(
        <div>
            <LoginForm initialData={loginData} onSubmit={handleSubmit} />
        </div>
    );
}

const mapPropsToDispatch = {
    logInSubmit: thunkUpdateSession
}

export const LogIn = connect(null, mapPropsToDispatch)(LogInContainer); 