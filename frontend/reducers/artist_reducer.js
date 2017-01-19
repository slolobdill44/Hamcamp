import { RECEIVE_ARTIST,
        RECEIVE_ARTIST_SEARCH} from '../actions/artist_actions';
import merge from 'lodash/merge';

const defaultState = {
  searchResults: [],
  currentArtist: null
};

const ArtistReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      const currentArtist = action.artist;
      return merge({}, defaultState, {
        currentArtist
      });
    case RECEIVE_ARTIST_SEARCH:
      const searchResults = action.results;
      return merge({}, defaultState, {
        searchResults
      });
    default:
      return state;
  }
};

export default ArtistReducer;
