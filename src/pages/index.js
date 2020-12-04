import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const NotFound = lazy(() => import('./NotFound'));
const Business = lazy(() => import('./Business'));
const CopyWriting = lazy(() => import('./CopyWriting'));
const Personal = lazy(() => import('./Personal'));
const SignIn = lazy(() => import('./SignIn'));
const GetInTouch = lazy(() => import('./GetInTouch'));
const AccountPage = lazy(() => import('./AccountPage'));
const SignUp = lazy(() => import('./SignUp'));

export {
  Home,
  NotFound,
  Business,
  CopyWriting,
  Personal,
  SignIn,
  GetInTouch,
  AccountPage,
  SignUp
};
