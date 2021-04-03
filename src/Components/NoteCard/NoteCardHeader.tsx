import React from 'react';

interface IProps {
    title: string;
    subtitle?: JSX.Element[] | React.ReactNode | string;
    className?: never;
    style?: never;
}

const NoteCardHeader: React.FC<IProps> = ({ title, subtitle, ...props }: IProps) => {
    return (
        <div {...props}>
            <div>
                <h1>{title}</h1>
                {subtitle && <div>{subtitle}</div>}
            </div>
        </div>
    );
};

NoteCardHeader.displayName = 'NoteCardHeader';

export default NoteCardHeader;
