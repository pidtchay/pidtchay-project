import { ILiterals } from 'Model/Literals';
import { LiteralActionTypes, LOAD_LITERALS } from './types';

/**
 * Literals reducer.
 *
 * @param {ILiterals} [state] - Initial state.
 * @param {LiteralActionTypes} [actions] - Literals action types.
 *
 * @returns {void}
 */
export const literalsReducer = (state: ILiterals = {}, actions: LiteralActionTypes) => {
    switch (actions.type) {
        case LOAD_LITERALS:
            return { ...actions.payload };
        default:
            return state;
    }
};
