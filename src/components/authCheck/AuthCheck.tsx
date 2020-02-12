import React, { Component } from 'react';
// #region types
type Props = any;
type State = {};
// #endregion
// {
//     isLogin?: Boolean;
//     userInfo: Function;
//   }
class AuthComponent extends Component<Props, State> {
  render() {
    console.log('checklogin', this);
    return (
      <>{this.props.isLogin ? this.props.children : <div>loading...</div>}</>
    );
  }
  componentDidMount() {
    console.log('checklogin');
    if (!this.props.isLogin) {
      this.props.userInfo();
    }
  }
}
export default AuthComponent;
