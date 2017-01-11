import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="session-links">
    <Link to="/login">Login  ||</Link>
    <Link to="/signup">  Sign Up</Link>
  </nav>
);

const userInfo = ( user, logout ) => (
  <nav className="session-links">
    <h3>Hello, {user.username}</h3>
    <button onClick={() => logout()}>Log Out</button>
  </nav>
);

const AccountInfo = ({ user, logout }) => (
  user ? userInfo(user, logout) : sessionLinks()
);

export default AccountInfo;
