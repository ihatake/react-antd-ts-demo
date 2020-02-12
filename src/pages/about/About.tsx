import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// #region types
type Props = {} & RouteComponentProps;
// #endregion

function About(props: Props) {
  return <div>about页面</div>;
}

About.displayName = 'About';

export default About;
