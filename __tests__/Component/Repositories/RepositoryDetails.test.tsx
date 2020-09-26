import * as React from 'react';
import { Provider } from 'react-redux';
import * as renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { RepositoryDetails } from 'Container/Repositories/Details/RepositoryDetailsBody';
import { IRepositoryData } from 'Model/RepositoryData';
import { newRootReducer } from 'Store/root';

const store = createStore(newRootReducer);

describe('render success', () => {
    it('should match the snapshot', async () => {
        const handleBackClick = jest.fn();
        const repository: IRepositoryData = {
            avatarImg: 'http://test.com/avatar.jpeg',
            description: '',
            forks: 1,
            homepage: 'http://test.com/home',
            id: 1,
            language: 'javascript',
            name: 'ReactJS Todo list',
            owner: 'Monster corp',
            type: '',
            watchers: 5
        };
        const component = renderer.create(
            <Provider store={store}>
                <RepositoryDetails onBackClick={handleBackClick} repository={repository} />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
