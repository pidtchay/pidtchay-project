import { Divider, Row, Col, Avatar, PageHeader } from 'antd';
import * as React from 'react';
import { IRepositoryData } from 'Model/RepositoryData';
import style from 'Style/RepositoryDetails.less';
import { useLiteralValue } from 'Utils/hooks';
import { DetailsDescription } from './DetailsDescription';
import { OwnerDescription } from './OwnerDescription';

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
                    <OwnerDescription
                        owner={repository.owner}
                        homepage={repository.homepage}
                        forks={repository.forks}
                        watchers={repository.watchers}
                    />
                </Col>
            </Row>
            <Divider orientation="left">
                {getLiteralValue('Pages.GithubRepositories.Divider.details')}
            </Divider>
            <Row gutter={[16, 16]}>
                <Col>
                    <DetailsDescription
                        name={repository.name}
                        description={repository.description}
                        language={repository.language}
                    />
                </Col>
            </Row>
        </div>
    );
};
