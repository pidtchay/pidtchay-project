import * as React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { MenuRoute } from 'Constants/Routes';
import { RootState } from 'Store';
import { RepositoryDetails } from './RepositoryDetailsBody';

export const RepositoryDetailsPage: React.FC<RouteComponentProps> = (props) => {
    const store = useSelector((state: RootState) => state.repository);
    const repository = store.find((x) => x.id === +props.match.params['id']);
    if (!repository) {
        return <div>Empty</div>;
    }

    const handleBackClick = () => {
        props.history.push(MenuRoute.REPOSITORIES.DEFAULT);
    };

    return <RepositoryDetails repository={repository} onBackClick={handleBackClick} />;
};
