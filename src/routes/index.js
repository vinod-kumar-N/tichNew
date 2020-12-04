import {
  Home,
  NotFound,
  Business,
  CopyWriting,
  Personal,
  GetInTouch,
  SignIn,
  SignUp,
  AccountPage,
} from '@Pages';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    isPrivate: false,
  },
  {
    path: '/business',
    exact: true,
    component: Business,
    isPrivate: false,
  },
  {
    path: '/copy-writing',
    exact: true,
    component: CopyWriting,
    isPrivate: false,
  },
  {
    path: '/personal',
    exact: true,
    component: Personal,
    isPrivate: true,
  },
  {
    path: '/get-in-touch',
    exact: true,
    component: GetInTouch,
    isPrivate: false,
  },
  {
    path: '/sign-in',
    exact: true,
    component: SignIn,
    isPrivate: false,
  },
  {
    path: '/sign-up',
    exact: true,
    component: SignUp,
    isPrivate: false,
  },
  {
    path: '/account-page',
    exact: true,
    component: AccountPage,
    isPrivate: true,
  },
  {
    path: '*',
    exact: false,
    component: NotFound,
    isPrivate: false,
  },
];

export default Routes;
