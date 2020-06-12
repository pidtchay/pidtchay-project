import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { RepositoriesBody } from 'Container/Repositories/RepositoriesBody';
import { convertRepositoryDataToColumns, convertRepositoryDataToSchema } from 'Utils/TableUtils';

describe('render success',() => {
    it('should match the snapshot', () => {
        const repositoryData = [{
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
        }];
        const columns = convertRepositoryDataToColumns(convertRepositoryDataToSchema(repositoryData[0]));
        const handleFetchData = () => jest.fn();

        const component = renderer.create(<RepositoriesBody columns={columns} data={repositoryData} onFetchRepositories={handleFetchData} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
