import { RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const defaultArtist = {
  id: null,
  name: null
};

const ArtistReducer = (state = defaultArtist, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return action.artist;
    default:
      return state;
  }
};

export default ArtistReducer;
