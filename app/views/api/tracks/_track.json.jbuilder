json.extract! track, :name, :album, :length, :album_track_number, :track_url_file_name

json.track_url asset_path(track.track_url.url)
