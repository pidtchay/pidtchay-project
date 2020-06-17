import * as React from 'react';
import { Table } from 'antd';
import { IRepositoryData } from 'Model/RepositoryData';
import { IColumnField } from 'Model/Table';

/**
 * Data model for displaying a Table.
 * @property columns list of columns to display in the table.
 * @property dataSource transmitted data for display in a table.
 */
interface ITableProps {
    columns: IColumnField[];
    dataSource: IRepositoryData[];
}

/**
 * Wrapper for component table.
 */
export const TableComponent: React.FC<ITableProps> = ({
    columns,
    dataSource
}) => {
    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            rowKey={(record) => record.id}
            loading={dataSource.length === 0}
            pagination={{ current: 1, pageSize: 30 }}
        />
    );
};
