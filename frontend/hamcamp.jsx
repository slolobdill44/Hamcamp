import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Modal from 'react-modal';
import configureStore from './store/store';
import { fetchArtist } from './actions/artist_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  window.fetchArtist = fetchArtist;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }


  window.store = store;

  const root = document.getElementById('root');
  Modal.setAppElement(root);
  ReactDOM.render(<Root store={store} />, root);
});
