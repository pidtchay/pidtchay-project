import { ILoginData } from 'Model/Authenticate';

/**
 * Initialization login data.
 * Used to fill in the authorization form with default data.
 *
 * !easter egg
 */
export const InitializationLoginData: ILoginData = {
    nickName: 'T0mas3dison',
    email: 'tom_lightbulb@edison.com',
    password: 'l1ght6ul6'
};

/**
 * Supported languages model for translating texts in a web application.
 * @property EN - English
 * @property RU - Russian
 */
export enum ESupportedLanguages {
    EN = 'en',
    RU = 'ru'
}
