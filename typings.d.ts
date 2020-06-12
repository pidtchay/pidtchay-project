declare module '*.less' {
    interface IClassName {
        [className: string]: string;
    }

    const className: IClassName;
    export = className;
}

declare module '*.json' {
    interface IJsonFile {
        [key: string]: string;
    }

    const json_file: IJsonFile;
    export = json_file;
}