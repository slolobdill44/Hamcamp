json.extract! album, :id, :title, :artist, :image, :description

json.image_url asset_path(album.image.url(:full))

json.tracks album.tracks.each do |track|
  json.id track.id
  json.track_number track.album_track_number
  json.name track.name
  json.track_url asset_path(track.track_url.url)
end
