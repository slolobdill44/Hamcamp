import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Modal from 'react-modal';
import configureStore from './store/store';
import { login, signup, logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.store = configureStore();
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }



  const root = document.getElementById('root');
  Modal.setAppElement(root);
  ReactDOM.render(<Root store={store} />, root);
});
