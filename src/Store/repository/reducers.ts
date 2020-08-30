import { IRepositoryData } from 'Model/RepositoryData';
import { RepositoryDataActionTypes, FETCH_REPOSITORY_DATA, CLEAR_REPOSITORY_DATA } from './types';

export const repositoryReducer = (state: IRepositoryData[] = [] as IRepositoryData[], actions: RepositoryDataActionTypes) => {
    switch (actions.type) {
        case FETCH_REPOSITORY_DATA:
            return [...actions.payload];
        case CLEAR_REPOSITORY_DATA:
            return [];
        default:
            return [...state];
    }
};
