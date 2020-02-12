import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// #region types
type Props = {} & RouteComponentProps;
// #endregion

function PageNotFound(props: Props) {
  return <div>404页面</div>;
}
PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
