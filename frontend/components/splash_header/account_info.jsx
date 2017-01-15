import React from 'react';
import { Link } from 'react-router';
import AuthModalWrapperContainer from './auth_modal/auth_modal_wrapper_container';

const sessionLinks = ( login ) => (
  <nav className="session-links">
    <AuthModalWrapperContainer />
    <a className="header-login-link" className="guest-login" onClick={() => login({user: { username:"Guest", password:"guestpassword"}})}>guest account</a>
  </nav>
);

const userInfo = ( user, logout ) => (
  <nav className="session-links">
    <a className="session-greeting">Hello, {user.username}</a>
    <a className="log-out-link"  onClick={() => logout()}>Log Out</a >
  </nav>
);

const AccountInfo = ({ user, logout, login }) => {
  return user ? userInfo(user, logout) : sessionLinks(login);
};


export default AccountInfo;
