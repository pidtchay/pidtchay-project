import { GITHUB_API } from 'Constants/Api';
import { ILiterals } from 'Model/Literals';
import { IRepositoryData } from 'Model/RepositoryData';
import { TThunkResult } from 'Store/constants';
import {
    openNotificationWithIcon,
    convertStringArrayToString,
    getI18nValue
} from 'Utils/common';
import { fetchRepositoryData, clearRepositoryData } from './actions';

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
                    getI18nValue(
                        literals,
                        'Notification.request.error.description'
                    )
                ),
                title: convertStringArrayToString(
                    getI18nValue(literals, 'Notification.request.error.title')
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
    return body.map((item) => {
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
