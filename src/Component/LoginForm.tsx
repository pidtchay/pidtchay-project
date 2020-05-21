import * as React from 'react';
import { ILoginData } from 'Model/Login';
import { InputField } from './ImputField';

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
export const LogInForm: React.FC<ILogInProps> = ({initialData, onSubmit}) => {
    const [loginData, setLoginData] = React.useState(initialData);
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(loginData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputField label="Enter your nickname" type="text" value={loginData.nickName} onChange={e => setLoginData({...loginData, nickName: e.target.value})}/>
            <InputField label="Enter your email" type="text" value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})}/>
            <InputField label="Enter your password" type="text" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})}/>
            <button>Submit</button>
        </form>
    );
};
