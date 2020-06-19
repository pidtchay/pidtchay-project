import { ISystemState } from 'Model/Authenticate';

export const UPDATE_SESSION = 'UPDATE_SESSION';
export const CLEAN_SESSION = 'CLEAN_SESSION';

/**
 * Session update model
 */
interface IUpdateSessionAction {
    type: typeof UPDATE_SESSION;
    payload: ISystemState;
}

/**
 * Session clean model
 */
interface ICleanSessionAction {
    type: typeof CLEAN_SESSION;
}

export type SystemActionTypes = IUpdateSessionAction | ICleanSessionAction;
