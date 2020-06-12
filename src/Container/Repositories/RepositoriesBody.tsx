import * as React from 'react';
import { TableComponent } from 'Component/Common/TableComponent';
import { Input } from 'antd';
import { IColumnField } from 'Model/Table';
import { IRepositoryData } from 'Model/RepositoryData';

const { Search } = Input;

interface IRepositoriesBodyProps {
    columns: IColumnField[];
    data: IRepositoryData[];
    onFetchRepositories: (valuse: string) => void;
}

/**
 * Repositories Body Component
 */
export const RepositoriesBody:React.FC<IRepositoriesBodyProps> = ({columns, data, onFetchRepositories}) => {
    return (
        <>
            <div>
                <Search placeholder='input search org. name' enterButton='Search' size='large' onSearch={onFetchRepositories} />
            </div>
            <TableComponent columns={columns} dataSource={data || []} />
        </>
      );
};
