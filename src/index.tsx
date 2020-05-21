import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LogInForm } from './Component/LoginForm';
import { ILoginData } from './Model/Login';
import style from 'Style/App.less';

const loginData: ILoginData = {
    nickName: 'Tom',
    email: 'tom@test.com',
    password: '111'
}

const onSubmit = (data: ILoginData) => {
    console.group('onSubmit'); 
    console.debug(`Your nickname: ${data.nickName}`);
    console.debug(`Your email: ${data.email}`);
    console.debug(`Your password: ${data.password}`);
    console.groupEnd();
}

const App = () => (<div className={style.main}><LogInForm initialData={loginData} onSubmit={onSubmit} /></div>);

ReactDOM.render(
    <App />, document.getElementById('root'),
);
