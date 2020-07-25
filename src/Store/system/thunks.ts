import { ILoginData, ISystemState } from 'Model/Authenticate';
import { ILiterals } from 'Model/Literals';
import { TThunkResult } from 'Store/constants';
import {
    openNotificationWithIcon,
    getI18nValue,
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
                        getI18nValue(literals, 'Notification.login.description')
                    ),
                    title: convertStringArrayToString(
                        getI18nValue(literals, 'Notification.login.title')
                    ),
                    type: 'success'
                });
            })
            .catch(() => {
                openNotificationWithIcon({
                    description: convertStringArrayToString(
                        getI18nValue(
                            literals,
                            'Notification.request.error.description'
                        )
                    ),
                    title: convertStringArrayToString(
                        getI18nValue(
                            literals,
                            'Notification.request.error.title'
                        )
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
