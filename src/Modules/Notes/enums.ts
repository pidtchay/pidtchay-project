export enum ESyntaxType {
    COVERED,
    PREFIX
}

export enum ESpecialSyntax {
    HEADER1 = '#',
    HEADER2 = '##',
    HEADER3 = '###',
    BOLD = '****',
    ITALIAN = '**',
    STRIKETHROUGH = '~~~~',
    BLOCK_QUOTE = '>',
    BLOCK_CODE = '```\n\n```',
    IMAGE = '![text](url)',
    HYPER_LINK = '[text](url)'
}

export enum EOperationType {
    PLUS,
    MINUS,
    HOLD
}
