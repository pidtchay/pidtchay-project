import { ISystemState } from "Model/Authenticate"

export const UPDATE_SESSION = 'UPDATE_SESSION'

/**
 * Session update model
 */
interface IUpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: ISystemState
}

export type SystemActionTypes = IUpdateSessionAction