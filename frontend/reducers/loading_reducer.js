import {
  START_ALBUM_AJAX,
  RECEIVE_ALBUM } from '../actions/album_actions';
import { START_TRACK_AJAX } from '../actions/track_actions';
import merge from 'lodash/merge';

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALBUM:
      return initialState;
    case START_ALBUM_AJAX:
    case START_TRACK_AJAX:
      return merge({}, state, { isLoading: true });
    default:
      return state;
  }
};
