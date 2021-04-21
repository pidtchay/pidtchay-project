import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Panel for switching the language of the web application interface.
 * @returns {JSX.Element} Returns the interface language switches.
 */
export const LanguageBar = (): JSX.Element => {
    const { t, i18n } = useTranslation(['translation', 'common']);
    const changeLanguage = (code: string) => i18n.changeLanguage(code);
    return (
        <>
            <h3>{t('common:Language_Bar.title', 'Interface language:')}</h3>
            <div>
                <button type="button" onClick={() => changeLanguage('en')}>
                    {t('translation:en')}
                </button>
                <button type="button" onClick={() => changeLanguage('ru')}>
                    {t('translation:ru')}
                </button>
            </div>
        </>
    );
};
