import React, { FC } from 'react';

interface IHeader {
    title: string;
    subtitle?: string;
}

const Header: FC<IHeader> = (props: IHeader) => {
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
