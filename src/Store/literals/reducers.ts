import { ILiterals } from "Model/Literals";
import { LiteralActionTypes, LOAD_LITERALS } from "./types";

/**
 * Literals reducer.
 * @param state initial state
 * @param actions literals action types
 */
export const literalsReducer = (state: ILiterals = {}, actions: LiteralActionTypes) => {
    switch(actions.type) {
        case LOAD_LITERALS:
            return {
                ...state,
                ...actions.payload
            };
        default:
            return state;
    }
};
