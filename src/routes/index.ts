import { Home, Login, About, PageNotFound, EdbReport } from '../pages';

export const mainRouter = [
  {
    pathname: '/login',
    component: Login,
    auth: false
  },
  {
    pathname: '/404',
    component: PageNotFound,
    auth: false
  },
  {
    pathname: '/home',
    component: Home,
    auth: true
  },
  {
    pathname: '/about',
    component: About,
    auth: true
  },
  {
    pathname: '/edbReport/(create|edit|preview)',
    component: EdbReport,
    auth: true
  }
];
