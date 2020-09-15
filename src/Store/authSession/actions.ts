import { createAction } from '@reduxjs/toolkit';
import { ISystemState } from 'Model/Authenticate';
import { withPayloadType } from 'Store/utils';

export const changeAuthSession = createAction('CHANGE_AUTH_SESSION', withPayloadType<ISystemState>());
export const cleanAuthSession = createAction('CLEAN_AUTH_SESSION');
