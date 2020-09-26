import { IRepositoryData } from 'Model/RepositoryData';

export interface IInitialState {
    repositories: IRepositoryData[];
    state: string;
    errors: [];
}

export const listRepositoriesState: IInitialState = {
    errors: [],
    repositories: [],
    state: ''
};
