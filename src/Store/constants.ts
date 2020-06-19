import { ThunkAction } from 'redux-thunk';
import { RootState } from 'Store';
import { Action } from 'redux';

/**
 *
 */
export type TThunkResult<T> = ThunkAction<
    T,
    RootState,
    unknown,
    Action<string>
>;
