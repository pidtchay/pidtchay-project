import React from 'react';

/**
 * @prop {boolean} isMarkDownPreview Markdown text preview flag.
 * @prop {never} [className] Prohibiting changing className in a component.
 * @prop {never} [style] Prohibiting changing style in a component.
 */
interface IProps {
    isMarkDownPreview?: boolean;
    className?: never;
    style?: never;
}

/**
 * Composite note card content component.
 *
 * @param {IProps} param0 Basic properties of the component.
 * @param {React.ReactNode} param0.children Child components.
 * @param {boolean} param0.isMarkDownPreview Markdown text preview flag.
 * @returns {JSX.Element} Content wrapper.
 */
const NoteCardContainer: React.FC<React.PropsWithChildren<IProps>> = ({ children, isMarkDownPreview, ...props }: React.PropsWithChildren<IProps>) => {
    return <div {...props}>{children}</div>;
};

NoteCardContainer.displayName = 'NoteCardContainer';

export default NoteCardContainer;
