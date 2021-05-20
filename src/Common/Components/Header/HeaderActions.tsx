import React from 'react';

/**
 * @prop {never} [className] Prohibiting changing className in a component.
 * @prop {never} [style] Prohibiting changing style in a component.
 */
interface IProps {
    className?: never;
    style?: never;
}

type THeaderActions = React.FC<React.PropsWithChildren<IProps>> & {
    displayName: string;
};

export const HeaderActions: THeaderActions = ({ children, ...props }: React.PropsWithChildren<IProps>) => <div {...props}>{children}</div>;

HeaderActions.displayName = 'HeaderActions';
