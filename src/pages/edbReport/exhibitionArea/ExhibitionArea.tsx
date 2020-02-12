import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// #region types
type Props = {} & RouteComponentProps;
// #endregion

function ExhibitionArea(props: Props) {
  return <div>ExhibitionArea页面</div>;
}

ExhibitionArea.displayName = '展示区';

export default ExhibitionArea;
