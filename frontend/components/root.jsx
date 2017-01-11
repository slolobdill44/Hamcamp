import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './header/session_form/session_form_container';
import App from './app';


const Root = ({ store }) => {



  const _redirectIfLoggedIn = (nextState, replaceState) => {
    if (store.getState().session.currentUser) {
      console.log("worked");
      replaceState('/');
    }
  };

  return (
    <Provider store={store}>
      <Router  history={ hashHistory }>
        <Route path="/" component={ App } >
          <Route path="/login" component={ SessionFormContainer} onEnter={_redirectIfLoggedIn}  />
          <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}   />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
