import { IRepositoryData } from "Model/RepositoryData";

export const FETCH_REPOSITORY_DATA = 'FETCH_REPOSITORY_DATA';
export const CLEAR_REPOSITORY_DATA = 'CLEAR_REPOSITORY_DATA';

/**
 * Fetch repository data
 */
interface IFetchRepositoryData {
    type: typeof FETCH_REPOSITORY_DATA,
    payload: IRepositoryData[],
}

/**
 * Clear repository data
 */
interface IClearRepositoryData {
    type: typeof CLEAR_REPOSITORY_DATA,
}

export type RepositoryDataActionTypes = IFetchRepositoryData | IClearRepositoryData;