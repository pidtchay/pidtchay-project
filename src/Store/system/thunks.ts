import { ILoginData, ISystemState } from 'Model/Authenticate';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'Store';
import { Action } from 'redux';
import { updateSession } from './actions';
import { openNotificationWithIcon } from 'Utils/common';

export const thunkUpdateSession = (loginData: ILoginData): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
  await updateSessionAPI(loginData).then(resp => {
    dispatch(updateSession(resp));
    openNotificationWithIcon({
      description: 'Welcome! Have a nice day and mood.',
      title: 'Authorization was successful',
      type: 'success'
    });
  }).catch((e) => {
    console.error(e);
    openNotificationWithIcon({
      description: 'We apologize. Please try again after a while.',
      title: 'An error occurred during authorization!',
      type: 'error'
    });
  });
};

const updateSessionAPI = (loginData: ILoginData) => {
  const session: ISystemState = {
    authenticated: true,
    session: 'test session',
    userName: loginData.nickName
  };
  return Promise.resolve(session);
};
