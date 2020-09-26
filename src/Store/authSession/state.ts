import { ISystemState } from 'Model/Authenticate';

/**
 * Initial data of system state.
 */
export const initialState: ISystemState = {
    authenticated: false,
    session: '',
    userName: ''
};
