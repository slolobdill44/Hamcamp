import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: SessionReducer,
  artist: ArtistReducer
});

export default rootReducer;
