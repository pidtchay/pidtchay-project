import React from 'react';
import NoteCardContainer from './NoteCardContainer';
import NoteCardFooter from './NoteCardFooter';
import NoteCardHeader from './NoteCardHeader';

interface IProps {
    className?: never;
    style?: never;
    children?: React.ReactNode;
}

type TNoteCard<P> = React.FC<P> & {
    Header: typeof NoteCardHeader;
    Container: typeof NoteCardContainer;
    Footer: typeof NoteCardFooter;
    displayName: string;
};

const NoteCard: TNoteCard<IProps> = ({ children, ...props }: IProps) => {
    return <div {...props}>{children}</div>;
};

NoteCard.displayName = 'NoteCard';
NoteCard.Header = NoteCardHeader;
NoteCard.Container = NoteCardContainer;
NoteCard.Footer = NoteCardFooter;

export default NoteCard;
