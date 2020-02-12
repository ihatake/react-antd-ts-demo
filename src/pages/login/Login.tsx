import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// #region types
type Props = {} & RouteComponentProps;
// #endregion

function Login(props: Props) {
  return <div>Login页面</div>;
}

Login.displayName = 'Login';

export default Login;
