import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// #region types
type Props = {} & RouteComponentProps;
// #endregion

function RecentlyOpen(props: Props) {
  return <div>RecentlyOpen页面</div>;
}

RecentlyOpen.displayName = '最近打开';

export default RecentlyOpen;
