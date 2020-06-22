/**
 * Login data model.
 *
 * @property {string} [nickName] - User nickName.
 * @property {string} [email] - User email.
 * @property {string} [password] - User password.
 */
export interface ILoginData {
    nickName: string;
    email: string;
    password: string;
}

/**
 * @property {boolean} {} Authenticated flag.
 * @property {string} {session} Session token.
 * @property {string} {username} UserName.
 */
export interface ISystemState {
    authenticated: boolean;
    session: string;
    userName: string;
}
