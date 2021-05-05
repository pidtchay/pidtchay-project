import parse from 'html-react-parser';
import { parseMarkdown } from 'Modules/Notes/Utils';
import React from 'react';

interface IProps {
    source: string;
    className?: never;
    label?: string;
    style?: never;
}

type TProps = React.FC<IProps> & {
    displayName: string;
};

export const MarkdownField: TProps = ({ source, label, ...resp }: IProps): JSX.Element => {
    return (
        <div {...resp}>
            {label && <span>{label}</span>}
            <div>{parse(parseMarkdown(source))}</div>
        </div>
    );
};

MarkdownField.displayName = 'MarkdownField';
