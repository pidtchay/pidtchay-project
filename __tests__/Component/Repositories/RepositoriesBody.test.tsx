import * as React from 'react';
import { Provider } from 'react-redux';
import * as renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { ListOfRepositories } from 'Container/Repositories/ListOfRepositories';
import { newRootReducer } from 'Store/root';
import { convertRepositoryDataToColumns, convertRepositoryDataToSchema } from 'Utils/TableUtils';

const store = createStore(newRootReducer);

describe('render success', () => {
    it('should match the snapshot', async () => {
        const repositoryData = [
            {
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
            },
            {
                avatarImg: 'http://test.com/avatar2.jpeg',
                description: '',
                forks: 14,
                homepage: 'http://test2.com/home',
                id: 2,
                language: 'javascript',
                name: 'ReactJS Todo list2',
                owner: 'Robot corp',
                type: '',
                watchers: 35
            }
        ];
        const columns = convertRepositoryDataToColumns(convertRepositoryDataToSchema(repositoryData[0]));
        const handleFetchData = () => jest.fn();
        const component = renderer.create(
            <Provider store={store}>
                <ListOfRepositories columns={columns} data={repositoryData} onFetchRepositories={handleFetchData} />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
