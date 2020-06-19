import 'jsdom-global/register';
import { loadLang } from 'i18n/i18n';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// import { JSDOM } from 'jsdom';
import { LoginForm } from 'Container/Login/LoginForm';
import { ILoginData } from 'Model/Authenticate';

// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
// const { window } = jsdom;
// // @ts-ignore
// global.window = window;
// // @ts-ignore
// global.document = window.document;

// ! TypeError: Illegal invocation
// ! at removeEventListener (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:131:15)
describe('LogIn form render success', () => {
    const initialData: ILoginData = {
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
    it('should match the snapshot', async () => {
        const literals = await loadLang();
        const component = renderer.create(
            <LoginForm
                literals={literals}
                initialData={initialData}
                onSubmit={handleSubmit}
            />
        );
        expect(component).toMatchSnapshot();
    });
});
