json.extract! album, :id, :title, :artist, :tracks, :image, :description

json.image_url asset_path(album.image.url(:original))
