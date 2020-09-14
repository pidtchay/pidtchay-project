import * as React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { MenuRoute } from 'Constants/Routes';
import { NewRootState } from 'Store/root';
import { RepositoryDetails } from './RepositoryDetailsBody';

export const RepositoryDetailsPage: React.FC<RouteComponentProps> = (props) => {
    const store = useSelector((state: NewRootState) => state.githubRepos);
    const repository = store.repositories.find((x) => x.id === +props.match.params['id']);
    if (!repository) {
        return <div>Empty</div>;
    }

    const handleBackClick = () => {
        props.history.push(MenuRoute.REPOSITORIES.DEFAULT);
    };

    return <RepositoryDetails repository={repository} onBackClick={handleBackClick} />;
};
