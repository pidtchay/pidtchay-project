import { EVENT_DELAY } from 'Constants/Common';
import { ILoginData, ISystemState } from 'Model/Authenticate';
import { openNotificationWithIcon } from 'Utils/common';
import { changeAuthSession } from './actions';

interface IUpdateSessionProps {
    loginData: ILoginData;
    loginDescription: string;
    loginTitle: string;
    errorDescription: string;
    errorTitle: string;
}
export const authorisation = ({ loginData, loginDescription, loginTitle, errorDescription, errorTitle }: IUpdateSessionProps) => {
    return async (dispatch) => {
        await new Promise<ISystemState>((resolve, rejects) => {
            resolve({
                authenticated: true,
                session: 'test session',
                userName: loginData.nickName
            });
            setTimeout(() => {
                rejects('Timeout error');
            }, EVENT_DELAY);
        })
            .then((data: ISystemState) => {
                dispatch(changeAuthSession(data));

                openNotificationWithIcon({
                    description: loginDescription,
                    title: loginTitle,
                    type: 'success'
                });
            })
            .catch((e) => {
                console.error({ e });
                openNotificationWithIcon({
                    description: errorDescription,
                    title: errorTitle,
                    type: 'error'
                });
            });
    };
};
