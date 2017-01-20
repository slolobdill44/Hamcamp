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

export const updateAlbum = (formData, id) => (
  $.ajax({
    url: `api/albums/${id}`,
    method: 'PATCH',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData
  })
);
