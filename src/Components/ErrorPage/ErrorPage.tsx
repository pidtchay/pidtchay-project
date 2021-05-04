import { Header } from 'Components/Header/Header';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ErrorPage = (): JSX.Element => {
    const { t } = useTranslation(['common']);

    const handleOpenHomePage = () => {
        //
    };
    const handleRefreshPage = () => {
        //
    };

    return (
        <>
            <Header title={t('common:DataState.Error.title')} subtitle={t('common:DataState.Error.subtitle')} />
            <p>{t('common:DataState.Error.text')}</p>
            <div>
                <button type="button" onClick={handleOpenHomePage}>
                    {t('common:MENU.home')}
                </button>
                <button type="button" onClick={handleRefreshPage}>
                    {t('common:ACTIONS.Refresh')}
                </button>
            </div>
        </>
    );
};
