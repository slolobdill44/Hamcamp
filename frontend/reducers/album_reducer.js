import { RECEIVE_ALBUM,
          RECEIVE_ALL_ALBUMS } from '../actions/album_actions';
import merge from 'lodash/merge';

const currentAlbum = {
  id: null,
  name: null
};

const AlbumReducer = (state = currentAlbum, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return action.currentAlbum;
    case RECEIVE_ALL_ALBUMS:
      return action.albums;
    default:
      return state;
  }
};

export default AlbumReducer;
