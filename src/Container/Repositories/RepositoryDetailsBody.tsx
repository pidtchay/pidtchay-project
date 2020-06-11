import * as React from 'react';
import { Divider, Row, Col, Avatar, Descriptions, Tag, Button, PageHeader } from 'antd';
import style from 'Style/RepositoryDetails.less';
import { IRepositoryData } from 'Model/RepositoryData';

interface IProps {
    repository: IRepositoryData;
    onBackClick: () => void;
}

export const RepositoryDetails:React.FC<IProps> = ({repository, onBackClick: handleBackClick}) => {

    return(
        <div className={style.details_layout}>
            <PageHeader
                onBack={handleBackClick}
                title="Back to repositories"
            />
            <Divider orientation='left'>Owner</Divider>
            <Row>
                <Col span={4}>
                    <div className={style.avatar_panel}>
                        <Avatar shape="square" size={100} src={repository.avatarImg}/>
                    </div>
                </Col>
                <Col span={10} offset={2}>
                    <Descriptions title="Info">
                        <Descriptions.Item label="Owner">{repository.owner}</Descriptions.Item>
                        <Descriptions.Item label="Home page"><Button type="link">{repository.homepage}</Button></Descriptions.Item>
                        <Descriptions.Item label="Forks">{repository.forks}</Descriptions.Item>
                        <Descriptions.Item label="Watchers">{repository.watchers}</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
            <Divider orientation='left'>Details</Divider>
            <Row>
                <Col>
                    <Descriptions title="Descriptions">
                        <Descriptions.Item label="Name">{repository.name}</Descriptions.Item>
                        <Descriptions.Item label="Description">{repository.description}</Descriptions.Item>
                        <Descriptions.Item label="Language"><Tag color='geekblue'>{repository.language}</Tag></Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        </div>
    );
};