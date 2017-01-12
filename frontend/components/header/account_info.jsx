import React from 'react';
import { Link } from 'react-router';
import AuthModalWrapper from './auth_modal/auth_modal_wrapper';

const sessionLinks = (logout) => (
  <nav className="session-links">
    <AuthModalWrapper />
  </nav>
);

const userInfo = ( user, logout ) => (
  <nav className="session-links">
    <h3 className="session-greeting">Hello, {user.username}</h3>
    <a className="log-out-link"  onClick={() => logout()}>Log Out</a >
  </nav>
);

const AccountInfo = ({ user, logout }) => {
  return user ? userInfo(user, logout) : sessionLinks(logout);
};


export default AccountInfo;
