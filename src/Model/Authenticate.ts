/**
 * Login data model.
 * @property [string] nickName - user nickName
 * @property [string] email - user email
 * @property [string] password - user password
 */
export interface ILoginData {
  nickName: string;
  email: string;
  password: string;
}

/**
 * @property [boolean] authenticated
 * @property [string] session
 * @property [string] userName
 */
export interface ISystemState {
  authenticated: boolean;
  session: string;
  userName: string;
}
