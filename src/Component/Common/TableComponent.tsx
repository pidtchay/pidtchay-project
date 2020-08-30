import { Table } from 'antd';
import * as React from 'react';
import { IRepositoryData } from 'Model/RepositoryData';
import { IColumnField } from 'Model/Table';

/**
 * Data model for displaying a Table.
 *
 * @property {Array<IColumnField>} [columns] List of columns to display in the table.
 * @property {Array<IRepositoryData>} [dataSource] Transmitted data for display in a table.
 */
interface ITableProps {
    columns: IColumnField[];
    dataSource: IRepositoryData[];
}

// eslint-disable-next-line jsdoc/require-returns
/**
 * Wrapper for component table.
 *
 * @param {Array<IColumnField>} [root0.columns] - Columns.
 * @param {Array<IRepositoryData>} [root0.dataSource] - Data source.
 */
export const TableComponent: React.FC<ITableProps> = ({ columns, dataSource }) => {
    return <Table dataSource={dataSource} columns={columns} rowKey={(record) => record.id} loading={dataSource.length === 0} pagination={{ current: 1, pageSize: 30 }} />;
};
