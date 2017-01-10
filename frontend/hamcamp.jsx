import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, signup, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = configureStore();
  window.signup = signup;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Hamcamp</h1>, root);
});
