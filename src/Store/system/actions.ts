import { UPDATE_SESSION, SystemActionTypes } from "./types";
import { ISystemState } from "Model/Authenticate";

export function updateSession(newSession: ISystemState): SystemActionTypes {
    return {
      type: UPDATE_SESSION,
      payload: newSession
    }
  }