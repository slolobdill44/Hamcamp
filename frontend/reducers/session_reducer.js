import { RECEIVE_ERRORS,
        RECEIVE_CURRENT_USER,
        signup,
        login,
        logout } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      state.errors = [];
      return action.currentUser;
    case RECEIVE_ERRORS:
      return merge(defaultState, state.errors, action.errors);
    default:
      return state;
  }
};


export default SessionReducer;
