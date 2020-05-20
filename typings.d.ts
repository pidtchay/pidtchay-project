declare module '*.less' {
    interface IClassName {
        [className: string]: string;
    }

    const className: IClassName;
    export = className;
}