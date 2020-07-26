import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContentRoute } from 'Constants/Routes';
import { AboutPage } from 'Container/AboutPage';
import { AuthRoute } from 'Container/AuthRoute';
import { HomePage } from 'Container/Home/HomePage';
import { LogInPage } from 'Container/Login/LoginPage';
import { MarkdownNotes } from 'Container/Markdown/MarkdownNotes';
import { RepositoriesPage } from 'Container/Repositories/RepositoriesPage';
import { RepositoryDetailsPage } from 'Container/Repositories/RepositoryDetailsPage';

export const MainRoutes = () => {
    return (
        <Switch>
            <Route
                path={ContentRoute.LOGIN}
                render={(props) => <LogInPage {...props} />}
            />
            <Route path={ContentRoute.ABOUT} render={() => <AboutPage />} />,
            <AuthRoute
                path={ContentRoute.REPOSITORIES.DETAILS}
                component={RepositoryDetailsPage}
            />
            <AuthRoute
                path={ContentRoute.REPOSITORIES.DEFAULT}
                component={RepositoriesPage}
            />
            <AuthRoute
                path={ContentRoute.MARKDOWN}
                component={() => <MarkdownNotes />}
            />
            <AuthRoute
                path={ContentRoute.HOME}
                component={() => <HomePage />}
            />
        </Switch>
    );
};
