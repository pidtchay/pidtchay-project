import * as React from 'react';
import { TableComponent } from 'Component/Common/TableComponent';
import { Input } from 'antd';
import { IColumnField } from 'Model/Table';
import { IRepositoryData } from 'Model/RepositoryData';
import { ILiterals } from 'Model/Literals';
import { get } from 'Utils/common';

const { Search } = Input;

/**
 * @property [literals] Language settings in the form of key-value. The text depends on the selected language.
 * @property [columns] table columns headers that will be visible to the user.
 * @property [data] List of repositories for the selected organization name
 * @property [onFetchRepositories] The function queries the list of repositories for the selected organization name.
 */
interface IRepositoriesBodyProps {
    literals: ILiterals;
    columns: IColumnField[];
    data: IRepositoryData[];
    onFetchRepositories: (valuse: string) => void;
}

/**
 * Repositories Body Component
 */
export const RepositoriesBody:React.FC<IRepositoriesBodyProps> = ({literals, columns, data, onFetchRepositories}) => {
    const searchPlaceholder = get(literals, 'Pages.GithubRepositories.search_placeholder');
    const placeholder = Array.isArray(searchPlaceholder) ? searchPlaceholder.join('') : searchPlaceholder;
    return (
        <>
            <div>
                <Search placeholder={placeholder} enterButton='Search' size='large' onSearch={onFetchRepositories} />
            </div>
            <TableComponent columns={columns} dataSource={data || []} />
        </>
      );
};
