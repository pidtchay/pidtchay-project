import { Header } from 'Common/Components/Header/Header';
import { ROUTE } from 'Core/Routing/Consts';
import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';

const NavBar = lazy(() => import(/* webpackChunkName: "NavBar" */ 'Common/Components/NavBar/NavBar').then((module) => ({ default: module.NavBar })));
const ErrorBoundary = lazy(() => import(/* webpackChunkName: "ErrorBoundary" */ 'Core/ErrorBoundary/ErrorBoundary'));
const LanguageBar = lazy(() =>
    import(/* webpackChunkName: "LanguageBar" */ 'Common/Components/LanguageBar/LanguageBar').then((module) => ({ default: module.LanguageBar }))
);
const NotesForm = lazy(() => import(/* webpackChunkName: "NotesForm" */ 'Modules/Notes/List'));
const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard" */ 'Modules/Notes/Dashboard').then((module) => ({ default: module.Dashboard })));

export const App = (): JSX.Element => {
    const { t } = useTranslation(['welcome', 'common']);
    return (
        <Suspense fallback={<div>{t('common:DataState.Loading.title', 'Loading there')}</div>}>
            <ErrorBoundary>
                <>
                    <LanguageBar />
                    <Header title={t('welcome:title', 'Hello there.')} subtitle={t('common:MENU.title', 'Menu there.')} />
                    <NavBar />
                    <Switch>
                        <Route exact path={ROUTE.HOME.PATH}>
                            <Dashboard />
                        </Route>
                        <Route path={ROUTE.NOTES.PATH}>
                            <NotesForm />
                        </Route>
                    </Switch>
                </>
            </ErrorBoundary>
        </Suspense>
    );
};
