import { IRepositoryData } from 'Model/RepositoryData';
import { GITHUB_API } from 'Constants/Api';
import { fetchRepositoryData, clearRepositoryData } from './actions';
import {
    openNotificationWithIcon,
    convertStringArrayToString,
    get
} from 'Utils/common';
import { ILiterals } from 'Model/Literals';
import { TThunkResult } from 'Store/constants';

export const thunkFetchRepositoryData = (
    orgName: string,
    literals: ILiterals
): TThunkResult<void> => async (dispatch) => {
    await fetchRepositoryApi(orgName)
        .then((resp) => {
            dispatch(fetchRepositoryData(resp));
        })
        .catch((e) => {
            console.error(e);
            dispatch(clearRepositoryData());
            openNotificationWithIcon({
                description: convertStringArrayToString(
                    get(literals, 'Notification.request.error.description')
                ),
                title: convertStringArrayToString(
                    get(literals, 'Notification.request.error.title')
                ),
                type: 'error'
            });
        });
};

const fetchRepositoryApi = async (
    orgName: string
): Promise<IRepositoryData[]> => {
    const response = await fetch(GITHUB_API.REPOS.LIST_BY_ORGNAME(orgName));
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
