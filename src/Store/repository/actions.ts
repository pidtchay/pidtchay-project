import { IRepositoryData } from 'Model/RepositoryData';
import { RepositoryDataActionTypes, FETCH_REPOSITORY_DATA, CLEAR_REPOSITORY_DATA } from './types';

/**
 * @param data
 */
export function fetchRepositoryData(data: IRepositoryData[]): RepositoryDataActionTypes {
    return {
        type: FETCH_REPOSITORY_DATA,
        payload: data
    };
}

/**
 *
 */
export function clearRepositoryData(): RepositoryDataActionTypes {
    return {
        type: CLEAR_REPOSITORY_DATA
    };
}
