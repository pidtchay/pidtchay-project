import { Button } from 'Common/Components/Button/Button';
import { Header } from 'Common/Components/Header/Header';
import useRefresh from 'Core/hooks/useRefresh';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export const ErrorPage = (): JSX.Element => {
    const { t } = useTranslation(['common']);
    const history = useHistory();
    const refresh = useRefresh(history, '');

    const handleOpenHomePage = () => {
        history.push('/');
    };
    const handleRefreshPage = () => {
        refresh();
    };

    return (
        <>
            <Header title={t('common:DataState.Error.title')} subtitle={t('common:DataState.Error.subtitle')} />
            <p>{t('common:DataState.Error.text')}</p>
            <div>
                <Button onClick={handleOpenHomePage}>{t('common:MENU.home')}</Button>
                <Button onClick={handleRefreshPage}>{t('common:ACTIONS.Refresh')}</Button>
            </div>
        </>
    );
};
