import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';
import { RepositoryDetails } from './RepositoryDetailsBody';
import { MenuRoute } from 'Constants/Routes';

export const RepositoryDetailsPage: React.FC<RouteComponentProps> = (props) => {
    const literals = useSelector((state: RootState) => state.literals);
    const store = useSelector((state: RootState) => state.repository);
    const repository = store.find((x) => x.id === +props.match.params['id']);
    if (!repository) {
        return <div>Empty</div>;
    }

    const handleBackClick = () => {
        props.history.push(MenuRoute.REPOSITORIES.DEFAULT);
    };

    return (
        <RepositoryDetails
            literals={literals}
            repository={repository}
            onBackClick={handleBackClick}
        />
    );
};
