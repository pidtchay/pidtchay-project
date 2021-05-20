import { ROUTE } from 'Core/Routing/Consts';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NavBar = (): JSX.Element => {
    const { t } = useTranslation(['common']);
    return (
        <ul>
            <li>
                <Link to={ROUTE.HOME.PATH}>{t('common:MENU.home', 'Home there.')}</Link>
            </li>
            <li>
                <Link to={ROUTE.NOTES.PATH}>{t('common:MENU.notes', 'Notes there.')}</Link>
            </li>
        </ul>
    );
};
