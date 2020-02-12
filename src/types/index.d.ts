import { Dispatch } from 'redux';
import * as User from '../redux/user/reducers';
declare global {
  type RootState = {
    user: User.State;
  };
  export type Action = {
    type: String;
    payload?: Object;
  };
  type Dispatch = Dispatch;
}
