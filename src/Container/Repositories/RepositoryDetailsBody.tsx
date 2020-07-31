import {
    Divider,
    Row,
    Col,
    Avatar,
    Descriptions,
    Tag,
    Button,
    PageHeader
} from 'antd';
import * as React from 'react';
import { IRepositoryData } from 'Model/RepositoryData';
import style from 'Style/RepositoryDetails.less';
import { useLiteralValue } from 'Utils/hooks';

interface IProps {
    repository: IRepositoryData;
    onBackClick: () => void;
}

export const RepositoryDetails: React.FC<IProps> = ({
    repository,
    onBackClick: handleBackClick
}) => {
    const { getValue: getLiteralValue } = useLiteralValue();
    return (
        <div className={style.details_layout}>
            <PageHeader
                onBack={handleBackClick}
                title={getLiteralValue('Pages.GithubRepositories.back') || ''}
            />
            <Divider orientation="left">
                {getLiteralValue(
                    'Pages.GithubRepositories.Details.Divider.owner'
                )}
            </Divider>
            <Row gutter={[16, 16]}>
                <Col span={4}>
                    <div className={style.avatar_panel}>
                        <Avatar
                            shape="square"
                            size={100}
                            src={repository.avatarImg}
                        />
                    </div>
                </Col>
                <Col span={10} offset={2}>
                    <Descriptions
                        title={getLiteralValue(
                            'Pages.GithubRepositories.Details.info'
                        )}
                    >
                        <Descriptions.Item
                            label={getLiteralValue(
                                'Pages.GithubRepositories.Details.owner'
                            )}
                        >
                            {repository.owner}
                        </Descriptions.Item>
                        <Descriptions.Item
                            label={getLiteralValue(
                                'Pages.GithubRepositories.Details.home_page'
                            )}
                        >
                            <Button type="link">{repository.homepage}</Button>
                        </Descriptions.Item>
                        <Descriptions.Item
                            label={getLiteralValue(
                                'Pages.GithubRepositories.Details.forks'
                            )}
                        >
                            {repository.forks}
                        </Descriptions.Item>
                        <Descriptions.Item
                            label={getLiteralValue(
                                'Pages.GithubRepositories.Details.watchers'
                            )}
                        >
                            {repository.watchers}
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
            <Divider orientation="left">
                {getLiteralValue('Pages.GithubRepositories.Divider.details')}
            </Divider>
            <Row gutter={[16, 16]}>
                <Col>
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
                            {repository.name}
                        </Descriptions.Item>
                        <Descriptions.Item
                            label={getLiteralValue(
                                'Pages.GithubRepositories.Details.description'
                            )}
                        >
                            {repository.description}
                        </Descriptions.Item>
                        <Descriptions.Item
                            label={getLiteralValue(
                                'Pages.GithubRepositories.Details.language'
                            )}
                        >
                            <Tag color="geekblue">{repository.language}</Tag>
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        </div>
    );
};
