import { ILiterals } from 'Model/Literals';

export const LOAD_LITERALS = 'LOAD_LITERALS ';

interface ILoadLiterals {
  type: typeof LOAD_LITERALS;
  payload: ILiterals;
}

export type LiteralActionTypes = ILoadLiterals;
