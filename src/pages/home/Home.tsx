import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// #region types
type Props = {} & RouteComponentProps;
// #endregion

function Home(props: Props) {
  console.log(props);
  return <div>Home页面</div>;
}

Home.displayName = 'Home';

export default Home;
