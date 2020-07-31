/**
 * Column presentation model in a table.
 *
 * @property {string} [dataIndex] Data index.
 * @property {string} [key] DOM element key.
 * @property {string} [title] Title.
 * @property {JSX.Element} [render] Render function.
 */
export interface IColumnField {
    dataIndex: string;
    key: string;
    title: string;
    render?: () => JSX.Element;
}
