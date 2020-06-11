import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { RepositoryDetails } from 'Container/Repositories/RepositoryDetailsBody';
import { IRepositoryData } from 'Model/RepositoryData';

describe('render success',() => {
    it('should match the snapshot', () => {
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
        const component = renderer.create(<RepositoryDetails onBackClick={handleBackClick} repository={repository} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
