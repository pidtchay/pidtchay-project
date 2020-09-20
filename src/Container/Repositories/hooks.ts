/* eslint-disable jsdoc/require-returns */
import { useDispatch } from 'react-redux';
import { getRepositoriesData } from 'Store/repositories/api';
import { listRepositoriesSlice } from 'Store/repositories/slice';

/**
 * UseGithubRepos.
 */
export function useGithubRepos() {
    const dispatch = useDispatch();

    const { clean, fetched, fetching, fetchingError } = listRepositoriesSlice.actions;

    const fetchData = async (orgName: string) => {
        dispatch(fetching());
        return getRepositoriesData(orgName)
            .then((githubRepos) => {
                console.debug({ githubRepos });
                dispatch(fetched({ repositories: githubRepos }));
            })
            .catch((error) => {
                error.clientMessage = "Can't get repositories data";
                dispatch(fetchingError({ error }));
            });
    };

    const cleanData = () => {
        dispatch(clean());
    };

    return { fetchData, cleanData };
}
