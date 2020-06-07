import { IRepositoryData } from 'Model/RepositoryData';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'Store';
import { Action } from 'redux';
import { GITHUB_API } from 'Constants/Api';
import { fetchRepositoryData, clearRepositoryData } from './actions';

export const thunkFetchRepositoryData = (orgName: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
  try {
    const data = await fetchRepositoryApi(orgName) as IRepositoryData[];
    console.debug({ data });
    dispatch(
           fetchRepositoryData(data)
       );
  } catch (e) {
    console.error(e);
    dispatch(
           clearRepositoryData()
       );
  }
};

const fetchRepositoryApi = async (orgName: string) => {
  const response = await fetch(GITHUB_API(orgName));
  const body = await response.json();
  return body.map((item: any) => {
    return {
      id: item.id,
      avatarImg: item.owner.avatar_url,
      owner: item.owner.login,
      name: item.name,
      description: item.description,
      language: item.language,
      forks: item.forks,
      watchers: item.watchers,
      homepage: item.homepage
    } as IRepositoryData;
  });
};
