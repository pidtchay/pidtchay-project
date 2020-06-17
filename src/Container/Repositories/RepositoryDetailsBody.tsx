import * as React from 'react';
import { Divider, Row, Col, Avatar, Descriptions, Tag, Button, PageHeader } from 'antd';
import style from 'Style/RepositoryDetails.less';
import { IRepositoryData } from 'Model/RepositoryData';
import { ILiterals } from 'Model/Literals';
import { get } from 'Utils/common';

interface IProps {
  literals: ILiterals;
  repository: IRepositoryData;
  onBackClick: () => void;
}

export const RepositoryDetails: React.FC<IProps> = ({ literals, repository, onBackClick: handleBackClick }) => {
  console.debug({ literals });
  return (
    <div className={style.details_layout}>
      <PageHeader onBack={handleBackClick} title={get(literals, 'Pages.GithubRepositories.back') || ''} />
      <Divider orientation="left">{get(literals, 'Pages.GithubRepositories.Details.Divider.owner')}</Divider>
      <Row>
        <Col span={4}>
          <div className={style.avatar_panel}>
            <Avatar shape="square" size={100} src={repository.avatarImg} />
          </div>
        </Col>
        <Col span={10} offset={2}>
          <Descriptions title={get(literals, 'Pages.GithubRepositories.Details.info')}>
            <Descriptions.Item label={get(literals, 'Pages.GithubRepositories.Details.owner')}>
              {repository.owner}
            </Descriptions.Item>
            <Descriptions.Item label={get(literals, 'Pages.GithubRepositories.Details.home_page')}>
              <Button type="link">{repository.homepage}</Button>
            </Descriptions.Item>
            <Descriptions.Item label={get(literals, 'Pages.GithubRepositories.Details.forks')}>
              {repository.forks}
            </Descriptions.Item>
            <Descriptions.Item label={get(literals, 'Pages.GithubRepositories.Details.watchers')}>
              {repository.watchers}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Divider orientation="left">{get(literals, 'Pages.GithubRepositories.Divider.details')}</Divider>
      <Row>
        <Col>
          <Descriptions title={get(literals, 'Pages.GithubRepositories.Details.description')}>
            <Descriptions.Item label={get(literals, 'Pages.GithubRepositories.Details.name')}>
              {repository.name}
            </Descriptions.Item>
            <Descriptions.Item label={get(literals, 'Pages.GithubRepositories.Details.description')}>
              {repository.description}
            </Descriptions.Item>
            <Descriptions.Item label={get(literals, 'Pages.GithubRepositories.Details.language')}>
              <Tag color="geekblue">{repository.language}</Tag>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};
