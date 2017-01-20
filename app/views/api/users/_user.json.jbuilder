json.extract! user, :id, :username, :primary_color, :secondary_color, :header_image, :profile_image

json.albums user.albums.each do |album|
  json.id album.id
  json.title album.title
  json.image_url asset_path(album.image.url(:full))
end
