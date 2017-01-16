export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`,
    error: (err) => console.log(err)
  })
);
