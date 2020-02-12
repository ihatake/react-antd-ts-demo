import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Home from './Home';

export default compose<any>(withRouter)(Home);
