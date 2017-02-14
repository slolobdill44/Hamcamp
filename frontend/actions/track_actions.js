export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const START_TRACK_AJAX = "START_TRACK_AJAX";
import * as APIUtil from '../util/track_api_util';


export const createTrack = album => dispatch => {
  dispatch(startTrackAjax());
  return APIUtil.createTrack(album)
    .fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const startTrackAjax = () => ({
  type: START_TRACK_AJAX
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
