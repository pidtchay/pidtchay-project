import React, { FC } from 'react';

/**
 * @prop {string} title Title text.
 * @prop {string} [subtitle] Subtitle text.
 */
interface IHeader {
    title: string;
    subtitle?: string;
}

/**
 * Component for displaying the header.
 * @param {IHeader} props Properties of the component for displaying the header.
 * @returns {JSX.Element} Header component.
 */
const Header: FC<IHeader> = (props: IHeader): JSX.Element => {
    const { title, subtitle } = props;
    return (
        <div>
            <h1>{title}</h1>
            {subtitle && <h5>{subtitle}</h5>}
        </div>
    );
};

Header.displayName = 'Header';

export { Header };
