import { ILoginData, ISystemState } from "Model/Authenticate";
import { ThunkAction } from 'redux-thunk'
import { RootState } from "Store";
import { Action } from "redux";
import { updateSession } from "./actions";

export const thunkUpdateSession = (loginData: ILoginData): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const updateSessionResp = await updateSessionAPI(loginData);
    dispatch(
        updateSession(updateSessionResp)
    ); 
}

const updateSessionAPI = (loginData: ILoginData) => {
    const session: ISystemState = {
        authenticated: true,
        session: 'test session',
        userName: loginData.nickName,
    };
    return Promise.resolve(session);
}