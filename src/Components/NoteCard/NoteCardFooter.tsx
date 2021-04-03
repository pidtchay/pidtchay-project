import React from 'react';

interface IProps {
    children?: React.ReactNode;
    className?: never;
    style?: never;
}

const NoteCardFooter: React.FC<IProps> = ({ children, ...props }: IProps) => {
    return <div {...props}>{children}</div>;
};

NoteCardFooter.displayName = 'NoteCardFooter';

export default NoteCardFooter;
