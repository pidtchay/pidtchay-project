import { Avatar, Tag, Button } from 'antd';
import * as React from 'react';
import { MenuRoute } from 'Constants/Routes';
import { IRepositoryData } from 'Model/RepositoryData';
import { IColumnField } from 'Model/Table';
import history from 'Utils/history';

enum ERenderType {
    TEXT = 'TEXT',
    AVATAR = 'AVATAR',
    LINK = 'LINK',
    TAG = 'TAG'
}

interface ISchema {
    description: string;
    name: string;
    type: ERenderType;
}

export const convertRepositoryDataToColumns = (
    data: ISchema[]
): IColumnField[] => {
    if (!data) return [];
    return data.map((item) => {
        const column: IColumnField = {
            dataIndex: item?.name,
            key: item?.name,
            title: item?.name
        };

        if (item.type === ERenderType.LINK) {
            column.render = () => (
                <Button
                    type="link"
                    onClick={() =>
                        history.push(
                            MenuRoute.REPOSITORIES.DETAILS(item.description)
                        )
                    }
                >
                    {item.description}
                </Button>
            );
        }
        if (item.type === ERenderType.AVATAR) {
            column.render = () => <Avatar src={item.description} />;
        }
        if (item.type === ERenderType.TAG) {
            column.render = () => (
                <Tag color="geekblue">{item.description}</Tag>
            );
        }

        return column;
    });
};

export const convertRepositoryDataToSchema = (
    data: IRepositoryData
): ISchema[] => {
    if (!data) return [];
    return Object.keys(data).map((item) => {
        const schema: ISchema = {
            name: item,
            type: ERenderType.TEXT,
            description: data[item]
        };
        if (item === 'id') {
            schema.type = ERenderType.LINK;
        }
        if (item === 'avatarImg') {
            schema.type = ERenderType.AVATAR;
        }
        if (item === 'owner' || item === 'language') {
            schema.type = ERenderType.TAG;
        }
        return schema;
    });
};
