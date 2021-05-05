export enum ESyntaxType {
    COVERED,
    PREFIX
}

export enum ESpecialSyntax {
    HEADER = '#',
    BOLD = '****',
    ITALIAN = '**',
    STRIKETHROUGH = '~~~~',
    BLOCK_QUOTE = '>',
    BLOCK_CODE = '```\n\n```',
    BLOCK_TABLE = '| ColumnName1 | ColumnName2 |\n| --------- | ------- |\n| Value1 | Value2 |\n'
}

export enum EOperationType {
    PLUS,
    MINUS,
    HOLD
}
