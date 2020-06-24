import { Input, BackTop, Tooltip } from 'antd';
import * as React from 'react';
import { RocketOutlined } from '@ant-design/icons';
import { TableComponent } from 'Component/Common/TableComponent';
import { ILiterals } from 'Model/Literals';
import { IRepositoryData } from 'Model/RepositoryData';
import { IColumnField } from 'Model/Table';
import style from 'Style/RepositoriesBody.less';
import { get, convertStringArrayToString } from 'Utils/common';

const { Search } = Input;

/**
 * @property {ILiterals} [literals] Language settings in the form of key-value. The text depends on the selected language.
 * @property {IColumnField[]} [columns] Table columns headers that will be visible to the user.
 * @property {IRepositoryData[]} [data] List of repositories for the selected organization name.
 * @property {Function} [onFetchRepositories] The function queries the list of repositories for the selected organization name.
 */
interface IRepositoriesBodyProps {
    literals: ILiterals;
    columns: IColumnField[];
    data: IRepositoryData[];
    onFetchRepositories: (valuse: string) => void;
}

/**
 * Repositories Body Component.
 *
 * @param root0
 * @param root0.literals
 * @param root0.columns
 * @param root0.data
 * @param root0.onFetchRepositories
 */
export const RepositoriesBody: React.FC<IRepositoriesBodyProps> = ({
    literals,
    columns,
    data,
    onFetchRepositories
}) => {
    const placeholder = convertStringArrayToString(
        get(literals, 'Pages.GithubRepositories.search_placeholder')
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
            <Tooltip title={get(literals, 'ACTIONS.up')}>
                <BackTop className={style.repositories_body}>
                    <div className={style.repositories_body_up_button}>
                        <RocketOutlined />
                    </div>
                </BackTop>
            </Tooltip>
        </>
    );
};
