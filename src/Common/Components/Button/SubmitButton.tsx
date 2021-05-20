import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    class?: never;
    style?: never;
}

type TButton = React.FC<React.PropsWithChildren<IButtonProps>> & {
    displayName: string;
};

export const SubmitButton: TButton = ({ children, ...attribures }: React.PropsWithChildren<IButtonProps>) => {
    return (
        <button type="submit" {...attribures}>
            <span>{children}</span>
        </button>
    );
};

SubmitButton.displayName = 'SubmitButton';
