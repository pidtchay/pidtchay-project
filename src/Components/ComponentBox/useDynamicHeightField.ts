/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';

export const useDynamicHeightField = <T extends HTMLElement>(element: React.RefObject<T>, value: string): void => {
    React.useEffect(() => {
        if (!element.current) {
            return;
        }

        element.current.style.height = 'auto';
        element.current.style.height = `${element.current.scrollHeight}px`;
    }, [element, value]);
};
