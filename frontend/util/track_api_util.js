export const createTrack = formData => {
  return $.ajax({
    method: 'POST',
    dataType: 'json',
    contentType: false,
    processData: false,
    url: 'api/tracks',
    data: formData
  });
};
