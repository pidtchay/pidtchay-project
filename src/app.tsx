import { Header } from 'Components/Header/Header';
import { ROUTE } from 'Core/Routing/Consts';
import NotesForm from 'Modules/Notes/List';
import { defaultState, NotesProvider } from 'Modules/Notes/State/NotesContext';
import { notesSlice } from 'Modules/Notes/State/Reducer';
import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';

const NavBar = lazy(() => import(/* webpackChunkName: "NavBar" */ 'Components/NavBar/NavBar').then((module) => ({ default: module.NavBar })));
const ErrorBoundary = lazy(() => import(/* webpackChunkName: "ErrorBoundary" */ 'Common/Components/ErrorBoundary/ErrorBoundary'));
const LanguageBar = lazy(() =>
    import(/* webpackChunkName: "LanguageBar" */ 'Components/LanguageBar/LanguageBar').then((module) => ({ default: module.LanguageBar }))
);

const Home = () => <h2>Home</h2>;

export const App = (): JSX.Element => {
    const { t } = useTranslation(['welcome', 'common']);
    return (
        <Suspense fallback={<div>{t('common:DataState.Loading.title', 'Loading there')}</div>}>
            <ErrorBoundary>
                <>
                    <Header title={t('welcome:title', 'Hello there.')} subtitle={t('common:MENU.title', 'Menu there.')} />
                    <LanguageBar />
                    <NavBar />
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
