import { Descriptions, Button } from 'antd';
import * as React from 'react';
import { useLiteralValue } from 'Utils/hooks';

interface IOwnerDescriptionProps {
    owner: string;
    homepage: string;
    forks: number;
    watchers: number;
}

export const OwnerDescription: React.FC<IOwnerDescriptionProps> = ({
    owner,
    homepage,
    forks,
    watchers
}) => {
    const { getValue: getLiteralValue } = useLiteralValue();
    return (
        <>
            <Descriptions
                title={getLiteralValue('Pages.GithubRepositories.Details.info')}
            >
                <Descriptions.Item
                    label={getLiteralValue(
                        'Pages.GithubRepositories.Details.owner'
                    )}
                >
                    {owner}
                </Descriptions.Item>
                <Descriptions.Item
                    label={getLiteralValue(
                        'Pages.GithubRepositories.Details.home_page'
                    )}
                >
                    <Button type="link">{homepage}</Button>
                </Descriptions.Item>
                <Descriptions.Item
                    label={getLiteralValue(
                        'Pages.GithubRepositories.Details.forks'
                    )}
                >
                    {forks}
                </Descriptions.Item>
                <Descriptions.Item
                    label={getLiteralValue(
                        'Pages.GithubRepositories.Details.watchers'
                    )}
                >
                    {watchers}
                </Descriptions.Item>
            </Descriptions>
        </>
    );
};
