import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(
    ({ AuthReducers }) => AuthReducers.isAuthenticated,
  );
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

export default ProtectedRoute;
