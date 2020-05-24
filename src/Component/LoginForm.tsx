import * as React from 'react';
import { ILoginData } from 'Model/Authenticate';
import { InputField } from './ImputField';
import style from 'Style/LogInForm.less'

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

    const handleChange = (fieldName: string) => (fieldValue: string) => {
        setLoginData({
            ...loginData,
            [fieldName]: fieldValue
        })
    }

    return (
        <form className={style.loginForm} onSubmit={handleSubmit}>
            <div className={style.alert}>Just press Enter</div>
            <InputField label="Enter your nickname" type="text" value={loginData.nickName} onChange={handleChange('nickName')}/>
            <InputField label="Enter your email" type="email" value={loginData.email} onChange={handleChange('email')}/>
            <InputField label="Enter your password" type="password" value={loginData.password} onChange={handleChange('password')}/>
            <button className={style.submitButton}>Submit</button>
        </form>
    );
};