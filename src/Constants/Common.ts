import { ILoginData } from 'Model/Authenticate';

/**
 * Initialization login data.
 * Used to fill in the authorization form with default data.
 */
export const InitializationLoginData: ILoginData = {
    nickName: 'T0mas3dison',
    email: 'tom_lightbulb@edison.com',
    password: 'l1ght6ul6'
};

/**
 * Supported languages model for translating texts in a web application.
 *
 * @property {string} [EN] - English.
 * @property {string} [RU] - Russian.
 */
export enum ESupportedLanguages {
    EN = 'en',
    RU = 'ru'
}

export const DATE_TIME_FORMAT = 'MM/DD/YYYY HH:mm:ss';

export const EVENT_DELAY = 300;

export enum EState {
    NONE = 'NONE',
    REQUESTING = 'REQUESTING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}

export interface IError {
    message: string;
    code: string;
}
