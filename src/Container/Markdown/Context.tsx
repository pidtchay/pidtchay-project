import React from 'react';

interface IContext {
    markdownText: string;
    setMarkdownText: (value: string) => void;
}

const defaultContext: IContext = {
    markdownText: '',
    setMarkdownText: Function
};

export default React.createContext(defaultContext);
