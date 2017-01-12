import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AuthModalContainer from './header/auth_modal/auth_modal_container';
import App from './app';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replaceState) => {
    if (store.getState().session.currentUser) {
      replaceState('/');
    }
  };

  return (
    <Provider store={store}>
      <Router  history={ hashHistory }>
        <Route path="/" component={ App } >

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
