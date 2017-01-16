export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as APIUtil from '../util/album_api_util';


export const fetchAlbum = albumId => dispatch => {
  return APIUtil.fetchAlbum(albumId)
    .then(res => dispatch(receiveCurrentAlbum(res)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const receiveCurrentAlbum = currentAlbum => ({
  type: RECEIVE_ALBUM,
  currentAlbum
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
