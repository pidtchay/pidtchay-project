import { UPDATE_SESSION, SystemActionTypes, CLEAN_SESSION } from './types';
import { ISystemState } from 'Model/Authenticate';

export function updateSession (newSession: ISystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  };
}

export function cleanSession(): SystemActionTypes {
  return {
    type: CLEAN_SESSION
  };
}
