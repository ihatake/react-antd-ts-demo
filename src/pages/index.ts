import Loadable from 'react-loadable';

import { RouteLoading as Loading } from '../components';

export const PageNotFound = Loadable({
  loader: () => import('./pageNotFound'),
  loading: Loading
});
export const Login = Loadable({
  loader: () => import('./login'),
  loading: Loading
});
export const Home = Loadable({
  loader: () => import('./home'),
  loading: Loading
});
export const About = Loadable({
  loader: () => import('./about'),
  loading: Loading
});
export const EdbReport = Loadable({
  loader: () => import('./edbReport'),
  loading: Loading
});
