import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContentRoute } from 'Constants/Routes';
import { AboutPage } from 'Container/AboutPage';
import { AuthRoute } from 'Container/AuthRoute';
import { HomePage } from 'Container/Home/HomePage';
import { LogInPage } from 'Container/Login/LoginPage';
import { MarkdownNotesPage } from 'Container/Markdown/Page/MarkdownNotesPage';
import { RepositoryDetailsPage } from 'Container/Repositories/Details/RepositoryDetailsPage';
import { ListOfRepositoriesPage } from 'Container/Repositories/ListOfRepositoriesPage';

/**
 * Routing component.
 * Contains basic routing settings between site pages.
 *
 * @returns {JSX.Element} [return0] Routing.
 */
export const MainRoutes = () => {
    return (
        <Switch>
            <Route path={ContentRoute.LOGIN} render={(props) => <LogInPage {...props} />} />
            <Route path={ContentRoute.ABOUT} render={() => <AboutPage />} />,
            <AuthRoute path={ContentRoute.REPOSITORIES.DETAILS} component={RepositoryDetailsPage} />
            <AuthRoute path={ContentRoute.REPOSITORIES.DEFAULT} component={() => <ListOfRepositoriesPage />} />
            <AuthRoute path={ContentRoute.MARKDOWN} component={() => <MarkdownNotesPage />} />
            <AuthRoute path={ContentRoute.HOME} component={() => <HomePage />} />
        </Switch>
    );
};
