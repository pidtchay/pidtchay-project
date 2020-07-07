import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContentRoute } from 'Constants/Routes';
import { AboutPage } from 'Modules/AboutPage';
import { AuthRoute } from 'Modules/AuthRoute';
import { HomePage } from 'Modules/Home/HomePage';
import { LogInPage } from 'Modules/Login/LoginPage';
import { MarkdownEditor } from 'Modules/Markdown/MarkdownEditor';
import { RepositoriesPage } from 'Modules/Repositories/RepositoriesPage';
import { RepositoryDetailsPage } from 'Modules/Repositories/RepositoryDetailsPage';

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
                component={() => <MarkdownEditor />}
            />
            <AuthRoute
                path={ContentRoute.HOME}
                component={() => <HomePage />}
            />
        </Switch>
    );
};
