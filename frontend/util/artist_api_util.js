import * as APIUtil from '../util/artist_api_util';

export const fetchArtist = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
    error: (err) => console.log(err)
  })
);
