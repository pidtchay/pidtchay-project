import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Store/root';
import { convertRepositoryDataToSchema, convertRepositoryDataToColumns } from 'Utils/TableUtils';
import { ListOfRepositories } from './ListOfRepositories';
import { useGithubRepos } from './hooks';

export const ListOfRepositoriesPage = () => {
    const gitgubRepos = useSelector((state: RootState) => state.githubRepos);
    const [organisationName, setOrganosationName] = useState('facebook');
    const { fetchData } = useGithubRepos();

    useEffect(() => {
        fetchData(organisationName);
    }, [organisationName]);

    const handleFetchRepositories = (value: string) => {
        setOrganosationName(value);
    };

    return <ListOfRepositories columns={convertRepositoryDataToColumns(convertRepositoryDataToSchema(gitgubRepos.repositories[0]))} data={gitgubRepos.repositories} onFetchRepositories={handleFetchRepositories} />;
};
