import { Table } from 'antd';
import * as React from 'react';
import { IRepositoryData } from 'Model/RepositoryData';
import { IColumnField } from 'Model/Table';

/**
 * Data model for displaying a Table.
 *
 * @property {IColumnField[]} [columns] List of columns to display in the table.
 * @property {IRepositoryData[]} [dataSource] Transmitted data for display in a table.
 */
interface ITableProps {
    columns: IColumnField[];
    dataSource: IRepositoryData[];
}

/**
 * Wrapper for component table.
 *
 * @param root0
 * @param root0.columns
 * @param root0.dataSource
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
