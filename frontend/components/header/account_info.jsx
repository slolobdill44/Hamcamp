import React from 'react';
import { Link } from 'react-router';
import AuthModalWrapper from './auth_modal/auth_modal_wrapper';

const sessionLinks = (logout) => (
  <nav className="session-links">
    <Link to="/login">Login  ||</Link>
    <Link to="/signup">  Sign Up</Link>
    <AuthModalWrapper />
  </nav>
);

const userInfo = ( user, logout ) => (
  <nav className="session-links">
    <h3>Hello, {user.username}</h3>
    <button onClick={() => logout()}>Log Out</button>
  </nav>
);

const AccountInfo = ({ user, logout }) => {
  return user ? userInfo(user, logout) : sessionLinks(logout);
};


export default AccountInfo;
