export enum EMarkdownStep {
    LIST = 'LIST',
    CREATE = 'CREATE',
    UPDATE = 'UPDATE'
}

export enum MarkdownSyntax {
    HEADER = '#',
    BOLD = '****',
    ITALIAN = '**',
    STRIKETHROUGH = '~~~~',
    BLOCK_QUOTE = '>',
    BLOCK_CODE = '```\n\n```',
    BLOCK_TABLE = '| ColumnName1 | ColumnName2 |\n| --------- | ------- |\n| Value1 | Value2 |\n'
}
