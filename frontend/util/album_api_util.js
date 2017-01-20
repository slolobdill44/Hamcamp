export const fetchAll = artistId => {
  return $.ajax({
    method: "GET",
    url: 'api/albums',
    data: { id: artistId }
  });
};


export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`,
    error: (err) => console.log(err)
  })
);

export const createAlbum = formData => {
  return $.ajax({
    method: 'POST',
    dataType: 'json',
    contentType: false,
    processData: false,
    url: 'api/albums',
    data: formData
  });
};

export const updateAlbum = album => (
  $.ajax({
    url: `api/albums/${album.id}`,
    method: 'PATCH',
    data: { album }
  })
);
