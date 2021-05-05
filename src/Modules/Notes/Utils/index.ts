const TITLE_MAX_LENGTH = 120;

export const getTitle = (value: string): string => {
    const lines = value.split('\n');
    return lines[0].length <= TITLE_MAX_LENGTH ? lines[0] : lines[0].substring(0, TITLE_MAX_LENGTH);
};

export const parseMarkdown = (markdownText: string): string => {
    const htmlText = markdownText
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // eslint-disable-next-line no-useless-escape
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/```\n(.*)\n```/gim, '<code>$1</code>')
        .replace(/^\*\*(.*)\*\*/gim, '<b>$1</b>')
        .replace(/^\*(.*)\*/gim, '<i>$1</i>')
        .replace(/^~~(.*)~~/gim, '<s>$1</s>')
        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
        .replace(/\n$/gim, '<br />');

    return htmlText.trim();
};
