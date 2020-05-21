
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ILoginData } from 'Model/Login';
import { LogInForm } from 'Component/LoginForm';

describe('LogIn form render success', () => {
    const initialData: ILoginData= {
        nickName: 'Test',
        email: 'test@test.com',
        password: '111'
    };
    const handleSubmit = (data: ILoginData) => {
        console.group('onSubmit');
        console.debug(`Your nickname: ${data.nickName}`);
        console.debug(`Your email: ${data.email}`);
        console.debug(`Your password: ${data.password}`);
        console.groupEnd();
    };
    it('should match the snapshot', () => {
        const component = renderer.create(<LogInForm initialData={initialData} onSubmit={handleSubmit} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});