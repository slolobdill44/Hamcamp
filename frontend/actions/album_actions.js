export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CREATE_ALBUM = "CREATE_ALBUM";
import * as APIUtil from '../util/album_api_util';


export const fetchAlbum = albumId => dispatch => {
  return APIUtil.fetchAlbum(albumId)
    .then(res => dispatch(receiveCurrentAlbum(res)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const createAlbum = album => dispatch => (
  APIUtil.createAlbum(album)
    .then(newAlbum => {dispatch(receiveCurrentAlbum(newAlbum));
	}).fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateAlbum = album => dispatch => (
  APIUtil.updateAlbum(album)
    .then(album => dispatch(receiveCurrentAlbum(album)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveCurrentAlbum = currentAlbum => ({
  type: RECEIVE_ALBUM,
  currentAlbum
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
