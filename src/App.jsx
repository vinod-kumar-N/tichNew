import React, { Suspense, useEffect } from 'react';
import Routes from '@Routes';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoutes from '@Routes/protectedRoutes';
import { useDispatch, useSelector } from 'react-redux';
import UserActions from '@Actions/authActions';
const App = () => {
  const dispatch = useDispatch();
  const authToken = localStorage.getItem('TOKEN_CRED');
  const isAuthenticated = useSelector(
    ({ AuthReducers }) => AuthReducers.isAuthenticated,
  );
  useEffect(() => {
    if (!isAuthenticated && authToken) {
      const { loginUsingAuthToken } = UserActions;
      dispatch(loginUsingAuthToken());
    }
  });
  const routeClearence = !authToken || isAuthenticated;
  const routesHtml = Routes.map(({ path, exact, component, isPrivate }) =>
    isPrivate ? (
      <ProtectedRoutes
        key={path}
        path={path}
        exact={exact}
        component={component}
      />
    ) : (
      <Route key={path} path={path} exact={exact} component={component} />
    ),
  );
  return (
    <Suspense fallback="Loading...">
      <Switch>{routeClearence ? routesHtml : null}</Switch>
    </Suspense>
  );
};

export default App;
