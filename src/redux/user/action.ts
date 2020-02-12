import actionType from '../actionType';
import { login as loginRequest, getUserInfo } from '../../request';
const loginSuccess = (payload: Object): Action => {
  return {
    type: actionType.LOGINSUCCESS,
    payload
  };
};
const loginFailed = (): Action => {
  return {
    type: actionType.LOGINFAILED
  };
};

export const login = (params = {}) => {
  return (dispatch: Dispatch) => {
    loginRequest(params)
      .then(res => {
        if (res.data.code === '000000') {
          dispatch(loginSuccess(res.data.data));
        } else {
          dispatch(loginFailed());
        }
      })
      .catch(() => {
        dispatch(loginFailed());
      });
  };
};

export const userInfo = (params = {}) => {
  return (dispatch: Dispatch) => {
    getUserInfo(params)
      .then(res => {
        if (res.data.code === '000000') {
          dispatch(loginSuccess(res.data.data));
        } else {
          dispatch(loginFailed());
        }
      })
      .catch(() => {
        dispatch(loginFailed());
      });
  };
};
