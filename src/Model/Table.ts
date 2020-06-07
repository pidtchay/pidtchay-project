/**
 * Column presentation model in a table.
 * @property {string} dataIndex
 * @property {string} key
 * @property {string} title
 * @property {JSX.Element} render
 */
export interface IColumnField {
  dataIndex: string;
  key: string;
  title: string;
  render?: () => JSX.Element;
}
