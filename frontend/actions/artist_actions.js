export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as APIUtil from '../util/artist_api_util';


export const fetchArtist = artistID => dispatch => {
  return APIUtil.fetchArtist(artistID)
    .then(res => dispatch(receiveArtist(res)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
