import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';
import AlbumReducer from './album_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: SessionReducer,
  artist: ArtistReducer,
  currentAlbum: AlbumReducer
});

export default rootReducer;
