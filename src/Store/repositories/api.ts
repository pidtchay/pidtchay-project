import { GITHUB_API } from 'Constants/Api';
import { IRepositoryData } from 'Model/RepositoryData';

export const getRepositoriesData = async (organisationName: string): Promise<IRepositoryData[]> => {
    const response = await fetch(GITHUB_API.REPOS.LIST_BY_ORGNAME(organisationName));
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
