import actionTypes from '../actionType';
// #region types
export type User = {
  type: String;
  userNo: String;
  username: String;
};
export type State = {
  isFetching: boolean;
  isLogin: boolean;
} & User;
// #endregion

const initState: State = {
  type: '',
  userNo: '',
  username: '',
  isLogin: false,
  isFetching: false
};

export default (state: State = initState, action: Action): State => {
  switch (action.type) {
    case actionTypes.LOGINFAILED:
      return {
        type: '',
        userNo: '',
        username: '',
        isLogin: false,
        isFetching: false
      };
    case actionTypes.LOGINSUCCESS:
      return {
        ...state,
        ...action.payload,
        isLogin: true,
        isFetching: false
      };
    default:
      return state;
  }
};
