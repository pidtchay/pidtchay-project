import { ErrorPage } from 'Components/ErrorPage/ErrorPage';
import NoteCard from 'Components/NoteCard/NoteCard';
import React from 'react';
import Loader from 'react-loader-spinner';

export interface IHeaderActions {
    label: string;
    action: () => void;
}

export interface IFooterActions extends IHeaderActions {
    isGeneral?: boolean;
    isDisabled?: boolean;
}

export interface IMarkdownActions extends IHeaderActions {
    isCollapse?: boolean;
}

interface IProps {
    title: string;
    headerActions?: IHeaderActions[];
    footerActions?: IFooterActions[];
    subtitle?: string;
    isLoading?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
}

type TCardLayout<P> = React.FC<React.PropsWithChildren<P>> & {
    displayName: string;
};

const getFooterButtons = (buttons: IFooterActions[]) => {
    return (buttons || []).map((item) => {
        if (item.isGeneral) {
            return (
                <button type="submit" key={item.label} onClick={item.action} disabled={item.isDisabled}>
                    {item.label}
                </button>
            );
        }
        return (
            <button type="button" key={item.label} onClick={item.action} disabled={item.isDisabled}>
                {item.label}
            </button>
        );
    });
};

export const CardLayout: TCardLayout<IProps> = ({ children, ...props }: React.PropsWithChildren<IProps>) => {
    const { title, subtitle, headerActions, footerActions, isLoading, isSuccess, isError } = props;
    return (
        <NoteCard>
            <NoteCard.Header title={title} subtitle={subtitle}>
                {headerActions && (
                    <NoteCard.Header.Actions>
                        {headerActions.map((item) => (
                            <button key={item.label} type="button" onClick={item.action}>
                                {item.label}
                            </button>
                        ))}
                    </NoteCard.Header.Actions>
                )}
            </NoteCard.Header>
            <NoteCard.Container>
                {isLoading && <Loader type="TailSpin" color="#00BFFF" />}
                {isSuccess && <>{children}</>}
                {isError && <ErrorPage />}
            </NoteCard.Container>
            <NoteCard.Footer>{getFooterButtons(footerActions)}</NoteCard.Footer>
        </NoteCard>
    );
};

CardLayout.displayName = 'CardLayout';
