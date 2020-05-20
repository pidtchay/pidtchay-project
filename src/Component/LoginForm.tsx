import * as React from 'react';
import { ILoginData } from 'src/Model/Login';

/**
 * LogIn Form props
 */
interface ILogInProps {
    initialData: ILoginData;
    onSubmit: (loginData: ILoginData) => void;
}

/**
 * LogIn Form
 * @param [ILoginData] initialData - LogIn Data model.
 * @param [Function] onSubmit - submit action. 
 */
export const LogInForm = ({initialData, onSubmit}: ILogInProps) => {
    const [loginData, setLoginData] = React.useState(initialData);
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(loginData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your nickname
                <input value={loginData.nickName} onChange={e => setLoginData({...loginData, nickName: e.target.value})} />
            </label>
            <label>
                Enter your email
                <input type="email" value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})} />
            </label>
            <label>
                Your password
                <input type="password" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} />
            </label>
        </form>
    );
};
