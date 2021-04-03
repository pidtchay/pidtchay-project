import React from 'react';

interface IProps {
    isMarkDownPreview?: boolean;
    children?: React.ReactNode;
    className?: never;
    style?: never;
}

const NoteCardContainer: React.FC<IProps> = ({ children, isMarkDownPreview, ...props }: IProps) => {
    return <div {...props}>{children}</div>;
};

NoteCardContainer.displayName = 'NoteCardContainer';

export default NoteCardContainer;
