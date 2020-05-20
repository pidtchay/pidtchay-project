import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LogInForm } from './Component/LoginForm';
import { ILoginData } from './Model/Login';

const loginData: ILoginData = {
    nickName: 'Tom',
    email: 'tom@test.com',
    password: '111'
}

const onSubmit = (data: ILoginData) => {
    console.debug(`You enter data: ${data}`);
}

const App = () => (<LogInForm initialData={loginData} onSubmit={onSubmit} />);

ReactDOM.render(
    <App />, document.getElementById('root'),
);
