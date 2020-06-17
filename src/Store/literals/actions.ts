import { LiteralActionTypes, LOAD_LITERALS } from './types';
import { ILiterals } from 'Model/Literals';

export function loadLiterals(literals: ILiterals): LiteralActionTypes {
  return {
    type: LOAD_LITERALS,
    payload: literals
  };
}
