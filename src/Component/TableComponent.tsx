import * as React from 'react';
import { Table } from 'antd';

/**
 * Data model for displaying a Table.
 * @property columns list of columns to display in the table.
 * @property dataSource transmitted data for display in a table.
 */
interface ITableProps {
  columns: any;
  dataSource: any;
}

/**
 * Wrapper for component table.
 */
export const TableComponent: React.FC<ITableProps> = ({ columns, dataSource }) => {
  return(
        <Table dataSource={dataSource} columns={columns} />
  );
};
