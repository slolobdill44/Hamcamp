class RemoveImageUrlFromAlbum < ActiveRecord::Migration
  def change
    remove_column :albums, :image_url
    remove_column :users, :header_image
  end
end
