export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`,
    error: (err) => console.log(err)
  })
);

export const createAlbum = album => {
  return $.ajax({
    method: 'POST',
    url: 'api/albums',
    data: { album }
  });
};

export const updateAlbum = album => (
  $.ajax({
    url: `api/albums/${album.id}`,
    method: 'PATCH',
    data: { album }
  })
);
