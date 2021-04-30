import { Header } from 'Components/Header/Header';
import { ROUTE } from 'Core/Routing/Consts';
import NotesForm from 'Modules/Notes/List';
import { defaultState, NotesProvider } from 'Modules/Notes/State/NotesContext';
import { notesSlice } from 'Modules/Notes/State/Reducer';
import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Route, Link } from 'react-router-dom';

const ErrorBoundary = lazy(() => import(/* webpackChunkName: "ErrorBoundary" */ 'Components/ErrorBoundary/ErrorBoundary'));
const LanguageBar = lazy(() => import(/* webpackChunkName: "LanguageBar" */ 'Components/LanguageBar/LanguageBar').then((module) => ({ default: module.LanguageBar })));

const Home = () => <h2>Home</h2>;

export const App = (): JSX.Element => {
    const { t } = useTranslation(['welcome', 'common']);
    return (
        <Suspense fallback={<div>{t('common:DataState.Loading.title', 'Loading there')}</div>}>
            <ErrorBoundary>
                <>
                    <Header title={t('welcome:title', 'Hello there.')} subtitle={t('common:MENU.title', 'Menu there.')} />
                    <LanguageBar />
                    <ul>
                        <li>
                            <Link to={ROUTE.HOME.PATH}>{t('common:MENU.home', 'Home there.')}</Link>
                        </li>
                        <li>
                            <Link to={ROUTE.NOTES.PATH}>{t('common:MENU.notes', 'Notes there.')}</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path={ROUTE.HOME.PATH}>
                            <Home />
                        </Route>
                        <Route path={ROUTE.NOTES.PATH}>
                            <NotesProvider initialState={defaultState} reducer={notesSlice.reducer}>
                                <NotesForm />
                            </NotesProvider>
                        </Route>
                    </Switch>
                </>
            </ErrorBoundary>
        </Suspense>
    );
};
