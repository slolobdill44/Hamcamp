import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';
import AlbumReducer from './album_reducer';
import LoadingReducer from './loading_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: SessionReducer,
  artist: ArtistReducer,
  currentAlbum: AlbumReducer,
  isLoading: LoadingReducer
});

export default rootReducer;
