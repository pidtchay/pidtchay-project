/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param */
import { Input, BackTop, Tooltip } from 'antd';
import * as React from 'react';
import { RocketOutlined } from '@ant-design/icons';
import { TableComponent } from 'Component/Common/TableComponent';
import { IRepositoryData } from 'Model/RepositoryData';
import { IColumnField } from 'Model/Table';
import style from 'Style/RepositoriesBody.less';
import { convertStringArrayToString } from 'Utils/common';
import { useLiteralValue } from 'Utils/hooks';

const { Search } = Input;

/**
 * @property {ILiterals} [literals] Language settings in the form of key-value. The text depends on the selected language.
 * @property {IColumnField[]} [columns] Table columns headers that will be visible to the user.
 * @property {IRepositoryData[]} [data] List of repositories for the selected organization name.
 * @property {Function} [onFetchRepositories] The function queries the list of repositories for the selected organization name.
 */
interface IRepositoriesBodyProps {
    columns: IColumnField[];
    data: IRepositoryData[];
    onFetchRepositories: (valuse: string) => void;
}

/**
 * Repositories Body Component.
 */
export const RepositoriesBody: React.FC<IRepositoriesBodyProps> = ({
    columns,
    data,
    onFetchRepositories
}) => {
    const { getValue: getLiteralValue } = useLiteralValue();
    const placeholder = convertStringArrayToString(
        getLiteralValue('Pages.GithubRepositories.search_placeholder')
    );
    return (
        <>
            <div>
                <Search
                    placeholder={placeholder}
                    enterButton="Search"
                    size="large"
                    onSearch={onFetchRepositories}
                />
            </div>
            <TableComponent columns={columns} dataSource={data || []} />
            <Tooltip title={getLiteralValue('ACTIONS.up')}>
                <BackTop className={style.repositories_body}>
                    <div className={style.repositories_body_up_button}>
                        <RocketOutlined />
                    </div>
                </BackTop>
            </Tooltip>
        </>
    );
};
