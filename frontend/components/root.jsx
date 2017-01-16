import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ArtistShowContainer from './artist_show/artist_show_container';
import AlbumShowContainer from './album_show/album_show_container';
import Splash from './splash/splash';
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
        <Route path="/" component={ Splash } />
          <Route component={ App }>
            <Route path="artists/:artistId" component={ ArtistShowContainer } />
            <Route path="albums/:albumId" component={ AlbumShowContainer } />
          </Route>
      </Router>
    </Provider>
  );
};

export default Root;
