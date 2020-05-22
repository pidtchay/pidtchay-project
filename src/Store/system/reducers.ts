import { ISystemState } from "Model/Authenticate";
import { SystemActionTypes, UPDATE_SESSION } from "./types";

/**
 * Initial data of system state
 */
const initialState: ISystemState = {
    authenticated: false,
    session: '',
    userName: '',
}

/**
 * System state reducer
 * @param state initial state
 * @param actions system action types
 */
export const systemReducer = (state: ISystemState = initialState, actions: SystemActionTypes) => {
    switch(actions.type) {
        case UPDATE_SESSION: 
            return{
                ...state,
                ...actions.payload,
            }
        default:
            return {
                ...state,
            }
    }
}