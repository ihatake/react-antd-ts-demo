import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthCheck from './AuthCheck';
import { userInfo } from '../../redux/user/action';

const mapStateToProps = (state: RootState) => {
  return {
    isLogin: state.user.isLogin
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ userInfo }, dispatch);
};
export default compose<any>(connect(mapStateToProps, mapDispatchToProps))(
  AuthCheck
);
