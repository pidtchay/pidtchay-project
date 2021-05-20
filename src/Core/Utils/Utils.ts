import { Loadable } from 'recoil';

export const isLoading = <T>(data: Loadable<T>): boolean => data.state === 'loading';

export const isSuccess = <T>(data: Loadable<T>): boolean => data.state === 'hasValue';

export const isError = <T>(data: Loadable<T>): boolean => data.state === 'hasError';
