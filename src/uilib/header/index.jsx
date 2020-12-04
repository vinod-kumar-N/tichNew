import React, { Fragment } from 'react';
import Logo from '@Images/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserActions from '@Actions/authActions';

const Header = () => {
  const isAuthenticated = useSelector(
    ({ AuthReducers }) => AuthReducers.isAuthenticated,
  );
  const dispatch = useDispatch();
  const handleLogout = () => {
    const { logoutUser } = UserActions;
    dispatch(logoutUser());
  };
  const accountLink = isAuthenticated ? (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/account-page">
          MY PROFILE
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link signin-btn"
          onClick={handleLogout}
          to="/sign-in"
        >
          LOGOUT
        </Link>
      </li>
    </Fragment>
  ) : (
    <li className="nav-item">
      <Link className="nav-link signin-btn" to="/sign-in">
        SIGN IN
      </Link>
    </li>
  );

  return (
    <div className="nav-wrap fixed-top common-nav-wrap" id="navWrap">
      <nav className="navbar navbar-expand-lg container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} className="nav-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto menu-list">
            <li className="nav-item active">
              <Link className="nav-link" to="/personal">
                PERSONAL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                BUSINESS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/copy-writing">
                COPYWRITING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/get-in-touch">
                GET IN TOUCH
              </Link>
            </li>
            {accountLink}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
