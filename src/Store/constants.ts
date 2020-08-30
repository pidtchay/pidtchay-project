import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'Store';

/**
 *
 */
export type TThunkResult<T> = ThunkAction<T, RootState, unknown, Action<string>>;
