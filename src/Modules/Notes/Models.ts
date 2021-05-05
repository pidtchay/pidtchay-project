export interface INodeQueryStringParams {
    id: string;
}

export interface INote {
    title: string;
    text: string;
}

export interface INoteData extends INote {
    id: string;
    startDate: string;
    lastUpdate: string;
}
