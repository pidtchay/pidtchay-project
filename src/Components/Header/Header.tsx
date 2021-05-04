import React, { FC } from 'react';
import { HeaderActions } from './HeaderActions';

/**
 * @prop {string} title Title text.
 * @prop {string} [subtitle] Subtitle text.
 */
interface IHeader {
    title: string;
    subtitle?: string;
}

type THeader = FC<React.PropsWithChildren<IHeader>> & {
    displayName: string;
    Actions: typeof HeaderActions;
};

/**
 * Component for displaying the header.
 * @param {IHeader} props Properties of the component for displaying the header.
 * @returns {JSX.Element} Header component.
 */
const Header: THeader = ({ children, ...props }: React.PropsWithChildren<IHeader>): JSX.Element => {
    const { title, subtitle } = props;
    return (
        <div>
            <h1>{title}</h1>
            {subtitle && <h5>{subtitle}</h5>}
            {children}
        </div>
    );
};

Header.Actions = HeaderActions;
Header.displayName = 'Header';

export { Header };
