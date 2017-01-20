export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as APIUtil from '../util/track_api_util';


export const createTrack = album => dispatch => (
  APIUtil.createTrack(album)
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
