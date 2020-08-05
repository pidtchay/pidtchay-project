import { Descriptions, Tag } from 'antd';
import * as React from 'react';
import { useLiteralValue } from 'Utils/hooks';

interface IDetailsDescriptionProps {
    name: string;
    description: string;
    language: string;
}

export const DetailsDescription: React.FC<IDetailsDescriptionProps> = ({
    name,
    description,
    language
}) => {
    const { getValue: getLiteralValue } = useLiteralValue();
    return (
        <>
            <Descriptions
                title={getLiteralValue(
                    'Pages.GithubRepositories.Details.description'
                )}
            >
                <Descriptions.Item
                    label={getLiteralValue(
                        'Pages.GithubRepositories.Details.name'
                    )}
                >
                    {name}
                </Descriptions.Item>
                <Descriptions.Item
                    label={getLiteralValue(
                        'Pages.GithubRepositories.Details.description'
                    )}
                >
                    {description}
                </Descriptions.Item>
                <Descriptions.Item
                    label={getLiteralValue(
                        'Pages.GithubRepositories.Details.language'
                    )}
                >
                    <Tag color="geekblue">{language}</Tag>
                </Descriptions.Item>
            </Descriptions>
        </>
    );
};
