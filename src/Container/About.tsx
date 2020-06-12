import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { RootState } from 'Store';
import { loadLiterals } from 'Store/literals/actions';
import { loadLang } from 'i18n/i18n';

export const AboutPage:React.FC = () => {
    const [language, setLanguage] = useState('ru');
    const literals = useSelector((state: RootState) => (state.literals));
    const dispatch = useDispatch();

    const changeLanguage = () => {
        setLanguage(language === 'en' ? 'ru' : 'en');
        dispatch(loadLiterals(loadLang(language)));
    };

    return (
        <div>
            <Button type="primary" onClick={changeLanguage}>{language.toUpperCase()}</Button>
            <div>{literals['welcome_back']}</div>
        </div>
    );
};
