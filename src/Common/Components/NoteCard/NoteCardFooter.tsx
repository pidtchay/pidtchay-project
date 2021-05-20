import React from 'react';

/**
 *
 * @prop {never} [className] Prohibiting changing className in a component.
 * @prop {never} [style] Prohibiting changing style in a component.
 */
interface IProps {
    className?: never;
    style?: never;
}

/**
 * Composite note card footer component.
 * @param {IProps} param0 Basic properties of the component.
 * @param {React.ReactNode} param0.children Child components.
 * @returns {JSX.Element} Footer wrapper.
 */
const NoteCardFooter: React.FC<React.PropsWithChildren<IProps>> = ({ children, ...props }: React.PropsWithChildren<IProps>) => {
    return <div {...props}>{children}</div>;
};

NoteCardFooter.displayName = 'NoteCardFooter';

export default NoteCardFooter;
