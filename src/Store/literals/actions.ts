import { ILiterals } from 'Model/Literals';
import { LiteralActionTypes, LOAD_LITERALS } from './types';

/**
 * Loads language dictionary.
 *
 * @param {ILiterals} [literals] - Language dictionary.
 * @returns LiteralActionTypes.
 */
export function loadLiterals(literals: ILiterals): LiteralActionTypes {
    return {
        type: LOAD_LITERALS,
        payload: literals
    };
}
