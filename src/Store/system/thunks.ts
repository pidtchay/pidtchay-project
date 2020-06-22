import { ILoginData, ISystemState } from 'Model/Authenticate';
import { ILiterals } from 'Model/Literals';
import { TThunkResult } from 'Store/constants';
import {
    openNotificationWithIcon,
    get,
    convertStringArrayToString
} from 'Utils/common';
import { updateSession } from './actions';

export const thunkUpdateSession = (
    loginData: ILoginData,
    literals: ILiterals
): TThunkResult<void> => {
    return async (dispatch) => {
        await updateSessionAPI(loginData)
            .then((resp) => {
                dispatch(updateSession(resp));

                openNotificationWithIcon({
                    description: convertStringArrayToString(
                        get(literals, 'Notification.login.description')
                    ),
                    title: convertStringArrayToString(
                        get(literals, 'Notification.login.title')
                    ),
                    type: 'success'
                });
            })
            .catch((e) => {
                console.error(e);
                openNotificationWithIcon({
                    description: convertStringArrayToString(
                        get(literals, 'Notification.request.error.description')
                    ),
                    title: convertStringArrayToString(
                        get(literals, 'Notification.request.error.title')
                    ),
                    type: 'error'
                });
            });
    };
};

const updateSessionAPI = (loginData: ILoginData) => {
    const session: ISystemState = {
        authenticated: true,
        session: 'test session',
        userName: loginData.nickName
    };
    return Promise.resolve(session);
};
