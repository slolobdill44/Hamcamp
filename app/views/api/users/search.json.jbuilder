json.array!(@users) do |user|
  json.(user, *User.column_names)
end

json.array!(@albums) do |album|
  json.(album, *Album.column_names)
  json.image_url asset_path(album.image.url(:full))
end
