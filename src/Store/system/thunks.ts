import { ILoginData, ISystemState } from 'Model/Authenticate';
import { TThunkResult } from 'Store/constants';
import { openNotificationWithIcon } from 'Utils/common';
import { updateSession } from './actions';

interface IUpdateSessionProps {
    loginData: ILoginData;
    loginDescription: string;
    loginTitle: string;
    errorDescription: string;
    errorTitle: string;
}

export const thunkUpdateSession = ({
    loginData,
    loginDescription,
    loginTitle,
    errorDescription,
    errorTitle
}: IUpdateSessionProps): TThunkResult<void> => {
    return async (dispatch) => {
        await updateSessionAPI(loginData)
            .then((resp) => {
                dispatch(updateSession(resp));

                openNotificationWithIcon({
                    description: loginDescription,
                    title: loginTitle,
                    type: 'success'
                });
            })
            .catch((e) => {
                console.error(e);
                openNotificationWithIcon({
                    description: errorDescription,
                    title: errorTitle,
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
