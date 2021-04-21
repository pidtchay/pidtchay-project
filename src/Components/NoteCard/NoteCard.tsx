import { Header } from 'Components/Header/Header';
import React from 'react';
import NoteCardContainer from './NoteCardContainer';
import NoteCardFooter from './NoteCardFooter';

/**
 * @prop {never} [className] Prohibiting changing className in a component.
 * @prop {never} [style] Prohibiting changing style in a component.
 */
interface IProps {
    className?: never;
    style?: never;
}

/**
 * Composite component typing.
 * @prop {typeof Header} Header Composite header component.
 * @prop {typeof NoteCardContainer} Container Composite content component.
 * @prop {typeof NoteCardFooter} Footer Composite footer component.
 * @prop {string} displayName Component display name.
 */
type TNoteCard<P> = React.FC<React.PropsWithChildren<P>> & {
    Header: typeof Header;
    Container: typeof NoteCardContainer;
    Footer: typeof NoteCardFooter;
    displayName: string;
};

/**
 * Note card.
 *
 * @param {IProps} param0 Basic properties of the component.
 * @param {React.ReactNode} param0.children Child components.
 * @returns {JSX.Element} Note display card component.
 */
const NoteCard: TNoteCard<IProps> = ({ children, ...props }: React.PropsWithChildren<IProps>): JSX.Element => {
    return <div {...props}>{children}</div>;
};

NoteCard.displayName = 'NoteCard';
NoteCard.Header = Header;
NoteCard.Container = NoteCardContainer;
NoteCard.Footer = NoteCardFooter;

export default NoteCard;
